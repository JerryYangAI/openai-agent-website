import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { z } from "zod";
import { Calendar, Clock, Users, CheckCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { trackDemoRequest, trackEvent } from "./analytics";

const demoFormSchema = z.object({
  firstName: z.string().min(2, "First name is required"),
  lastName: z.string().min(2, "Last name is required"),
  email: z.string().email("Please enter a valid email address"),
  company: z.string().min(2, "Company name is required"),
  companySize: z.string().min(1, "Please select company size"),
  useCase: z.string().min(1, "Please select a use case"),
  timeSlot: z.string().min(1, "Please select a preferred time"),
});

type DemoFormData = z.infer<typeof demoFormSchema>;

interface DemoFormProps {
  source?: string;
  onSuccess?: () => void;
}

export default function DemoForm({ source = "homepage", onSuccess }: DemoFormProps) {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();
  
  const form = useForm<DemoFormData>({
    resolver: zodResolver(demoFormSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      company: "",
      companySize: "",
      useCase: "",
      timeSlot: "",
    },
  });

  const onSubmit = async (data: DemoFormData) => {
    try {
      // Track demo request
      trackDemoRequest(source);
      trackEvent('demo_form_submit', {
        source,
        company_size: data.companySize,
        use_case: data.useCase,
        time_slot: data.timeSlot,
      });
      
      console.log("Demo request:", data);
      
      setIsSubmitted(true);
      
      toast({
        title: "Demo Scheduled Successfully",
        description: "We'll send you a calendar invite shortly with all the details.",
      });
      
      onSuccess?.();
    } catch (error) {
      trackEvent('demo_form_error', { error: String(error) });
      
      toast({
        title: "Error",
        description: "There was an issue scheduling your demo. Please try again.",
        variant: "destructive",
      });
    }
  };

  if (isSubmitted) {
    return (
      <Card className="border border-green-200 bg-green-50">
        <CardContent className="p-8 text-center">
          <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
            <CheckCircle className="text-white" size={32} />
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Demo Scheduled!</h3>
          <p className="text-gray-600 mb-6">
            Thank you for your interest in OpenAI Agent. Our solutions expert will reach out within 24 hours to confirm your personalized demo session.
          </p>
          <div className="bg-white p-4 rounded-lg border border-green-200">
            <h4 className="font-semibold text-gray-900 mb-2">What to Expect:</h4>
            <ul className="text-sm text-gray-600 space-y-1 text-left">
              <li>• Personalized platform walkthrough</li>
              <li>• Industry-specific use case discussion</li>
              <li>• ROI analysis for your business</li>
              <li>• Implementation timeline planning</li>
            </ul>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="border border-gray-200">
      <CardContent className="p-6">
        <div className="mb-6">
          <Badge className="bg-primary-blue/10 text-primary-blue mb-4">
            <Calendar className="mr-2" size={12} />
            Schedule Demo
          </Badge>
          <h3 className="text-xl font-bold text-gray-900 mb-2">
            See OpenAI Agent in Action
          </h3>
          <p className="text-gray-600 text-sm">
            Get a personalized demo tailored to your industry and use case.
          </p>
        </div>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="firstName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm">First Name</FormLabel>
                    <FormControl>
                      <Input placeholder="John" {...field} data-testid="demo-input-first-name" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="lastName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm">Last Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Smith" {...field} data-testid="demo-input-last-name" />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-sm">Email</FormLabel>
                  <FormControl>
                    <Input type="email" placeholder="john@company.com" {...field} data-testid="demo-input-email" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="company"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-sm">Company</FormLabel>
                  <FormControl>
                    <Input placeholder="Acme Corporation" {...field} data-testid="demo-input-company" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="companySize"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-sm">Company Size</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger data-testid="demo-select-company-size">
                        <SelectValue placeholder="Select size" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="1-50">1-50 employees</SelectItem>
                      <SelectItem value="51-200">51-200 employees</SelectItem>
                      <SelectItem value="201-1000">201-1,000 employees</SelectItem>
                      <SelectItem value="1000+">1,000+ employees</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="useCase"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-sm">Primary Use Case</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger data-testid="demo-select-use-case">
                        <SelectValue placeholder="What interests you most?" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="automation">Process Automation</SelectItem>
                      <SelectItem value="analytics">Data Analysis</SelectItem>
                      <SelectItem value="monitoring">System Monitoring</SelectItem>
                      <SelectItem value="integration">System Integration</SelectItem>
                      <SelectItem value="compliance">Compliance & Audit</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="timeSlot"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-sm">Preferred Time</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger data-testid="demo-select-time">
                        <SelectValue placeholder="When works best?" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="morning">Morning (9AM-12PM PST)</SelectItem>
                      <SelectItem value="afternoon">Afternoon (12PM-5PM PST)</SelectItem>
                      <SelectItem value="flexible">I'm flexible</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <Button 
              type="submit" 
              className="w-full bg-primary-blue hover:bg-dark-blue text-white"
              data-testid="demo-submit-button"
            >
              <Calendar className="mr-2" size={16} />
              Schedule My Demo
            </Button>
          </form>
        </Form>

        <div className="mt-4 p-3 bg-blue-50 rounded-lg">
          <div className="flex items-center text-sm text-gray-600">
            <Clock className="mr-2" size={14} />
            <span>30-minute personalized session</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}