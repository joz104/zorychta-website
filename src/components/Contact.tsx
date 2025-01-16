import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { useToast } from "./ui/use-toast";
import { useForm, ValidationError } from '@formspree/react';

export const Contact = () => {
  const { toast } = useToast();
  const [state, handleSubmit] = useForm("xpzvwkrj"); // Replace with your Formspree form ID

  if (state.succeeded) {
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
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Input
                id="name"
                name="name"
                placeholder="Name"
                required
              />
              <Input
                id="email"
                type="email"
                name="email"
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
            <ValidationError 
              prefix="Message" 
              field="message"
              errors={state.errors}
              className="text-red-500 text-sm text-left"
            />
            <Button 
              type="submit" 
              className="w-full bg-primary hover:bg-primary/90"
              disabled={state.submitting}
            >
              {state.submitting ? 'Sending...' : 'Send Message'}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};