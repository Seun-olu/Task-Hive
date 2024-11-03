import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Task Hive</title>
        <link rel="icon" href="/static/Favicon.ico" sizes="any"/>
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}