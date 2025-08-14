import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Network, Mail, Phone, MapPin, Linkedin, Twitter, Youtube } from "lucide-react";
import { Link } from "wouter";

export default function Footer() {
  return (
    <footer className="bg-dark-blue text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16 grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-8 h-8 bg-gradient-to-r from-primary-blue to-accent-green rounded-lg flex items-center justify-center">
                <Network className="text-white" size={16} />
              </div>
              <span className="font-bold text-xl">OpenAI Agent</span>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Transform your business with intelligent multi-agent AI systems. 
              Automate complex workflows and scale your operations with enterprise-grade reliability.
            </p>
            <div className="flex space-x-4">
              <Button variant="ghost" size="icon" className="text-gray-300 hover:text-white hover:bg-white/10">
                <Linkedin size={20} />
              </Button>
              <Button variant="ghost" size="icon" className="text-gray-300 hover:text-white hover:bg-white/10">
                <Twitter size={20} />
              </Button>
              <Button variant="ghost" size="icon" className="text-gray-300 hover:text-white hover:bg-white/10">
                <Youtube size={20} />
              </Button>
            </div>
          </div>

          {/* Product */}
          <div>
            <h3 className="font-semibold text-lg mb-6">Product</h3>
            <ul className="space-y-4">
              <li><Link href="/features" className="text-gray-300 hover:text-white transition-colors">Features</Link></li>
              <li><Link href="/industries" className="text-gray-300 hover:text-white transition-colors">Industries</Link></li>
              <li><Link href="/pricing" className="text-gray-300 hover:text-white transition-colors">Pricing</Link></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Documentation</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">API Reference</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">System Status</a></li>
            </ul>
          </div>

          {/* Solutions */}
          <div>
            <h3 className="font-semibold text-lg mb-6">Solutions</h3>
            <ul className="space-y-4">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Automotive</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Manufacturing</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Healthcare</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Financial Services</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Retail</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Logistics</a></li>
            </ul>
          </div>

          {/* Contact & Newsletter */}
          <div>
            <h3 className="font-semibold text-lg mb-6">Stay Connected</h3>
            <div className="space-y-4 mb-6">
              <div className="flex items-center text-gray-300">
                <Mail className="mr-3" size={16} />
                <span>contact@openaiagent.ai</span>
              </div>
              <div className="flex items-center text-gray-300">
                <Phone className="mr-3" size={16} />
                <span>+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center text-gray-300">
                <MapPin className="mr-3" size={16} />
                <span>San Francisco, CA</span>
              </div>
            </div>
            
            <div>
              <h4 className="font-medium mb-3">Newsletter</h4>
              <p className="text-gray-300 text-sm mb-4">
                Get the latest updates on AI automation and industry insights.
              </p>
              <div className="flex gap-2">
                <Input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                />
                <Button className="bg-accent-green hover:bg-accent-green/90 text-white">
                  Subscribe
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="py-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-300 text-sm mb-4 md:mb-0">
              © 2025 OpenAI Agent. All rights reserved.
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-gray-300 hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">Cookie Policy</a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">GDPR</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}