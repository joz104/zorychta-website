import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
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
  return (
    <div className="min-h-screen pt-20">
      <section className="py-20 bg-white">
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

          <div className="mt-16 bg-gray-50 p-8 rounded-lg">
            <h2 className="text-3xl font-bold text-secondary mb-4 text-center">Non-Profit Focus</h2>
            <p className="text-gray-600 text-center max-w-3xl mx-auto">
              We specialize in serving non-profit organizations with tailored IT solutions. Our team understands the unique challenges and budget constraints faced by non-profits. We help organizations access technology grants, discounted software licensing, and implement cost-effective solutions that maximize your impact.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;