import { useEffect, useState } from "react";
import { FiMenu } from "react-icons/fi";
import { AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const links = ["Home", "About", "Branding", "Marketing", "Development"];

  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }

    // Cleanup to remove class on unmount
    return () => document.body.classList.remove("no-scroll");
  }, [isMenuOpen]);


  return (
    <nav className="fixed top-0 w-full bg-white shadow-sm z-50 py-4">
      <div className="max-w-[90%] mx-auto">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <aside className="flex-shrink-0">
            <img src="/svg/idariji.svg" alt="Idariji" className="w-[60%]" />
          </aside>

          {/* Desktop Navigation */}
          <aside className="hidden md:flex items-center space-x-8">
            <div className="flex space-x-6">
              {links.map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="text-orange-500 hover:text-orange-600 transition-colors duration-200 font-medium"
                >
                  {link}
                </a>
              ))}
            </div>
            <a
              href="https://wa.link/0wnx3h"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#064083] text-white px-4 py-2 rounded-md hover:bg-[#064083] transition-colors duration-200"
            >
              Contact
            </a>
          </aside>

          {/* Mobile menu button */}
          <aside className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-[#064083] hover:[#064083] focus:outline-none"
            >
              {isMenuOpen ? (
                <AiOutlineClose className="h-6 w-6 text-[#064083]" />
              ) : (
                <FiMenu className="h-6 w-6 text-[#064083]" />
              )}
            </button>
          </aside>
        </div>
      </div>

      {/* Mobile menu */}
      <aside
        className={`${
          isMenuOpen ? "block" : "hidden"
        } md:hidden bg-white shadow-lg transition-all ease-in-out h-screen`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1">
          {links.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="block px-3 py-2 text-orange-500 hover:text-orange-600 transition-colors duration-200 font-medium"
            >
              {link}
            </a>
          ))}
          <div className="px-3 py-2 !w-full">
            <a
              href="https://wa.link/0wnx3h"
              target="_blank"
              rel="noopener noreferrer"
              className="!w-full bg-[#064083] text-white px-4 py-2 rounded-md hover:[#064083] transition-colors duration-200 flex"
            >
              Contact
            </a>
          </div>
        </div>
      </aside>
    </nav>
  );
};

export default Navbar;
