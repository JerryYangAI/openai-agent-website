import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Rocket, Brain, Eye, Shield, Plug, TrendingUp, Smartphone } from "lucide-react";

export default function RoadmapSection() {
  const timeline = [
    { quarter: "Q1 2024", label: "Closed Beta Launch", status: "completed" },
    { quarter: "Q2 2024", label: "Public Beta Release", status: "current" },
    { quarter: "Q3 2024", label: "Enterprise GA", status: "upcoming" }
  ];

  const developmentAreas = [
    {
      icon: Brain,
      title: "Multi-Agent Enhancement",
      description: "Advanced coordination algorithms and workflow optimization for complex multi-step processes.",
      status: "In Active Development",
      statusColor: "text-accent-green"
    },
    {
      icon: Eye,
      title: "Multi-Modal Capabilities",
      description: "Enhanced image, video, and document understanding for comprehensive business process automation.",
      status: "Q2 2024 Release",
      statusColor: "text-primary-blue"
    },
    {
      icon: Shield,
      title: "Enterprise Security",
      description: "Advanced compliance features, audit trails, and enterprise-grade security enhancements.",
      status: "Continuous Updates",
      statusColor: "text-accent-orange"
    },
    {
      icon: Plug,
      title: "Integration Expansion",
      description: "Broader ERP, CRM, and industry-specific system integrations via enhanced MCP protocols.",
      status: "Ongoing",
      statusColor: "text-purple-500"
    },
    {
      icon: TrendingUp,
      title: "Analytics Dashboard",
      description: "Real-time performance metrics, cost optimization insights, and ROI tracking tools.",
      status: "Q2 2024",
      statusColor: "text-teal-500"
    },
    {
      icon: Smartphone,
      title: "Mobile Management",
      description: "Mobile applications for monitoring and managing AI workforce from anywhere.",
      status: "Q3 2024",
      statusColor: "text-indigo-500"
    }
  ];

  return (
    <section id="roadmap" className="py-20 bg-light-gray">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Development Roadmap
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Currently in Beta with enterprise partners. Join our development journey and shape the future of AI workforce automation.
          </p>
        </div>

        {/* Current Stage */}
        <Card className="bg-white mb-12 shadow-sm">
          <CardContent className="p-8">
            <div className="flex items-center mb-6">
              <div className="w-16 h-16 bg-accent-green/10 rounded-2xl flex items-center justify-center mr-4">
                <Rocket className="text-accent-green" size={32} />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-gray-900">Current Stage: Beta Development</h3>
                <p className="text-gray-600">Working MVP with closed testing partners</p>
              </div>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {timeline.map((phase, index) => (
                <div 
                  key={index} 
                  className={`text-center p-4 rounded-xl ${
                    phase.status === 'completed' ? 'bg-accent-green/10' :
                    phase.status === 'current' ? 'bg-primary-blue/10' :
                    'bg-gray-50'
                  }`}
                  data-testid={`timeline-${phase.quarter.toLowerCase().replace(' ', '-')}`}
                >
                  <div className={`text-xl font-bold ${
                    phase.status === 'completed' ? 'text-accent-green' :
                    phase.status === 'current' ? 'text-primary-blue' :
                    'text-gray-400'
                  }`}>
                    {phase.quarter}
                  </div>
                  <div className="text-sm text-gray-600">{phase.label}</div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Development Focus Areas */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {developmentAreas.map((area, index) => (
            <Card key={index} className="bg-white shadow-sm">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <area.icon className="text-primary-blue mr-3" size={24} />
                  <h4 className="font-semibold text-gray-900">{area.title}</h4>
                </div>
                <p className="text-gray-600 text-sm mb-4">{area.description}</p>
                <Badge variant="secondary" className={`text-xs ${area.statusColor} bg-transparent`}>
                  {area.status}
                </Badge>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}