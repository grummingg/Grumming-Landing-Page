import { Button } from "@/components/ui/button";
import { SiInstagram, SiFacebook, SiX, SiYoutube, SiWhatsapp } from "react-icons/si";
import { Mail, MapPin, ArrowUpRight, Sun, Moon } from "lucide-react";
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
    ],
    Support: [
      { name: "Help Center", url: "/help-center", scrollTo: null },
      { name: "FAQ", url: "/faq", scrollTo: null },
      { name: "Safety", url: "/safety", scrollTo: null },
    ],
    Legal: [
      { name: "Privacy Policy", url: "/privacy-policy", scrollTo: null },
      { name: "Terms of Service", url: "/terms-of-service", scrollTo: null },
      { name: "Cookie Policy", url: "/cookie-policy", scrollTo: null },
      { name: "Refund Policy", url: "/refund-policy", scrollTo: null },
    ],
    Business: [
      { name: "For Business Owners", url: "/for-salon-owners", scrollTo: null },
      { name: "Partner with Us", url: "/partner-with-us", scrollTo: null },
      { name: "Bulk Bookings", url: "/bulk-bookings", scrollTo: null },
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
        <div className="py-10 sm:py-12 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8">
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
                        className="text-black/70 dark:text-white/70 transition-colors text-sm inline-flex items-center gap-1 group"
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
                        className="text-black/70 dark:text-white/70 transition-colors text-left text-sm"
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

          <div>
            <h4 className="font-semibold text-xs uppercase tracking-widest text-black dark:text-white mb-5" data-testid="text-footer-category-contact">
              Contact
            </h4>
            <ul className="space-y-3">
              <li>
                <a href="mailto:support@grumming.com" className="flex items-center gap-2 text-black/70 dark:text-white/70 transition-colors text-sm" data-testid="text-footer-email">
                  <Mail className="w-3.5 h-3.5 shrink-0" />
                  support@grumming.com
                </a>
              </li>
              <li>
                <a href="https://wa.me/919229506624" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-black/70 dark:text-white/70 transition-colors text-sm" data-testid="text-footer-phone">
                  <SiWhatsapp className="w-3.5 h-3.5 shrink-0" />
                  +91 9229506624
                </a>
              </li>
              <li>
                <div className="flex items-center gap-2 text-black/70 dark:text-white/70 text-sm" data-testid="text-footer-address">
                  <MapPin className="w-3.5 h-3.5 shrink-0" />
                  India
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-black/10 dark:border-white/10 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-foreground/40 dark:text-white/35 text-xs" data-testid="text-footer-copyright">
            &copy; {new Date().getFullYear()} Grumming. All rights reserved.
          </p>

          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1">
              {socialLinks.map((social) => (
                <button
                  key={social.label}
                  className={`w-8 h-8 rounded-md flex items-center justify-center transition-colors ${
                    social.url
                      ? "text-foreground/50 dark:text-white/50 hover-elevate"
                      : "text-foreground/20 dark:text-white/20 cursor-not-allowed"
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
                  <social.icon className="w-3.5 h-3.5" />
                </button>
              ))}
            </div>

            <div className="w-px h-4 bg-black/10 dark:bg-white/10" />

            <button
              onClick={toggleTheme}
              className="relative w-11 h-[22px] rounded-full transition-colors bg-black/15 dark:bg-white/10"
              aria-label="Toggle theme"
              data-testid="button-theme-toggle-footer"
            >
              <div
                className={`absolute top-0.5 w-[18px] h-[18px] rounded-full flex items-center justify-center transition-all ${
                  theme === "dark"
                    ? "left-[22px] bg-[#1e293b]"
                    : "left-0.5 bg-white shadow-sm"
                }`}
              >
                {theme === "dark" ? (
                  <Moon className="w-2.5 h-2.5 text-white" />
                ) : (
                  <Sun className="w-2.5 h-2.5 text-amber-500" />
                )}
              </div>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
