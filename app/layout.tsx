import type { Metadata } from "next";
import "./globals.css";
import Chatbot from "./components/Chatbot"; // We import our new Chatbot here!

export const metadata: Metadata = {
  title: "NanakPanth Interpretation",
  description: "A textual and philological exploration of the Nanakpanthi manuscripts.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {/* 'children' represents whatever page the user is currently looking at */}
        {children} 
        
        {/* Adding the chatbot here makes it float on top of every page */}
        <Chatbot />
      </body>
    </html>
  );
}