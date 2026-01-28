import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { SiGithub, SiX, SiLinkedin, SiDiscord } from "react-icons/si";

interface FooterProps {
  brandName: string;
  brandTagline: string;
}

export function Footer({ brandName, brandTagline }: FooterProps) {
  const footerLinks = {
    Product: ["Features", "Pricing", "Integrations", "Changelog", "Roadmap"],
    Company: ["About", "Blog", "Careers", "Press", "Contact"],
    Resources: ["Documentation", "API Reference", "Guides", "Community", "Support"],
    Legal: ["Privacy", "Terms", "Security", "Cookies"],
  };

  const socialLinks = [
    { icon: SiGithub, href: "#", label: "GitHub" },
    { icon: SiX, href: "#", label: "Twitter" },
    { icon: SiLinkedin, href: "#", label: "LinkedIn" },
    { icon: SiDiscord, href: "#", label: "Discord" },
  ];

  return (
    <footer className="bg-muted/30 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8">
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-primary rounded-md flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-sm">
                  {brandName.charAt(0)}
                </span>
              </div>
              <span className="font-semibold text-lg" data-testid="text-footer-brand">
                {brandName}
              </span>
            </div>
            <p
              className="text-sm text-muted-foreground mb-6 max-w-xs"
              data-testid="text-footer-tagline"
            >
              {brandTagline}
            </p>
            <div className="flex items-center gap-2">
              {socialLinks.map((social) => (
                <Button
                  key={social.label}
                  size="icon"
                  variant="ghost"
                  asChild
                >
                  <a
                    href={social.href}
                    aria-label={social.label}
                    data-testid={`link-social-${social.label.toLowerCase()}`}
                  >
                    <social.icon className="w-4 h-4" />
                  </a>
                </Button>
              ))}
            </div>
          </div>

          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-semibold text-sm mb-4" data-testid={`text-footer-category-${category.toLowerCase()}`}>
                {category}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <Button
                      variant="link"
                      className="p-0 h-auto text-muted-foreground"
                      asChild
                    >
                      <a
                        href="#"
                        data-testid={`link-footer-${link.toLowerCase().replace(/\s+/g, "-")}`}
                      >
                        {link}
                      </a>
                    </Button>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground" data-testid="text-footer-copyright">
            &copy; {new Date().getFullYear()} {brandName}. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Button variant="link" className="p-0 h-auto text-muted-foreground" asChild>
              <a href="#" data-testid="link-footer-privacy-policy">
                Privacy Policy
              </a>
            </Button>
            <Button variant="link" className="p-0 h-auto text-muted-foreground" asChild>
              <a href="#" data-testid="link-footer-terms-of-service">
                Terms of Service
              </a>
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
}
