import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { SiInstagram, SiFacebook, SiX, SiYoutube } from "react-icons/si";
import { Mail, Phone, MapPin } from "lucide-react";
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

  const footerLinks = {
    Services: [
      { name: "Haircut", url: null },
      { name: "Spa & Massage", url: null },
      { name: "Facial", url: null },
      { name: "Makeup", url: null },
      { name: "Nail Art", url: null },
    ],
    Company: [
      { name: "About Us", url: "/about-us" },
      { name: "Careers", url: null },
      { name: "Blog", url: null },
      { name: "Press", url: null },
      { name: "Partner with Us", url: null },
    ],
    Support: [
      { name: "Help Center", url: null },
      { name: "Safety", url: "/safety" },
      { name: "Cancellation Policy", url: "/cancellation-policy" },
      { name: "Report an Issue", url: null },
    ],
  };

  const socialLinks = [
    { icon: SiInstagram, label: "Instagram", url: "https://www.instagram.com/grummingindia?igsh=cnVuYmdsbnR6NHlr" },
    { icon: SiFacebook, label: "Facebook", url: null },
    { icon: SiX, label: "X", url: "https://x.com/grummingapp?s=21" },
    { icon: SiYoutube, label: "YouTube", url: null },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          <div className="lg:col-span-2">
            <div className="mb-4">
              <span className="font-extrabold text-3xl tracking-tight" data-testid="text-footer-brand">
                Grumming
              </span>
            </div>
            <p className="text-white/60 mb-6 max-w-xs text-sm leading-relaxed" data-testid="text-footer-description">
              Discover and book appointments at the best salons near you. Your trusted partner for all beauty and wellness needs.
            </p>

            <div className="space-y-2.5 mb-6">
              <div className="flex items-center gap-2.5 text-white/60">
                <Mail className="w-4 h-4" />
                <span className="text-sm" data-testid="text-footer-email">support@grumming.com</span>
              </div>
              <div className="flex items-center gap-2.5 text-white/60">
                <Phone className="w-4 h-4" />
                <span className="text-sm" data-testid="text-footer-phone">+91 1800-123-4567</span>
              </div>
              <div className="flex items-center gap-2.5 text-white/60">
                <MapPin className="w-4 h-4" />
                <span className="text-sm" data-testid="text-footer-address">Mumbai, Maharashtra, India</span>
              </div>
            </div>

            <div className="flex items-center gap-1">
              {socialLinks.map((social) => (
                <Button
                  key={social.label}
                  size="icon"
                  variant="ghost"
                  className="text-white/60 hover:text-white h-8 w-8"
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
                </Button>
              ))}
            </div>
          </div>

          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-semibold text-sm uppercase tracking-wider text-white/90 mb-4" data-testid={`text-footer-category-${category.toLowerCase()}`}>
                {category}
              </h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.name}>
                    {link.url ? (
                      <Link
                        href={link.url}
                        className="text-white/60 hover:text-white transition-colors text-left text-sm"
                        data-testid={`link-footer-${link.name.toLowerCase().replace(/\s+/g, "-")}`}
                      >
                        {link.name}
                      </Link>
                    ) : (
                      <button
                        type="button"
                        onClick={() => handleComingSoonLink(link.name)}
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

        <Separator className="mt-12 mb-8 bg-white/20" />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/60 text-sm" data-testid="text-footer-copyright">
            &copy; {new Date().getFullYear()} Grumming. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-sm">
            <Link
              href="/privacy-policy"
              className="text-white/60 hover:text-white transition-colors"
              data-testid="link-footer-privacy"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms-of-service"
              className="text-white/60 hover:text-white transition-colors"
              data-testid="link-footer-terms"
            >
              Terms of Service
            </Link>
            <Link
              href="/cookie-policy"
              className="text-white/60 hover:text-white transition-colors"
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
