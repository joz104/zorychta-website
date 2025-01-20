import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
  {
    text: "John has been amazing to work with at Mitch's Soccer! He built our website and online store from the ground up. He also took care of all the tech at our facility, so things run smoothly day-to-day. He's been super reliable, always there when we need him, and has made our tech setup so much better. We couldn't have done it without him!",
    author: "Mitch Doell",
    role: "Owner, Mitch's Soccer",
    rating: 5
  },
  {
    text: "ZTC was instrumental in elevating the IT infrastructure at All Things Green. His expertise in networking, access control, and security solutions has greatly enhanced our operations. From the moment he started, John demonstrated a deep understanding of our business needs and tailored his services to ensure everything ran smoothly and securely.",
    author: "Jeff MacDonald",
    role: "Director of Operations, All Things Green",
    rating: 5
  }
];

export const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-secondary mb-12">
          What Our Clients Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="animate-fadeIn" style={{ animationDelay: `${index * 0.2}s` }}>
              <CardContent className="p-6">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-primary text-primary"
                    />
                  ))}
                </div>
                <p className="text-gray-700 mb-4">{testimonial.text}</p>
                <p className="text-primary font-semibold">{testimonial.author}</p>
                {testimonial.role && (
                  <p className="text-gray-600 text-sm">{testimonial.role}</p>
                )}
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
