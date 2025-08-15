import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Quote } from "lucide-react";

export default function TestimonialsSection() {
  const testimonials = [
    {
      quote: "OpenAI Agent transformed our manufacturing operations. The multi-agent system reduced our maintenance costs by 40% and increased production efficiency dramatically. The ROI was clear within just 3 months.",
      author: "Sarah Chen",
      title: "VP of Operations",
      company: "TechManufacturing Corp",
      industry: "Manufacturing",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150",
      metrics: "40% cost reduction",
      rating: 5
    },
    {
      quote: "The healthcare automation capabilities are exceptional. Our patient readmission rates dropped by 25% thanks to the predictive monitoring agents. The compliance automation alone saves us 20 hours per week.",
      author: "Dr. Michael Rodriguez",
      title: "Chief Medical Officer",
      company: "Metro Health System",
      industry: "Healthcare",
      image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150",
      metrics: "25% readmission reduction",
      rating: 5
    },
    {
      quote: "The fraud detection system processes over 100,000 alerts per second with 99.7% accuracy. This level of real-time analysis was impossible before OpenAI Agent. Our false positive rate dropped by 90%.",
      author: "Jennifer Walsh",
      title: "Director of Risk Management",
      company: "Global Financial Services",
      industry: "Finance",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150",
      metrics: "100K+ alerts/second",
      rating: 5
    },
    {
      quote: "Our supply chain optimization improved dramatically. The AI agents coordinate across 12 facilities, reducing inventory costs by $2.3M annually while improving our on-time delivery to 98%.",
      author: "David Kim",
      title: "Supply Chain Director",
      company: "Global Logistics Inc",
      industry: "Logistics",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150",
      metrics: "$2.3M annual savings",
      rating: 5
    },
    {
      quote: "The personalization engine increased our conversion rates by 35%. The multi-agent system handles recommendations, pricing, and inventory simultaneously - it's like having a team of AI specialists.",
      author: "Lisa Thompson",
      title: "Chief Technology Officer",
      company: "E-Commerce Solutions",
      industry: "Retail",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150",
      metrics: "35% conversion increase",
      rating: 5
    },
    {
      quote: "The automotive production optimization exceeded our expectations. Capacity utilization increased to 94%, and unplanned downtime decreased by 60%. The predictive maintenance is incredibly accurate.",
      author: "Robert Anderson",
      title: "Plant Manager",
      company: "AutoTech Manufacturing",
      industry: "Automotive",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150",
      metrics: "60% downtime reduction",
      rating: 5
    }
  ];

  const stats = [
    { value: "500+", label: "Enterprise Clients" },
    { value: "99.5%", label: "Platform Uptime" },
    { value: "40%", label: "Average Cost Reduction" },
    { value: "6 months", label: "Average ROI Timeline" }
  ];

  return (
    <section className="py-20 bg-light-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge variant="secondary" className="inline-flex items-center bg-accent-green/10 text-accent-green px-4 py-2 rounded-full text-sm font-medium mb-8">
            <Star className="mr-2 h-4 w-4" />
            Customer Success Stories
          </Badge>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Trusted by Industry Leaders
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
            See how leading enterprises across industries are transforming their operations with OpenAI Agent's multi-agent platform.
          </p>
          
          {/* Stats */}
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-primary-blue mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-white border border-gray-200 hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                {/* Rating */}
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                {/* Quote */}
                <div className="relative mb-6">
                  <Quote className="absolute -top-2 -left-2 h-8 w-8 text-primary-blue/20" />
                  <p className="text-gray-700 italic leading-relaxed pl-6">
                    "{testimonial.quote}"
                  </p>
                </div>

                {/* Metrics Badge */}
                <div className="mb-4">
                  <Badge className="bg-accent-green/10 text-accent-green border-accent-green/20">
                    {testimonial.metrics}
                  </Badge>
                </div>

                {/* Author Info */}
                <div className="flex items-center">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.author}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <div className="font-semibold text-gray-900">{testimonial.author}</div>
                    <div className="text-sm text-gray-600">{testimonial.title}</div>
                    <div className="text-sm text-primary-blue">{testimonial.company}</div>
                  </div>
                </div>

                {/* Industry Tag */}
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <Badge variant="outline" className="text-xs">
                    {testimonial.industry}
                  </Badge>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-xl text-gray-600 mb-6">
            Join these industry leaders in transforming your business with AI automation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-primary-blue hover:bg-dark-blue text-white px-8 py-3 rounded-lg font-medium">
              Read More Case Studies
            </button>
            <button className="border border-primary-blue text-primary-blue hover:bg-primary-blue hover:text-white px-8 py-3 rounded-lg font-medium">
              Schedule Your Demo
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}