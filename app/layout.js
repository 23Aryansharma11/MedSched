import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Home/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "MedSched",
  description: "Schedule your appointments in seconds.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="">
          <Header />
          {children}
        </div>
        
      </body>
    </html>
  );
}
