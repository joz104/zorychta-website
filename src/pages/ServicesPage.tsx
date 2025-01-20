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
    <div className="min-h-screen">
      <Navbar />
      <section className="py-20 bg-white pt-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-secondary mb-4">Our Services</h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Comprehensive IT solutions tailored to your business needs, with special expertise in Google Workspace, Office 365, and non-profit organizations
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

          <div className="mt-16 relative overflow-hidden rounded-xl bg-white p-8 border border-gray-200 shadow-lg">
            <div className="absolute inset-0 bg-grid-white/10 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] -z-10" />
            <h2 className="text-3xl font-bold text-secondary mb-6 text-center">
              Non-Profit Focus
            </h2>
            <div className="space-y-4">
              <p className="text-gray-600 text-center max-w-3xl mx-auto leading-relaxed">
                We specialize in serving non-profit organizations with tailored IT solutions. Our team understands the unique challenges and budget constraints faced by non-profits. We help organizations access technology grants, discounted software licensing, and implement cost-effective solutions that maximize your impact.
              </p>
              <div className="flex justify-center mt-6 space-x-4">
                <div className="flex items-center space-x-2">
                  <Heart className="h-5 w-5 text-primary" />
                  <span className="text-secondary">Technology Grants</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Shield className="h-5 w-5 text-primary" />
                  <span className="text-secondary">Discounted Licensing</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Users className="h-5 w-5 text-primary" />
                  <span className="text-secondary">Cost-Effective Solutions</span>
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
