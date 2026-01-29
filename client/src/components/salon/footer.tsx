import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { SiInstagram, SiFacebook, SiX, SiYoutube } from "react-icons/si";
import { Mail, Phone, MapPin } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export function SalonFooter() {
  const { toast } = useToast();

  const handleComingSoonLink = (linkName: string) => {
    toast({
      title: "Coming Soon",
      description: `${linkName} page is under development. Stay tuned!`,
    });
  };

  const footerLinks = {
    Services: ["Haircut", "Spa & Massage", "Facial", "Makeup", "Nail Art", "Waxing"],
    Company: ["About Us", "Careers", "Blog", "Press", "Partner with Us"],
    Support: ["Help Center", "Safety", "Cancellation Policy", "Report an Issue"],
  };

  const socialLinks = [
    { icon: SiInstagram, label: "Instagram" },
    { icon: SiFacebook, label: "Facebook" },
    { icon: SiX, label: "Twitter" },
    { icon: SiYoutube, label: "YouTube" },
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
            <p className="text-white/80 mb-6 max-w-sm" data-testid="text-footer-description">
              Discover and book appointments at the best salons near you. Your trusted partner for all beauty and wellness needs.
            </p>

            <div className="space-y-3 mb-6">
              <div className="flex items-center gap-3 text-white/80">
                <Mail className="w-5 h-5" />
                <span data-testid="text-footer-email">support@grumming.com</span>
              </div>
              <div className="flex items-center gap-3 text-white/80">
                <Phone className="w-5 h-5" />
                <span data-testid="text-footer-phone">+91 1800-123-4567</span>
              </div>
              <div className="flex items-center gap-3 text-white/80">
                <MapPin className="w-5 h-5" />
                <span data-testid="text-footer-address">Mumbai, Maharashtra, India</span>
              </div>
            </div>

            <div className="flex items-center gap-2">
              {socialLinks.map((social) => (
                <Button
                  key={social.label}
                  size="icon"
                  variant="ghost"
                  className="text-white/80"
                  onClick={() => handleComingSoonLink(social.label)}
                  aria-label={social.label}
                  data-testid={`link-social-${social.label.toLowerCase()}`}
                >
                  <social.icon className="w-5 h-5" />
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
                  <li key={link}>
                    <button
                      type="button"
                      onClick={() => handleComingSoonLink(link)}
                      className="text-white/60 hover:text-white transition-colors text-left text-sm"
                      data-testid={`link-footer-${link.toLowerCase().replace(/\s+/g, "-")}`}
                    >
                      {link}
                    </button>
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
            <button
              type="button"
              onClick={() => handleComingSoonLink("Privacy Policy")}
              className="text-white/60 hover:text-white transition-colors"
              data-testid="link-footer-privacy"
            >
              Privacy Policy
            </button>
            <button
              type="button"
              onClick={() => handleComingSoonLink("Terms of Service")}
              className="text-white/60 hover:text-white transition-colors"
              data-testid="link-footer-terms"
            >
              Terms of Service
            </button>
            <button
              type="button"
              onClick={() => handleComingSoonLink("Cookie Policy")}
              className="text-white/60 hover:text-white transition-colors"
              data-testid="link-footer-cookies"
            >
              Cookie Policy
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
