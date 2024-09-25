import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Task Hive</title>
        <link rel="shortcut icon" href="/static/Task Hive.png"/>
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}