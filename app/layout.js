import { Cedarville_Cursive, Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const cursive = Cedarville_Cursive({
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata = {
  title: "MyPortfolio",
  description: "Anand Kumar",
  icons: {
    icon: "/anand1.jpg",
    shortcut: "/anand1.jpg",
  },
};


export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${outfit.className} ${cursive.className} antialiased leading-8 overflow-x-hidden`}> 
        {children}
      </body>
    </html>
    // leading use for line height 
  );
}
