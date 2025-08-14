import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Network } from "lucide-react";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  return (
    <nav className="fixed w-full top-0 bg-white/95 backdrop-blur-md border-b border-gray-100 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-gradient-to-r from-primary-blue to-accent-green rounded-lg flex items-center justify-center">
              <Network className="text-white" size={16} />
            </div>
            <span className="font-bold text-xl text-primary-blue">OpenAI Agent</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('features')}
              className="text-gray-600 hover:text-primary-blue transition-colors"
              data-testid="nav-features"
            >
              Features
            </button>
            <button 
              onClick={() => scrollToSection('industries')}
              className="text-gray-600 hover:text-primary-blue transition-colors"
              data-testid="nav-industries"
            >
              Industries
            </button>
            <button 
              onClick={() => scrollToSection('use-cases')}
              className="text-gray-600 hover:text-primary-blue transition-colors"
              data-testid="nav-use-cases"
            >
              Use Cases
            </button>
            <button 
              onClick={() => scrollToSection('roadmap')}
              className="text-gray-600 hover:text-primary-blue transition-colors"
              data-testid="nav-roadmap"
            >
              Roadmap
            </button>
            <Button 
              className="bg-primary-blue hover:bg-dark-blue text-white"
              data-testid="button-request-demo"
            >
              Request Demo
            </Button>
          </div>
          
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon" data-testid="button-mobile-menu">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent>
              <div className="flex flex-col space-y-4 mt-8">
                <button onClick={() => scrollToSection('features')} className="text-left">Features</button>
                <button onClick={() => scrollToSection('industries')} className="text-left">Industries</button>
                <button onClick={() => scrollToSection('use-cases')} className="text-left">Use Cases</button>
                <button onClick={() => scrollToSection('roadmap')} className="text-left">Roadmap</button>
                <Button className="bg-primary-blue hover:bg-dark-blue text-white w-full">
                  Request Demo
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}
