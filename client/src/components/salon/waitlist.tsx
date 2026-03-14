import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, ArrowRight } from "lucide-react";
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
    <section className="py-14 sm:py-28 bg-[#0f172a]" data-testid="section-waitlist">
      <div className="max-w-2xl mx-auto px-5 sm:px-6 lg:px-8 text-center">
        <motion.div {...fadeUp} className="flex flex-col items-center">
          <span className="inline-flex items-center px-3 py-1 rounded-full bg-white/10 text-white/70 text-[10px] font-semibold tracking-widest uppercase mb-5">
            Early Access
          </span>

          <h2
            className="text-[1.75rem] sm:text-4xl md:text-5xl font-bold text-white tracking-tight leading-snug mb-5"
            data-testid="text-waitlist-heading"
          >
            Launch is Coming.
            <br />
            <span className="text-white/60">Be the First to Know.</span>
          </h2>

          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-2.5 w-full max-w-sm sm:max-w-md sm:flex-row sm:gap-3"
            data-testid="form-waitlist"
          >
            <div className="relative flex-1">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-white/40 pointer-events-none" />
              <Input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="pl-10 bg-white/10 border-white/15 text-white placeholder:text-white/35 focus-visible:ring-white/25 focus-visible:border-white/35 h-11 text-sm rounded-lg"
                data-testid="input-waitlist-email"
              />
            </div>
            <Button
              type="submit"
              className="bg-white text-black hover:bg-white/90 font-semibold h-11 px-6 gap-2 shrink-0 rounded-lg text-sm"
              data-testid="button-waitlist-notify"
            >
              Notify Me
              <ArrowRight className="w-4 h-4" />
            </Button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
