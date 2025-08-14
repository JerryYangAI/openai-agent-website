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
            <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl shadow-2xl mx-auto w-full max-w-4xl p-8 border border-blue-100">
              {/* Mock AI Agent Dashboard Interface */}
              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                {/* Header Navigation */}
                <div className="bg-gray-50 px-6 py-4 border-b border-gray-200">
                  <div className="flex space-x-6">
                    <button className="px-4 py-2 bg-primary-blue text-white rounded-lg text-sm font-medium">Dynamic Workforce</button>
                    <button className="px-4 py-2 text-gray-600 hover:text-primary-blue text-sm font-medium">Customise Workers</button>
                    <button className="px-4 py-2 text-gray-600 hover:text-primary-blue text-sm font-medium">Human in the Loop</button>
                    <button className="px-4 py-2 text-gray-600 hover:text-primary-blue text-sm font-medium">Local Model</button>
                    <button className="px-4 py-2 text-gray-600 hover:text-primary-blue text-sm font-medium">Add MCPs</button>
                  </div>
                </div>
                
                {/* Main Dashboard Content */}
                <div className="p-6">
                  <div className="grid grid-cols-3 gap-6">
                    {/* Left Panel - Agent List */}
                    <div className="col-span-1">
                      <h3 className="text-lg font-semibold text-gray-900 mb-4">Active Agents</h3>
                      <div className="space-y-3">
                        <div className="flex items-center p-3 bg-green-50 rounded-lg border border-green-200">
                          <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
                          <div>
                            <div className="font-medium text-gray-900">Research Agent</div>
                            <div className="text-sm text-gray-600">Data Analysis</div>
                          </div>
                        </div>
                        <div className="flex items-center p-3 bg-blue-50 rounded-lg border border-blue-200">
                          <div className="w-3 h-3 bg-blue-500 rounded-full mr-3"></div>
                          <div>
                            <div className="font-medium text-gray-900">Workflow Agent</div>
                            <div className="text-sm text-gray-600">Process Automation</div>
                          </div>
                        </div>
                        <div className="flex items-center p-3 bg-orange-50 rounded-lg border border-orange-200">
                          <div className="w-3 h-3 bg-orange-500 rounded-full mr-3"></div>
                          <div>
                            <div className="font-medium text-gray-900">Security Agent</div>
                            <div className="text-sm text-gray-600">Monitoring</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Center Panel - Agent Creation */}
                    <div className="col-span-1">
                      <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                        <h4 className="font-semibold text-gray-900 mb-3">Create New Agent</h4>
                        <div className="space-y-3">
                          <div>
                            <label className="text-sm font-medium text-gray-700">Agent Type</label>
                            <div className="mt-1 bg-white rounded border p-2 text-sm">User Research Agent</div>
                          </div>
                          <div>
                            <label className="text-sm font-medium text-gray-700">Description</label>
                            <div className="mt-1 bg-white rounded border p-2 text-sm text-gray-600">Access internal databases and Salesforce...</div>
                          </div>
                          <button className="w-full bg-primary-blue text-white py-2 rounded-lg text-sm font-medium">Create Worker</button>
                        </div>
                      </div>
                    </div>
                    
                    {/* Right Panel - Performance Metrics */}
                    <div className="col-span-1">
                      <h3 className="text-lg font-semibold text-gray-900 mb-4">Performance</h3>
                      <div className="space-y-4">
                        <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                          <div className="text-2xl font-bold text-green-600">94%</div>
                          <div className="text-sm text-gray-600">Task Success Rate</div>
                        </div>
                        <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                          <div className="text-2xl font-bold text-blue-600">847</div>
                          <div className="text-sm text-gray-600">Tasks Completed</div>
                        </div>
                        <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
                          <div className="text-2xl font-bold text-purple-600">12.3s</div>
                          <div className="text-sm text-gray-600">Avg Response Time</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-primary-blue/10 via-transparent to-transparent rounded-2xl pointer-events-none"></div>
          </div>
        </div>
      </div>
    </section>
  );
}