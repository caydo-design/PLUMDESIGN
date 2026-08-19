import {
  BackNavbar,
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
    <Section>
      <SectionLabel style="dot">Color System</SectionLabel>
      <SectionHeading className="mb-6 max-w-[600px]">
        Our palette draws from warmth and richness
      </SectionHeading>
      <p className="text-[16px] text-foreground/50 leading-relaxed max-w-[520px] mb-12">
        Earth tones, plum purples, and warm neutrals create a sophisticated yet
        welcoming identity that evokes the warmth of travel.
      </p>
      <div className="grid grid-cols-4 gap-6">
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
      <SectionHeading className="mb-16 max-w-[600px]">
        Two typefaces, one voice
      </SectionHeading>
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
                  className="font-serif text-[24px] text-foreground"
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
            <span className="text-[72px] font-medium text-foreground tracking-tight leading-none">
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
                  className="text-[24px] text-foreground"
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
    <section className="px-20 py-24 max-w-[1440px] mx-auto bg-section rounded-3xl mx-20">
      <div className="px-16 py-16">
        <h3 className="text-[13px] font-medium tracking-[2px] uppercase text-sienna mb-12">
          Type Scale
        </h3>
        <div className="space-y-8">
          {scale.map((item, i) => (
            <div
              key={item.size}
              className={`flex items-baseline gap-8 ${i < scale.length - 1 ? "border-b border-warm/40 pb-6" : ""}`}
            >
              <span className="text-[12px] text-foreground/30 font-mono w-12">
                {item.size}
              </span>
              <span
                className={`leading-none ${
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
      <SectionHeading className="mb-16 max-w-[500px]">
        The Plum mark
      </SectionHeading>
      <div className="grid grid-cols-3 gap-6">
        <div className="rounded-2xl bg-white border border-warm/60 p-12 flex flex-col items-center justify-center aspect-[4/3]">
          <div className="mb-6">
            <Logo variant="dark" size="lg" />
          </div>
          <span className="text-[13px] text-foreground/30 font-medium">
            Primary — Light BG
          </span>
        </div>
        <div className="rounded-2xl bg-foreground p-12 flex flex-col items-center justify-center aspect-[4/3]">
          <div className="mb-6">
            <Logo variant="light" size="lg" />
          </div>
          <span className="text-[13px] text-white/30 font-medium">
            Reversed — Dark BG
          </span>
        </div>
        <div className="rounded-2xl bg-plum p-12 flex flex-col items-center justify-center aspect-[4/3]">
          <div className="mb-6">
            <Logo variant="light" size="lg" />
          </div>
          <span className="text-[13px] text-white/30 font-medium">
            On Plum
          </span>
        </div>
      </div>
      <div className="mt-12 grid grid-cols-4 gap-6">
        <div className="rounded-2xl border border-warm/60 p-8 flex items-center justify-center">
          <Logo variant="dark" size="lg" showText={false} />
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
      <SectionHeading className="mb-16 max-w-[600px]">
        Design principles
      </SectionHeading>
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
    </Section>
  );
}

function UIElements() {
  return (
    <Section>
      <SectionLabel style="dot">UI Components</SectionLabel>
      <SectionHeading className="mb-16 max-w-[600px]">
        Component patterns
      </SectionHeading>
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
    </Section>
  );
}

function BrandFooter() {
  return (
    <footer className="px-20 py-16 max-w-[1440px] mx-auto border-t border-warm/40">
      <div className="flex items-center justify-between">
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
      <section className="px-20 pt-16 pb-24 max-w-[1440px] mx-auto">
        <div className="max-w-[800px]">
          <SectionLabel style="dot">Brand Guidelines</SectionLabel>
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
      <Divider />
      <ColorPalette />
      <Divider />
      <Typography />
      <TypeScale />
      <div className="mx-20 h-px bg-warm/40 mt-24" />
      <DesignPrinciples />
      <Divider />
      <UIElements />
      <BrandFooter />
    </main>
  );
}
