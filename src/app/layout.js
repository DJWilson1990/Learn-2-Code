import { Comfortaa } from "next/font/google";
import "./globals.css";
 
import { ClerkProvider, UserButton } from "@clerk/nextjs";
import Link from "next/link";

const inter = Comfortaa({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          <nav>
           <Link className="a" href="/">Home</Link> 

           <Link className="b" href="/about-us">About-Us</Link>

           <Link className="c" href="/sign-in">sign-in</Link>
           <Link className="d" href="/sign-out">sign-out</Link>
           <Link className="e" href="/sign-up">sign-up</Link>

          
          </nav>
           
        
          
          


          {children}
          
          </body>
      </html>
    </ClerkProvider>
  );
}
