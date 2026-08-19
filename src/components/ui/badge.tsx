import { type ReactNode } from "react";

type BadgeVariant = "plum" | "sienna" | "lavender" | "neutral";

const variantStyles = {
  plum: "bg-plum/10 text-plum",
  sienna: "bg-sienna/10 text-sienna",
  lavender: "bg-lavender/10 text-lavender",
  neutral: "bg-foreground/5 text-foreground/60",
};

export function Badge({
  variant = "plum",
  children,
}: {
  variant?: BadgeVariant;
  children: ReactNode;
}) {
  return (
    <span
      className={`px-3 py-1 rounded-full text-[12px] font-semibold ${variantStyles[variant]}`}
    >
      {children}
    </span>
  );
}
