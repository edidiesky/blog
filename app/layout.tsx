import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Edidiong Blog',
  description: 'Series of thought I share on web development',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  // const [sidebar, setSidebar] = useState(false)

  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
      
    </html>
  )
}
