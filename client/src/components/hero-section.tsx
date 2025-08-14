import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Rocket, Play, Book } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="pt-24 pb-16 bg-gradient-to-br from-light-gray via-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          <Badge variant="secondary" className="inline-flex items-center bg-accent-green/10 text-accent-green px-4 py-2 rounded-full text-sm font-medium mb-8 hover:bg-accent-green/20">
            <Rocket className="mr-2 h-4 w-4" />
            Currently in Beta - Join Closed Testing
          </Badge>
          
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Meet Your Own{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-blue to-accent-green">
              AI Workforce
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
            Empowering AI Collaboration, Focusing on Core Innovation. Transform complex workflows into automated tasks with intelligent multi-agent systems.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-12">
            <Button size="lg" className="bg-primary-blue hover:bg-dark-blue text-white px-8 py-4 text-lg shadow-lg" data-testid="button-hero-demo">
              <Play className="mr-2 h-5 w-5" />
              Request Demo
            </Button>
            <Button variant="outline" size="lg" className="border-2 border-primary-blue text-primary-blue hover:bg-primary-blue hover:text-white px-8 py-4 text-lg" data-testid="button-hero-docs">
              <Book className="mr-2 h-5 w-5" />
              View Documentation
            </Button>
          </div>

          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=600" 
              alt="AI agents collaboration interface and dashboard" 
              className="rounded-2xl shadow-2xl mx-auto w-full max-w-4xl"
              data-testid="img-hero-workspace"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary-blue/20 via-transparent to-transparent rounded-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
}