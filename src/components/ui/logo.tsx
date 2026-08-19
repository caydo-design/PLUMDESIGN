type LogoVariant = "dark" | "light" | "plum";
type LogoSize = "sm" | "md" | "lg" | "xl";

const sizes = {
  sm: "text-[16px]",
  md: "text-[22px]",
  lg: "text-[36px]",
  xl: "text-[48px]",
};

const variants = {
  dark: "text-foreground",
  light: "text-white",
  plum: "text-white",
};

export function Logo({
  variant = "dark",
  size = "md",
}: {
  variant?: LogoVariant;
  size?: LogoSize;
}) {
  return (
    <span
      className={`font-serif ${sizes[size]} font-semibold tracking-tight ${variants[variant]}`}
    >
      Plum
    </span>
  );
}
