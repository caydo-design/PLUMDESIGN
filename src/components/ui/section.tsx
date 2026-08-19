import { type ReactNode } from "react";

export function Section({
  id,
  className = "",
  children,
}: {
  id?: string;
  className?: string;
  children: ReactNode;
}) {
  return (
    <section
      id={id}
      className={`px-6 py-16 md:px-12 md:py-20 lg:px-20 lg:py-24 max-w-[1440px] mx-auto ${className}`}
    >
      {children}
    </section>
  );
}

type LabelStyle = "line" | "dot";

export function SectionLabel({
  children,
  style = "line",
}: {
  children: ReactNode;
  style?: LabelStyle;
}) {
  return (
    <div className="flex items-center gap-3 mb-6 lg:mb-8">
      {style === "line" ? (
        <div className="w-4 h-px bg-foreground/30" />
      ) : (
        <div className="w-1 h-1 rounded-full bg-plum" />
      )}
      <span className="text-[12px] lg:text-[13px] font-medium tracking-wider uppercase text-sienna">
        {children}
      </span>
    </div>
  );
}

export function SectionHeading({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <h2
      className={`font-serif text-[28px] md:text-[36px] lg:text-[44px] leading-tight font-medium tracking-tight ${className}`}
    >
      {children}
    </h2>
  );
}

export function Divider() {
  return <div className="mx-6 md:mx-12 lg:mx-20 h-px bg-warm/40" />;
}
