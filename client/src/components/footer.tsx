import { Network } from "lucide-react";

export default function Footer() {
  const solutions = [
    "Manufacturing",
    "Healthcare", 
    "Automotive",
    "Finance",
    "Retail & E-commerce",
    "Logistics"
  ];

  const resources = [
    "Documentation",
    "API Reference",
    "Case Studies",
    "Beta Program",
    "Support Center",
    "System Status"
  ];

  const contact = [
    "Schedule Demo",
    "Enterprise Sales",
    "Partner Program",
    "Careers"
  ];

  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-8 h-8 bg-gradient-to-r from-primary-blue to-accent-green rounded-lg flex items-center justify-center">
                <Network className="text-white" size={16} />
              </div>
              <span className="font-bold text-xl">OpenAI Agent</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              Empowering AI Collaboration, Focusing on Core Innovation. Transform your business with intelligent multi-agent systems.
            </p>
            <p className="text-gray-500 text-xs">
              openaiagent.ai
            </p>
          </div>

          {/* Solutions */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Solutions</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              {solutions.map((solution, index) => (
                <li key={index}>
                  <a href="#" className="hover:text-white transition-colors" data-testid={`link-solution-${solution.toLowerCase().replace(/\s+/g, '-')}`}>
                    {solution}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Resources</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              {resources.map((resource, index) => (
                <li key={index}>
                  <a href="#" className="hover:text-white transition-colors" data-testid={`link-resource-${resource.toLowerCase().replace(/\s+/g, '-')}`}>
                    {resource}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Get in Touch</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              {contact.map((item, index) => (
                <li key={index}>
                  <a href="#" className="hover:text-white transition-colors" data-testid={`link-contact-${item.toLowerCase().replace(/\s+/g, '-')}`}>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
            <div className="flex space-x-4 mt-6">
              <a 
                href="#" 
                className="w-8 h-8 bg-gray-800 hover:bg-gray-700 rounded-lg flex items-center justify-center transition-colors"
                data-testid="link-social-twitter"
              >
                <span className="text-sm">𝕏</span>
              </a>
              <a 
                href="#" 
                className="w-8 h-8 bg-gray-800 hover:bg-gray-700 rounded-lg flex items-center justify-center transition-colors"
                data-testid="link-social-linkedin"
              >
                <span className="text-sm">in</span>
              </a>
              <a 
                href="#" 
                className="w-8 h-8 bg-gray-800 hover:bg-gray-700 rounded-lg flex items-center justify-center transition-colors"
                data-testid="link-social-github"
              >
                <span className="text-sm">git</span>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2024 OpenAI Agent. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors" data-testid="link-privacy">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors" data-testid="link-terms">Terms of Service</a>
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors" data-testid="link-security">Security</a>
          </div>
        </div>
      </div>
    </footer>
  );
}