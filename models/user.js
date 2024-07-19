import { Schema, model, models } from 'mongoose';

const UserSchema = new Schema({
    email: {
        type: String,
        unique: [true, 'Email already exists.'],
        required: [true, 'Email is required.'],
    },
    username: {
        type: String,
        required: [true, 'Username is required.'],
        match: [/^(?=.{8,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/, "Username invalid, it should contain 8-20 alphanumeric letters and be unique!"]
    },
    image: {
        type: String,
    }
});

// First check to see if there is an existing model named User, and only if it is not there create a new model
const User = models.User || model("User", UserSchema);

export default User;