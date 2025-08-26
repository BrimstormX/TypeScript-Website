import { Card, CardContent } from "./ui/card";
import { Star } from "lucide-react";

export function Testimonials() {
    const testimonials = [
    {
      quote: "After a few weeks my VA was handling follow-ups without me prompting. It felt like bringing on a reliable team member, not a temp.",
      author: "Ahmed Hassan",
      location: "Dearborn, MI",
      metric: "Closed first deal in month 1"
    },
    {
      quote: "Our caller Nader isn't flashy but he's consistent. Having him handle skip tracing and outreach gives me back hours every week.",
      author: "Jessica Rodriguez",
      location: "Phoenix, AZ",
      metric: "~20 hours saved weekly"
    },
    {
      quote: "Junel set up our CRM and keeps it tidy. It's easier to see where leads are now, and follow-ups don't slip through the cracks.",
      author: "David Thompson",
      location: "Atlanta, GA",
      metric: "Pipeline visibility improved"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-va-navy mb-6">What Wholesalers Are Saying</h2>
          <p className="text-xl text-va-dark max-w-3xl mx-auto">
            Real results from real estate wholesalers who've transformed their business with VA Horizon.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border border-va-divider hover:shadow-lg transition-shadow bg-white">
              <CardContent className="p-8">
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-va-gold fill-current" />
                  ))}
                </div>
                
                <blockquote className="text-va-dark mb-6 italic leading-relaxed">
                  "{testimonial.quote}"
                </blockquote>
                
                <div className="border-t border-va-divider pt-4">
                  <div className="font-semibold text-va-navy">{testimonial.author}</div>
                  <div className="text-sm text-va-dark mb-2">{testimonial.location}</div>
                  <div className="inline-block bg-va-gold text-white px-3 py-1 rounded-full text-xs font-semibold">
                    {testimonial.metric}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Results banner */}
        <div className="bg-va-navy text-white rounded-lg p-8 mt-16">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-va-gold mb-2">50+</div>
              <div className="text-sm">Active Clients</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-va-gold mb-2">95%</div>
              <div className="text-sm">Client Satisfaction</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-va-gold mb-2">25+</div>
              <div className="text-sm">Hours Saved Weekly</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-va-gold mb-2">5 Days</div>
              <div className="text-sm">Replacement Guarantee</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}