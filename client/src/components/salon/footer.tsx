import { Button } from "@/components/ui/button";
import { SiInstagram, SiFacebook, SiX, SiYoutube } from "react-icons/si";
import { Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { Link } from "wouter";

export function SalonFooter() {
  const { toast } = useToast();

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
      { name: "Careers", url: null, scrollTo: null },
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
    <footer className="bg-[#0f172a] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-14 sm:py-16 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
          <div className="lg:col-span-4">
            <div className="mb-5">
              <span className="font-extrabold text-2xl tracking-tight" data-testid="text-footer-brand">
                Grumming
              </span>
            </div>
            <p className="text-white/50 mb-8 max-w-xs text-sm leading-relaxed" data-testid="text-footer-description">
              Discover and book appointments at the best salons near you. Your trusted partner for all beauty and wellness needs.
            </p>

            <div className="space-y-3 mb-8">
              <a href="mailto:support@grumming.com" className="flex items-center gap-3 text-white/50 hover:text-white/80 transition-colors group">
                <div className="w-8 h-8 rounded-md bg-white/5 flex items-center justify-center group-hover:bg-white/10 transition-colors">
                  <Mail className="w-3.5 h-3.5" />
                </div>
                <span className="text-sm" data-testid="text-footer-email">support@grumming.com</span>
              </a>
              <a href="tel:+911800123456" className="flex items-center gap-3 text-white/50 hover:text-white/80 transition-colors group">
                <div className="w-8 h-8 rounded-md bg-white/5 flex items-center justify-center group-hover:bg-white/10 transition-colors">
                  <Phone className="w-3.5 h-3.5" />
                </div>
                <span className="text-sm" data-testid="text-footer-phone">+91 1800-123-4567</span>
              </a>
              <div className="flex items-center gap-3 text-white/50">
                <div className="w-8 h-8 rounded-md bg-white/5 flex items-center justify-center">
                  <MapPin className="w-3.5 h-3.5" />
                </div>
                <span className="text-sm" data-testid="text-footer-address">Mumbai, Maharashtra, India</span>
              </div>
            </div>

            <div className="flex items-center gap-2">
              {socialLinks.map((social) => (
                <button
                  key={social.label}
                  className={`w-9 h-9 rounded-md flex items-center justify-center transition-colors ${
                    social.url
                      ? "bg-white/10 text-white/80 hover:bg-white/20 hover:text-white"
                      : "bg-white/5 text-white/25 cursor-not-allowed"
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
          </div>

          <div className="lg:col-span-8 grid grid-cols-2 gap-8">
            {Object.entries(footerLinks).map(([category, links]) => (
              <div key={category}>
                <h4 className="font-semibold text-xs uppercase tracking-widest text-white/40 mb-5" data-testid={`text-footer-category-${category.toLowerCase()}`}>
                  {category}
                </h4>
                <ul className="space-y-3">
                  {links.map((link) => (
                    <li key={link.name}>
                      {link.url ? (
                        <Link
                          href={link.url}
                          className="text-white/60 hover:text-white transition-colors text-sm inline-flex items-center gap-1 group"
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
                          className="text-white/60 hover:text-white transition-colors text-left text-sm"
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

        <div className="border-t border-white/10 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/35 text-xs" data-testid="text-footer-copyright">
            &copy; {new Date().getFullYear()} Grumming. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-xs">
            <Link
              href="/privacy-policy"
              className="text-white/35 hover:text-white/70 transition-colors"
              data-testid="link-footer-privacy"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms-of-service"
              className="text-white/35 hover:text-white/70 transition-colors"
              data-testid="link-footer-terms"
            >
              Terms of Service
            </Link>
            <Link
              href="/cookie-policy"
              className="text-white/35 hover:text-white/70 transition-colors"
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
