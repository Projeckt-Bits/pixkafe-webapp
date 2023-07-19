import './globals.css'
import { Inter } from 'next/font/google'

export const metadata = {
  title: 'PixKafe - One-Stop Solution To Real-World Footages!',
  description: 'One-Stop Solution To Real-World Footages!',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
