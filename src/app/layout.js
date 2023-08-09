import './globals.css'
import { Inter } from 'next/font/google'
import favicon from "./favicon.ico"

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'CyberEvo Coders',
  description: 'Minting Dapp for CyberEvo coders',
  icons:{
    icon: favicon
  }
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
