import './globals.css';
import Nav from '@/components/Nav';
import Provider from '@/components/Provider';

export const metadata = {
    title: 'Word of Mouth',
    description: 'Share a Rec in a Sec'
}

const RootLayout = ({ children }) => {
  return (
    <html lang='en'>
        <body>
            <Provider>
                <div className='main'>
                    <div className='gradient'/>
                </div>
                <main className='app'>
                    <Nav/>
                    {children}
                </main>
            </Provider>
        </body>
    </html>
  )
}

export default RootLayout