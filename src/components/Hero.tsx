import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";

export const Hero = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center">
      {/* Background image with overlay */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d)',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-black/60" /> {/* Dark overlay */}
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-wrap items-center">
          <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
            <div className="animate-fadeIn">
              <h1 className="text-white font-semibold text-5xl mb-8">
                IT Solutions You Can Trust
              </h1>
              <p className="mt-4 text-lg text-gray-300 mb-8">
                Expert IT Consulting to help your business stay productive and secure
              </p>
              <Button 
                onClick={scrollToContact}
                className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg"
              >
                Get Started
                <ArrowRight className="ml-2" size={20} />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
