import { type ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "accent" | "ghost";
type ButtonSize = "sm" | "md";

const variantStyles = {
  primary:
    "bg-plum text-white hover:bg-plum/90",
  secondary:
    "border border-foreground text-foreground hover:bg-foreground hover:text-white",
  accent:
    "bg-sienna text-white hover:bg-sienna/90",
  ghost:
    "bg-foreground/5 text-foreground/60 hover:bg-foreground/10",
};

const sizeStyles = {
  sm: "px-5 py-2 text-[13px] font-medium",
  md: "px-7 py-3 text-[15px] font-semibold",
};

export function Button({
  variant = "primary",
  size = "md",
  href,
  children,
  className = "",
}: {
  variant?: ButtonVariant;
  size?: ButtonSize;
  href?: string;
  children: ReactNode;
  className?: string;
}) {
  const classes = `inline-flex items-center gap-2 rounded-full transition-colors ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;

  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }

  return <button className={classes}>{children}</button>;
}
