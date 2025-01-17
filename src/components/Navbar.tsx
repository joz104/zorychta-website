import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-secondary/95 backdrop-blur-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <span className="text-2xl font-bold text-white">
              Zorychta<span className="text-primary">.</span>
            </span>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              <a href="#services" className="text-gray-300 hover:text-white px-3 py-2">
                Services
              </a>
              <a href="#about" className="text-gray-300 hover:text-white px-3 py-2">
                About
              </a>
              <Button variant="default" className="bg-primary hover:bg-primary/90">
                Contact Us
              </Button>
            </div>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden bg-secondary">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a
              href="#services"
              className="text-gray-300 hover:text-white block px-3 py-2"
              onClick={() => setIsOpen(false)}
            >
              Services
            </a>
            <a
              href="#about"
              className="text-gray-300 hover:text-white block px-3 py-2"
              onClick={() => setIsOpen(false)}
            >
              About
            </a>
            <Button
              variant="default"
              className="w-full bg-primary hover:bg-primary/90 mt-2"
              onClick={() => setIsOpen(false)}
            >
              Contact Us
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
};
