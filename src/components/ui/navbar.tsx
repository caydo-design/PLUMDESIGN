import { type ReactNode } from "react";
import { ArrowLeft } from "lucide-react";
import { Logo } from "./logo";
import { Button } from "./button";

type NavLink = {
  href: string;
  label: string;
};

export function Navbar({
  links,
  cta,
}: {
  links: NavLink[];
  cta?: { href: string; label: string };
}) {
  return (
    <nav className="flex items-center justify-between px-20 py-7 max-w-[1440px] mx-auto w-full">
      <a href="/">
        <Logo />
      </a>
      <div className="flex items-center gap-10 text-[15px] font-medium text-foreground/80">
        {links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="hover:text-foreground transition-colors"
          >
            {link.label}
          </a>
        ))}
      </div>
      {cta && (
        <Button variant="secondary" href={cta.href}>
          {cta.label}
        </Button>
      )}
    </nav>
  );
}

export function BackNavbar({ backHref = "/" }: { backHref?: string }) {
  return (
    <nav className="flex items-center justify-between px-20 py-7 max-w-[1440px] mx-auto w-full">
      <a href="/">
        <Logo />
      </a>
      <a
        href={backHref}
        className="flex items-center gap-2 text-[15px] font-medium text-foreground/60 hover:text-foreground transition-colors"
      >
        <ArrowLeft size={16} />
        Back to Home
      </a>
    </nav>
  );
}
