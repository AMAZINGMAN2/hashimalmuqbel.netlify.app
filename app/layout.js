import Navbar from "./navbar";
import "./globals.css";
import CodeAnimator from "./codeAnimator"; // Adjust the path as necessary
import Image from "next/image";

export const metadata = {
  title: "Hashim Almuqbel - Portfolio", 
  description: "This is Hashim Almuqbel's Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="relative font-trebuchet">
        <Navbar />
        <div className="absolute top-0 left-[-15vw] w-full select-none">
          <Image
            src="/gridAndBlur.svg"
            alt="Grid and Blur"
            width={1}
            height={1}
            className="w-full h-auto"
            priority
          />
        </div>
        <main className="min-h-screen flex flex-col items-center justify-between relative z-10 ">
        <h1 className="text-5xl font-bold leading-normal -ml-[47vw] mt-[20vh] z-25 "><span className="bg-gradient-to-r from-blue-600 via-violet-500 to-green-500 text-transparent bg-clip-text">Empowering</span> Tomorrow"s <br/> <span className="bg-gradient-to-r from-pink-600 via-violet-700 to-purple-800 text-transparent bg-clip-text">Innovations</span> Through <span className="bg-gradient-to-br from-blue-600 via-purple-500 to-pink-500 text-transparent bg-clip-text">Creativity!</span></h1>
          <CodeAnimator />
          {children}
        </main>
      </body>
    </html>
  );
}
