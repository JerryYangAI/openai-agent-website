import { Card, CardContent } from "@/components/ui/card";
import { Factory, Heart, Shield, ShoppingCart } from "lucide-react";

export default function UseCasesSection() {
  const useCases = [
    {
      icon: Factory,
      title: "Smart Maintenance Revolution",
      industry: "Manufacturing Sector",
      description: "Predictive maintenance agents continuously monitor equipment health, predict failures before they occur, and automatically schedule maintenance windows.",
      metrics: [
        { value: "40%", label: "Maintenance Hours Reduced" },
        { value: "3%", label: "Equipment Uptime Boost" }
      ],
      gradient: "from-blue-50 to-white",
      border: "border-blue-100",
      color: "text-primary-blue",
      bgColor: "bg-primary-blue/10"
    },
    {
      icon: Heart,
      title: "Patient Care Optimization",
      industry: "Healthcare System",
      description: "AI agents analyze patient data patterns, identify high-risk cases, and automatically coordinate follow-up care plans with medical staff.",
      metrics: [
        { value: "25%", label: "Readmission Rate Reduction" },
        { value: "60%", label: "Faster Risk Assessment" }
      ],
      gradient: "from-green-50 to-white",
      border: "border-green-100",
      color: "text-accent-green",
      bgColor: "bg-accent-green/10"
    },
    {
      icon: Shield,
      title: "Real-Time Fraud Detection",
      industry: "Financial Services",
      description: "Multi-agent fraud detection system processes massive transaction volumes in real-time, identifying suspicious patterns and automatically flagging high-risk activities.",
      metrics: [
        { value: "100K+", label: "Alerts Processed/Second" },
        { value: "99.7%", label: "Accuracy Rate" }
      ],
      gradient: "from-orange-50 to-white",
      border: "border-orange-100",
      color: "text-accent-orange",
      bgColor: "bg-accent-orange/10"
    },
    {
      icon: ShoppingCart,
      title: "Multi-Threaded Commerce",
      industry: "E-commerce Platform",
      description: "Parallel agents handle recommendations, dynamic pricing, and inventory management simultaneously, creating seamless customer experiences at scale.",
      metrics: [
        { value: "35%", label: "Conversion Increase" },
        { value: "4.8/5", label: "Customer Satisfaction" }
      ],
      gradient: "from-purple-50 to-white",
      border: "border-purple-100",
      color: "text-purple-500",
      bgColor: "bg-purple-500/10"
    }
  ];

  return (
    <section id="use-cases" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Real-World Impact Stories
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover how OpenAI Agent transforms complex business processes across industries with measurable results.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {useCases.map((useCase, index) => (
            <Card key={index} className={`bg-gradient-to-br ${useCase.gradient} border ${useCase.border}`}>
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className={`w-12 h-12 ${useCase.bgColor} rounded-lg flex items-center justify-center mr-4`}>
                    <useCase.icon className={useCase.color} size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{useCase.title}</h3>
                    <p className="text-gray-600">{useCase.industry}</p>
                  </div>
                </div>
                <p className="text-gray-700 mb-6 leading-relaxed">
                  {useCase.description}
                </p>
                <div className="grid grid-cols-2 gap-4">
                  {useCase.metrics.map((metric, metricIndex) => (
                    <div key={metricIndex} className="text-center p-4 bg-white rounded-xl" data-testid={`metric-${index}-${metricIndex}`}>
                      <div className="text-2xl font-bold text-accent-green">{metric.value}</div>
                      <div className="text-sm text-gray-600">{metric.label}</div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}