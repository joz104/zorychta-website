import { Facebook, Twitter, Linkedin, Mail } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-secondary text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">
              Zorychta<span className="text-primary">.</span>
            </h3>
            <p className="text-gray-400">
              Professional IT services and consulting for modern businesses.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Windows & Mac Support</li>
              <li>Server Management</li>
              <li>Network Solutions</li>
              <li>Web Services</li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-400">
              <li>info@zorychta.com</li>
              <li>1-800-ZORYCHTA</li>
              <li>123 Tech Street</li>
              <li>New York, NY 10001</li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-primary">
                <Facebook size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary">
                <Twitter size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary">
                <Linkedin size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary">
                <Mail size={24} />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>© 2024 Zorychta Technology Consulting. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};