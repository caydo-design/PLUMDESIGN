import { type ReactNode } from "react";

type CardVariant = "bordered" | "section" | "dark";

const variantStyles = {
  bordered: "bg-white ring-1 ring-foreground/[0.06] shadow-[0_1px_2px_rgba(0,0,0,0.03)]",
  section: "bg-section",
  dark: "bg-foreground text-white ring-1 ring-white/[0.06]",
};

export function Card({
  variant = "bordered",
  hover = false,
  className = "",
  children,
}: {
  variant?: CardVariant;
  hover?: boolean;
  className?: string;
  children: ReactNode;
}) {
  return (
    <div
      className={`rounded-2xl ${variantStyles[variant]} ${hover ? "hover:ring-plum/20 hover:shadow-md transition-all" : ""} ${className}`}
    >
      {children}
    </div>
  );
}
