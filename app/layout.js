import { Analytics } from '@vercel/analytics/next'
import "./globals.css";

export const metadata = {
  title: "Poke",
  description: "Poke's place on the internet.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className='antialiased'
      >
        {children}
        <Analytics/>
      </body>
    </html>
  );
}
