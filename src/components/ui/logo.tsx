import { type ReactNode } from "react";

type LogoVariant = "dark" | "light" | "plum";
type LogoSize = "sm" | "md" | "lg" | "xl";

const sizes = {
  sm: { ring: "w-6 h-6", dot: "w-3 h-3", border: "border-2", text: "text-[16px]", gap: "gap-2" },
  md: { ring: "w-8 h-8", dot: "w-4 h-4", border: "border-2", text: "text-[22px]", gap: "gap-3" },
  lg: { ring: "w-14 h-14", dot: "w-7 h-7", border: "border-[3px]", text: "text-[36px]", gap: "gap-4" },
  xl: { ring: "w-14 h-14", dot: "w-7 h-7", border: "border-[3px]", text: "text-[48px]", gap: "gap-4" },
};

const variants = {
  dark: { ring: "border-foreground", dot: "bg-foreground", label: "text-foreground" },
  light: { ring: "border-white", dot: "bg-white", label: "text-white" },
  plum: { ring: "border-white", dot: "bg-white", label: "text-white" },
};

export function Logo({
  variant = "dark",
  size = "md",
  showText = true,
}: {
  variant?: LogoVariant;
  size?: LogoSize;
  showText?: boolean;
}) {
  const s = sizes[size];
  const v = variants[variant];

  return (
    <div className={`flex items-center ${s.gap}`}>
      <div
        className={`${s.ring} rounded-full ${s.border} ${v.ring} flex items-center justify-center`}
      >
        <div className={`${s.dot} rounded-full ${v.dot}`} />
      </div>
      {showText && (
        <span
          className={`font-serif ${s.text} font-semibold tracking-tight ${v.label}`}
        >
          Plum
        </span>
      )}
    </div>
  );
}
