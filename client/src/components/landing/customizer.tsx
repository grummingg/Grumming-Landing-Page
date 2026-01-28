import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Switch } from "@/components/ui/switch";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { X, RotateCcw, Save, Plus, Trash2 } from "lucide-react";
import type { LandingPageConfig, Feature, Testimonial, PricingTier } from "@shared/schema";

interface CustomizerProps {
  open: boolean;
  onClose: () => void;
  config: LandingPageConfig;
  onConfigChange: (config: LandingPageConfig) => void;
  onSave: () => void;
  onReset: () => void;
  isSaving: boolean;
}

export function Customizer({
  open,
  onClose,
  config,
  onConfigChange,
  onSave,
  onReset,
  isSaving,
}: CustomizerProps) {
  const updateHero = (field: keyof LandingPageConfig["hero"], value: string) => {
    onConfigChange({
      ...config,
      hero: { ...config.hero, [field]: value },
    });
  };

  const updateTheme = (field: keyof LandingPageConfig["theme"], value: string | boolean) => {
    onConfigChange({
      ...config,
      theme: { ...config.theme, [field]: value },
    });
  };

  const updateFeature = (id: string, field: keyof Feature, value: string) => {
    onConfigChange({
      ...config,
      features: config.features.map((f) =>
        f.id === id ? { ...f, [field]: value } : f
      ),
    });
  };

  const addFeature = () => {
    const newFeature: Feature = {
      id: Date.now().toString(),
      icon: "Zap",
      title: "New Feature",
      description: "Description of the new feature",
    };
    onConfigChange({
      ...config,
      features: [...config.features, newFeature],
    });
  };

  const removeFeature = (id: string) => {
    onConfigChange({
      ...config,
      features: config.features.filter((f) => f.id !== id),
    });
  };

  const updateTestimonial = (id: string, field: keyof Testimonial, value: string) => {
    onConfigChange({
      ...config,
      testimonials: config.testimonials.map((t) =>
        t.id === id ? { ...t, [field]: value } : t
      ),
    });
  };

  const addTestimonial = () => {
    const newTestimonial: Testimonial = {
      id: Date.now().toString(),
      name: "New Customer",
      role: "Role",
      company: "Company",
      content: "Their testimonial goes here.",
      avatar: "NC",
    };
    onConfigChange({
      ...config,
      testimonials: [...config.testimonials, newTestimonial],
    });
  };

  const removeTestimonial = (id: string) => {
    onConfigChange({
      ...config,
      testimonials: config.testimonials.filter((t) => t.id !== id),
    });
  };

  const updatePricing = (id: string, field: keyof PricingTier, value: string | string[] | boolean) => {
    onConfigChange({
      ...config,
      pricing: config.pricing.map((p) =>
        p.id === id ? { ...p, [field]: value } : p
      ),
    });
  };

  const iconOptions = ["Zap", "Shield", "Sparkles", "Globe", "Palette", "Code"];
  const fontOptions = ["Inter", "Poppins", "Roboto", "Open Sans", "Montserrat", "DM Sans"];
  const colorOptions = ["indigo", "blue", "violet", "rose", "emerald", "amber"];
  const radiusOptions = ["sm", "md", "lg"];

  return (
    <Sheet open={open} onOpenChange={onClose}>
      <SheetContent className="w-full sm:max-w-lg p-0 flex flex-col">
        <SheetHeader className="px-6 py-4 border-b border-border">
          <div className="flex items-center justify-between gap-4">
            <SheetTitle data-testid="text-customizer-title">
              Customize Landing Page
            </SheetTitle>
            <Button
              size="icon"
              variant="ghost"
              onClick={onClose}
              data-testid="button-close-customizer"
            >
              <X className="w-4 h-4" />
            </Button>
          </div>
        </SheetHeader>

        <ScrollArea className="flex-1">
          <div className="px-6 py-4 space-y-6">
            <Accordion type="multiple" defaultValue={["brand", "theme", "hero"]} className="space-y-2">
              <AccordionItem value="brand" className="border rounded-md px-4">
                <AccordionTrigger className="hover:no-underline" data-testid="accordion-brand">
                  Brand
                </AccordionTrigger>
                <AccordionContent className="space-y-4 pt-2 pb-4">
                  <div className="space-y-2">
                    <Label htmlFor="brandName">Brand Name</Label>
                    <Input
                      id="brandName"
                      value={config.brandName}
                      onChange={(e) =>
                        onConfigChange({ ...config, brandName: e.target.value })
                      }
                      data-testid="input-brand-name"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="brandTagline">Tagline</Label>
                    <Input
                      id="brandTagline"
                      value={config.brandTagline}
                      onChange={(e) =>
                        onConfigChange({ ...config, brandTagline: e.target.value })
                      }
                      data-testid="input-brand-tagline"
                    />
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="theme" className="border rounded-md px-4">
                <AccordionTrigger className="hover:no-underline" data-testid="accordion-theme">
                  Theme
                </AccordionTrigger>
                <AccordionContent className="space-y-4 pt-2 pb-4">
                  <div className="space-y-2">
                    <Label>Primary Color</Label>
                    <Select
                      value={config.theme.primaryColor}
                      onValueChange={(value) => updateTheme("primaryColor", value)}
                    >
                      <SelectTrigger data-testid="select-primary-color">
                        <SelectValue placeholder="Select color" />
                      </SelectTrigger>
                      <SelectContent>
                        {colorOptions.map((color) => (
                          <SelectItem key={color} value={color} data-testid={`option-color-${color}`}>
                            <div className="flex items-center gap-2">
                              <div className={`w-4 h-4 rounded-full bg-${color}-500`} />
                              <span className="capitalize">{color}</span>
                            </div>
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label>Font Family</Label>
                    <Select
                      value={config.theme.fontFamily}
                      onValueChange={(value) => updateTheme("fontFamily", value)}
                    >
                      <SelectTrigger data-testid="select-font-family">
                        <SelectValue placeholder="Select font" />
                      </SelectTrigger>
                      <SelectContent>
                        {fontOptions.map((font) => (
                          <SelectItem key={font} value={font} data-testid={`option-font-${font.toLowerCase().replace(/\s+/g, "-")}`}>
                            {font}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label>Border Radius</Label>
                    <Select
                      value={config.theme.borderRadius}
                      onValueChange={(value) => updateTheme("borderRadius", value)}
                    >
                      <SelectTrigger data-testid="select-border-radius">
                        <SelectValue placeholder="Select radius" />
                      </SelectTrigger>
                      <SelectContent>
                        {radiusOptions.map((radius) => (
                          <SelectItem key={radius} value={radius} data-testid={`option-radius-${radius}`}>
                            {radius === "sm" ? "Small" : radius === "md" ? "Medium" : "Large"}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="flex items-center justify-between">
                    <Label htmlFor="darkMode">Dark Mode Default</Label>
                    <Switch
                      id="darkMode"
                      checked={config.theme.darkMode}
                      onCheckedChange={(checked) => updateTheme("darkMode", checked)}
                      data-testid="switch-dark-mode"
                    />
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="hero" className="border rounded-md px-4">
                <AccordionTrigger className="hover:no-underline" data-testid="accordion-hero">
                  Hero Section
                </AccordionTrigger>
                <AccordionContent className="space-y-4 pt-2 pb-4">
                  <div className="space-y-2">
                    <Label htmlFor="headline">Headline</Label>
                    <Input
                      id="headline"
                      value={config.hero.headline}
                      onChange={(e) => updateHero("headline", e.target.value)}
                      data-testid="input-hero-headline"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="subheadline">Subheadline</Label>
                    <Textarea
                      id="subheadline"
                      value={config.hero.subheadline}
                      onChange={(e) => updateHero("subheadline", e.target.value)}
                      rows={3}
                      data-testid="input-hero-subheadline"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="ctaText">Primary CTA</Label>
                      <Input
                        id="ctaText"
                        value={config.hero.ctaText}
                        onChange={(e) => updateHero("ctaText", e.target.value)}
                        data-testid="input-hero-cta"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="ctaSecondaryText">Secondary CTA</Label>
                      <Input
                        id="ctaSecondaryText"
                        value={config.hero.ctaSecondaryText}
                        onChange={(e) => updateHero("ctaSecondaryText", e.target.value)}
                        data-testid="input-hero-secondary-cta"
                      />
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="features" className="border rounded-md px-4">
                <AccordionTrigger className="hover:no-underline" data-testid="accordion-features">
                  Features ({config.features.length})
                </AccordionTrigger>
                <AccordionContent className="space-y-4 pt-2 pb-4">
                  {config.features.map((feature, index) => (
                    <div key={feature.id} className="space-y-3 p-4 bg-muted/50 rounded-md">
                      <div className="flex items-center justify-between gap-2">
                        <span className="text-sm font-medium">Feature {index + 1}</span>
                        <Button
                          size="icon"
                          variant="ghost"
                          onClick={() => removeFeature(feature.id)}
                          data-testid={`button-remove-feature-${feature.id}`}
                        >
                          <Trash2 className="w-4 h-4 text-muted-foreground" />
                        </Button>
                      </div>
                      <div className="space-y-2">
                        <Label>Icon</Label>
                        <div className="flex flex-wrap gap-2">
                          {iconOptions.map((icon) => (
                            <Button
                              key={icon}
                              size="sm"
                              variant={feature.icon === icon ? "default" : "outline"}
                              onClick={() => updateFeature(feature.id, "icon", icon)}
                              data-testid={`button-icon-${icon.toLowerCase()}-${feature.id}`}
                            >
                              {icon}
                            </Button>
                          ))}
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label>Title</Label>
                        <Input
                          value={feature.title}
                          onChange={(e) => updateFeature(feature.id, "title", e.target.value)}
                          data-testid={`input-feature-title-${feature.id}`}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label>Description</Label>
                        <Textarea
                          value={feature.description}
                          onChange={(e) => updateFeature(feature.id, "description", e.target.value)}
                          rows={2}
                          data-testid={`input-feature-description-${feature.id}`}
                        />
                      </div>
                    </div>
                  ))}
                  <Button
                    variant="outline"
                    className="w-full gap-2"
                    onClick={addFeature}
                    data-testid="button-add-feature"
                  >
                    <Plus className="w-4 h-4" />
                    Add Feature
                  </Button>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="testimonials" className="border rounded-md px-4">
                <AccordionTrigger className="hover:no-underline" data-testid="accordion-testimonials">
                  Testimonials ({config.testimonials.length})
                </AccordionTrigger>
                <AccordionContent className="space-y-4 pt-2 pb-4">
                  {config.testimonials.map((testimonial, index) => (
                    <div key={testimonial.id} className="space-y-3 p-4 bg-muted/50 rounded-md">
                      <div className="flex items-center justify-between gap-2">
                        <span className="text-sm font-medium">Testimonial {index + 1}</span>
                        <Button
                          size="icon"
                          variant="ghost"
                          onClick={() => removeTestimonial(testimonial.id)}
                          data-testid={`button-remove-testimonial-${testimonial.id}`}
                        >
                          <Trash2 className="w-4 h-4 text-muted-foreground" />
                        </Button>
                      </div>
                      <div className="grid grid-cols-2 gap-3">
                        <div className="space-y-2">
                          <Label>Name</Label>
                          <Input
                            value={testimonial.name}
                            onChange={(e) => updateTestimonial(testimonial.id, "name", e.target.value)}
                            data-testid={`input-testimonial-name-${testimonial.id}`}
                          />
                        </div>
                        <div className="space-y-2">
                          <Label>Initials</Label>
                          <Input
                            value={testimonial.avatar}
                            maxLength={2}
                            onChange={(e) => updateTestimonial(testimonial.id, "avatar", e.target.value.toUpperCase())}
                            data-testid={`input-testimonial-avatar-${testimonial.id}`}
                          />
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-3">
                        <div className="space-y-2">
                          <Label>Role</Label>
                          <Input
                            value={testimonial.role}
                            onChange={(e) => updateTestimonial(testimonial.id, "role", e.target.value)}
                            data-testid={`input-testimonial-role-${testimonial.id}`}
                          />
                        </div>
                        <div className="space-y-2">
                          <Label>Company</Label>
                          <Input
                            value={testimonial.company}
                            onChange={(e) => updateTestimonial(testimonial.id, "company", e.target.value)}
                            data-testid={`input-testimonial-company-${testimonial.id}`}
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label>Content</Label>
                        <Textarea
                          value={testimonial.content}
                          onChange={(e) => updateTestimonial(testimonial.id, "content", e.target.value)}
                          rows={3}
                          data-testid={`input-testimonial-content-${testimonial.id}`}
                        />
                      </div>
                    </div>
                  ))}
                  <Button
                    variant="outline"
                    className="w-full gap-2"
                    onClick={addTestimonial}
                    data-testid="button-add-testimonial"
                  >
                    <Plus className="w-4 h-4" />
                    Add Testimonial
                  </Button>
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="pricing" className="border rounded-md px-4">
                <AccordionTrigger className="hover:no-underline" data-testid="accordion-pricing">
                  Pricing Tiers ({config.pricing.length})
                </AccordionTrigger>
                <AccordionContent className="space-y-4 pt-2 pb-4">
                  {config.pricing.map((tier, index) => (
                    <div key={tier.id} className="space-y-3 p-4 bg-muted/50 rounded-md">
                      <div className="flex items-center justify-between gap-2">
                        <span className="text-sm font-medium">Tier {index + 1}</span>
                        <div className="flex items-center gap-2">
                          <label className="flex items-center gap-2 text-sm">
                            <input
                              type="checkbox"
                              checked={tier.highlighted}
                              onChange={(e) => updatePricing(tier.id, "highlighted", e.target.checked)}
                              className="rounded border-border"
                              data-testid={`checkbox-pricing-highlighted-${tier.id}`}
                            />
                            Featured
                          </label>
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-3">
                        <div className="space-y-2">
                          <Label>Name</Label>
                          <Input
                            value={tier.name}
                            onChange={(e) => updatePricing(tier.id, "name", e.target.value)}
                            data-testid={`input-pricing-name-${tier.id}`}
                          />
                        </div>
                        <div className="space-y-2">
                          <Label>Price</Label>
                          <Input
                            value={tier.price}
                            onChange={(e) => updatePricing(tier.id, "price", e.target.value)}
                            data-testid={`input-pricing-price-${tier.id}`}
                          />
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-3">
                        <div className="space-y-2">
                          <Label>Period</Label>
                          <Input
                            value={tier.period}
                            onChange={(e) => updatePricing(tier.id, "period", e.target.value)}
                            placeholder="/month"
                            data-testid={`input-pricing-period-${tier.id}`}
                          />
                        </div>
                        <div className="space-y-2">
                          <Label>CTA Text</Label>
                          <Input
                            value={tier.ctaText}
                            onChange={(e) => updatePricing(tier.id, "ctaText", e.target.value)}
                            data-testid={`input-pricing-cta-${tier.id}`}
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label>Description</Label>
                        <Input
                          value={tier.description}
                          onChange={(e) => updatePricing(tier.id, "description", e.target.value)}
                          data-testid={`input-pricing-description-${tier.id}`}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label>Features (one per line)</Label>
                        <Textarea
                          value={tier.features.join("\n")}
                          onChange={(e) => updatePricing(tier.id, "features", e.target.value.split("\n"))}
                          rows={4}
                          data-testid={`input-pricing-features-${tier.id}`}
                        />
                      </div>
                    </div>
                  ))}
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </ScrollArea>

        <div className="px-6 py-4 border-t border-border bg-background">
          <div className="flex items-center gap-3">
            <Button
              variant="outline"
              onClick={onReset}
              className="gap-2"
              data-testid="button-reset-config"
            >
              <RotateCcw className="w-4 h-4" />
              Reset
            </Button>
            <Button
              className="flex-1 gap-2"
              onClick={onSave}
              disabled={isSaving}
              data-testid="button-save-config"
            >
              <Save className="w-4 h-4" />
              {isSaving ? "Saving..." : "Save Changes"}
            </Button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}
