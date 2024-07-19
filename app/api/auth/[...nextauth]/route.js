import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import SlackProvider from "next-auth/providers/slack";
import User from '@/models/user';
import { connectToDB } from '@/utils/database';
// import { connect } from 'mongoose';

const handler = NextAuth({
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        }), 
        SlackProvider({
            clientId: process.env.SLACK_CLIENT_ID,
            clientSecret: process.env.SLACK_CLIENT_SECRET
          })
    ],
    callbacks: {
        async session( { session }) {
            // serverless -> Lambda -> dynamodb
            const sessionUser = await User.findOne({ 
             email: session.user.email
             })
             session.user.id = sessionUser._id.toString();
 
             return session;
     },
     async signIn( { profile }) {
         try {
             await connectToDB();
             // check if a user already exists
             const userExists = await User.findOne( {
                 email: profile.email
             });
             // if not, create a new user
             if(!userExists) {
                 await User.create({
                     email: profile.email,
                     username: profile.name.replace(" ", "").toLowerCase(),
                     image: profile.picture
                 })
             }
             return true;
         } catch (error) {
             console.log(error);
             return false;
         }
     },
    }
})

export { handler as GET, handler as POST };