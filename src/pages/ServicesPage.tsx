import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
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
} from "lucide-react";
import { useEffect } from "react";

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
  {
    title: "Google Workspace Administration",
    description: "Expert management of Google Workspace including email, calendar, and collaboration tools",
    icon: Mail,
  },
  {
    title: "Office 365 Management",
    description: "Comprehensive Office 365 setup, migration, and administration services",
    icon: Users,
  },
  {
    title: "Non-Profit IT Solutions",
    description: "Specialized IT services tailored for non-profit organizations, including grant assistance and discounted licensing",
    icon: Heart,
  },
];

const ServicesPage = () => {
  useEffect(() => {
    const cards = document.querySelectorAll('.tilt-card');
    
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
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <Navbar />
      <section className="py-20 pt-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fadeIn">
            <h1 className="text-5xl font-bold text-secondary mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
              Our Services
            </h1>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Comprehensive IT solutions tailored to your business needs
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card 
                key={index} 
                className="tilt-card border-2 border-gray-100 hover:border-primary/20 transition-all duration-300 hover:shadow-xl bg-white/50 backdrop-blur-sm"
                style={{ transformStyle: 'preserve-3d', transition: 'transform 0.1s ease' }}
              >
                <CardHeader className="flex flex-col items-center text-center">
                  <div className="p-3 rounded-full bg-gradient-to-br from-primary/10 to-secondary/10 mb-4">
                    <service.icon className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-gray-600">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-20 rounded-2xl bg-gradient-to-br from-primary/5 via-secondary/5 to-primary/5 p-8 backdrop-blur-sm animate-fadeIn">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-secondary mb-6 text-center bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
                Non-Profit Focus
              </h2>
              <div className="bg-white/50 rounded-xl p-6 shadow-lg border border-gray-100">
                <p className="text-gray-600 text-lg leading-relaxed">
                  We specialize in serving non-profit organizations with tailored IT solutions. Our team understands the unique challenges and budget constraints faced by non-profits. We help organizations access technology grants, discounted software licensing, and implement cost-effective solutions that maximize your impact.
                </p>
                <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="p-4 rounded-lg bg-white/80 text-center">
                    <Heart className="h-6 w-6 text-primary mx-auto mb-2" />
                    <p className="text-sm font-medium text-gray-700">Technology Grants</p>
                  </div>
                  <div className="p-4 rounded-lg bg-white/80 text-center">
                    <Shield className="h-6 w-6 text-primary mx-auto mb-2" />
                    <p className="text-sm font-medium text-gray-700">Discounted Licensing</p>
                  </div>
                  <div className="p-4 rounded-lg bg-white/80 text-center">
                    <Users className="h-6 w-6 text-primary mx-auto mb-2" />
                    <p className="text-sm font-medium text-gray-700">Dedicated Support</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default ServicesPage;