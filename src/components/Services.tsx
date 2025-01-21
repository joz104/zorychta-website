import {
  Monitor,
  Server,
  Wifi,
  Globe,
  Shield,
  HeadphonesIcon,
  Mail,
  Users,
  Heart,
  Database,
  Cloud,
  Lock,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { useEffect } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const allServices = [
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
  {
    title: "Google Workspace Administration",
    description: "Expert management of Google Workspace including email and collaboration tools",
    icon: Mail,
  },
  {
    title: "Office 365 Management",
    description: "Comprehensive Office 365 setup, migration, and administration",
    icon: Users,
  },
  {
    title: "Non-Profit IT Solutions",
    description: "Specialized IT services for non-profit organizations",
    icon: Heart,
  },
  {
    title: "Database Management",
    description: "Professional database design, optimization, and maintenance",
    icon: Database,
  },
  {
    title: "Cloud Solutions",
    description: "Secure and scalable cloud infrastructure services",
    icon: Cloud,
  },
  {
    title: "Cybersecurity Services",
    description: "Advanced security measures to protect your business",
    icon: Lock,
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

  const ServiceCard = ({ service }: { service: typeof allServices[0] }) => (
    <Card 
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
  );

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-secondary mb-4">Our Services</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Comprehensive IT solutions tailored to your business needs
          </p>
        </div>
        
        <Carousel className="w-full max-w-7xl mx-auto">
          <CarouselContent>
            {allServices.map((service, index) => (
              <CarouselItem key={index} className="md:basis-1/3 lg:basis-1/3 xl:basis-1/3">
                <ServiceCard service={service} />
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex justify-center gap-4 mt-8">
            <CarouselPrevious />
            <CarouselNext />
          </div>
        </Carousel>
      </div>
    </section>
  );
};