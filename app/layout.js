import Navbar from './components/navbar'
import './globals.css'
import Footer from './components/footer'

export const metadata = {
  title: 'Ayush-Portfolio',
  description: 'in next.js',
  author : "ayush"
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <title name="author">{metadata.author}</title>
      <body>
        <Navbar />

        <div>
          {children}
        </div>
        <Footer />
      </body>
    </html>
  )
}
