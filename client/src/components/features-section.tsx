import { Card, CardContent } from "@/components/ui/card";
import { UserCog, Cog, Shield, Plug, Brain, UserCheck } from "lucide-react";

export default function FeaturesSection() {
  const mainFeatures = [
    {
      icon: UserCog,
      title: "Multi-Agent Collaboration",
      description: "Powered by parallel execution and intelligent coordination. Handle complex, long-horizon tasks faster and more efficiently than single-agent systems.",
      image: "https://images.unsplash.com/photo-1565043666747-69f6646db940?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250",
      gradient: "from-blue-50 to-white",
      border: "border-blue-100"
    },
    {
      icon: Cog,
      title: "Infinitely Customizable",
      description: "Build specialized agents for any task. Developer agents, search agents, document agents, and multimodal agents tailored to your needs.",
      image: "https://images.unsplash.com/photo-1559757175-0eb30cd8c063?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250",
      gradient: "from-green-50 to-white",
      border: "border-green-100"
    },
    {
      icon: Shield,
      title: "Enterprise-Grade Security",
      description: "Your data stays yours, always. Cloud, on-premises, or hybrid deployment with enterprise SSO, access control, and audit trails.",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=250",
      gradient: "from-orange-50 to-white",
      border: "border-orange-100"
    }
  ];

  const additionalFeatures = [
    {
      icon: Plug,
      title: "Tool & System Integration",
      description: "API connectivity with ERP, CRM, databases, and third-party apps via Model Context Protocol (MCP).",
      color: "text-primary-blue",
      bgColor: "bg-primary-blue/10"
    },
    {
      icon: Brain,
      title: "Autonomous Decision-Making",
      description: "Agents plan, act, and learn with shared memory for improved long-term performance.",
      color: "text-accent-green",
      bgColor: "bg-accent-green/10"
    },
    {
      icon: UserCheck,
      title: "Human-in-the-Loop",
      description: "AI requests human approval for critical actions, ensuring control and transparency.",
      color: "text-accent-orange",
      bgColor: "bg-accent-orange/10"
    }
  ];

  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Unlock Exceptional Productivity with AI Workforce
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Intelligent, secure, and fully controllable. OpenAI Agent is the ultimate foundation for enterprise AI automation.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {mainFeatures.map((feature, index) => (
            <Card key={index} className={`text-center bg-gradient-to-br ${feature.gradient} border ${feature.border} hover:shadow-lg transition-shadow`}>
              <CardContent className="p-8">
                <img 
                  src={feature.image} 
                  alt={feature.title} 
                  className="w-full h-48 object-cover rounded-xl mb-6"
                  data-testid={`img-feature-${index + 1}`}
                />
                <div className="w-16 h-16 bg-gradient-to-r from-primary-blue to-accent-green rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="text-white" size={32} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {additionalFeatures.map((feature, index) => (
            <div key={index} className="flex items-start space-x-4 p-6 rounded-xl hover:bg-gray-50 transition-colors">
              <div className={`w-12 h-12 ${feature.bgColor} rounded-lg flex items-center justify-center flex-shrink-0`}>
                <feature.icon className={feature.color} size={24} />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">{feature.title}</h4>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
