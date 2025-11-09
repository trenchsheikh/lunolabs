"use client";
import { useState } from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Clock } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

const formSchema = z.object({
  name: z.string().min(2, "Name is required").max(255),
  email: z.string().email("Valid email is required"),
  company: z.string().optional(),
  projectType: z.string().min(1, "Please select a project type"),
  timeline: z.string().optional(),
  message: z.string().min(10, "Please provide more details about your project"),
});

export const ContactSection = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      company: "",
      projectType: "",
      timeline: "",
      message: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    console.log('🚀 onSubmit function called!');
    console.log('📝 Form values:', values);
    
    setIsSubmitting(true);
    try {
      // Use FormSubmit.co - NO signup required!
      const formData = new FormData();
      formData.append('name', values.name);
      formData.append('email', values.email);
      formData.append('company', values.company || 'N/A');
      formData.append('projectType', values.projectType);
      formData.append('timeline', values.timeline || 'Not specified');
      formData.append('message', values.message);
      formData.append('_subject', `New Project Inquiry: ${values.projectType}`);
      formData.append('_template', 'table');
      formData.append('_captcha', 'false');

      console.log('📤 Sending request to FormSubmit...');

      const response = await fetch('https://formsubmit.co/samitahir018@gmail.com', {
        method: 'POST',
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      console.log('✅ Response received!');
      console.log('Status:', response.status);
      console.log('Status Text:', response.statusText);

      const responseText = await response.text();
      console.log('Response body:', responseText);

      if (response.ok) {
        alert('Thank you! Your message has been sent successfully. Check samitahir018@gmail.com for the activation email (first time only), then all future submissions will arrive instantly!');
        form.reset();
      } else {
        console.error('❌ Failed - Status:', response.status);
        alert(`Response status: ${response.status}. Check the console for details.`);
      }
    } catch (error) {
      console.error('❌ ERROR:', error);
      alert(`Error: ${error}. Check console for details.`);
    } finally {
      setIsSubmitting(false);
      console.log('✅ Form submission complete');
    }
  }

  return (
    <section id="contact" className="container py-24 sm:py-32">
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <div className="mb-4">
            <h2 className="text-lg text-primary mb-2 tracking-wider">
              Contact
            </h2>

            <h2 className="text-3xl md:text-4xl font-bold">Ready to launch?</h2>
          </div>
          <p className="mb-8 text-muted-foreground lg:w-5/6">
            Tell us about your build. We'll respond with a plan and timeline.
          </p>

          <div className="flex flex-col gap-4">
            <div>
              <div className="flex gap-2 mb-1">
                <Clock />
                <div className="font-bold">Response Time</div>
              </div>

              <div>
                <div>30 min</div>
              </div>
            </div>
          </div>
        </div>

        <Card className="bg-muted/60 dark:bg-card">
          <CardHeader className="text-primary text-2xl"> </CardHeader>
          <CardContent>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="grid w-full gap-4"
              >
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Name *</FormLabel>
                      <FormControl>
                        <Input placeholder="Your name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email *</FormLabel>
                      <FormControl>
                        <Input
                          type="email"
                          placeholder="you@company.com"
                          {...field}
                        />
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
                      <FormLabel>Company</FormLabel>
                      <FormControl>
                        <Input placeholder="Your company" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="projectType"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Project Type *</FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select project type" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="Web App">Web App</SelectItem>
                          <SelectItem value="Mobile App (iOS/Android)">Mobile App (iOS/Android)</SelectItem>
                          <SelectItem value="SaaS Application">SaaS Application</SelectItem>
                          <SelectItem value="E-commerce Platform">E-commerce Platform</SelectItem>
                          <SelectItem value="Landing Page">Landing Page</SelectItem>
                          <SelectItem value="Portfolio Website">Portfolio Website</SelectItem>
                          <SelectItem value="Corporate Website">Corporate Website</SelectItem>
                          <SelectItem value="Dashboard/Analytics Tool">Dashboard/Analytics Tool</SelectItem>
                          <SelectItem value="API Development">API Development</SelectItem>
                          <SelectItem value="CRM System">CRM System</SelectItem>
                          <SelectItem value="Marketplace Platform">Marketplace Platform</SelectItem>
                          <SelectItem value="Social Media Platform">Social Media Platform</SelectItem>
                          <SelectItem value="Booking/Scheduling System">Booking/Scheduling System</SelectItem>
                          <SelectItem value="Payment Integration">Payment Integration</SelectItem>
                          <SelectItem value="Chrome Extension">Chrome Extension</SelectItem>
                          <SelectItem value="Desktop Application">Desktop Application</SelectItem>
                          <SelectItem value="Agentic AI">Agentic AI</SelectItem>
                          <SelectItem value="AI Chatbot">AI Chatbot</SelectItem>
                          <SelectItem value="Machine Learning Model">Machine Learning Model</SelectItem>
                          <SelectItem value="Automation Tool">Automation Tool</SelectItem>
                          <SelectItem value="Trading Bot">Trading Bot</SelectItem>
                          <SelectItem value="Token Launch">Token Launch</SelectItem>
                          <SelectItem value="NFT Marketplace">NFT Marketplace</SelectItem>
                          <SelectItem value="DeFi Platform">DeFi Platform</SelectItem>
                          <SelectItem value="Smart Contracts">Smart Contracts</SelectItem>
                          <SelectItem value="Blockchain/Web3 Project">Blockchain/Web3 Project</SelectItem>
                          <SelectItem value="Game Development">Game Development</SelectItem>
                          <SelectItem value="IoT Application">IoT Application</SelectItem>
                          <SelectItem value="Database Design">Database Design</SelectItem>
                          <SelectItem value="Cloud Migration">Cloud Migration</SelectItem>
                          <SelectItem value="DevOps/CI-CD Setup">DevOps/CI-CD Setup</SelectItem>
                          <SelectItem value="UI/UX Design">UI/UX Design</SelectItem>
                          <SelectItem value="Consulting">Consulting</SelectItem>
                          <SelectItem value="Other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="timeline"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Timeline</FormLabel>
                      <FormControl>
                        <Input placeholder="e.g., ASAP, 2-4 weeks, flexible" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Message *</FormLabel>
                      <FormControl>
                        <Textarea
                          rows={5}
                          placeholder="Tell us about your project..."
                          className="resize-none"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button className="mt-4" type="submit" disabled={isSubmitting}>
                  {isSubmitting ? 'Sending...' : 'Request proposal'}
                </Button>
              </form>
            </Form>
          </CardContent>

          <CardFooter></CardFooter>
        </Card>
      </section>
    </section>
  );
};
