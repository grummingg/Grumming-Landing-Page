import { Button } from "@/components/ui/button";
import { SiInstagram, SiFacebook, SiX, SiYoutube } from "react-icons/si";
import { Mail, Phone, MapPin, ArrowUpRight, Sun, Moon } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { useTheme } from "@/components/theme-provider";
import { Link } from "wouter";

export function SalonFooter() {
  const { toast } = useToast();
  const { theme, toggleTheme } = useTheme();

  const handleComingSoonLink = (linkName: string) => {
    toast({
      title: "Coming Soon",
      description: `${linkName} page is under development. Stay tuned!`,
    });
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const footerLinks = {
    Company: [
      { name: "About Us", url: "/about-us", scrollTo: null },
      { name: "Careers", url: "/hiring", scrollTo: null },
      { name: "Blog", url: null, scrollTo: null },
      { name: "Press", url: null, scrollTo: null },
      { name: "Partner with Us", url: "/contact", scrollTo: null },
    ],
    Support: [
      { name: "Help Center", url: "/contact", scrollTo: null },
      { name: "FAQ", url: "/faq", scrollTo: null },
      { name: "Safety", url: "/safety", scrollTo: null },
      { name: "Cancellation Policy", url: "/cancellation-policy", scrollTo: null },
      { name: "Report an Issue", url: "/contact", scrollTo: null },
    ],
  };

  const socialLinks = [
    { icon: SiInstagram, label: "Instagram", url: "https://www.instagram.com/grummingindia?igsh=cnVuYmdsbnR6NHlr" },
    { icon: SiFacebook, label: "Facebook", url: null },
    { icon: SiX, label: "X", url: "https://x.com/grummingapp?s=21" },
    { icon: SiYoutube, label: "YouTube", url: null },
  ];

  return (
    <footer className="bg-white dark:bg-[#0f172a] text-foreground dark:text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-14 sm:py-16 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
          <div className="lg:col-span-4">
            <h4 className="font-semibold text-xs uppercase tracking-widest text-black dark:text-white mb-5" data-testid="text-footer-category-contact">
              Contact
            </h4>
            <div className="space-y-3 mb-8">
              <a href="mailto:support@grumming.com" className="flex items-center gap-3 text-black dark:text-white transition-colors group">
                <div className="w-8 h-8 rounded-md bg-black/5 dark:bg-white/5 flex items-center justify-center transition-colors">
                  <Mail className="w-3.5 h-3.5" />
                </div>
                <span className="text-sm" data-testid="text-footer-email">support@grumming.com</span>
              </a>
              <a href="tel:+911800123456" className="flex items-center gap-3 text-black dark:text-white transition-colors group">
                <div className="w-8 h-8 rounded-md bg-black/5 dark:bg-white/5 flex items-center justify-center transition-colors">
                  <Phone className="w-3.5 h-3.5" />
                </div>
                <span className="text-sm" data-testid="text-footer-phone">+91 1800-123-4567</span>
              </a>
              <div className="flex items-center gap-3 text-black dark:text-white">
                <div className="w-8 h-8 rounded-md bg-black/5 dark:bg-white/5 flex items-center justify-center">
                  <MapPin className="w-3.5 h-3.5" />
                </div>
                <span className="text-sm" data-testid="text-footer-address">Mumbai, Maharashtra, India</span>
              </div>
            </div>

            <h4 className="font-semibold text-xs uppercase tracking-widest text-black dark:text-white mb-4" data-testid="text-footer-category-socials">
              Socials
            </h4>
            <div className="flex items-center gap-2">
              {socialLinks.map((social) => (
                <button
                  key={social.label}
                  className={`w-9 h-9 rounded-md flex items-center justify-center transition-colors ${
                    social.url
                      ? "bg-foreground/10 text-foreground/70 dark:bg-white/10 dark:text-white hover-elevate"
                      : "bg-foreground/5 text-foreground/20 dark:bg-white/5 dark:text-white/25 cursor-not-allowed"
                  }`}
                  onClick={() => {
                    if (social.url) {
                      window.open(social.url, "_blank", "noopener,noreferrer");
                    } else {
                      handleComingSoonLink(social.label);
                    }
                  }}
                  aria-label={social.label}
                  data-testid={`link-social-${social.label.toLowerCase()}`}
                >
                  <social.icon className="w-4 h-4" />
                </button>
              ))}
            </div>

            <div className="flex items-center gap-3 mt-4">
              <span className="text-sm font-medium text-foreground/60 dark:text-white/70">Theme</span>
              <button
                onClick={toggleTheme}
                className="relative w-12 h-6 rounded-full transition-colors bg-black/15 dark:bg-white/10"
                aria-label="Toggle theme"
                data-testid="button-theme-toggle-footer"
              >
                <div
                  className={`absolute top-0.5 w-5 h-5 rounded-full flex items-center justify-center transition-all ${
                    theme === "dark"
                      ? "left-6 bg-[#1e293b]"
                      : "left-0.5 bg-white shadow-sm"
                  }`}
                >
                  {theme === "dark" ? (
                    <Moon className="w-3 h-3 text-white/80" />
                  ) : (
                    <Sun className="w-3 h-3 text-amber-500" />
                  )}
                </div>
              </button>
            </div>
          </div>

          <div className="lg:col-span-8 grid grid-cols-2 gap-8">
            {Object.entries(footerLinks).map(([category, links]) => (
              <div key={category}>
                <h4 className="font-semibold text-xs uppercase tracking-widest text-black dark:text-white mb-5" data-testid={`text-footer-category-${category.toLowerCase()}`}>
                  {category}
                </h4>
                <ul className="space-y-3">
                  {links.map((link) => (
                    <li key={link.name}>
                      {link.url ? (
                        <Link
                          href={link.url}
                          className="text-black dark:text-white transition-colors text-sm inline-flex items-center gap-1 group"
                          data-testid={`link-footer-${link.name.toLowerCase().replace(/\s+/g, "-")}`}
                        >
                          {link.name}
                          <ArrowUpRight className="w-3 h-3 opacity-0 -translate-y-0.5 translate-x-0 group-hover:opacity-100 transition-all" />
                        </Link>
                      ) : (
                        <button
                          type="button"
                          onClick={() => {
                            if (link.scrollTo) {
                              scrollToSection(link.scrollTo);
                            } else {
                              handleComingSoonLink(link.name);
                            }
                          }}
                          className="text-black dark:text-white transition-colors text-left text-sm"
                          data-testid={`link-footer-${link.name.toLowerCase().replace(/\s+/g, "-")}`}
                        >
                          {link.name}
                        </button>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="border-t border-black/10 dark:border-white/10 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-foreground/40 dark:text-white/35 text-xs" data-testid="text-footer-copyright">
            &copy; {new Date().getFullYear()} Grumming. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-xs">
            <Link
              href="/privacy-policy"
              className="text-foreground/40 dark:text-white/35 transition-colors"
              data-testid="link-footer-privacy"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms-of-service"
              className="text-foreground/40 dark:text-white/35 transition-colors"
              data-testid="link-footer-terms"
            >
              Terms of Service
            </Link>
            <Link
              href="/cookie-policy"
              className="text-foreground/40 dark:text-white/35 transition-colors"
              data-testid="link-footer-cookies"
            >
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
