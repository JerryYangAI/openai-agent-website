import { Button } from "@/components/ui/button";
import { Calendar, Mail, Shield, Headphones, Rocket } from "lucide-react";

export default function CtaSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-primary-blue to-dark-blue text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <img 
          src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=400" 
          alt="Professional collaboration" 
          className="w-full h-64 object-cover rounded-2xl mb-12 opacity-90"
          data-testid="img-cta-collaboration"
        />
        
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Ready to Transform Your Business?
        </h2>
        <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
          Join leading enterprises in beta testing. Experience the power of AI workforce automation and focus on what matters most to your business.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-8">
          <Button 
            size="lg" 
            className="bg-white text-primary-blue hover:bg-gray-100 px-8 py-4 text-lg shadow-lg"
            data-testid="button-schedule-demo"
          >
            <Calendar className="mr-2 h-5 w-5" />
            Schedule Demo
          </Button>
          <Button 
            variant="outline" 
            size="lg" 
            className="border-2 border-white text-white hover:bg-white hover:text-primary-blue px-8 py-4 text-lg"
            data-testid="button-join-beta"
          >
            <Mail className="mr-2 h-5 w-5" />
            Join Beta Program
          </Button>
        </div>
        
        <div className="flex items-center justify-center space-x-8 text-sm opacity-75">
          <div className="flex items-center">
            <Shield className="mr-2 h-4 w-4" />
            Enterprise Security
          </div>
          <div className="flex items-center">
            <Headphones className="mr-2 h-4 w-4" />
            24/7 Support
          </div>
          <div className="flex items-center">
            <Rocket className="mr-2 h-4 w-4" />
            Fast Deployment
          </div>
        </div>
      </div>
    </section>
  );
}
