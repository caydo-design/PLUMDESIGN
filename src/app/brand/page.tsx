import { ArrowRight, Check, Globe, Sparkles, Users } from "lucide-react";
import {
  BackNavbar,
  Button,
  Badge,
  Card,
  Logo,
  Section,
  SectionLabel,
  SectionHeading,
  Divider,
} from "@/components/ui";

function ColorSwatch({
  name,
  hex,
  token,
  large,
}: {
  name: string;
  hex: string;
  token: string;
  large?: boolean;
}) {
  return (
    <div className={large ? "col-span-2 sm:col-span-1 md:col-span-2" : ""}>
      <div
        className={`w-full rounded-2xl border border-warm/60 ${large ? "h-28 md:h-40" : "h-20 md:h-28"}`}
        style={{ background: hex }}
      />
      <div className="mt-3">
        <p className="text-[14px] lg:text-[15px] font-semibold text-foreground">{name}</p>
        <p className="text-[12px] lg:text-[13px] text-foreground/40 font-mono mt-0.5">{hex}</p>
        <p className="text-[11px] lg:text-[12px] text-foreground/30 font-mono">{token}</p>
      </div>
    </div>
  );
}

function ColorPalette() {
  const colors = [
    {
      name: "Primary Dark",
      hex: "#2B0B02",
      token: "--foreground",
      large: true,
    },
    { name: "Plum", hex: "#6B3861", token: "--plum-primary", large: true },
    { name: "Burnt Sienna", hex: "#8A2B0E", token: "--burnt-sienna" },
    { name: "Dusty Lavender", hex: "#9988A1", token: "--dusty-lavender" },
    { name: "Peach Accent", hex: "#FFD3AC", token: "--peach-accent" },
    { name: "Warm Neutral", hex: "#E0D5CC", token: "--warm-neutral" },
    { name: "Section BG", hex: "#FFF2E6", token: "--section-bg" },
    { name: "Page BG", hex: "#FAF6F0", token: "--background" },
    { name: "White", hex: "#FFFFFF", token: "--white" },
  ];

  return (
    <Section>
      <SectionLabel style="dot">Color System</SectionLabel>
      <SectionHeading className="mb-6 max-w-[600px]">
        Our palette draws from warmth and richness
      </SectionHeading>
      <p className="text-[15px] lg:text-[16px] text-foreground/50 leading-relaxed max-w-[520px] mb-10 lg:mb-12">
        Earth tones, plum purples, and warm neutrals create a sophisticated yet
        welcoming identity that evokes the warmth of travel.
      </p>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
        {colors.map((c) => (
          <ColorSwatch key={c.hex} {...c} />
        ))}
      </div>
    </Section>
  );
}

function Typography() {
  return (
    <Section>
      <SectionLabel style="dot">Typography</SectionLabel>
      <SectionHeading className="mb-10 lg:mb-16 max-w-[600px]">
        Two typefaces, one voice
      </SectionHeading>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
        <div>
          <div className="mb-8">
            <span className="text-[11px] font-medium text-plum tracking-[1.5px] uppercase block mb-3">
              Display / Headlines
            </span>
            <span className="font-serif text-[48px] lg:text-[72px] font-medium text-foreground tracking-tight leading-none">
              Fraunces
            </span>
          </div>
          <p className="text-[14px] text-foreground/40 leading-relaxed mb-6">
            An old-style soft serif typeface with a distinctive personality.
            Used for headlines, section titles, and display text to create a
            sense of elegance and warmth.
          </p>
          <div className="space-y-3">
            {[
              { weight: "400", label: "Regular weight", serif: true },
              { weight: "500", label: "Medium weight", serif: true },
              { weight: "600", label: "SemiBold weight", serif: true },
              { weight: "700", label: "Bold weight", serif: true },
            ].map((w) => (
              <div key={w.weight} className="flex items-baseline gap-4">
                <span className="text-[12px] text-foreground/30 w-8">
                  {w.weight}
                </span>
                <span
                  className="font-serif text-[20px] lg:text-[24px] text-foreground"
                  style={{ fontWeight: Number(w.weight) }}
                >
                  {w.label}
                </span>
              </div>
            ))}
          </div>
        </div>
        <div>
          <div className="mb-8">
            <span className="text-[11px] font-medium text-plum tracking-[1.5px] uppercase block mb-3">
              Body / UI
            </span>
            <span className="text-[48px] lg:text-[72px] font-medium text-foreground tracking-tight leading-none">
              DM Sans
            </span>
          </div>
          <p className="text-[14px] text-foreground/40 leading-relaxed mb-6">
            A clean geometric sans-serif designed for optimal readability at all
            sizes. Used for body copy, UI elements, labels, and navigation.
          </p>
          <div className="space-y-3">
            {[
              { weight: "400", label: "Regular weight" },
              { weight: "500", label: "Medium weight" },
              { weight: "600", label: "SemiBold weight" },
              { weight: "700", label: "Bold weight" },
            ].map((w) => (
              <div key={w.weight} className="flex items-baseline gap-4">
                <span className="text-[12px] text-foreground/30 w-8">
                  {w.weight}
                </span>
                <span
                  className="text-[20px] lg:text-[24px] text-foreground"
                  style={{ fontWeight: Number(w.weight) }}
                >
                  {w.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}

function TypeScale() {
  const scale = [
    { size: "56px", text: "Display Heading", serif: true },
    { size: "44px", text: "Section Heading", serif: true },
    { size: "32px", text: "Subsection Heading", serif: true },
    { size: "20px", text: "Card Title", serif: true },
    { size: "16px", text: "Body Text", serif: false },
    { size: "14px", text: "Secondary Body", serif: false, muted: true },
    { size: "13px", text: "Label / Overline", serif: false, label: true },
  ];

  return (
    <section className="mx-6 md:mx-12 lg:mx-20 py-16 lg:py-24 max-w-[1440px] bg-section rounded-2xl lg:rounded-3xl">
      <div className="px-6 py-6 md:px-12 md:py-12 lg:px-16 lg:py-16">
        <h3 className="text-[13px] font-medium tracking-[2px] uppercase text-sienna mb-8 lg:mb-12">
          Type Scale
        </h3>
        <div className="space-y-6 lg:space-y-8">
          {scale.map((item, i) => (
            <div
              key={item.size}
              className={`flex items-baseline gap-4 md:gap-8 ${i < scale.length - 1 ? "border-b border-warm/40 pb-4 lg:pb-6" : ""}`}
            >
              <span className="text-[11px] lg:text-[12px] text-foreground/30 font-mono w-10 lg:w-12 flex-shrink-0">
                {item.size}
              </span>
              <span
                className={`leading-none truncate ${
                  item.label
                    ? "text-[13px] font-medium tracking-[2px] uppercase text-sienna"
                    : item.muted
                      ? `text-[${item.size}] text-foreground/60`
                      : item.serif
                        ? `font-serif text-[${Math.min(parseInt(item.size), 56)}px] font-medium text-foreground tracking-tight`
                        : `text-[${item.size}] text-foreground`
                }`}
              >
                {item.text}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function LogoSection() {
  return (
    <Section>
      <SectionLabel style="dot">Logo</SectionLabel>
      <SectionHeading className="mb-10 lg:mb-16 max-w-[500px]">
        The Plum mark
      </SectionHeading>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6">
        <div className="rounded-2xl bg-white border border-warm/60 p-8 lg:p-12 flex flex-col items-center justify-center aspect-[4/3]">
          <div className="mb-6">
            <Logo variant="dark" size="lg" />
          </div>
          <span className="text-[13px] text-foreground/30 font-medium">
            Primary — Light BG
          </span>
        </div>
        <div className="rounded-2xl bg-foreground p-8 lg:p-12 flex flex-col items-center justify-center aspect-[4/3]">
          <div className="mb-6">
            <Logo variant="light" size="lg" />
          </div>
          <span className="text-[13px] text-white/30 font-medium">
            Reversed — Dark BG
          </span>
        </div>
        <div className="rounded-2xl bg-plum p-8 lg:p-12 flex flex-col items-center justify-center aspect-[4/3]">
          <div className="mb-6">
            <Logo variant="light" size="lg" />
          </div>
          <span className="text-[13px] text-white/30 font-medium">
            On Plum
          </span>
        </div>
      </div>
      <div className="mt-8 lg:mt-12">
        <div className="rounded-2xl border border-warm/60 p-6 lg:p-8">
          <h4 className="font-serif text-[18px] font-medium text-foreground mb-3">
            Clear Space &amp; Usage
          </h4>
          <div className="space-y-2 text-[13px] lg:text-[14px] text-foreground/50 leading-relaxed">
            <p>
              Maintain at minimum the width of the mark icon as clear space on
              all sides.
            </p>
            <p>
              The logomark can be used independently for app icons, favicons,
              and social avatars.
            </p>
            <p>
              Never distort, rotate, or apply effects to the logo. Use only
              approved color combinations.
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}

function DesignPrinciples() {
  const principles = [
    {
      number: "01",
      title: "Warm & Inviting",
      description:
        "Our brand evokes the warmth of travel and new experiences. Every touchpoint should feel welcoming, never cold or corporate.",
    },
    {
      number: "02",
      title: "Sophisticated Simplicity",
      description:
        "Elegant design that doesn't overwhelm. Clean layouts with purposeful hierarchy and generous whitespace let the content breathe.",
    },
    {
      number: "03",
      title: "Human-First",
      description:
        "Technology serves people. AI powers the platform, but the experience centers on human connection, real destinations, and personal stories.",
    },
    {
      number: "04",
      title: "Trustworthy & Premium",
      description:
        "From typography to interactions, every detail signals quality. Users are planning something important — the brand should match that significance.",
    },
  ];

  return (
    <Section>
      <SectionLabel style="dot">Principles</SectionLabel>
      <SectionHeading className="mb-10 lg:mb-16 max-w-[600px]">
        Design principles
      </SectionHeading>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
        {principles.map((p) => (
          <div
            key={p.number}
            className="rounded-2xl border border-warm/60 p-8 lg:p-10 group hover:border-plum/30 transition-colors"
          >
            <span className="text-[36px] lg:text-[48px] font-serif font-bold text-foreground/8 block mb-4">
              {p.number}
            </span>
            <h3 className="font-serif text-[20px] lg:text-[24px] font-medium text-foreground mb-3">
              {p.title}
            </h3>
            <p className="text-[13px] lg:text-[14px] text-foreground/50 leading-relaxed">
              {p.description}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
}

function ComponentShowcase({
  title,
  code,
  children,
}: {
  title: string;
  code: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-2xl border border-warm/60 overflow-hidden">
      <div className="p-6 lg:p-8 flex items-center flex-wrap gap-4">{children}</div>
      <div className="border-t border-warm/40 bg-foreground/[0.02] px-6 lg:px-8 py-4 flex flex-col sm:flex-row sm:items-start justify-between gap-3 sm:gap-4">
        <code className="text-[11px] lg:text-[12px] text-foreground/40 font-mono leading-relaxed whitespace-pre-wrap overflow-x-auto">
          {code}
        </code>
        <span className="text-[11px] font-medium text-foreground/20 tracking-wider uppercase flex-shrink-0">
          {title}
        </span>
      </div>
    </div>
  );
}

function ComponentLibrary() {
  return (
    <Section>
      <SectionLabel style="dot">Component Library</SectionLabel>
      <SectionHeading className="mb-6 max-w-[700px]">
        Live components from our design system
      </SectionHeading>
      <p className="text-[15px] lg:text-[16px] text-foreground/50 leading-relaxed max-w-[560px] mb-10 lg:mb-16">
        Every component below is rendered from{" "}
        <code className="text-[13px] lg:text-[14px] font-mono text-plum bg-plum/5 px-1.5 py-0.5 rounded">
          @/components/ui
        </code>
        . Import and use them across any page.
      </p>

      <div className="space-y-4 md:space-y-6">
        <ComponentShowcase
          title="Button"
          code={`<Button>Start Planning</Button>\n<Button variant="secondary">Book a Demo</Button>\n<Button variant="accent">Subscribe</Button>\n<Button variant="ghost" size="sm">Filter</Button>`}
        >
          <Button>Start Planning</Button>
          <Button variant="secondary">
            Book a Demo
            <ArrowRight className="w-3.5 h-3.5" />
          </Button>
          <Button variant="accent">Subscribe</Button>
          <Button variant="ghost" size="sm">
            Filter
          </Button>
        </ComponentShowcase>

        <ComponentShowcase
          title="Badge"
          code={`<Badge>12 Guests</Badge>\n<Badge variant="sienna">New</Badge>\n<Badge variant="lavender">Agent</Badge>\n<Badge variant="neutral">Draft</Badge>`}
        >
          <Badge>12 Guests Confirmed</Badge>
          <Badge variant="sienna">New</Badge>
          <Badge variant="lavender">Agent Pro</Badge>
          <Badge variant="neutral">Draft</Badge>
        </ComponentShowcase>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          <ComponentShowcase
            title="Logo Variants"
            code={`<Logo />                  // dark, md\n<Logo variant="light" />  // on dark bg\n<Logo size="sm" />        // compact`}
          >
            <div className="flex items-center gap-6 flex-wrap">
              <Logo />
              <div className="bg-foreground rounded-xl px-5 py-3">
                <Logo variant="light" />
              </div>
              <Logo size="sm" />
            </div>
          </ComponentShowcase>

          <ComponentShowcase
            title="Logo Sizes"
            code={`<Logo size="sm" />\n<Logo size="md" />\n<Logo size="lg" />`}
          >
            <div className="flex items-center gap-6">
              <Logo size="sm" />
              <Logo size="md" />
              <Logo size="lg" />
            </div>
          </ComponentShowcase>
        </div>

        <ComponentShowcase
          title="Card"
          code={`<Card className="p-6">Bordered (default)</Card>\n<Card variant="section" className="p-6">Section bg</Card>\n<Card variant="dark" className="p-6">Dark surface</Card>\n<Card hover className="p-6">Hover border</Card>`}
        >
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full">
            <Card className="p-6">
              <h5 className="font-serif text-[16px] font-medium text-foreground mb-1">
                Bordered
              </h5>
              <p className="text-[13px] text-foreground/40">Default card</p>
            </Card>
            <Card variant="section" className="p-6">
              <h5 className="font-serif text-[16px] font-medium text-foreground mb-1">
                Section
              </h5>
              <p className="text-[13px] text-foreground/40">
                Warm section background
              </p>
            </Card>
            <Card variant="dark" className="p-6">
              <h5 className="font-serif text-[16px] font-medium text-white mb-1">
                Dark
              </h5>
              <p className="text-[13px] text-white/40">Inverted surface</p>
            </Card>
          </div>
        </ComponentShowcase>

        <ComponentShowcase
          title="Feature Cards"
          code={`<Card hover className="p-8">\n  <Icon className="w-6 h-6 text-plum mb-5" />\n  <h3 className="font-serif ...">Title</h3>\n  <p className="...">Description</p>\n</Card>`}
        >
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full">
            <Card hover className="p-6 lg:p-8">
              <Sparkles className="w-6 h-6 text-plum mb-4 lg:mb-5" />
              <h5 className="font-serif text-[17px] lg:text-[18px] font-medium mb-2">
                AI Trip Builder
              </h5>
              <p className="text-[13px] lg:text-[14px] text-foreground/50 leading-relaxed">
                Smart itinerary generation with real-time pricing.
              </p>
            </Card>
            <Card hover className="p-6 lg:p-8">
              <Users className="w-6 h-6 text-plum mb-4 lg:mb-5" />
              <h5 className="font-serif text-[17px] lg:text-[18px] font-medium mb-2">
                Agent Marketplace
              </h5>
              <p className="text-[13px] lg:text-[14px] text-foreground/50 leading-relaxed">
                Connect with vetted local travel experts.
              </p>
            </Card>
            <Card hover className="p-6 lg:p-8">
              <Globe className="w-6 h-6 text-plum mb-4 lg:mb-5" />
              <h5 className="font-serif text-[17px] lg:text-[18px] font-medium mb-2">
                Consumer App
              </h5>
              <p className="text-[13px] lg:text-[14px] text-foreground/50 leading-relaxed">
                Plan trips and keep a beautiful travel diary.
              </p>
            </Card>
          </div>
        </ComponentShowcase>

        <ComponentShowcase
          title="Section Primitives"
          code={`<SectionLabel>Label Text</SectionLabel>          // line style\n<SectionLabel style="dot">Label</SectionLabel>  // dot style\n<SectionHeading>Heading Text</SectionHeading>`}
        >
          <div className="w-full space-y-6">
            <div>
              <SectionLabel>Line Style Label</SectionLabel>
              <SectionHeading>Section heading example</SectionHeading>
            </div>
            <div className="h-px bg-warm/40" />
            <div>
              <SectionLabel style="dot">Dot Style Label</SectionLabel>
              <SectionHeading>Another heading example</SectionHeading>
            </div>
          </div>
        </ComponentShowcase>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          <ComponentShowcase
            title="Spacing"
            code={`// 8px grid, 80px outer padding\n// 16px container radius\n// pill-shaped buttons (rounded-full)`}
          >
            <div className="grid grid-cols-4 gap-4 w-full">
              <div className="text-center">
                <div className="flex items-end justify-center gap-1 mb-3 h-12">
                  <div className="w-2 h-2 rounded-sm bg-plum/20" />
                  <div className="w-2 h-4 rounded-sm bg-plum/30" />
                  <div className="w-2 h-8 rounded-sm bg-plum/50" />
                  <div className="w-2 h-12 rounded-sm bg-plum" />
                </div>
                <span className="text-[11px] lg:text-[12px] font-semibold text-foreground">
                  8px Grid
                </span>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center h-12 mb-3">
                  <div className="w-10 h-10 rounded-2xl border-2 border-plum/30" />
                </div>
                <span className="text-[11px] lg:text-[12px] font-semibold text-foreground">
                  16px Radius
                </span>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center h-12 mb-3">
                  <div className="px-3 py-1.5 rounded-full border-2 border-plum/30 text-[10px] text-plum/50 font-medium">
                    pill
                  </div>
                </div>
                <span className="text-[11px] lg:text-[12px] font-semibold text-foreground">
                  Pill Buttons
                </span>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center h-12 mb-3">
                  <span className="text-[10px] lg:text-[11px] text-plum/40 font-mono">
                    80px
                  </span>
                </div>
                <span className="text-[11px] lg:text-[12px] font-semibold text-foreground">
                  Outer Pad
                </span>
              </div>
            </div>
          </ComponentShowcase>

          <ComponentShowcase
            title="Composed Example"
            code={`// Combine Card + Badge + Button\n// for real UI patterns`}
          >
            <Card className="p-5 lg:p-6 w-full">
              <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
                <h5 className="font-serif text-[17px] lg:text-[18px] font-medium">
                  Tulum Creator Retreat
                </h5>
                <Badge>12 Guests</Badge>
              </div>
              <p className="text-[13px] lg:text-[14px] text-foreground/50 mb-5 lg:mb-6 leading-relaxed">
                5-night brand trip with content deliverables, group
                accommodations, and curated local experiences.
              </p>
              <div className="flex items-center gap-3">
                <Button size="sm">View Trip</Button>
                <Button variant="secondary" size="sm">
                  Edit
                  <ArrowRight className="w-3 h-3" />
                </Button>
              </div>
            </Card>
          </ComponentShowcase>
        </div>
      </div>
    </Section>
  );
}

function BrandFooter() {
  return (
    <footer className="px-6 md:px-12 lg:px-20 py-12 lg:py-16 max-w-[1440px] mx-auto border-t border-warm/40">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <Logo size="sm" />
        <p className="text-[13px] text-foreground/30">
          Brand Guidelines &mdash; Plum Travel Platform
        </p>
      </div>
    </footer>
  );
}

export default function BrandPage() {
  return (
    <main className="bg-background">
      <BackNavbar />
      <section className="px-6 md:px-12 lg:px-20 pt-8 md:pt-12 lg:pt-16 pb-16 lg:pb-24 max-w-[1440px] mx-auto">
        <div className="max-w-[800px]">
          <SectionLabel style="dot">Brand Guidelines</SectionLabel>
          <h1 className="font-serif text-[36px] md:text-[48px] lg:text-[64px] font-medium text-foreground tracking-tight leading-[1.1] lg:leading-[1.05] mb-4 lg:mb-6">
            Our Brand
          </h1>
          <p className="text-[16px] lg:text-[20px] text-foreground/50 leading-relaxed max-w-[560px]">
            The visual identity of Plum — colors, typography, logo usage, and
            design principles that define who we are.
          </p>
        </div>
      </section>
      <LogoSection />
      <Divider />
      <ColorPalette />
      <Divider />
      <Typography />
      <TypeScale />
      <div className="mx-6 md:mx-12 lg:mx-20 h-px bg-warm/40 mt-16 lg:mt-24" />
      <DesignPrinciples />
      <Divider />
      <ComponentLibrary />
      <BrandFooter />
    </main>
  );
}
