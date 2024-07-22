import {  Outfit } from "next/font/google";
import "./globals.css";
import Header from "@/components/Home/Header";

const outfit = Outfit({ subsets: ["latin"] });

export const metadata = {
  title: "MedSched",
  description: "Schedule your appointments in seconds.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={outfit.className}>
        <div className="">
          <Header />
          {children}
        </div>
        
      </body>
    </html>
  );
}
