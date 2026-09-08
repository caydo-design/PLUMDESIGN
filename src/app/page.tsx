"use client";

import {
  Sparkles,
  Briefcase,
  Users,
  Plane,
  Check,
  ArrowRight,
  Globe,
  CalendarDays,
  MapPin,
  BookOpen,
  Building2,
} from "lucide-react";
import {
  Navbar,
  Button,
  Badge,
  Card,
  Section,
  SectionLabel,
  SectionHeading,
  Logo,
} from "@/components/ui";
import {
  FadeIn,
  FadeInScale,
  StaggerContainer,
  StaggerItem,
  TextReveal,
  LineReveal,
  ParallaxImage,
  AnimatedCounter,
  MagneticHover,
} from "@/components/motion";
import { motion } from "framer-motion";
import type { ReactNode } from "react";

function SiteNavbar() {
  return (
    <Navbar
      links={[
        { href: "#how-it-works", label: "How It Works" },
        { href: "#platform", label: "Platform" },
        { href: "#business", label: "For Business" },
        { href: "#pricing", label: "Pricing" },
        { href: "/brand", label: "Our Brand" },
      ]}
      cta={{ href: "#get-started", label: "Get Started" }}
    />
  );
}

/* ────────────────────────────────────────────────────────────────
 * Hero — editorial, punchy, travelapp-inspired
 * ──────────────────────────────────────────────────────────────── */
function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(255,211,172,0.25),transparent)]" />
      <div className="relative px-6 md:px-12 lg:px-20 pt-24 md:pt-32 lg:pt-40 pb-20 lg:pb-28 max-w-[1440px] mx-auto">
        <FadeIn delay={0.1} blur>
          <span className="uppercase font-semibold text-[11px] lg:text-[12px] tracking-[0.12em] text-sienna">
            Group trips, end to end
          </span>
        </FadeIn>
        <TextReveal
          text="From group chat to gate D7."
          as="h1"
          className="font-serif font-medium max-w-[900px] mt-4 lg:mt-5"
          style={{
            fontSize: "clamp(40px, 8vw, 112px)",
            lineHeight: 0.98,
            letterSpacing: "-0.035em",
          }}
          delay={0.3}
          stagger={0.06}
        />
        <FadeIn delay={0.8} blur>
          <p className="mt-6 lg:mt-8 text-[16px] lg:text-[18px] leading-relaxed text-foreground/60 max-w-[560px]">
            You&apos;ve talked about it for months. Plum turns the group chat
            into a booked trip — plans, splits, and all — in one afternoon.
          </p>
        </FadeIn>
        <FadeIn delay={1} direction="up">
          <div className="flex flex-wrap items-center gap-3 mt-8 lg:mt-10">
            <MagneticHover strength={0.15}>
              <Button href="#get-started" size="lg">
                Start planning free
              </Button>
            </MagneticHover>
            <MagneticHover strength={0.15}>
              <Button variant="secondary" href="#how-it-works" size="lg">
                See how it works
                <ArrowRight className="w-4 h-4" />
              </Button>
            </MagneticHover>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

/* ────────────────────────────────────────────────────────────────
 * Hero image — full-bleed editorial image
 * ──────────────────────────────────────────────────────────────── */
function HeroImage() {
  return (
    <FadeIn delay={0.1}>
      <section className="px-6 md:px-12 lg:px-20 max-w-[1440px] mx-auto">
        <motion.div
          className="w-full h-[280px] md:h-[400px] lg:h-[520px] rounded-2xl overflow-hidden relative"
          whileHover={{ scale: 1.005 }}
          transition={{ type: "spring", stiffness: 200, damping: 30 }}
        >
          <ParallaxImage
            src="/images/lisbon-evening.jpg"
            alt="Evening light on a European street"
            className="w-full h-full"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(180deg, rgba(50,5,5,0.1) 0%, rgba(50,5,5,0.45) 100%)",
            }}
          />
          <div className="absolute bottom-6 left-6 lg:bottom-10 lg:left-10">
            <LineReveal delay={0.3}>
              <span className="uppercase font-semibold text-[11px] tracking-[0.12em] text-white/70">
                Lisbon · April
              </span>
            </LineReveal>
            <LineReveal delay={0.45}>
              <p
                className="font-serif text-white font-medium mt-2"
                style={{ fontSize: "clamp(22px, 3vw, 36px)" }}
              >
                Every trip starts with one message.
              </p>
            </LineReveal>
          </div>
        </motion.div>
      </section>
    </FadeIn>
  );
}

/* ────────────────────────────────────────────────────────────────
 * How It Works — travelapp numbered steps pattern (01/02/03)
 * ──────────────────────────────────────────────────────────────── */
function HowItWorks() {
  const steps = [
    {
      n: "01",
      title: "Drop a vibe",
      body: "Start a plan, name the trip, invite your people. Cabo for Sara's birthday? Tokyo for the long weekend? Off you go.",
    },
    {
      n: "02",
      title: "Decide together",
      body: "Everyone weighs in on dates, spots, and splurges. No more forty-seven-message threads across three apps.",
    },
    {
      n: "03",
      title: "Book it once",
      body: "Flights, stays, and the dinner you've been talking about — confirmed in one checkout. Split however you like.",
    },
  ];

  return (
    <section
      id="how-it-works"
      className="border-t border-warm/60 px-6 py-20 md:px-12 md:py-28 lg:px-20 lg:py-32 max-w-[1440px] mx-auto"
    >
      <FadeIn blur>
        <span className="uppercase font-semibold text-[11px] lg:text-[12px] tracking-[0.12em] text-sienna">
          How it works
        </span>
      </FadeIn>
      <FadeIn delay={0.1}>
        <SectionHeading size="lg" className="mt-4 max-w-3xl">
          Plan a trip the way you actually plan a trip.
        </SectionHeading>
      </FadeIn>

      <StaggerContainer
        stagger={0.12}
        delay={0.3}
        className="mt-14 lg:mt-20 grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-14"
      >
        {steps.map((s) => (
          <StaggerItem key={s.n}>
            <div className="flex flex-col gap-3">
              <span className="font-serif text-[20px] text-foreground/30">
                {s.n}
              </span>
              <div className="h-px w-12 bg-foreground" aria-hidden="true" />
              <h3
                className="font-serif font-medium mt-2"
                style={{ fontSize: "clamp(24px, 3vw, 32px)" }}
              >
                {s.title}
              </h3>
              <p className="text-[15px] lg:text-[16px] leading-relaxed text-foreground/60 max-w-md">
                {s.body}
              </p>
            </div>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </section>
  );
}

/* ────────────────────────────────────────────────────────────────
 * Features — eyebrow + bold heading pattern from travelapp
 * ──────────────────────────────────────────────────────────────── */
function Features() {
  const features = [
    {
      eyebrow: "Group-first",
      title: "Built for more than one of you.",
      body: "Polls, splits, and shared lists are the defaults — not afterthoughts. Every step assumes a group is going.",
      icon: Users,
    },
    {
      eyebrow: "AI-powered",
      title: "An agent that reads the room.",
      body: "Your AI travel agent reads the feed, the group's calendars, and the destination — then plans. Push back, ask for cheaper, and it rewrites.",
      icon: Sparkles,
    },
    {
      eyebrow: "One bill",
      title: "Pay together. Settle later.",
      body: "Charge it all to one card and split when you're home. Or split as you go. Whatever keeps the group chat civil.",
      icon: CalendarDays,
    },
  ];

  return (
    <section
      id="platform"
      className="border-t border-warm/60 px-6 py-20 md:px-12 md:py-28 lg:px-20 lg:py-32 max-w-[1440px] mx-auto"
    >
      <FadeIn>
        <SectionHeading size="lg" className="max-w-3xl">
          Built for the way friends actually travel.
        </SectionHeading>
      </FadeIn>

      <StaggerContainer
        stagger={0.1}
        delay={0.2}
        className="mt-14 lg:mt-20 grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-12"
      >
        {features.map((f) => (
          <StaggerItem key={f.title}>
            <motion.div
              className="flex flex-col gap-3"
              whileHover={{ y: -2 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
            >
              <span className="uppercase font-semibold text-[11px] tracking-[0.12em] text-sienna">
                {f.eyebrow}
              </span>
              <h3
                className="font-serif font-medium"
                style={{ fontSize: "clamp(20px, 2.5vw, 26px)" }}
              >
                {f.title}
              </h3>
              <p className="text-[15px] leading-relaxed text-foreground/60">
                {f.body}
              </p>
            </motion.div>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </section>
  );
}

/* ────────────────────────────────────────────────────────────────
 * Pull Quote — editorial blockquote from travelapp pattern
 * ──────────────────────────────────────────────────────────────── */
function PullQuote() {
  return (
    <section className="border-t border-warm/60 px-6 py-20 md:px-12 md:py-28 lg:px-20 lg:py-32 max-w-[1440px] mx-auto">
      <FadeIn blur>
        <span className="uppercase font-semibold text-[11px] lg:text-[12px] tracking-[0.12em] text-sienna">
          From a recent trip
        </span>
      </FadeIn>
      <FadeIn delay={0.2}>
        <blockquote
          className="mt-6 font-serif italic text-foreground/90 max-w-4xl"
          style={{
            fontSize: "clamp(24px, 4vw, 48px)",
            lineHeight: 1.15,
            letterSpacing: "-0.02em",
          }}
        >
          &ldquo;We&apos;d been saying we&apos;d go to Lisbon for three years.
          We booked it on a Sunday afternoon, in the time it took to finish a
          bottle of natural wine.&rdquo;
        </blockquote>
      </FadeIn>
      <FadeIn delay={0.35}>
        <footer className="mt-6">
          <p className="text-[15px] font-semibold">Maya &amp; friends</p>
          <p className="text-[14px] text-foreground/50 mt-1">
            Brooklyn → Lisbon, four nights
          </p>
        </footer>
      </FadeIn>
    </section>
  );
}

/* ────────────────────────────────────────────────────────────────
 * App Showcase — phone frame mockups from travelapp AppFlow
 * ──────────────────────────────────────────────────────────────── */
function PhoneFrame({ children }: { children: ReactNode }) {
  return (
    <div
      className="relative flex-shrink-0"
      style={{
        width: 320,
        height: 660,
        background: "var(--foreground)",
        borderRadius: 48,
        padding: 8,
        boxShadow:
          "0 30px 60px rgba(43, 11, 2, 0.15), 0 8px 20px rgba(43, 11, 2, 0.08)",
      }}
    >
      <div
        className="relative w-full h-full overflow-hidden"
        style={{ background: "#FAF6F0", borderRadius: 40 }}
      >
        <div
          className="absolute top-2 left-1/2 -translate-x-1/2 z-20"
          style={{
            width: 96,
            height: 24,
            background: "var(--foreground)",
            borderRadius: 999,
          }}
          aria-hidden="true"
        />
        <div
          className="absolute top-0 inset-x-0 z-10 flex items-center justify-between px-6 pt-2.5 text-[10px] font-semibold"
          style={{ color: "var(--foreground)" }}
        >
          <span>9:41</span>
          <span className="opacity-60">87%</span>
        </div>
        <div className="absolute inset-0 pt-10 pb-2 overflow-y-auto [&::-webkit-scrollbar]:hidden">
          {children}
        </div>
      </div>
    </div>
  );
}

function AppShowcase() {
  return (
    <section className="border-t border-warm/60 bg-foreground text-white overflow-hidden">
      <div className="px-6 py-20 md:px-12 md:py-28 lg:px-20 lg:py-32 max-w-[1440px] mx-auto">
        <FadeIn blur>
          <span className="uppercase font-semibold text-[11px] lg:text-[12px] tracking-[0.12em] text-peach">
            The app
          </span>
        </FadeIn>
        <FadeIn delay={0.1}>
          <h2
            className="font-serif font-medium mt-4 max-w-3xl"
            style={{
              fontSize: "clamp(28px, 5vw, 56px)",
              lineHeight: 1.05,
              letterSpacing: "-0.03em",
            }}
          >
            Four screens. The whole product.
          </h2>
        </FadeIn>
        <FadeIn delay={0.2}>
          <p className="mt-4 text-[15px] lg:text-[16px] leading-relaxed text-white/50 max-w-xl">
            Invitation, shared feed, AI itinerary, trip creation — the soul of
            the app is group context, shared content, and AI planning.
          </p>
        </FadeIn>

        <div className="mt-14 lg:mt-20 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20">
          {/* Screen 1: Invitation */}
          <FadeIn direction="up" delay={0.3}>
            <div className="flex flex-col lg:flex-row gap-8 items-start">
              <div className="lg:sticky lg:top-12 flex-1">
                <span className="font-serif text-[20px] text-white/30">01</span>
                <div className="h-px w-10 bg-white/40 my-3" />
                <h3
                  className="font-serif font-medium"
                  style={{ fontSize: "clamp(22px, 3vw, 28px)" }}
                >
                  You&apos;re invited.
                </h3>
                <p className="mt-3 text-[14px] leading-relaxed text-white/50">
                  It starts in your messages. Someone you trust sends a trip —
                  destination, dates, vibe. One tap and you&apos;re in.
                </p>
              </div>
              <div className="mx-auto lg:mx-0">
                <PhoneFrame>
                  <InvitationMockup />
                </PhoneFrame>
              </div>
            </div>
          </FadeIn>

          {/* Screen 2: AI Itinerary */}
          <FadeIn direction="up" delay={0.4}>
            <div className="flex flex-col lg:flex-row gap-8 items-start">
              <div className="lg:sticky lg:top-12 flex-1">
                <span className="font-serif text-[20px] text-white/30">02</span>
                <div className="h-px w-10 bg-white/40 my-3" />
                <h3
                  className="font-serif font-medium"
                  style={{ fontSize: "clamp(22px, 3vw, 28px)" }}
                >
                  AI that knows the season.
                </h3>
                <p className="mt-3 text-[14px] leading-relaxed text-white/50">
                  Your AI travel agent reads the feed, the group&apos;s
                  calendars, and the destination — then builds the plan.
                </p>
              </div>
              <div className="mx-auto lg:mx-0">
                <PhoneFrame>
                  <ItineraryMockup />
                </PhoneFrame>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

function InvitationMockup() {
  return (
    <div className="px-5 pt-2 pb-6 flex flex-col text-foreground">
      <span className="text-[12px] text-foreground/50">← Inbox</span>
      <div className="flex flex-col items-center text-center mt-8">
        <div className="flex -space-x-3 mb-5">
          {["S", "M", "J"].map((letter, i) => (
            <div
              key={letter}
              className="w-11 h-11 rounded-full flex items-center justify-center text-[13px] font-semibold text-white border-2 border-[#FAF6F0]"
              style={{
                background: ["#d03660", "#2f4a64", "#b8722a"][i],
              }}
            >
              {letter}
            </div>
          ))}
        </div>
        <span className="uppercase font-semibold text-[10px] tracking-[0.12em] text-foreground/50 mb-3">
          You&apos;re invited
        </span>
        <h2 className="font-serif font-semibold text-[24px] leading-tight tracking-tight">
          Lisbon for the long weekend
        </h2>
        <p className="text-[13px] text-foreground/50 mt-2">
          <strong className="text-foreground">Sara</strong> wants you on this
          one.
        </p>
      </div>

      <div className="mt-6 rounded-xl bg-section p-4 flex flex-col gap-2.5">
        {[
          ["Destination", "Lisbon, Portugal"],
          ["Dates", "Thu Apr 24 – Mon Apr 28"],
          ["Going", "Sara, Maya, Jamie + you"],
          ["Vibe", "Slow mornings, fado nights"],
        ].map(([label, value]) => (
          <div
            key={label}
            className="flex items-baseline justify-between gap-3"
          >
            <span className="text-[12px] text-foreground/50">{label}</span>
            <span className="text-[12px] font-semibold text-right">
              {value}
            </span>
          </div>
        ))}
      </div>

      <div className="mt-6 flex flex-col gap-2">
        <div className="h-11 rounded-full bg-foreground text-white font-semibold text-[14px] flex items-center justify-center">
          Accept &amp; open feed
        </div>
        <div className="h-11 rounded-full border border-foreground text-foreground font-medium text-[14px] flex items-center justify-center">
          Maybe later
        </div>
      </div>
    </div>
  );
}

function ItineraryMockup() {
  return (
    <div className="flex flex-col text-foreground">
      <div className="px-5 pt-2 pb-3 border-b border-warm">
        <span className="text-[12px] text-foreground/50">← Feed</span>
        <div className="flex items-center gap-2 mt-3">
          <span
            className="w-6 h-6 rounded-full flex items-center justify-center text-[10px] text-white"
            style={{ background: "#b8722a" }}
          >
            ✦
          </span>
          <span className="uppercase text-[10px] font-semibold tracking-[0.12em] text-foreground/50">
            Travel AI · 4 days · Lisbon
          </span>
        </div>
        <h2 className="font-serif font-semibold text-[20px] leading-tight tracking-tight mt-2">
          Slow weekend, no missed boats.
        </h2>
      </div>

      <div className="px-5 pt-4">
        <span className="uppercase font-semibold text-[10px] tracking-[0.12em] text-foreground/50">
          Why late April
        </span>
        <p className="text-[12px] text-foreground/80 mt-2 leading-relaxed">
          Avg <strong>67°F</strong>, lowest tourist density of the shoulder
          season, and the jacarandas are mid-bloom.
        </p>
      </div>

      <div className="px-5 pt-5 flex flex-col gap-3">
        {[
          {
            day: "Thu · Day 1",
            tag: "Land slow",
            items: ["16:00 — Land LIS, taxi to Alfama", "19:30 — Tasca Zé dos Cornos", "22:00 — Fado in Mouraria"],
          },
          {
            day: "Fri · Day 2",
            tag: "The city itself",
            items: ["08:30 — Pastéis at Manteigaria", "10:30 — Walk Alfama → Graça", "20:00 — Sunset at Santa Catarina"],
          },
        ].map((d) => (
          <div
            key={d.day}
            className="rounded-xl border border-warm p-3.5 bg-white/50"
          >
            <div className="flex items-baseline justify-between">
              <span className="text-[12px] font-semibold">{d.day}</span>
              <span className="uppercase text-[10px] font-semibold text-foreground/40 tracking-[0.08em]">
                {d.tag}
              </span>
            </div>
            <ul className="mt-2.5 flex flex-col gap-2">
              {d.items.map((it) => (
                <li key={it} className="text-[11px] text-foreground/70">
                  {it}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ────────────────────────────────────────────────────────────────
 * Dashboard Mockup — refined with editorial tone
 * ──────────────────────────────────────────────────────────────── */
function DashboardMockup() {
  return (
    <section className="border-t border-warm/60 px-6 py-20 md:px-12 md:py-28 lg:px-20 lg:py-32 max-w-[1440px] mx-auto">
      <div className="mb-10 lg:mb-14">
        <FadeIn blur>
          <span className="uppercase font-semibold text-[11px] lg:text-[12px] tracking-[0.12em] text-sienna">
            The dashboard
          </span>
        </FadeIn>
        <FadeIn delay={0.1}>
          <SectionHeading size="lg" className="mt-4 max-w-3xl">
            Everything in one place. Finally.
          </SectionHeading>
        </FadeIn>
      </div>

      <FadeInScale delay={0.15} scale={0.95}>
        <Card variant="bordered" className="overflow-hidden">
          <div className="flex flex-col lg:flex-row">
            <div className="hidden lg:block w-[240px] border-r border-warm p-8 flex-shrink-0">
              <h3 className="font-serif text-lg font-semibold mb-10">
                Plum
              </h3>
              <StaggerContainer stagger={0.08} delay={0.4}>
                {[
                  { icon: Plane, label: "Trip Planner" },
                  { icon: Users, label: "Guest Manager" },
                  { icon: CalendarDays, label: "Itinerary Builder" },
                  { icon: MapPin, label: "Destination Hub" },
                  { icon: BookOpen, label: "Travel Diary" },
                ].map((item) => (
                  <StaggerItem key={item.label}>
                    <div className="flex items-center gap-3 py-2">
                      <item.icon className="w-4 h-4 text-lavender" />
                      <span className="text-[14px] text-foreground/70">
                        {item.label}
                      </span>
                    </div>
                  </StaggerItem>
                ))}
              </StaggerContainer>
            </div>
            <div className="flex-1 flex flex-col md:flex-row">
              <div className="flex-1 p-6 lg:p-8">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-6">
                  <h3 className="font-serif text-xl lg:text-2xl font-medium">
                    Tulum Creator Retreat
                  </h3>
                  <Badge>12 Guests Confirmed</Badge>
                </div>
                <div className="w-full aspect-[656/518] rounded-xl bg-gradient-to-br from-peach/40 via-section to-warm flex items-center justify-center">
                  <div className="text-center">
                    <Globe className="w-12 h-12 text-plum/30 mx-auto mb-3" />
                    <p className="text-[14px] text-foreground/30 font-medium">
                      Interactive Trip Map
                    </p>
                  </div>
                </div>
              </div>
              <div className="border-t md:border-t-0 md:border-l border-warm p-6 lg:p-8 md:w-[280px] lg:w-[320px]">
                <h4 className="text-[15px] font-semibold mb-6">
                  Trip Overview
                </h4>
                <StaggerContainer stagger={0.1} delay={0.5}>
                  {[
                    { label: "Budget Allocated", progress: 72 },
                    { label: "Accommodations Booked", progress: 100 },
                    { label: "Activities Planned", progress: 60 },
                    { label: "Flights Confirmed", progress: 85 },
                  ].map((param) => (
                    <StaggerItem key={param.label}>
                      <div className="mb-6">
                        <div className="flex items-center justify-between">
                          <span className="text-[13px] text-foreground/60">
                            {param.label}
                          </span>
                          <span className="text-[12px] font-medium text-plum">
                            {param.progress}%
                          </span>
                        </div>
                        <div className="mt-2 h-1.5 rounded-full bg-warm overflow-hidden">
                          <motion.div
                            className="h-full rounded-full bg-plum"
                            initial={{ width: 0 }}
                            whileInView={{
                              width: `${param.progress}%`,
                            }}
                            viewport={{ once: true }}
                            transition={{
                              duration: 1.2,
                              delay: 0.6,
                              ease: [0.25, 0.1, 0.25, 1],
                            }}
                          />
                        </div>
                      </div>
                    </StaggerItem>
                  ))}
                </StaggerContainer>
              </div>
            </div>
          </div>
        </Card>
      </FadeInScale>
    </section>
  );
}

/* ────────────────────────────────────────────────────────────────
 * For Business — numbered steps with divider lines
 * ──────────────────────────────────────────────────────────────── */
function ForBusiness() {
  return (
    <section
      id="business"
      className="border-t border-warm/60 px-6 py-20 md:px-12 md:py-28 lg:px-20 lg:py-32 max-w-[1440px] mx-auto"
    >
      <div className="flex flex-col lg:flex-row gap-10 lg:gap-16">
        <div className="lg:w-[515px] lg:flex-shrink-0">
          <FadeIn blur>
            <span className="uppercase font-semibold text-[11px] lg:text-[12px] tracking-[0.12em] text-sienna">
              Built for business
            </span>
          </FadeIn>
          <FadeIn delay={0.1}>
            <SectionHeading size="lg" className="mt-4 mb-5">
              Brand trips and team offsites, handled.
            </SectionHeading>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-[15px] lg:text-[16px] leading-relaxed text-foreground/60 mb-10">
              From influencer brand trips to quarterly team offsites — plan,
              book, and manage group travel without the chaos.
            </p>
          </FadeIn>
          <StaggerContainer stagger={0.12} delay={0.3} className="space-y-8">
            {[
              {
                n: "01",
                title: "Influencer brand trips",
                desc: "Manage guest lists, coordinate content deliverables, handle payments and installments — all from one place.",
              },
              {
                n: "02",
                title: "Small team offsites",
                desc: "Budget-controlled planning for remote teams. Group rates, shared itineraries, and expense tracking built in.",
              },
            ].map((item) => (
              <StaggerItem key={item.n} direction="left">
                <div className="flex flex-col gap-2">
                  <span className="font-serif text-[18px] text-foreground/30">
                    {item.n}
                  </span>
                  <div className="h-px w-10 bg-foreground" />
                  <h4 className="font-serif text-[20px] font-medium mt-1">
                    {item.title}
                  </h4>
                  <p className="text-[14px] lg:text-[15px] leading-relaxed text-foreground/60">
                    {item.desc}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
          <FadeIn delay={0.6}>
            <a
              href="#demo"
              className="inline-flex items-center gap-2 text-[15px] font-semibold text-foreground hover:text-plum transition-colors mt-10"
            >
              Talk to our business team
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </FadeIn>
        </div>
        <FadeIn direction="right" delay={0.2} className="flex-1">
          <div className="w-full h-[300px] md:h-[400px] lg:h-[520px] rounded-2xl overflow-hidden relative">
            <ParallaxImage
              src="/images/resort.jpg"
              alt="Luxury resort with palm trees and ocean"
              className="w-full h-full"
            />
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(180deg, rgba(50,5,5,0.05) 0%, rgba(50,5,5,0.35) 100%)",
              }}
            />
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

/* ────────────────────────────────────────────────────────────────
 * Marketplace — agent platform, numbered steps
 * ──────────────────────────────────────────────────────────────── */
function Marketplace() {
  return (
    <section
      id="marketplace"
      className="border-t border-warm/60 px-6 py-20 md:px-12 md:py-28 lg:px-20 lg:py-32 max-w-[1440px] mx-auto"
    >
      <div className="flex flex-col-reverse lg:flex-row-reverse gap-10 lg:gap-16">
        <div className="lg:w-[515px] lg:flex-shrink-0">
          <FadeIn blur>
            <span className="uppercase font-semibold text-[11px] lg:text-[12px] tracking-[0.12em] text-sienna">
              Agent marketplace
            </span>
          </FadeIn>
          <FadeIn delay={0.1}>
            <SectionHeading size="lg" className="mt-4 mb-5">
              Your platform to become a travel entrepreneur.
            </SectionHeading>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="text-[15px] lg:text-[16px] leading-relaxed text-foreground/60 mb-10">
              As AI reshapes the workforce, human-centered services like travel
              planning become more valuable than ever. Plum gives anyone the
              tools to build a thriving travel agency.
            </p>
          </FadeIn>
          <StaggerContainer stagger={0.1} delay={0.3} className="space-y-8">
            {[
              {
                n: "01",
                title: "Set your own rates",
                desc: "Define your pricing, showcase your expertise, and let clients find and book you directly through the app.",
              },
              {
                n: "02",
                title: "Deliver plans through the app",
                desc: "Create beautiful, shareable travel itineraries your clients can access on the go — with real-time updates.",
              },
              {
                n: "03",
                title: "Grow your business",
                desc: "Build your reputation with reviews, track earnings, and access AI-powered tools to plan trips faster.",
              },
            ].map((item) => (
              <StaggerItem key={item.n} direction="right">
                <div className="flex flex-col gap-2">
                  <span className="font-serif text-[18px] text-foreground/30">
                    {item.n}
                  </span>
                  <div className="h-px w-10 bg-foreground" />
                  <h4 className="font-serif text-[20px] font-medium mt-1">
                    {item.title}
                  </h4>
                  <p className="text-[14px] lg:text-[15px] leading-relaxed text-foreground/60">
                    {item.desc}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
          <FadeIn delay={0.6}>
            <a
              href="#get-started"
              className="inline-flex items-center gap-2 text-[15px] font-semibold text-foreground hover:text-plum transition-colors mt-10"
            >
              Become a Plum agent
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </FadeIn>
        </div>
        <FadeIn direction="left" delay={0.2} className="flex-1">
          <div className="w-full h-[300px] md:h-[400px] lg:h-[540px] rounded-2xl overflow-hidden relative">
            <ParallaxImage
              src="/images/yacht-friends.jpg"
              alt="Friends on a yacht"
              className="w-full h-full"
            />
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(180deg, rgba(50,5,5,0.05) 0%, rgba(50,5,5,0.35) 100%)",
              }}
            />
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

/* ────────────────────────────────────────────────────────────────
 * AI Vision — stats with animated counters
 * ──────────────────────────────────────────────────────────────── */
function AIVision() {
  return (
    <section className="bg-foreground text-white overflow-hidden">
      <div className="px-6 py-20 md:px-12 md:py-28 lg:px-20 lg:py-32 max-w-[1440px] mx-auto">
        <FadeIn blur>
          <span className="uppercase font-semibold text-[11px] lg:text-[12px] tracking-[0.12em] text-peach">
            Why now
          </span>
        </FadeIn>
        <FadeIn delay={0.15}>
          <h2
            className="font-serif font-medium mt-4 max-w-[700px]"
            style={{
              fontSize: "clamp(28px, 4vw, 48px)",
              lineHeight: 1.1,
              letterSpacing: "-0.03em",
            }}
          >
            AI creates free time. People spend free time traveling.
          </h2>
        </FadeIn>
        <FadeIn delay={0.25}>
          <p className="mt-5 text-[15px] lg:text-[16px] leading-relaxed text-white/50 max-w-[640px]">
            As AI automates more work, people gain more leisure time — and
            travel is how they spend it. Plum meets this growing demand while
            creating new opportunities for displaced workers to become travel
            entrepreneurs.
          </p>
        </FadeIn>
        <StaggerContainer
          stagger={0.15}
          delay={0.3}
          className="mt-14 grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-[900px]"
        >
          {[
            {
              value: 730,
              prefix: "$",
              suffix: "B+",
              label: "Online travel market in 2026",
            },
            {
              value: 34,
              prefix: "",
              suffix: "%",
              label: "YoY growth in AI-powered travel",
            },
            {
              value: 3,
              prefix: "",
              suffix: " in 1",
              label: "SaaS + Marketplace + Consumer app",
            },
          ].map((item) => (
            <StaggerItem key={item.label}>
              <div>
                <p className="font-serif text-[28px] lg:text-[36px] font-medium text-peach mb-2">
                  <AnimatedCounter
                    value={item.value}
                    prefix={item.prefix}
                    suffix={item.suffix}
                    duration={1.8}
                  />
                </p>
                <p className="text-[13px] lg:text-[14px] text-white/40">
                  {item.label}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}

/* ────────────────────────────────────────────────────────────────
 * Pricing — with spring hover
 * ──────────────────────────────────────────────────────────────── */
const pricingPlans = [
  {
    name: "Explorer",
    description:
      "For travelers who want to plan their own trips with AI-powered tools.",
    price: "Free",
    period: "forever",
    features: [
      "AI-assisted trip planning",
      "Personal travel diary",
      "Browse & hire travel agents",
      "Booking integration",
    ],
    cta: "Start Exploring",
    ctaVariant: "secondary" as const,
    popular: false,
  },
  {
    name: "Agent Pro",
    description:
      "For travel agents building their business through the Plum marketplace.",
    price: "$29",
    period: "per month",
    features: [
      "Custom agent profile & storefront",
      "Client management dashboard",
      "Itinerary builder & delivery",
      "Set your own rates & earn",
      "Priority marketplace listing",
    ],
    cta: "Become an Agent",
    ctaVariant: "primary" as const,
    popular: true,
  },
  {
    name: "Business",
    description:
      "For companies managing brand trips, retreats, and team offsites.",
    price: "Custom",
    period: "per organization",
    features: [
      "Brand trip & offsite management",
      "Guest tracking & payments",
      "Budget controls & approval flows",
      "Dedicated account manager",
    ],
    cta: "Contact Sales",
    ctaVariant: "secondary" as const,
    popular: false,
  },
];

function Pricing() {
  return (
    <section
      id="pricing"
      className="border-t border-warm/60 px-6 py-20 md:px-12 md:py-28 lg:px-20 lg:py-32 max-w-[1440px] mx-auto"
    >
      <FadeIn blur>
        <span className="uppercase font-semibold text-[11px] lg:text-[12px] tracking-[0.12em] text-sienna">
          Simple pricing
        </span>
      </FadeIn>
      <FadeIn delay={0.1}>
        <SectionHeading size="lg" className="mt-4 mb-5 max-w-xl">
          A plan for every kind of traveler.
        </SectionHeading>
      </FadeIn>
      <FadeIn delay={0.2}>
        <p className="text-[15px] lg:text-[16px] leading-relaxed text-foreground/60 max-w-[580px] mb-12 lg:mb-16">
          Start for free and scale as you grow — whether you&apos;re exploring
          the world, building a travel business, or managing corporate trips.
        </p>
      </FadeIn>
      <StaggerContainer
        stagger={0.12}
        className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6"
      >
        {pricingPlans.map((plan) => (
          <StaggerItem key={plan.name}>
            <motion.div
              className={`rounded-2xl border p-8 lg:p-10 flex flex-col h-full ${
                plan.popular
                  ? "border-plum bg-white ring-1 ring-plum/20"
                  : "border-warm"
              }`}
              whileHover={{
                y: -4,
                boxShadow: plan.popular
                  ? "0 24px 48px -12px rgba(107,56,97,0.15)"
                  : "0 20px 40px -12px rgba(0,0,0,0.08)",
              }}
              transition={{
                type: "spring",
                stiffness: 400,
                damping: 25,
              }}
            >
              <div className="mb-6">
                <div className="flex items-center gap-3 mb-3">
                  <h3 className="font-serif text-[22px] lg:text-[26px] font-medium">
                    {plan.name}
                  </h3>
                  {plan.popular && <Badge>Most Popular</Badge>}
                </div>
                <p className="text-[14px] leading-relaxed text-foreground/60">
                  {plan.description}
                </p>
              </div>
              <div className="flex items-baseline gap-2 mb-6">
                <span className="font-serif text-[36px] lg:text-[44px] font-medium tracking-[-0.03em]">
                  {plan.price}
                </span>
                <span className="text-[15px] text-foreground/50">
                  {plan.period}
                </span>
              </div>
              <div className="h-px bg-warm mb-6" />
              <div className="space-y-3 mb-auto">
                {plan.features.map((feature) => (
                  <div key={feature} className="flex items-start gap-3">
                    <Check className="w-3.5 h-3.5 text-plum mt-0.5 flex-shrink-0" />
                    <span className="text-[14px] text-foreground/70">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
              <div className="mt-8 lg:mt-10">
                <Button variant={plan.ctaVariant} href="#get-started">
                  {plan.cta}
                  {plan.ctaVariant === "secondary" && (
                    <ArrowRight className="w-3.5 h-3.5" />
                  )}
                </Button>
              </div>
            </motion.div>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </section>
  );
}

/* ────────────────────────────────────────────────────────────────
 * Gallery — parallax destination images
 * ──────────────────────────────────────────────────────────────── */
function GalleryPause() {
  const destinations = [
    { label: "Bali Retreat", image: "/images/bali.jpg" },
    { label: "Beach Escape", image: "/images/beach.jpg" },
    { label: "Lisbon Adventure", image: "/images/lisbon.jpg" },
  ];

  return (
    <section className="px-6 py-16 md:px-12 lg:px-20 max-w-[1440px] mx-auto">
      <StaggerContainer
        stagger={0.1}
        className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6"
      >
        {destinations.map((dest) => (
          <StaggerItem key={dest.label}>
            <motion.div
              className="aspect-[411/320] rounded-2xl overflow-hidden relative"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
            >
              <ParallaxImage
                src={dest.image}
                alt={dest.label}
                speed={0.15}
                className="w-full h-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />
              <span className="absolute bottom-5 left-5 lg:bottom-6 lg:left-6 text-[15px] lg:text-[16px] text-white font-semibold">
                {dest.label}
              </span>
            </motion.div>
          </StaggerItem>
        ))}
      </StaggerContainer>
    </section>
  );
}

/* ────────────────────────────────────────────────────────────────
 * CTA Strip — travelapp "Stop talking. Start packing." pattern
 * ──────────────────────────────────────────────────────────────── */
function CTAStrip() {
  return (
    <section
      id="get-started"
      className="border-t border-warm/60 px-6 py-20 md:px-12 md:py-28 lg:px-20 lg:py-32 max-w-[1440px] mx-auto"
    >
      <FadeIn>
        <h2
          className="font-serif font-semibold max-w-4xl"
          style={{
            fontSize: "clamp(40px, 7vw, 96px)",
            lineHeight: 0.98,
            letterSpacing: "-0.035em",
          }}
        >
          Stop planning. Start packing.
        </h2>
      </FadeIn>
      <FadeIn delay={0.15}>
        <p className="mt-6 text-[16px] lg:text-[18px] leading-relaxed text-foreground/50 max-w-xl">
          Free to plan. Pay only when you book. Bring everyone — your first
          trip is on us.
        </p>
      </FadeIn>
      <FadeIn delay={0.3} direction="up">
        <div className="flex flex-wrap items-center gap-3 mt-8">
          <MagneticHover strength={0.12}>
            <Button size="lg" href="#get-started">
              Get started
            </Button>
          </MagneticHover>
          <MagneticHover strength={0.12}>
            <Button variant="secondary" size="lg" href="#platform">
              See destinations
              <ArrowRight className="w-4 h-4" />
            </Button>
          </MagneticHover>
        </div>
      </FadeIn>
    </section>
  );
}

/* ────────────────────────────────────────────────────────────────
 * Footer
 * ──────────────────────────────────────────────────────────────── */
function Footer() {
  return (
    <footer className="border-t border-warm/60 px-6 md:px-12 lg:px-20 pt-16 lg:pt-24 pb-10 lg:pb-12 max-w-[1440px] mx-auto">
      <FadeIn>
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 mb-12 lg:mb-16">
          <div className="lg:w-[320px]">
            <div className="mb-6">
              <Logo />
            </div>
            <p className="text-[14px] leading-relaxed text-foreground/50">
              The all-in-one travel platform for businesses managing brand trips,
              agents building their practice, and travelers exploring the world.
            </p>
          </div>
          <div className="flex-1 grid grid-cols-2 sm:grid-cols-3 gap-8 lg:justify-end lg:gap-20">
            {[
              {
                title: "Platform",
                links: [
                  "Trip Planner",
                  "Agent Marketplace",
                  "Business Tools",
                  "Travel Diary",
                ],
              },
              {
                title: "Company",
                links: ["About Us", "Careers", "Press", "Blog"],
              },
              {
                title: "Resources",
                links: ["Help Center", "API Docs", "Agent Guide", "Status"],
              },
            ].map((col) => (
              <div key={col.title}>
                <h4 className="text-[12px] font-semibold uppercase tracking-[0.12em] text-foreground/40 mb-5">
                  {col.title}
                </h4>
                <div className="space-y-3">
                  {col.links.map((link) => (
                    <a
                      key={link}
                      href="#"
                      className="block text-[14px] lg:text-[15px] text-foreground/60 hover:text-foreground transition-colors"
                    >
                      {link}
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </FadeIn>
      <motion.div
        className="mb-4"
        initial={{ opacity: 0, x: -60 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
      >
        <h2
          className="font-serif leading-none font-bold tracking-[-0.04em] text-foreground/10 select-none"
          style={{ fontSize: "clamp(48px, 8vw, 96px)" }}
        >
          PLUM
        </h2>
      </motion.div>
      <FadeIn delay={0.2}>
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-[13px] text-foreground/40">
          <span>&copy; 2026 Plum Technologies. All rights reserved.</span>
          <div className="flex gap-6">
            <a href="#" className="hover:text-foreground transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-foreground transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </FadeIn>
    </footer>
  );
}

/* ────────────────────────────────────────────────────────────────
 * Page composition
 * ──────────────────────────────────────────────────────────────── */
export default function Home() {
  return (
    <main className="bg-background">
      <SiteNavbar />
      <Hero />
      <HeroImage />
      <HowItWorks />
      <Features />
      <PullQuote />
      <AppShowcase />
      <DashboardMockup />
      <ForBusiness />
      <Marketplace />
      <GalleryPause />
      <AIVision />
      <Pricing />
      <CTAStrip />
      <Footer />
    </main>
  );
}
