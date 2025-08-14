import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Car, Factory, Heart, TrendingUp, ShoppingCart, Truck, Building, Users, CheckCircle, ArrowRight } from "lucide-react";

export default function Industries() {
  const industries = [
    {
      icon: Car,
      title: "Automotive",
      description: "Transform the entire automotive value chain with AI-powered optimization across production, logistics, and customer service.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      useCases: [
        "Production line optimization and predictive maintenance",
        "Supply chain coordination and logistics planning",
        "Quality control automation and defect detection",
        "Customer service chatbots and warranty processing"
      ],
      metrics: {
        efficiency: "30% production efficiency improvement",
        cost: "25% reduction in maintenance costs", 
        quality: "40% faster quality inspection"
      },
      caseStudy: {
        company: "Major Auto Manufacturer",
        challenge: "Manual production scheduling causing 15% capacity underutilization",
        solution: "Multi-agent system for production optimization and predictive maintenance",
        results: "Increased capacity utilization to 94% and reduced unplanned downtime by 60%"
      }
    },
    {
      icon: Factory,
      title: "Manufacturing",
      description: "Revolutionize manufacturing operations with intelligent automation for inventory, production scheduling, and quality management.",
      image: "https://images.unsplash.com/photo-1565043666747-69f6646db940?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      useCases: [
        "Intelligent inventory management and demand forecasting",
        "Production scheduling optimization across multiple facilities",
        "Equipment monitoring and predictive maintenance",
        "Quality assurance and regulatory compliance automation"
      ],
      metrics: {
        efficiency: "40% reduction in maintenance hours",
        cost: "20% decrease in inventory costs",
        quality: "99.5% production quality rate"
      },
      caseStudy: {
        company: "Global Manufacturing Corp",
        challenge: "Complex multi-facility production scheduling and inventory optimization",
        solution: "AI agents coordinating production across 12 facilities with real-time optimization",
        results: "Reduced inventory costs by $2.3M annually and improved on-time delivery to 98%"
      }
    },
    {
      icon: Heart,
      title: "Healthcare",
      description: "Enhance patient care and operational efficiency with AI agents for monitoring, compliance, and administrative automation.",
      image: "https://images.unsplash.com/photo-1551190822-a9333d879b1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      useCases: [
        "Patient monitoring and early risk detection",
        "Automated regulatory compliance and documentation",
        "Clinical workflow optimization and scheduling",
        "Medical research data analysis and insights"
      ],
      metrics: {
        efficiency: "50% reduction in administrative time",
        cost: "25% decrease in readmission rates",
        quality: "90% faster compliance reporting"
      },
      caseStudy: {
        company: "Regional Healthcare Network",
        challenge: "High patient readmission rates and manual compliance processes",
        solution: "AI agents for patient risk assessment and automated compliance monitoring",
        results: "Reduced readmissions by 35% and cut compliance costs by 60%"
      }
    },
    {
      icon: TrendingUp,
      title: "Financial Services",
      description: "Strengthen security and efficiency with AI-powered fraud detection, compliance automation, and risk management.",
      image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      useCases: [
        "Real-time fraud detection and prevention",
        "Automated AML/KYC compliance monitoring",
        "Risk assessment and portfolio management",
        "Customer service automation and support"
      ],
      metrics: {
        efficiency: "100,000+ alerts processed per second",
        cost: "45% reduction in compliance costs",
        quality: "99.7% fraud detection accuracy"
      },
      caseStudy: {
        company: "International Bank",
        challenge: "Manual fraud detection causing delays and false positives",
        solution: "Multi-agent fraud detection system with real-time transaction monitoring",
        results: "Reduced fraud losses by 80% and improved customer experience with 90% fewer false positives"
      }
    },
    {
      icon: ShoppingCart,
      title: "Retail & E-commerce",
      description: "Optimize customer experience and operations with AI agents for personalization, inventory, and supply chain management.",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      useCases: [
        "Dynamic pricing and personalized recommendations",
        "Inventory optimization and demand forecasting",
        "Customer service chatbots and support automation",
        "Supply chain coordination and logistics optimization"
      ],
      metrics: {
        efficiency: "35% increase in conversion rates",
        cost: "20% reduction in inventory holding costs",
        quality: "4.8/5 customer satisfaction score"
      },
      caseStudy: {
        company: "E-commerce Platform",
        challenge: "Inefficient inventory management and poor personalization",
        solution: "AI agents for dynamic pricing, inventory optimization, and personalized recommendations",
        results: "Increased revenue by 28% and reduced inventory waste by 40%"
      }
    },
    {
      icon: Truck,
      title: "Logistics & Supply Chain",
      description: "Streamline complex logistics operations with AI-driven route optimization, inventory management, and predictive analytics.",
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      useCases: [
        "Route optimization and fleet management",
        "Warehouse automation and inventory tracking",
        "Supplier relationship management and procurement",
        "Demand forecasting and capacity planning"
      ],
      metrics: {
        efficiency: "30% reduction in delivery times",
        cost: "25% decrease in fuel costs",
        quality: "98% on-time delivery rate"
      },
      caseStudy: {
        company: "Global Logistics Provider",
        challenge: "Complex multi-modal transportation and route optimization",
        solution: "AI agents for dynamic route planning and real-time logistics coordination",
        results: "Reduced transportation costs by $5.2M annually and improved delivery reliability"
      }
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-light-gray via-white to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <Badge variant="secondary" className="inline-flex items-center bg-accent-green/10 text-accent-green px-4 py-2 rounded-full text-sm font-medium mb-8">
              <Building className="mr-2 h-4 w-4" />
              Industry Solutions
            </Badge>
            
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Transforming{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-blue to-accent-green">
                Every Industry
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
              Discover how OpenAI Agent's multi-agent platform creates measurable value across diverse industries with specialized solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {industries.map((industry, index) => (
              <div key={index} className={`grid md:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'md:grid-cols-2' : ''}`}>
                <div className={index % 2 === 1 ? 'md:order-2' : ''}>
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-primary-blue to-accent-green rounded-2xl flex items-center justify-center mr-4">
                      <industry.icon className="text-white" size={32} />
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold text-gray-900">{industry.title}</h2>
                      <p className="text-gray-600 mt-2">{industry.description}</p>
                    </div>
                  </div>

                  {/* Use Cases */}
                  <div className="mb-8">
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">Key Use Cases</h3>
                    <ul className="space-y-3">
                      {industry.useCases.map((useCase, idx) => (
                        <li key={idx} className="flex items-start">
                          <CheckCircle className="text-accent-green mr-3 mt-0.5 flex-shrink-0" size={16} />
                          <span className="text-gray-700">{useCase}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Metrics */}
                  <div className="grid grid-cols-3 gap-4 mb-8">
                    <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                      <div className="text-sm text-gray-600 mb-1">Efficiency</div>
                      <div className="font-semibold text-green-600">{industry.metrics.efficiency}</div>
                    </div>
                    <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                      <div className="text-sm text-gray-600 mb-1">Cost Savings</div>
                      <div className="font-semibold text-blue-600">{industry.metrics.cost}</div>
                    </div>
                    <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
                      <div className="text-sm text-gray-600 mb-1">Quality</div>
                      <div className="font-semibold text-purple-600">{industry.metrics.quality}</div>
                    </div>
                  </div>

                  <Button className="bg-primary-blue hover:bg-dark-blue text-white">
                    Explore {industry.title} Solutions
                    <ArrowRight className="ml-2" size={16} />
                  </Button>
                </div>

                <div className={index % 2 === 1 ? 'md:order-1' : ''}>
                  <Card className="bg-gradient-to-br from-white to-gray-50 border border-gray-100 overflow-hidden">
                    <CardContent className="p-0">
                      <img 
                        src={industry.image} 
                        alt={`${industry.title} industry`} 
                        className="w-full h-64 object-cover"
                      />
                      <div className="p-6">
                        <h3 className="text-lg font-semibold text-gray-900 mb-3">Case Study</h3>
                        <div className="space-y-3">
                          <div>
                            <span className="font-medium text-gray-900">Company: </span>
                            <span className="text-gray-600">{industry.caseStudy.company}</span>
                          </div>
                          <div>
                            <span className="font-medium text-gray-900">Challenge: </span>
                            <span className="text-gray-600">{industry.caseStudy.challenge}</span>
                          </div>
                          <div>
                            <span className="font-medium text-gray-900">Solution: </span>
                            <span className="text-gray-600">{industry.caseStudy.solution}</span>
                          </div>
                          <div className="bg-accent-green/10 p-3 rounded-lg">
                            <span className="font-medium text-gray-900">Results: </span>
                            <span className="text-gray-700">{industry.caseStudy.results}</span>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-light-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-12">Proven Results Across Industries</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="text-4xl font-bold text-primary-blue mb-2">500+</div>
              <div className="text-gray-600">Enterprise Clients</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-accent-green mb-2">40%</div>
              <div className="text-gray-600">Average Cost Reduction</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-accent-orange mb-2">6</div>
              <div className="text-gray-600">Key Industries Served</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-purple-500 mb-2">99.5%</div>
              <div className="text-gray-600">Platform Uptime</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary-blue to-dark-blue text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Industry?</h2>
          <p className="text-xl mb-8 opacity-90">
            Join leading companies in your industry that are already leveraging OpenAI Agent for competitive advantage.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-primary-blue hover:bg-gray-100">
              Schedule Industry Demo
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary-blue">
              Download Case Studies
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}