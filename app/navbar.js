import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="z-20 pt-4">
      <div className="flex justify-between items-center px-4 lg:px-20 md:px-12 max-w-full">
        <div className="flex items-center text-white font-bold text-xl">
          <Image src="logo.svg" width={60} height={60} alt="logo" objectFit="cover" priority/>
        </div>
        <div className="flex items-center space-x-4">
          <Link href="/about" className="text-white hover:text-purple-200 select-none">
            About me
          </Link>
          <Link href="/socials" className="text-white hover:text-purple-200 select-none">
            Socials
          </Link>
          <button className="bg-gradient-to-r from-blue-600 to-violet-800 hover:from-blue-500 hover:to-violet-600 text-white text-bold text-lg tracking-[.15em] px-4 py-2 rounded-3xl hover:bg-purple-400 select-none">
            CV
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
