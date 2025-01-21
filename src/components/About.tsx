import { CheckCircle } from "lucide-react";

export const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap items-center">
          <div className="w-full md:w-1/2 px-4 mb-8 md:mb-0">
            <h2 className="text-4xl font-bold text-secondary mb-6">
              Why Choose Zorychta Technology Consulting?
            </h2>
            <p className="text-gray-600 mb-8">
              With years of experience in IT consulting and services, we provide
              comprehensive solutions that help businesses thrive in the digital age.
            </p>
            <div className="space-y-4">
              {[
                "Over Two Decades of Industry Excellence",
                "Certified IT Professionals",
                "Custom Solutions",
                "Proven Track Record",
              ].map((item, index) => (
                <div key={index} className="flex items-center">
                  <CheckCircle className="h-6 w-6 text-primary mr-2" />
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="w-full md:w-1/2 px-4">
            <img
              src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80"
              alt="Team working"
              className="rounded-lg shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};