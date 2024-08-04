import Navbar from "./navbar";
import "./globals.css";
import CodeAnimator from "./codeAnimator";
import Image from "next/image";

export const metadata = {
  title: "Hashim Almuqbel - Portfolio",
  description: "This is Hashim Almuqbel's Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="relative font-trebuchet">
        {/* Navbar Component */}
        <Navbar />
        
        {/* Background Image */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
          <Image
            src="/gridAndBlur.svg"
            alt="Grid and Blur"
            layout="fill"
            objectFit="cover"
            priority
          />
        </div>

        {/* Main Content */}
        <main className="relative z-10 min-h-screen flex flex-col items-center justify-between pt-16">
          <CodeAnimator />
          {children}
        </main>
      </body>
    </html>
  );
}
