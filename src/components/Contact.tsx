import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { useToast } from "./ui/use-toast";
import { useRef, useState } from "react";
import emailjs from '@emailjs/browser';

export const Contact = () => {
  const { toast } = useToast();
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;

    try {
      setIsSubmitting(true);
      await emailjs.sendForm(
        'YOUR_SERVICE_ID', // You'll need to replace this
        'YOUR_TEMPLATE_ID', // You'll need to replace this
        formRef.current,
        'YOUR_PUBLIC_KEY' // You'll need to replace this
      );
      setSubmitted(true);
      if (formRef.current) {
        formRef.current.reset();
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again later.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <section id="contact" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-secondary mb-4">Thank You!</h2>
            <p className="text-gray-600">
              Your message has been sent successfully. We'll get back to you soon.
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-secondary mb-4">Contact Us</h2>
          <p className="text-gray-600 mb-8">
            Get in touch with our team to discuss your IT needs
          </p>
          <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Input
                id="user_name"
                name="user_name"
                placeholder="Name"
                required
              />
              <Input
                id="user_email"
                type="email"
                name="user_email"
                placeholder="Email"
                required
              />
            </div>
            <Input
              id="subject"
              name="subject"
              placeholder="Subject"
              required
            />
            <Textarea
              id="message"
              name="message"
              placeholder="Your message"
              className="min-h-[150px]"
              required
            />
            <Button 
              type="submit" 
              className="w-full bg-primary hover:bg-primary/90"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};