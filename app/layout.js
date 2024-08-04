import Navbar from "./navbar";
import "./globals.css";
import CodeAnimator from "./codeAnimator";
import Image from "next/image";

export const metadata = {
  title: "Hashim Almuqbel - Portfolio",
  description: "This is Hashim Almuqbel's Portfolio",
  icons: {
    icon: '/logo.svg', // Update this path
    apple: '/logo.svg', // Update this path
  },
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="relative font-trebuchet scrollbar-purplesh">
        {/* Navbar Component */}
        <Navbar />
        
        {/* Background Image */}
        <div className="absolute top-0 -left-[50vw] w-[150vw] h-full overflow-visible -z-10">
          <Image
            src="/gridAndBlur.svg"
            alt="Grid and Blur"
            layout="fill"
            objectFit="cover"
            priority
          />
        </div>

        {/* Main Content */}
        <main className="relative z-10 min-h-screen flex flex-col items-center justify-between py-16">
          <CodeAnimator />
          {children}
        </main>
      </body>
    </html>
  );
}
