import Navbar from './components/navbar'
import './globals.css'

export const metadata = {
  title: 'Ayush-Portfolio',
  description: 'in next.js',
  author : "ayush"
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <title>{metadata.title}</title>
      <body>
        <Navbar />
        <main id='main'>
          {children}
        </main>
      </body>
    </html>
  )
}
