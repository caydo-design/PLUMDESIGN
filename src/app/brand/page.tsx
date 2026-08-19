import { ArrowLeft, Copy, Check } from "lucide-react";

function BrandNavbar() {
  return (
    <nav className="flex items-center justify-between px-20 py-7 max-w-[1440px] mx-auto w-full">
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 rounded-full border-2 border-foreground flex items-center justify-center">
          <div className="w-4 h-4 rounded-full bg-foreground" />
        </div>
        <span className="font-serif text-[22px] font-semibold tracking-tight">
          Plum
        </span>
      </div>
      <a
        href="/"
        className="flex items-center gap-2 text-[15px] font-medium text-foreground/60 hover:text-foreground transition-colors"
      >
        <ArrowLeft size={16} />
        Back to Home
      </a>
    </nav>
  );
}

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
    <div className={large ? "col-span-2" : ""}>
      <div
        className={`w-full rounded-2xl border border-warm/60 ${large ? "h-40" : "h-28"}`}
        style={{ background: hex }}
      />
      <div className="mt-3">
        <p className="text-[15px] font-semibold text-foreground">{name}</p>
        <p className="text-[13px] text-foreground/40 font-mono mt-0.5">{hex}</p>
        <p className="text-[12px] text-foreground/30 font-mono">{token}</p>
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
    <section className="px-20 py-24 max-w-[1440px] mx-auto">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-1 h-1 rounded-full bg-plum" />
        <span className="text-[13px] font-medium tracking-[2px] uppercase text-sienna">
          Color System
        </span>
      </div>
      <h2 className="font-serif text-[44px] font-medium text-foreground tracking-tight leading-tight mb-6 max-w-[600px]">
        Our palette draws from warmth and richness
      </h2>
      <p className="text-[16px] text-foreground/50 leading-relaxed max-w-[520px] mb-12">
        Earth tones, plum purples, and warm neutrals create a sophisticated yet
        welcoming identity that evokes the warmth of travel.
      </p>
      <div className="grid grid-cols-4 gap-6">
        {colors.map((c) => (
          <ColorSwatch key={c.hex} {...c} />
        ))}
      </div>
    </section>
  );
}

function Typography() {
  return (
    <section className="px-20 py-24 max-w-[1440px] mx-auto">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-1 h-1 rounded-full bg-plum" />
        <span className="text-[13px] font-medium tracking-[2px] uppercase text-sienna">
          Typography
        </span>
      </div>
      <h2 className="font-serif text-[44px] font-medium text-foreground tracking-tight leading-tight mb-16 max-w-[600px]">
        Two typefaces, one voice
      </h2>
      <div className="grid grid-cols-2 gap-16">
        <div>
          <div className="mb-8">
            <span className="text-[11px] font-medium text-plum tracking-[1.5px] uppercase block mb-3">
              Display / Headlines
            </span>
            <span className="font-serif text-[72px] font-medium text-foreground tracking-tight leading-none">
              Fraunces
            </span>
          </div>
          <p className="text-[14px] text-foreground/40 leading-relaxed mb-6">
            An old-style soft serif typeface with a distinctive personality.
            Used for headlines, section titles, and display text to create a
            sense of elegance and warmth.
          </p>
          <div className="space-y-3">
            <div className="flex items-baseline gap-4">
              <span className="text-[12px] text-foreground/30 w-8">400</span>
              <span className="font-serif text-[24px] font-normal text-foreground">
                Regular weight
              </span>
            </div>
            <div className="flex items-baseline gap-4">
              <span className="text-[12px] text-foreground/30 w-8">500</span>
              <span className="font-serif text-[24px] font-medium text-foreground">
                Medium weight
              </span>
            </div>
            <div className="flex items-baseline gap-4">
              <span className="text-[12px] text-foreground/30 w-8">600</span>
              <span className="font-serif text-[24px] font-semibold text-foreground">
                SemiBold weight
              </span>
            </div>
            <div className="flex items-baseline gap-4">
              <span className="text-[12px] text-foreground/30 w-8">700</span>
              <span className="font-serif text-[24px] font-bold text-foreground">
                Bold weight
              </span>
            </div>
          </div>
        </div>
        <div>
          <div className="mb-8">
            <span className="text-[11px] font-medium text-plum tracking-[1.5px] uppercase block mb-3">
              Body / UI
            </span>
            <span className="text-[72px] font-medium text-foreground tracking-tight leading-none">
              DM Sans
            </span>
          </div>
          <p className="text-[14px] text-foreground/40 leading-relaxed mb-6">
            A clean geometric sans-serif designed for optimal readability at all
            sizes. Used for body copy, UI elements, labels, and navigation.
          </p>
          <div className="space-y-3">
            <div className="flex items-baseline gap-4">
              <span className="text-[12px] text-foreground/30 w-8">400</span>
              <span className="text-[24px] font-normal text-foreground">
                Regular weight
              </span>
            </div>
            <div className="flex items-baseline gap-4">
              <span className="text-[12px] text-foreground/30 w-8">500</span>
              <span className="text-[24px] font-medium text-foreground">
                Medium weight
              </span>
            </div>
            <div className="flex items-baseline gap-4">
              <span className="text-[12px] text-foreground/30 w-8">600</span>
              <span className="text-[24px] font-semibold text-foreground">
                SemiBold weight
              </span>
            </div>
            <div className="flex items-baseline gap-4">
              <span className="text-[12px] text-foreground/30 w-8">700</span>
              <span className="text-[24px] font-bold text-foreground">
                Bold weight
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function TypeScale() {
  return (
    <section className="px-20 py-24 max-w-[1440px] mx-auto bg-section rounded-3xl mx-20">
      <div className="px-16 py-16">
        <h3 className="text-[13px] font-medium tracking-[2px] uppercase text-sienna mb-12">
          Type Scale
        </h3>
        <div className="space-y-8">
          <div className="flex items-baseline gap-8 border-b border-warm/40 pb-6">
            <span className="text-[12px] text-foreground/30 font-mono w-12">
              56px
            </span>
            <span className="font-serif text-[56px] font-medium text-foreground tracking-tight leading-none">
              Display Heading
            </span>
          </div>
          <div className="flex items-baseline gap-8 border-b border-warm/40 pb-6">
            <span className="text-[12px] text-foreground/30 font-mono w-12">
              44px
            </span>
            <span className="font-serif text-[44px] font-medium text-foreground tracking-tight leading-none">
              Section Heading
            </span>
          </div>
          <div className="flex items-baseline gap-8 border-b border-warm/40 pb-6">
            <span className="text-[12px] text-foreground/30 font-mono w-12">
              32px
            </span>
            <span className="font-serif text-[32px] font-medium text-foreground tracking-tight leading-none">
              Subsection Heading
            </span>
          </div>
          <div className="flex items-baseline gap-8 border-b border-warm/40 pb-6">
            <span className="text-[12px] text-foreground/30 font-mono w-12">
              20px
            </span>
            <span className="font-serif text-[20px] font-medium text-foreground leading-none">
              Card Title
            </span>
          </div>
          <div className="flex items-baseline gap-8 border-b border-warm/40 pb-6">
            <span className="text-[12px] text-foreground/30 font-mono w-12">
              16px
            </span>
            <span className="text-[16px] text-foreground leading-none">
              Body Text
            </span>
          </div>
          <div className="flex items-baseline gap-8 border-b border-warm/40 pb-6">
            <span className="text-[12px] text-foreground/30 font-mono w-12">
              14px
            </span>
            <span className="text-[14px] text-foreground/60 leading-none">
              Secondary Body
            </span>
          </div>
          <div className="flex items-baseline gap-8">
            <span className="text-[12px] text-foreground/30 font-mono w-12">
              13px
            </span>
            <span className="text-[13px] font-medium tracking-[2px] uppercase text-sienna leading-none">
              Label / Overline
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

function LogoSection() {
  return (
    <section className="px-20 py-24 max-w-[1440px] mx-auto">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-1 h-1 rounded-full bg-plum" />
        <span className="text-[13px] font-medium tracking-[2px] uppercase text-sienna">
          Logo
        </span>
      </div>
      <h2 className="font-serif text-[44px] font-medium text-foreground tracking-tight leading-tight mb-16 max-w-[500px]">
        The Plum mark
      </h2>
      <div className="grid grid-cols-3 gap-6">
        <div className="rounded-2xl bg-white border border-warm/60 p-12 flex flex-col items-center justify-center aspect-[4/3]">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-14 h-14 rounded-full border-[3px] border-foreground flex items-center justify-center">
              <div className="w-7 h-7 rounded-full bg-foreground" />
            </div>
            <span className="font-serif text-[36px] font-semibold text-foreground tracking-tight">
              Plum
            </span>
          </div>
          <span className="text-[13px] text-foreground/30 font-medium">
            Primary — Light BG
          </span>
        </div>
        <div className="rounded-2xl bg-foreground p-12 flex flex-col items-center justify-center aspect-[4/3]">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-14 h-14 rounded-full border-[3px] border-white flex items-center justify-center">
              <div className="w-7 h-7 rounded-full bg-white" />
            </div>
            <span className="font-serif text-[36px] font-semibold text-white tracking-tight">
              Plum
            </span>
          </div>
          <span className="text-[13px] text-white/30 font-medium">
            Reversed — Dark BG
          </span>
        </div>
        <div className="rounded-2xl bg-plum p-12 flex flex-col items-center justify-center aspect-[4/3]">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-14 h-14 rounded-full border-[3px] border-white flex items-center justify-center">
              <div className="w-7 h-7 rounded-full bg-white" />
            </div>
            <span className="font-serif text-[36px] font-semibold text-white tracking-tight">
              Plum
            </span>
          </div>
          <span className="text-[13px] text-white/30 font-medium">
            On Plum
          </span>
        </div>
      </div>
      <div className="mt-12 grid grid-cols-4 gap-6">
        <div className="rounded-2xl border border-warm/60 p-8 flex items-center justify-center">
          <div className="w-16 h-16 rounded-full border-[3px] border-foreground flex items-center justify-center">
            <div className="w-8 h-8 rounded-full bg-foreground" />
          </div>
        </div>
        <div className="col-span-3 rounded-2xl border border-warm/60 p-8">
          <h4 className="font-serif text-[18px] font-medium text-foreground mb-3">
            Clear Space &amp; Usage
          </h4>
          <div className="space-y-2 text-[14px] text-foreground/50 leading-relaxed">
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
    </section>
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
    <section className="px-20 py-24 max-w-[1440px] mx-auto">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-1 h-1 rounded-full bg-plum" />
        <span className="text-[13px] font-medium tracking-[2px] uppercase text-sienna">
          Principles
        </span>
      </div>
      <h2 className="font-serif text-[44px] font-medium text-foreground tracking-tight leading-tight mb-16 max-w-[600px]">
        Design principles
      </h2>
      <div className="grid grid-cols-2 gap-6">
        {principles.map((p) => (
          <div
            key={p.number}
            className="rounded-2xl border border-warm/60 p-10 group hover:border-plum/30 transition-colors"
          >
            <span className="text-[48px] font-serif font-bold text-foreground/8 block mb-4">
              {p.number}
            </span>
            <h3 className="font-serif text-[24px] font-medium text-foreground mb-3">
              {p.title}
            </h3>
            <p className="text-[14px] text-foreground/50 leading-relaxed">
              {p.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

function UIElements() {
  return (
    <section className="px-20 py-24 max-w-[1440px] mx-auto">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-1 h-1 rounded-full bg-plum" />
        <span className="text-[13px] font-medium tracking-[2px] uppercase text-sienna">
          UI Components
        </span>
      </div>
      <h2 className="font-serif text-[44px] font-medium text-foreground tracking-tight leading-tight mb-16 max-w-[600px]">
        Component patterns
      </h2>
      <div className="grid grid-cols-2 gap-8">
        <div className="rounded-2xl border border-warm/60 p-10">
          <h4 className="text-[13px] font-medium tracking-[1.5px] uppercase text-foreground/30 mb-8">
            Buttons
          </h4>
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <div className="px-7 py-3 rounded-full bg-plum text-white text-[15px] font-semibold">
                Primary Action
              </div>
              <span className="text-[12px] text-foreground/30">
                bg-plum, text-white, pill
              </span>
            </div>
            <div className="flex items-center gap-4">
              <div className="px-7 py-3 rounded-full border-2 border-foreground text-foreground text-[15px] font-semibold">
                Secondary Action
              </div>
              <span className="text-[12px] text-foreground/30">
                border-foreground, pill
              </span>
            </div>
            <div className="flex items-center gap-4">
              <div className="px-7 py-3 rounded-full bg-sienna text-white text-[15px] font-semibold">
                Accent Action
              </div>
              <span className="text-[12px] text-foreground/30">
                bg-sienna, text-white, pill
              </span>
            </div>
            <div className="flex items-center gap-4">
              <div className="px-5 py-2 rounded-full bg-foreground/5 text-foreground/60 text-[13px] font-medium">
                Tag / Chip
              </div>
              <span className="text-[12px] text-foreground/30">
                bg-foreground/5, pill, small
              </span>
            </div>
          </div>
        </div>
        <div className="rounded-2xl border border-warm/60 p-10">
          <h4 className="text-[13px] font-medium tracking-[1.5px] uppercase text-foreground/30 mb-8">
            Cards &amp; Surfaces
          </h4>
          <div className="space-y-4">
            <div className="p-6 rounded-2xl border border-warm/60">
              <h5 className="font-serif text-[18px] font-medium text-foreground mb-1">
                Default Card
              </h5>
              <p className="text-[13px] text-foreground/40">
                border-warm/60, rounded-2xl, p-6+
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-section">
              <h5 className="font-serif text-[18px] font-medium text-foreground mb-1">
                Section Card
              </h5>
              <p className="text-[13px] text-foreground/40">
                bg-section, rounded-2xl, p-6+
              </p>
            </div>
            <div className="p-6 rounded-2xl bg-foreground text-white">
              <h5 className="font-serif text-[18px] font-medium mb-1">
                Dark Card
              </h5>
              <p className="text-[13px] text-white/40">
                bg-foreground, rounded-2xl, p-6+
              </p>
            </div>
          </div>
        </div>
        <div className="col-span-2 rounded-2xl border border-warm/60 p-10">
          <h4 className="text-[13px] font-medium tracking-[1.5px] uppercase text-foreground/30 mb-8">
            Spacing &amp; Layout
          </h4>
          <div className="grid grid-cols-4 gap-6">
            <div>
              <div className="flex items-end gap-1 mb-3 h-16">
                <div className="w-2 h-2 rounded-sm bg-plum/20" />
                <div className="w-2 h-4 rounded-sm bg-plum/30" />
                <div className="w-2 h-8 rounded-sm bg-plum/50" />
                <div className="w-2 h-16 rounded-sm bg-plum" />
              </div>
              <h5 className="text-[14px] font-semibold text-foreground mb-1">
                8px Grid
              </h5>
              <p className="text-[12px] text-foreground/40">
                All spacing in multiples of 8
              </p>
            </div>
            <div>
              <div className="flex items-center justify-center h-16 mb-3">
                <div className="w-12 h-12 rounded-2xl border-2 border-plum/30" />
              </div>
              <h5 className="text-[14px] font-semibold text-foreground mb-1">
                16px Radius
              </h5>
              <p className="text-[12px] text-foreground/40">
                Container border-radius
              </p>
            </div>
            <div>
              <div className="flex items-center justify-center h-16 mb-3">
                <div className="px-4 py-2 rounded-full border-2 border-plum/30 text-[11px] text-plum/50 font-medium">
                  pill
                </div>
              </div>
              <h5 className="text-[14px] font-semibold text-foreground mb-1">
                Pill Buttons
              </h5>
              <p className="text-[12px] text-foreground/40">
                rounded-full for all CTAs
              </p>
            </div>
            <div>
              <div className="flex items-center justify-center h-16 mb-3">
                <div className="flex items-center gap-1">
                  <div className="w-3 h-8 bg-transparent border-l-2 border-plum/20" />
                  <span className="text-[11px] text-plum/40 font-mono">
                    80px
                  </span>
                  <div className="w-3 h-8 bg-transparent border-r-2 border-plum/20" />
                </div>
              </div>
              <h5 className="text-[14px] font-semibold text-foreground mb-1">
                80px Padding
              </h5>
              <p className="text-[12px] text-foreground/40">
                Outer container padding
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function BrandFooter() {
  return (
    <footer className="px-20 py-16 max-w-[1440px] mx-auto border-t border-warm/40">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-6 h-6 rounded-full border-2 border-foreground flex items-center justify-center">
            <div className="w-3 h-3 rounded-full bg-foreground" />
          </div>
          <span className="font-serif text-[16px] font-semibold text-foreground">
            Plum
          </span>
        </div>
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
      <BrandNavbar />
      <section className="px-20 pt-16 pb-24 max-w-[1440px] mx-auto">
        <div className="max-w-[800px]">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-1 h-1 rounded-full bg-plum" />
            <span className="text-[13px] font-medium tracking-[2px] uppercase text-sienna">
              Brand Guidelines
            </span>
          </div>
          <h1 className="font-serif text-[64px] font-medium text-foreground tracking-tight leading-[1.05] mb-6">
            Our Brand
          </h1>
          <p className="text-[20px] text-foreground/50 leading-relaxed max-w-[560px]">
            The visual identity of Plum — colors, typography, logo usage, and
            design principles that define who we are.
          </p>
        </div>
      </section>
      <LogoSection />
      <div className="mx-20 h-px bg-warm/40" />
      <ColorPalette />
      <div className="mx-20 h-px bg-warm/40" />
      <Typography />
      <TypeScale />
      <div className="mx-20 h-px bg-warm/40 mt-24" />
      <DesignPrinciples />
      <div className="mx-20 h-px bg-warm/40" />
      <UIElements />
      <BrandFooter />
    </main>
  );
}
