import Navigation from "@/components/navigation";
import Footer from "@/components/footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Clock, User, Tag, BookOpen, TrendingUp, ArrowRight } from "lucide-react";
import { Link } from "wouter";

export default function Blog() {
  const featuredPost = {
    title: "The Future of Multi-Agent AI Systems in Enterprise Automation",
    excerpt: "Exploring how coordinated AI agents are revolutionizing business processes across industries with real-world case studies and implementation strategies.",
    content: "As enterprises seek more sophisticated automation solutions, multi-agent AI systems are emerging as the next frontier...",
    author: "Dr. Sarah Chen",
    authorImage: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150",
    publishDate: "March 15, 2024",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=600",
    tags: ["Multi-Agent AI", "Enterprise Automation", "Strategy"],
    category: "Strategy"
  };

  const blogPosts = [
    {
      title: "ROI Analysis: Measuring Success in AI Agent Deployments",
      excerpt: "A comprehensive guide to calculating and optimizing return on investment for enterprise AI automation projects.",
      author: "Michael Rodriguez",
      authorImage: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150",
      publishDate: "March 12, 2024",
      readTime: "6 min read",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      tags: ["ROI", "Analytics", "Business Value"],
      category: "Business"
    },
    {
      title: "Healthcare AI Agents: Reducing Readmission Rates Through Predictive Care",
      excerpt: "How AI agents are transforming patient care with early risk detection and automated care coordination.",
      author: "Dr. Jennifer Walsh",
      authorImage: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150",
      publishDate: "March 10, 2024",
      readTime: "7 min read",
      image: "https://images.unsplash.com/photo-1551190822-a9333d879b1f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      tags: ["Healthcare", "Predictive Analytics", "Case Study"],
      category: "Industry Focus"
    },
    {
      title: "Security Best Practices for Enterprise AI Agent Deployments",
      excerpt: "Essential security considerations and compliance requirements for deploying AI agents in enterprise environments.",
      author: "David Kim",
      authorImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150",
      publishDate: "March 8, 2024",
      readTime: "9 min read",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      tags: ["Security", "Compliance", "Best Practices"],
      category: "Technical"
    },
    {
      title: "Manufacturing Revolution: 40% Efficiency Gains with Multi-Agent Systems",
      excerpt: "Real-world case study of how a global manufacturer transformed operations with coordinated AI agents.",
      author: "Lisa Thompson",
      authorImage: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150",
      publishDate: "March 5, 2024",
      readTime: "5 min read",
      image: "https://images.unsplash.com/photo-1565043666747-69f6646db940?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      tags: ["Manufacturing", "Case Study", "Efficiency"],
      category: "Case Study"
    },
    {
      title: "Integration Strategies: Connecting AI Agents with Legacy Systems",
      excerpt: "Technical guide to integrating modern AI agents with existing enterprise infrastructure and workflows.",
      author: "Robert Anderson",
      authorImage: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150",
      publishDate: "March 3, 2024",
      readTime: "10 min read",
      image: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      tags: ["Integration", "Legacy Systems", "Technical"],
      category: "Technical"
    },
    {
      title: "Financial Services Automation: 99.7% Fraud Detection Accuracy",
      excerpt: "How AI agents are revolutionizing fraud detection and compliance monitoring in financial institutions.",
      author: "Angela Martinez",
      authorImage: "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150",
      publishDate: "February 28, 2024",
      readTime: "6 min read",
      image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400",
      tags: ["Financial Services", "Fraud Detection", "Case Study"],
      category: "Industry Focus"
    }
  ];

  const categories = [
    { name: "All", count: 7 },
    { name: "Strategy", count: 2 },
    { name: "Technical", count: 2 },
    { name: "Case Study", count: 2 },
    { name: "Industry Focus", count: 2 },
    { name: "Business", count: 1 }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-light-gray via-white to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <Badge variant="secondary" className="inline-flex items-center bg-primary-blue/10 text-primary-blue px-4 py-2 rounded-full text-sm font-medium mb-8">
              <BookOpen className="mr-2 h-4 w-4" />
              Thought Leadership
            </Badge>
            
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              AI Automation{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-blue to-accent-green">
                Insights
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
              Expert insights, case studies, and best practices for implementing multi-agent AI systems in enterprise environments.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Article</h2>
          </div>
          
          <Card className="overflow-hidden shadow-xl border border-gray-200">
            <div className="md:flex">
              <div className="md:w-1/2">
                <img 
                  src={featuredPost.image} 
                  alt={featuredPost.title}
                  className="w-full h-64 md:h-full object-cover"
                />
              </div>
              <div className="md:w-1/2 p-8">
                <Badge className="bg-primary-blue/10 text-primary-blue mb-4">
                  {featuredPost.category}
                </Badge>
                
                <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 leading-tight">
                  {featuredPost.title}
                </h3>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {featuredPost.excerpt}
                </p>

                <div className="flex items-center mb-6">
                  <img 
                    src={featuredPost.authorImage} 
                    alt={featuredPost.author}
                    className="w-10 h-10 rounded-full object-cover mr-3"
                  />
                  <div className="text-sm">
                    <div className="font-medium text-gray-900">{featuredPost.author}</div>
                    <div className="text-gray-600">{featuredPost.publishDate} · {featuredPost.readTime}</div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  {featuredPost.tags.map((tag, index) => (
                    <Badge key={index} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>

                <Button className="bg-primary-blue hover:bg-dark-blue text-white">
                  Read Full Article
                  <ArrowRight className="ml-2" size={16} />
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20 bg-light-gray">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12">
            {/* Sidebar */}
            <div className="lg:w-1/4">
              <Card className="p-6 mb-8">
                <h3 className="font-semibold text-gray-900 mb-4">Categories</h3>
                <div className="space-y-2">
                  {categories.map((category, index) => (
                    <button
                      key={index}
                      className="flex items-center justify-between w-full text-left px-3 py-2 rounded-lg hover:bg-primary-blue/5 transition-colors"
                    >
                      <span className="text-gray-700">{category.name}</span>
                      <span className="text-gray-500 text-sm">({category.count})</span>
                    </button>
                  ))}
                </div>
              </Card>

              <Card className="p-6">
                <h3 className="font-semibold text-gray-900 mb-4">Newsletter</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Get the latest AI automation insights delivered to your inbox.
                </p>
                <div className="space-y-3">
                  <input 
                    type="email" 
                    placeholder="Your email address"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm"
                  />
                  <Button className="w-full bg-primary-blue hover:bg-dark-blue text-white">
                    Subscribe
                  </Button>
                </div>
              </Card>
            </div>

            {/* Main Content */}
            <div className="lg:w-3/4">
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Latest Articles</h2>
                <p className="text-gray-600">
                  Stay updated with the latest trends and insights in enterprise AI automation.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {blogPosts.map((post, index) => (
                  <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow bg-white">
                    <div className="aspect-video overflow-hidden">
                      <img 
                        src={post.image} 
                        alt={post.title}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <CardContent className="p-6">
                      <Badge className="bg-primary-blue/10 text-primary-blue mb-3 text-xs">
                        {post.category}
                      </Badge>
                      
                      <h3 className="text-lg font-semibold text-gray-900 mb-3 leading-tight">
                        {post.title}
                      </h3>
                      
                      <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                        {post.excerpt}
                      </p>

                      <div className="flex items-center mb-4">
                        <img 
                          src={post.authorImage} 
                          alt={post.author}
                          className="w-8 h-8 rounded-full object-cover mr-3"
                        />
                        <div className="text-xs">
                          <div className="font-medium text-gray-900">{post.author}</div>
                          <div className="text-gray-600">{post.publishDate} · {post.readTime}</div>
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-1 mb-4">
                        {post.tags.slice(0, 2).map((tag, tagIndex) => (
                          <Badge key={tagIndex} variant="outline" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>

                      <Button variant="outline" size="sm" className="border-primary-blue text-primary-blue hover:bg-primary-blue hover:text-white">
                        Read More
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>

              {/* Load More */}
              <div className="text-center mt-12">
                <Button variant="outline" className="border-primary-blue text-primary-blue hover:bg-primary-blue hover:text-white">
                  Load More Articles
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}