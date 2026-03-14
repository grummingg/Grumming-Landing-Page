import { useState } from "react";
import { motion } from "framer-motion";
import { Bell } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { fadeUp } from "@/lib/animations";

export function Waitlist() {
  const { toast } = useToast();
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      toast({
        title: "Invalid email",
        description: "Please enter a valid email address.",
        variant: "destructive",
      });
      return;
    }
    toast({
      title: "You're on the list!",
      description: "We'll notify you as soon as Grumming launches in your city.",
    });
    setEmail("");
  };

  return (
    <section className="py-12 sm:py-16 bg-background">
      <div className="max-w-xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div {...fadeUp}>
          <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
            <Bell className="w-6 h-6 text-primary" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground tracking-tight mb-3" data-testid="text-waitlist-heading">
            Be First in Line
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base mb-8 max-w-md mx-auto" data-testid="text-waitlist-subtext">
            Get notified when Grumming launches in your city. No spam, just one email when we're live.
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-sm mx-auto" data-testid="form-waitlist">
            <Input
              type="email"
              placeholder="you@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1"
              data-testid="input-waitlist-email"
            />
            <Button type="submit" data-testid="button-waitlist-notify">
              Notify Me
            </Button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
