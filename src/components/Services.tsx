import {
  Monitor,
  Server,
  Wifi,
  Globe,
  Shield,
  HeadphonesIcon,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { useEffect, useRef } from "react";

const services = [
  {
    title: "Windows & Mac Support",
    description: "Expert troubleshooting and support for all desktop platforms",
    icon: Monitor,
  },
  {
    title: "Server Management",
    description: "Reliable server setup, maintenance, and monitoring",
    icon: Server,
  },
  {
    title: "Network Solutions",
    description: "Professional network design, security, and optimization",
    icon: Wifi,
  },
  {
    title: "Web Services",
    description: "Custom web design and development solutions",
    icon: Globe,
  },
  {
    title: "MDM Services",
    description: "Mobile Device Management for your organization",
    icon: Shield,
  },
  {
    title: "Remote Support",
    description: "Instant technical assistance from anywhere",
    icon: HeadphonesIcon,
  },
];

export const Services = () => {
  const handleMouseMove = (e: MouseEvent, card: HTMLElement) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = (y - centerY) / 20;
    const rotateY = (centerX - x) / 20;

    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  };

  const handleMouseLeave = (card: HTMLElement) => {
    card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg)';
  };

  useEffect(() => {
    const cards = document.querySelectorAll('.tilt-card');
    
    cards.forEach(card => {
      card.addEventListener('mousemove', (e) => handleMouseMove(e as MouseEvent, card as HTMLElement));
      card.addEventListener('mouseleave', () => handleMouseLeave(card as HTMLElement));
    });

    return () => {
      cards.forEach(card => {
        card.removeEventListener('mousemove', (e) => handleMouseMove(e as MouseEvent, card as HTMLElement));
        card.removeEventListener('mouseleave', () => handleMouseLeave(card as HTMLElement));
      });
    };
  }, []);

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-secondary mb-4">Our Services</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Comprehensive IT solutions tailored to your business needs
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="tilt-card border-2 border-gray-100 hover:border-primary/20 transition-all duration-300"
              style={{ transformStyle: 'preserve-3d', transition: 'transform 0.1s ease' }}
            >
              <CardHeader className="flex flex-col items-center text-center">
                <service.icon className="h-12 w-12 text-primary mb-4" />
                <CardTitle className="text-xl font-bold">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-gray-600">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
<<<<<<< HEAD
};
=======
};
>>>>>>> eb3d1c3e61654f8c79da889f6b667ff4c9f85fa0
