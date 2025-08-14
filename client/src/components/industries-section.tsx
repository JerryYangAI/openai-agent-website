import { Card, CardContent } from "@/components/ui/card";
import { Car, Factory, Heart, TrendingUp, ShoppingCart, Truck } from "lucide-react";

export default function IndustriesSection() {
  const industries = [
    {
      icon: Car,
      title: "Automotive",
      description: "Optimize the entire value chain from production planning to logistics and predictive maintenance.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=200",
      metric: "Up to 30% efficiency improvement"
    },
    {
      icon: Factory,
      title: "Manufacturing",
      description: "Automate inventory control, demand forecasting, and production scheduling with parallel workflows.",
      image: "https://images.unsplash.com/photo-1565043666747-69f6646db940?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=200",
      metric: "40% reduction in maintenance hours"
    },
    {
      icon: Heart,
      title: "Healthcare",
      description: "AI-assisted patient monitoring, predictive care, and regulatory compliance tracking.",
      image: "https://images.unsplash.com/photo-1551190822-a9333d879b1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=200",
      metric: "Reduced readmission rates"
    },
    {
      icon: TrendingUp,
      title: "Finance",
      description: "Fraud detection, compliance automation (AML/KYC), and back-office task automation.",
      image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=200",
      metric: "100,000+ alerts processed/second"
    },
    {
      icon: ShoppingCart,
      title: "Retail & E-commerce",
      description: "Real-time personalized recommendations, dynamic pricing, and inventory synchronization.",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=200",
      metric: "Increased conversions & satisfaction"
    },
    {
      icon: Truck,
      title: "Logistics & Supply Chain",
      description: "AI-driven inventory optimization, supplier switching, and transport replanning.",
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=200",
      metric: "30% reduction in travel time & costs"
    }
  ];

  return (
    <section id="industries" className="py-20 bg-light-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Target Industries & Solutions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Transforming key industries with specialized AI agent teams designed for maximum efficiency gains.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((industry, index) => (
            <Card key={index} className="bg-white hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <img 
                  src={industry.image} 
                  alt={`${industry.title} industry`} 
                  className="w-full h-40 object-cover rounded-xl mb-6"
                  data-testid={`img-industry-${industry.title.toLowerCase().replace(/\s+/g, '-')}`}
                />
                <div className="flex items-center mb-4">
                  <industry.icon className="text-primary-blue mr-3" size={32} />
                  <h3 className="text-xl font-bold text-gray-900">{industry.title}</h3>
                </div>
                <p className="text-gray-600 mb-4">{industry.description}</p>
                <div className="flex items-center text-sm text-accent-green font-medium">
                  <TrendingUp className="mr-2" size={16} />
                  {industry.metric}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}