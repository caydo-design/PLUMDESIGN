import { type ReactNode } from "react";

type CardVariant = "bordered" | "section" | "dark";

const variantStyles = {
  bordered: "border border-warm bg-white",
  section: "bg-section",
  dark: "bg-foreground text-white",
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
      className={`rounded-2xl ${variantStyles[variant]} ${hover ? "hover:border-plum/20 transition-colors" : ""} ${className}`}
    >
      {children}
    </div>
  );
}
