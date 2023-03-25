import React from 'react'
import Navbar from '../components/navbar'


export default function layout({children}) {
  return (
    <html lang='en'>
      <body>
        {children}
      </body>
    </html>
  )
}
