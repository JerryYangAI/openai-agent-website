import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { UserCog, Cog, Shield, Plug, Brain, UserCheck, Network, Clock, Target, Zap, Database, Monitor } from "lucide-react";

export default function Features() {
  const coreFeatures = [
    {
      icon: UserCog,
      title: "Multi-Agent Collaboration",
      description: "Coordinate multiple specialized AI agents working together on complex tasks with intelligent workload distribution and parallel execution.",
      benefits: [
        "50% faster task completion through parallel processing",
        "Intelligent task routing based on agent expertise",
        "Automatic conflict resolution and coordination",
        "Scalable from 2 to 100+ agents per workflow"
      ],
      technical: "Built on advanced orchestration algorithms with real-time communication protocols"
    },
    {
      icon: Cog,
      title: "Customizable Agent Types",
      description: "Create specialized agents tailored to your business needs with pre-built templates and custom configurations.",
      benefits: [
        "15+ pre-built agent templates for common tasks",
        "Custom agent creation with no-code interface",
        "Role-specific training and optimization",
        "Agent performance tuning and adaptation"
      ],
      technical: "Powered by transformer architecture with domain-specific fine-tuning capabilities"
    },
    {
      icon: Shield,
      title: "Enterprise Security & Compliance",
      description: "Bank-grade security with comprehensive audit trails, role-based access control, and regulatory compliance features.",
      benefits: [
        "SOC 2 Type II certified infrastructure",
        "End-to-end encryption for all data",
        "GDPR, HIPAA, and SOX compliance ready",
        "Detailed audit logs and governance controls"
      ],
      technical: "Zero-trust architecture with encrypted data processing and secure enclaves"
    }
  ];

  const advancedFeatures = [
    {
      icon: Plug,
      title: "System Integration Hub",
      description: "Connect with 500+ enterprise systems through our Model Context Protocol (MCP) framework.",
      capabilities: ["ERP Systems (SAP, Oracle)", "CRM Platforms (Salesforce, HubSpot)", "Databases (SQL, NoSQL)", "APIs & Webhooks"]
    },
    {
      icon: Brain,
      title: "Autonomous Decision Making",
      description: "AI agents that learn, adapt, and make intelligent decisions with minimal human intervention.",
      capabilities: ["Machine learning adaptation", "Contextual decision trees", "Performance optimization", "Predictive analytics"]
    },
    {
      icon: UserCheck,
      title: "Human-in-the-Loop Controls",
      description: "Maintain oversight with configurable approval workflows and intervention points.",
      capabilities: ["Custom approval workflows", "Risk-based escalation", "Manual override capabilities", "Supervision dashboards"]
    },
    {
      icon: Network,
      title: "Intelligent Workflow Orchestration",
      description: "Advanced workflow management with dynamic routing and load balancing.",
      capabilities: ["Dynamic task distribution", "Load balancing", "Failure recovery", "Performance monitoring"]
    },
    {
      icon: Clock,
      title: "Real-Time Monitoring & Analytics",
      description: "Comprehensive visibility into agent performance and business impact.",
      capabilities: ["Real-time dashboards", "Performance metrics", "Cost analysis", "ROI tracking"]
    },
    {
      icon: Target,
      title: "Goal-Oriented Task Execution",
      description: "Agents that understand business objectives and optimize for specific outcomes.",
      capabilities: ["Business goal alignment", "KPI optimization", "Outcome tracking", "Strategic planning"]
    }
  ];

  const deploymentOptions = [
    {
      title: "Cloud Deployment",
      description: "Fully managed cloud infrastructure with global availability and automatic scaling.",
      features: ["99.9% uptime SLA", "Global CDN", "Auto-scaling", "Managed updates"],
      icon: "☁️"
    },
    {
      title: "On-Premises",
      description: "Complete control with on-site deployment for maximum security and customization.",
      features: ["Full data control", "Custom configurations", "Dedicated support", "Air-gapped options"],
      icon: "🏢"
    },
    {
      title: "Hybrid Solutions",
      description: "Best of both worlds with flexible deployment across cloud and on-premises.",
      features: ["Flexible architecture", "Data sovereignty", "Gradual migration", "Cost optimization"],
      icon: "🔄"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-light-gray via-white to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <Badge variant="secondary" className="inline-flex items-center bg-primary-blue/10 text-primary-blue px-4 py-2 rounded-full text-sm font-medium mb-8">
              <Zap className="mr-2 h-4 w-4" />
              Enterprise-Grade AI Workforce
            </Badge>
            
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Features That{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-blue to-accent-green">
                Transform Business
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
              Discover the comprehensive capabilities that make OpenAI Agent the most advanced multi-agent platform for enterprise automation.
            </p>
          </div>
        </div>
      </section>

      {/* Core Features */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Core Platform Capabilities</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Advanced features designed for enterprise-scale AI automation and workflow optimization.
            </p>
          </div>

          <div className="space-y-12">
            {coreFeatures.map((feature, index) => (
              <Card key={index} className="bg-gradient-to-r from-white to-blue-50 border border-blue-100">
                <CardContent className="p-8">
                  <div className="grid md:grid-cols-2 gap-8 items-center">
                    <div>
                      <div className="flex items-center mb-6">
                        <div className="w-16 h-16 bg-gradient-to-r from-primary-blue to-accent-green rounded-2xl flex items-center justify-center mr-4">
                          <feature.icon className="text-white" size={32} />
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-gray-900">{feature.title}</h3>
                          <p className="text-gray-600 mt-2">{feature.description}</p>
                        </div>
                      </div>
                      <div className="mb-4">
                        <h4 className="font-semibold text-gray-900 mb-3">Key Benefits:</h4>
                        <ul className="space-y-2">
                          {feature.benefits.map((benefit, idx) => (
                            <li key={idx} className="flex items-center text-gray-700">
                              <div className="w-2 h-2 bg-accent-green rounded-full mr-3"></div>
                              {benefit}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div className="bg-gray-50 p-4 rounded-lg">
                        <p className="text-sm text-gray-600 italic">{feature.technical}</p>
                      </div>
                    </div>
                    <div className="bg-white p-6 rounded-xl shadow-sm">
                      <div className="aspect-video bg-gradient-to-br from-blue-100 to-purple-100 rounded-lg flex items-center justify-center">
                        <feature.icon className="text-primary-blue" size={80} />
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Advanced Features Grid */}
      <section className="py-20 bg-light-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Advanced Capabilities</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive feature set for enterprise-grade AI automation and management.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {advancedFeatures.map((feature, index) => (
              <Card key={index} className="bg-white hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <feature.icon className="text-primary-blue mr-3" size={24} />
                    <h3 className="text-lg font-semibold text-gray-900">{feature.title}</h3>
                  </div>
                  <p className="text-gray-600 mb-4">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.capabilities.map((capability, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-700">
                        <div className="w-1.5 h-1.5 bg-accent-green rounded-full mr-2"></div>
                        {capability}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Deployment Options */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Flexible Deployment Options</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Deploy OpenAI Agent in the configuration that best meets your security and compliance requirements.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {deploymentOptions.map((option, index) => (
              <Card key={index} className="text-center bg-gradient-to-br from-white to-gray-50 border border-gray-100">
                <CardContent className="p-8">
                  <div className="text-4xl mb-4">{option.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{option.title}</h3>
                  <p className="text-gray-600 mb-6">{option.description}</p>
                  <ul className="space-y-2 mb-6">
                    {option.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center justify-center text-sm text-gray-700">
                        <div className="w-1.5 h-1.5 bg-accent-green rounded-full mr-2"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button variant="outline" className="border-primary-blue text-primary-blue hover:bg-primary-blue hover:text-white">
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary-blue to-dark-blue text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-6">Ready to Experience These Features?</h2>
          <p className="text-xl mb-8 opacity-90">
            See how OpenAI Agent's advanced capabilities can transform your business operations.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-primary-blue hover:bg-gray-100">
              Schedule Demo
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary-blue">
              Request Trial
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}