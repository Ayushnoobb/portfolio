import Navbar from './components/navbar'
import './globals.css'

export const metadata = {
  title: 'Ayush-Portfolio',
  description: 'in next.js',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main id='main'>
          {children}
        </main>
      </body>
    </html>
  )
}
