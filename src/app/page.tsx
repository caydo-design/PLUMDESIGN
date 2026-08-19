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

function Navbar() {
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
      <div className="flex items-center gap-10 text-[15px] font-medium text-foreground/80">
        <a href="#platform" className="hover:text-foreground transition-colors">
          Platform
        </a>
        <a href="#business" className="hover:text-foreground transition-colors">
          For Business
        </a>
        <a
          href="#marketplace"
          className="hover:text-foreground transition-colors"
        >
          Marketplace
        </a>
        <a href="#pricing" className="hover:text-foreground transition-colors">
          Pricing
        </a>
      </div>
      <a
        href="#demo"
        className="px-7 py-3 rounded-full border border-foreground text-[15px] font-semibold hover:bg-foreground hover:text-white transition-colors"
      >
        Book a Demo
      </a>
    </nav>
  );
}

function Hero() {
  return (
    <section className="px-20 pt-24 pb-16 max-w-[1440px] mx-auto text-center">
      <div className="flex items-center justify-center gap-2 mb-8">
        <div className="w-2 h-2 rounded-full bg-plum" />
        <span className="text-[13px] font-medium tracking-wide text-foreground/70">
          The all-in-one travel platform for businesses, agents &amp; travelers
        </span>
      </div>
      <h1 className="font-serif text-[72px] leading-[1.05] font-medium tracking-tight max-w-[1000px] mx-auto mb-8">
        Seamless trip execution, from brand trips to bucket lists
      </h1>
      <p className="text-[17px] leading-relaxed text-foreground/60 max-w-[640px] mx-auto mb-14">
        Plum powers effortless travel for businesses managing team offsites and
        influencer brand trips, travel agents building their own practice, and
        consumers planning their next adventure.
      </p>
      <div className="flex items-center justify-center gap-4">
        <a
          href="#get-started"
          className="px-7 py-3 rounded-full bg-plum text-white text-[15px] font-semibold hover:bg-plum/90 transition-colors"
        >
          Start Planning Free
        </a>
        <a
          href="#platform"
          className="px-7 py-3 rounded-full border border-foreground text-[15px] font-semibold hover:bg-foreground hover:text-white transition-colors inline-flex items-center gap-2"
        >
          See How It Works
          <ArrowRight className="w-3.5 h-3.5" />
        </a>
      </div>
    </section>
  );
}

function DashboardMockup() {
  return (
    <section className="px-20 max-w-[1440px] mx-auto">
      <div className="w-full rounded-2xl border border-warm overflow-hidden bg-white">
        <div className="flex">
          <div className="w-[240px] border-r border-warm p-8 flex-shrink-0">
            <h3 className="font-serif text-lg font-semibold mb-10">
              Plum Dashboard
            </h3>
            <div className="space-y-4">
              {[
                { icon: Plane, label: "Trip Planner" },
                { icon: Users, label: "Guest Manager" },
                { icon: CalendarDays, label: "Itinerary Builder" },
                { icon: MapPin, label: "Destination Hub" },
                { icon: BookOpen, label: "Travel Diary" },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-3">
                  <item.icon className="w-4 h-4 text-lavender" />
                  <span className="text-[14px] text-foreground/70">
                    {item.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
          <div className="flex-1 flex">
            <div className="flex-1 p-8">
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-serif text-2xl font-medium">
                  Brand Trip: Tulum Creator Retreat
                </h3>
                <span className="px-3 py-1.5 rounded-full bg-plum/10 text-plum text-[13px] font-medium">
                  12 Guests Confirmed
                </span>
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
            <div className="w-[320px] border-l border-warm p-8">
              <h4 className="text-[15px] font-semibold mb-6">Trip Overview</h4>
              <div className="space-y-6">
                {[
                  { label: "Budget Allocated", progress: 72 },
                  { label: "Accommodations Booked", progress: 100 },
                  { label: "Activities Planned", progress: 60 },
                  { label: "Flights Confirmed", progress: 85 },
                ].map((param) => (
                  <div key={param.label}>
                    <div className="flex items-center justify-between">
                      <span className="text-[13px] text-foreground/60">
                        {param.label}
                      </span>
                      <span className="text-[12px] font-medium text-plum">
                        {param.progress}%
                      </span>
                    </div>
                    <div className="mt-2 h-1.5 rounded-full bg-warm">
                      <div
                        className="h-full rounded-full bg-plum transition-all"
                        style={{ width: `${param.progress}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-10">
                <span className="text-[13px] text-foreground/60">
                  Upcoming Milestones
                </span>
                <div className="mt-3 space-y-2">
                  {[
                    "Final headcount due Sep 1",
                    "Deposit deadline Sep 15",
                    "Itinerary review Sep 20",
                  ].map((milestone) => (
                    <div
                      key={milestone}
                      className="flex items-start gap-2 text-[13px] text-foreground/50"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-plum/40 mt-1.5 flex-shrink-0" />
                      {milestone}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

const features = [
  {
    icon: "briefcase" as const,
    title: "Brand Trip Manager",
    description:
      "Coordinate influencer brand trips and creator retreats with guest tracking, payment handling, and automated reminders in one dashboard.",
  },
  {
    icon: "building" as const,
    title: "Team Offsite Planner",
    description:
      "Plan and execute small team offsites with budget controls, group booking, and seamless logistics for remote-first companies.",
  },
  {
    icon: "users" as const,
    title: "Agent Marketplace",
    description:
      "Travel agents set their own rates, showcase specialties, and connect with travelers looking for expert-curated experiences.",
  },
  {
    icon: "sparkles" as const,
    title: "AI Trip Builder",
    description:
      "Intelligent itinerary generation that learns preferences, optimizes routes, and surfaces hidden gems at every destination.",
  },
  {
    icon: "globe" as const,
    title: "Consumer Travel App",
    description:
      "Plan trips yourself or hire an agent through the app. Keep a beautiful travel diary of every journey you take.",
  },
  {
    icon: "calendar" as const,
    title: "Unified Booking Engine",
    description:
      "Flights, hotels, activities, and ground transport all in one place with real-time availability and group rate negotiation.",
  },
];

function Features() {
  return (
    <section id="platform" className="px-20 py-24 max-w-[1440px] mx-auto">
      <div className="text-center mb-16">
        <div className="flex items-center justify-center gap-3 mb-8">
          <div className="w-4 h-px bg-foreground/30" />
          <span className="text-[13px] font-medium tracking-wider uppercase text-sienna">
            One Platform, Every Journey
          </span>
        </div>
        <h2 className="font-serif text-[44px] leading-tight font-medium mb-4">
          Everything travel teams actually need
        </h2>
        <p className="text-[16px] leading-relaxed text-foreground/60 max-w-[680px] mx-auto">
          Whether you&apos;re a business coordinating brand trips, a travel
          agent building your practice, or a consumer planning your next
          getaway — Plum handles it all.
        </p>
      </div>
      <div className="grid grid-cols-3 gap-6">
        {features.map((feature) => {
          const iconMap = {
            briefcase: Briefcase,
            building: Building2,
            users: Users,
            sparkles: Sparkles,
            globe: Globe,
            calendar: CalendarDays,
          };
          const Icon = iconMap[feature.icon];
          return (
            <div
              key={feature.title}
              className="p-8 rounded-2xl border border-warm hover:border-plum/20 transition-colors"
            >
              <Icon className="w-6 h-6 text-plum mb-5" />
              <h3 className="font-serif text-[22px] font-medium mb-3">
                {feature.title}
              </h3>
              <p className="text-[15px] leading-relaxed text-foreground/60">
                {feature.description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}

function Testimonials() {
  return (
    <section className="px-20 py-24 max-w-[1440px] mx-auto">
      <div className="grid grid-cols-2 gap-8">
        {[
          {
            quote:
              "“We used to juggle spreadsheets, Venmo requests, and group chats for every brand trip. Plum replaced all of that with one dashboard. Our last creator retreat had 20 influencers confirmed and paid in 48 hours.”",
            name: "Jordan Ellis",
            title: "Brand Partnerships Lead, Glow Collective",
          },
          {
            quote:
              "“As an independent travel agent, Plum gave me a real platform to run my business. I set my rates, clients book directly through the app, and I spend my time curating experiences instead of chasing invoices.”",
            name: "Maya Torres",
            title: "Independent Travel Agent, Wanderlux Travel",
          },
        ].map((testimonial) => (
          <div
            key={testimonial.name}
            className="p-12 rounded-2xl border border-warm bg-white"
          >
            <p className="font-serif text-[20px] leading-relaxed text-foreground/80 mb-10">
              {testimonial.quote}
            </p>
            <div>
              <p className="text-[15px] font-semibold">{testimonial.name}</p>
              <p className="text-[13px] text-foreground/50 mt-1">
                {testimonial.title}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function ForBusiness() {
  return (
    <section id="business" className="px-20 py-24 max-w-[1440px] mx-auto">
      <div className="flex gap-16">
        <div className="w-[515px] flex-shrink-0">
          <div className="mb-10">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-4 h-px bg-foreground/30" />
              <span className="text-[13px] font-medium tracking-wider uppercase text-sienna">
                Built for Business
              </span>
            </div>
            <h2 className="font-serif text-[40px] leading-tight font-medium mb-4">
              Brand trips and team offsites, handled
            </h2>
            <p className="text-[16px] leading-relaxed text-foreground/60">
              Businesses today need seamless trip execution — from influencer
              brand trips to quarterly team offsites. Plum gives you the tools
              to plan, book, and manage group travel without the chaos.
            </p>
          </div>
          <div className="space-y-6 mb-12">
            {[
              {
                num: "1",
                title: "Influencer Brand Trips",
                desc: "Manage guest lists, coordinate content deliverables, handle payments and installments — all from one place.",
              },
              {
                num: "2",
                title: "Small Team Offsites",
                desc: "Budget-controlled planning for remote teams who need to get together. Group rates, shared itineraries, and expense tracking built in.",
              },
            ].map((item) => (
              <div key={item.num} className="flex gap-4">
                <div className="w-9 h-9 rounded-full border border-warm flex items-center justify-center text-[15px] font-semibold flex-shrink-0">
                  {item.num}
                </div>
                <div>
                  <h4 className="font-serif text-lg font-medium mb-1">
                    {item.title}
                  </h4>
                  <p className="text-[15px] leading-relaxed text-foreground/60">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <a
            href="#demo"
            className="inline-flex items-center gap-2 text-[15px] font-semibold text-foreground hover:text-plum transition-colors"
          >
            Talk to our Business Team
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>
        <div className="flex-1">
          <div className="w-full h-[480px] rounded-2xl overflow-hidden relative">
            <img
              src="/images/resort.jpg"
              alt="Luxury resort view with palm trees and ocean"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}

function Marketplace() {
  return (
    <section id="marketplace" className="px-20 py-24 max-w-[1440px] mx-auto">
      <div className="flex gap-16 flex-row-reverse">
        <div className="w-[515px] flex-shrink-0">
          <div className="mb-10">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-4 h-px bg-foreground/30" />
              <span className="text-[13px] font-medium tracking-wider uppercase text-sienna">
                Travel Agent Marketplace
              </span>
            </div>
            <h2 className="font-serif text-[40px] leading-tight font-medium mb-4">
              Your platform to become a travel entrepreneur
            </h2>
            <p className="text-[16px] leading-relaxed text-foreground/60">
              As AI reshapes the workforce, human-centered services like travel
              planning become more valuable than ever. Plum gives anyone the
              tools to build a thriving travel agency business.
            </p>
          </div>
          <div className="space-y-6 mb-12">
            {[
              {
                num: "1",
                title: "Set Your Own Rates",
                desc: "Define your pricing, showcase your expertise and travel specialties, and let clients find and book you directly.",
              },
              {
                num: "2",
                title: "Deliver Plans Through the App",
                desc: "Create beautiful, shareable travel itineraries your clients can access on the go — with real-time updates and booking links.",
              },
              {
                num: "3",
                title: "Grow Your Business",
                desc: "Build your reputation with client reviews, track earnings, and access AI-powered tools to plan trips faster.",
              },
            ].map((item) => (
              <div key={item.num} className="flex gap-4">
                <div className="w-9 h-9 rounded-full border border-warm flex items-center justify-center text-[15px] font-semibold flex-shrink-0">
                  {item.num}
                </div>
                <div>
                  <h4 className="font-serif text-lg font-medium mb-1">
                    {item.title}
                  </h4>
                  <p className="text-[15px] leading-relaxed text-foreground/60">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <a
            href="#get-started"
            className="inline-flex items-center gap-2 text-[15px] font-semibold text-foreground hover:text-plum transition-colors"
          >
            Become a Plum Agent
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>
        <div className="flex-1">
          <div className="w-full h-[540px] rounded-2xl overflow-hidden relative">
            <img
              src="/images/yacht-friends.jpg"
              alt="Friends enjoying a yacht trip together"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}

const pricingPlans = [
  {
    name: "Explorer",
    description:
      "For travelers who want to plan their own trips with AI-powered tools and a beautiful travel diary.",
    price: "Free",
    period: "forever",
    features: [
      "AI-assisted trip planning",
      "Personal travel diary",
      "Browse & hire travel agents",
      "Booking integration",
    ],
    cta: "Start Exploring",
    ctaStyle: "ghost" as const,
    popular: false,
  },
  {
    name: "Agent Pro",
    description:
      "For travel agents ready to build their business and reach new clients through the Plum marketplace.",
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
    ctaStyle: "primary" as const,
    popular: true,
  },
  {
    name: "Business",
    description:
      "For companies managing brand trips, influencer retreats, and team offsites at scale.",
    price: "Custom",
    period: "per organization",
    features: [
      "Brand trip & offsite management",
      "Guest tracking & payments",
      "Budget controls & approval flows",
      "Dedicated account manager",
    ],
    cta: "Contact Sales",
    ctaStyle: "ghost" as const,
    popular: false,
  },
];

function Pricing() {
  return (
    <section id="pricing" className="px-20 py-24 max-w-[1440px] mx-auto">
      <div className="text-center mb-16">
        <div className="flex items-center justify-center gap-3 mb-8">
          <div className="w-4 h-px bg-foreground/30" />
          <span className="text-[13px] font-medium tracking-wider uppercase text-sienna">
            Simple Pricing
          </span>
        </div>
        <h2 className="font-serif text-[44px] leading-tight font-medium mb-4">
          A plan for every kind of traveler
        </h2>
        <p className="text-[16px] leading-relaxed text-foreground/60 max-w-[680px] mx-auto">
          Whether you&apos;re exploring the world, building a travel business,
          or managing corporate trips — start for free and scale as you grow.
        </p>
      </div>
      <div className="grid grid-cols-3 gap-6">
        {pricingPlans.map((plan) => (
          <div
            key={plan.name}
            className={`rounded-2xl border p-10 flex flex-col ${
              plan.popular
                ? "border-plum bg-white ring-1 ring-plum/20"
                : "border-warm"
            }`}
          >
            <div className="mb-6">
              <div className="flex items-center gap-3 mb-3">
                <h3 className="font-serif text-[26px] font-medium">
                  {plan.name}
                </h3>
                {plan.popular && (
                  <span className="px-3 py-1 rounded-full bg-plum/10 text-plum text-[12px] font-semibold">
                    Most Popular
                  </span>
                )}
              </div>
              <p className="text-[14px] leading-relaxed text-foreground/60">
                {plan.description}
              </p>
            </div>
            <div className="flex items-baseline gap-2 mb-6">
              <span className="font-serif text-[44px] font-medium">
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
            <div className="mt-10">
              <a
                href="#get-started"
                className={`inline-flex items-center gap-2 px-7 py-3 rounded-full text-[15px] font-semibold transition-colors ${
                  plan.ctaStyle === "primary"
                    ? "bg-plum text-white hover:bg-plum/90"
                    : "border border-foreground hover:bg-foreground hover:text-white"
                }`}
              >
                {plan.cta}
                {plan.ctaStyle === "ghost" && (
                  <ArrowRight className="w-3.5 h-3.5" />
                )}
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function GalleryPause() {
  const destinations = [
    { label: "Bali Retreat", image: "/images/bali.jpg" },
    { label: "Beach Escape", image: "/images/beach.jpg" },
    { label: "Lisbon Adventure", image: "/images/lisbon.jpg" },
  ];
  return (
    <section className="px-20 py-24 max-w-[1440px] mx-auto">
      <div className="grid grid-cols-3 gap-6">
        {destinations.map((dest) => (
          <div
            key={dest.label}
            className="aspect-[411/320] rounded-2xl overflow-hidden relative group"
          >
            <img
              src={dest.image}
              alt={dest.label}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />
            <span className="absolute bottom-6 left-6 text-[16px] text-white font-semibold">
              {dest.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}

function AIVision() {
  return (
    <section className="px-20 py-24 max-w-[1440px] mx-auto">
      <div className="rounded-2xl border border-warm bg-white p-16 text-center">
        <div className="flex items-center justify-center gap-3 mb-8">
          <div className="w-4 h-px bg-foreground/30" />
          <span className="text-[13px] font-medium tracking-wider uppercase text-sienna">
            Why Now
          </span>
        </div>
        <h2 className="font-serif text-[40px] leading-tight font-medium mb-6 max-w-[700px] mx-auto">
          AI creates free time. People spend free time traveling.
        </h2>
        <p className="text-[16px] leading-relaxed text-foreground/60 max-w-[640px] mx-auto mb-12">
          As AI automates more work, people gain more leisure time — and travel
          is how they spend it. Plum meets this growing demand while creating
          new opportunities for displaced workers to become travel
          entrepreneurs.
        </p>
        <div className="grid grid-cols-3 gap-8 max-w-[900px] mx-auto">
          {[
            {
              stat: "$730B+",
              label: "Online travel market in 2026",
            },
            {
              stat: "34%",
              label: "YoY growth in AI-powered travel",
            },
            {
              stat: "3 in 1",
              label: "SaaS + Marketplace + Consumer app",
            },
          ].map((item) => (
            <div key={item.label}>
              <p className="font-serif text-[36px] font-medium text-plum mb-2">
                {item.stat}
              </p>
              <p className="text-[14px] text-foreground/50">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="px-20 pt-24 pb-12 max-w-[1440px] mx-auto">
      <div className="flex gap-16 mb-16">
        <div className="w-[320px]">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-8 h-8 rounded-full border-2 border-foreground flex items-center justify-center">
              <div className="w-4 h-4 rounded-full bg-foreground" />
            </div>
            <span className="font-serif text-[22px] font-semibold tracking-tight">
              Plum
            </span>
          </div>
          <p className="text-[14px] leading-relaxed text-foreground/50">
            The all-in-one travel platform for businesses managing brand trips,
            agents building their practice, and travelers exploring the world.
          </p>
        </div>
        <div className="flex-1 flex justify-end gap-20">
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
              <h4 className="text-[13px] font-semibold uppercase tracking-wider text-foreground/40 mb-5">
                {col.title}
              </h4>
              <div className="space-y-3">
                {col.links.map((link) => (
                  <a
                    key={link}
                    href="#"
                    className="block text-[15px] text-foreground/60 hover:text-foreground transition-colors"
                  >
                    {link}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="mb-4">
        <h2 className="font-serif text-[96px] leading-none font-bold tracking-tight text-foreground/10 select-none">
          PLUM
        </h2>
      </div>
      <div className="flex items-center justify-between text-[13px] text-foreground/40">
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
    </footer>
  );
}

export default function Home() {
  return (
    <main className="bg-background">
      <Navbar />
      <Hero />
      <DashboardMockup />
      <Features />
      <Testimonials />
      <section className="px-20 max-w-[1440px] mx-auto">
        <div className="w-full h-[400px] rounded-2xl overflow-hidden relative">
          <img
            src="/images/lisbon-evening.jpg"
            alt="Evening in a charming European city"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
          <div className="absolute bottom-10 left-10">
            <p className="text-white/80 text-[13px] font-medium tracking-wider uppercase mb-2">
              Your Next Adventure Awaits
            </p>
            <p className="font-serif text-white text-[32px] font-medium">
              Every trip tells a story
            </p>
          </div>
        </div>
      </section>
      <ForBusiness />
      <Marketplace />
      <AIVision />
      <Pricing />
      <GalleryPause />
      <Footer />
    </main>
  );
}
