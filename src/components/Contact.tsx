import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { useToast } from "./ui/use-toast";

export const Contact = () => {
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message sent!",
      description: "We'll get back to you as soon as possible.",
    });
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-secondary mb-4">Contact Us</h2>
          <p className="text-gray-600 mb-8">
            Get in touch with our team to discuss your IT needs
          </p>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Input placeholder="Name" required />
              <Input type="email" placeholder="Email" required />
            </div>
            <Input placeholder="Subject" required />
            <Textarea
              placeholder="Your message"
              className="min-h-[150px]"
              required
            />
            <Button type="submit" className="w-full bg-primary hover:bg-primary/90">
              Send Message
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};