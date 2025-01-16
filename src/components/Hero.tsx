import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";

export const Hero = () => {
  return (
    <div className="relative bg-secondary pt-24 pb-32 flex content-center items-center justify-center min-h-screen">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap items-center">
          <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
            <div className="animate-fadeIn">
              <h1 className="text-white font-semibold text-5xl mb-8">
                IT Solutions for Your Growing Business
              </h1>
              <p className="mt-4 text-lg text-gray-300 mb-8">
                Expert IT consulting and support services for Windows, Mac, servers,
                and networks. We help businesses stay productive and secure.
              </p>
              <Button className="bg-primary hover:bg-primary/90 text-white px-8 py-6 text-lg">
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