import {
  Monitor,
  Server,
  Wifi,
  Globe,
  Shield,
  HeadphonesIcon,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

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
            <Card key={index} className="border-2 border-gray-100 hover:border-primary/20 transition-colors">
              <CardHeader>
                <service.icon className="h-12 w-12 text-primary mb-4" />
                <CardTitle className="text-xl font-bold">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};