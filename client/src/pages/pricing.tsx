import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Check, Star, Users, Building, Crown, Calculator, Phone, Mail } from "lucide-react";

export default function Pricing() {
  const plans = [
    {
      name: "Starter",
      price: "$2,500",
      period: "per month",
      description: "Perfect for small teams getting started with AI automation",
      icon: Users,
      popular: false,
      features: [
        "Up to 5 AI agents",
        "10,000 tasks per month",
        "Basic workflow templates",
        "Email support",
        "Standard integrations (10+)",
        "Basic analytics dashboard",
        "Cloud deployment only",
        "99.5% uptime SLA"
      ],
      limitations: [
        "Limited customization options",
        "No custom agent training",
        "Community support only"
      ],
      cta: "Start Free Trial",
      bestFor: "Small teams (5-25 employees) looking to automate basic workflows"
    },
    {
      name: "Professional", 
      price: "$8,500",
      period: "per month",
      description: "Advanced features for growing businesses with complex automation needs",
      icon: Building,
      popular: true,
      features: [
        "Up to 25 AI agents",
        "100,000 tasks per month",
        "Custom workflow builder",
        "Priority support (24/5)",
        "Advanced integrations (50+)",
        "Advanced analytics & reporting",
        "Hybrid deployment options",
        "99.9% uptime SLA",
        "Custom agent templates",
        "API access & webhooks",
        "Role-based access control",
        "Audit logging"
      ],
      limitations: [
        "Limited on-premises options",
        "Standard compliance features"
      ],
      cta: "Schedule Demo",
      bestFor: "Mid-size companies (25-500 employees) with complex automation requirements"
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "contact sales",
      description: "Enterprise-grade solution with unlimited scale and premium support",
      icon: Crown,
      popular: false,
      features: [
        "Unlimited AI agents",
        "Unlimited tasks",
        "White-label options",
        "Dedicated support team",
        "All integrations included",
        "Custom analytics platform",
        "Full on-premises deployment",
        "99.99% uptime SLA",
        "Custom agent development",
        "Advanced security features",
        "Compliance certifications",
        "Custom training programs",
        "Dedicated infrastructure",
        "Professional services included"
      ],
      limitations: [],
      cta: "Contact Sales",
      bestFor: "Large enterprises (500+ employees) requiring maximum customization and control"
    }
  ];

  const addOns = [
    {
      name: "Additional Agents",
      price: "$200",
      period: "per agent/month",
      description: "Scale beyond your plan limits with additional AI agents"
    },
    {
      name: "Premium Support",
      price: "$5,000", 
      period: "per month",
      description: "24/7 dedicated support with 1-hour response time"
    },
    {
      name: "Custom Integration",
      price: "$15,000",
      period: "one-time",
      description: "Professional services for custom system integrations"
    },
    {
      name: "Training & Onboarding",
      price: "$25,000",
      period: "one-time", 
      description: "Comprehensive training program for your team"
    }
  ];

  const faqs = [
    {
      question: "What counts as a 'task' in the pricing?",
      answer: "A task is any single action performed by an AI agent, such as processing a document, sending an email, or making an API call. Complex workflows may involve multiple tasks."
    },
    {
      question: "Can I upgrade or downgrade my plan?",
      answer: "Yes, you can change your plan at any time. Upgrades take effect immediately, while downgrades take effect at your next billing cycle."
    },
    {
      question: "Do you offer annual discounts?",
      answer: "Yes, annual plans receive a 15% discount. Enterprise customers may be eligible for additional volume discounts."
    },
    {
      question: "What's included in the free trial?",
      answer: "The 30-day free trial includes full access to Starter plan features with up to 2 agents and 1,000 tasks to help you evaluate the platform."
    },
    {
      question: "How does billing work for overages?",
      answer: "If you exceed your plan limits, additional usage is billed at $0.10 per extra task. We'll notify you before you approach your limits."
    },
    {
      question: "What security certifications do you have?",
      answer: "We maintain SOC 2 Type II, ISO 27001, and are compliant with GDPR, HIPAA, and SOX requirements for enterprise customers."
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
              <Calculator className="mr-2 h-4 w-4" />
              Transparent Pricing
            </Badge>
            
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Simple, Scalable{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-blue to-accent-green">
                Pricing
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
              Choose the plan that fits your team size and automation needs. All plans include core features and can scale as you grow.
            </p>
            
            <div className="flex items-center justify-center space-x-4 text-sm text-gray-600">
              <div className="flex items-center">
                <Check className="text-accent-green mr-2" size={16} />
                30-day free trial
              </div>
              <div className="flex items-center">
                <Check className="text-accent-green mr-2" size={16} />
                No setup fees
              </div>
              <div className="flex items-center">
                <Check className="text-accent-green mr-2" size={16} />
                Cancel anytime
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <Card key={index} className={`relative ${plan.popular ? 'ring-2 ring-primary-blue shadow-xl scale-105' : 'border border-gray-200'}`}>
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-primary-blue text-white px-4 py-1">
                      <Star className="mr-1" size={12} />
                      Most Popular
                    </Badge>
                  </div>
                )}
                <CardContent className="p-8">
                  <div className="text-center mb-8">
                    <div className="w-16 h-16 bg-gradient-to-r from-primary-blue to-accent-green rounded-2xl flex items-center justify-center mx-auto mb-4">
                      <plan.icon className="text-white" size={32} />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                    <p className="text-gray-600 mb-4">{plan.description}</p>
                    <div className="mb-6">
                      <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                      <span className="text-gray-600 ml-2">{plan.period}</span>
                    </div>
                    <Button 
                      className={plan.popular 
                        ? "bg-primary-blue hover:bg-dark-blue text-white w-full" 
                        : "border-primary-blue text-primary-blue hover:bg-primary-blue hover:text-white w-full"
                      }
                      variant={plan.popular ? "default" : "outline"}
                    >
                      {plan.cta}
                    </Button>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">What's included:</h4>
                      <ul className="space-y-2">
                        {plan.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start">
                            <Check className="text-accent-green mr-2 mt-0.5 flex-shrink-0" size={16} />
                            <span className="text-gray-700 text-sm">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {plan.limitations.length > 0 && (
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-3">Limitations:</h4>
                        <ul className="space-y-2">
                          {plan.limitations.map((limitation, idx) => (
                            <li key={idx} className="flex items-start">
                              <div className="w-4 h-4 border border-gray-300 rounded mr-2 mt-0.5 flex-shrink-0"></div>
                              <span className="text-gray-600 text-sm">{limitation}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    <div className="pt-4 border-t border-gray-200">
                      <p className="text-sm text-gray-600">
                        <strong>Best for:</strong> {plan.bestFor}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Add-ons */}
      <section className="py-20 bg-light-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Add-ons & Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Enhance your plan with additional capabilities and professional services.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {addOns.map((addon, index) => (
              <Card key={index} className="bg-white border border-gray-200">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{addon.name}</h3>
                  <div className="mb-4">
                    <span className="text-2xl font-bold text-primary-blue">{addon.price}</span>
                    <span className="text-gray-600 text-sm ml-1">{addon.period}</span>
                  </div>
                  <p className="text-gray-600 text-sm">{addon.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ROI Calculator */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Calculate Your ROI</h2>
          <p className="text-xl text-gray-600 mb-8">
            See how much you could save with OpenAI Agent automation
          </p>
          
          <Card className="bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-3 gap-8 text-center">
                <div>
                  <div className="text-3xl font-bold text-primary-blue mb-2">40%</div>
                  <div className="text-gray-600">Average Cost Reduction</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-accent-green mb-2">6 months</div>
                  <div className="text-gray-600">Average Payback Period</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-accent-orange mb-2">300%</div>
                  <div className="text-gray-600">Average 3-Year ROI</div>
                </div>
              </div>
              <div className="mt-8">
                <Button size="lg" className="bg-primary-blue hover:bg-dark-blue text-white">
                  Get Custom ROI Analysis
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-light-gray">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600">
              Get answers to common questions about our pricing and plans.
            </p>
          </div>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <Card key={index} className="bg-white border border-gray-200">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">{faq.question}</h3>
                  <p className="text-gray-600">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Sales */}
      <section className="py-20 bg-gradient-to-br from-primary-blue to-dark-blue text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-6">Need a Custom Solution?</h2>
          <p className="text-xl mb-8 opacity-90">
            Our sales team can create a custom package tailored to your specific requirements.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-primary-blue hover:bg-gray-100">
              <Phone className="mr-2" size={16} />
              Schedule Call
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary-blue">
              <Mail className="mr-2" size={16} />
              Email Sales
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}