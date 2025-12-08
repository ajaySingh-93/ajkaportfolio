import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { useToast } from "@/hooks/use-toast";
import { Send } from "lucide-react";

const formSchema = z.object({
  name: z.string().min(2, "Name is too short"),
  email: z.string().email("Invalid email"),
  message: z.string().min(10, "Message is too short"),
});

export default function Contact() {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    toast({
      title: "MESSAGE_SENT",
      description: "Thanks for reaching out! I'll get back to you ASAP.",
      className: "bg-black border-neon-green text-white",
    });
    form.reset();
  }

  return (
    <Section className="container mx-auto px-4 max-w-2xl">
      <h1 className="text-5xl font-display font-bold text-white mb-8 text-center">
        GET_IN_<span className="text-neon-green">TOUCH</span>
      </h1>
      
      <div className="glass-panel p-8 rounded-2xl border border-white/10">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-neon-green font-mono">NAME</FormLabel>
                  <FormControl>
                    <Input placeholder="Cyber Punk" {...field} className="bg-black/50 border-white/10 focus:border-neon-green text-white" />
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
                  <FormLabel className="text-neon-green font-mono">EMAIL</FormLabel>
                  <FormControl>
                    <Input placeholder="cyber@punk.com" {...field} className="bg-black/50 border-white/10 focus:border-neon-green text-white" />
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
                  <FormLabel className="text-neon-green font-mono">MESSAGE</FormLabel>
                  <FormControl>
                    <Textarea 
                      placeholder="Let's build something awesome..." 
                      className="bg-black/50 border-white/10 focus:border-neon-green text-white min-h-[150px]" 
                      {...field} 
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <Button type="submit" className="w-full bg-neon-green text-black font-bold hover:bg-neon-green/80 transition-all hover:shadow-[0_0_20px_rgba(34,197,94,0.5)]">
              SEND MESSAGE <Send className="ml-2 w-4 h-4" />
            </Button>
          </form>
        </Form>
      </div>
    </Section>
  );
}
