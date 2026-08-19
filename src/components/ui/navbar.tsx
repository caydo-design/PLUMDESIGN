"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
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
  const [open, setOpen] = useState(false);

  return (
    <nav className="relative px-6 md:px-12 lg:px-20 py-5 lg:py-7 max-w-[1440px] mx-auto w-full">
      <div className="flex items-center justify-between">
        <a href="/">
          <Logo />
        </a>
        <div className="hidden lg:flex items-center gap-10 text-[15px] font-medium text-foreground/80">
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
        <div className="hidden lg:block">
          {cta && (
            <Button variant="secondary" href={cta.href}>
              {cta.label}
            </Button>
          )}
        </div>
        <button
          className="lg:hidden p-2 -mr-2 text-foreground/70 hover:text-foreground transition-colors"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Close menu" : "Open menu"}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {open && (
        <div className="lg:hidden absolute left-0 right-0 top-full bg-background border-b border-warm/40 px-6 md:px-12 py-6 z-50">
          <div className="flex flex-col gap-4">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[16px] font-medium text-foreground/70 hover:text-foreground transition-colors py-1"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            ))}
            {cta && (
              <div className="pt-4 border-t border-warm/40">
                <Button variant="secondary" href={cta.href}>
                  {cta.label}
                </Button>
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}

export function BackNavbar({ backHref = "/" }: { backHref?: string }) {
  return (
    <nav className="flex items-center justify-between px-6 md:px-12 lg:px-20 py-5 lg:py-7 max-w-[1440px] mx-auto w-full">
      <a href="/">
        <Logo />
      </a>
      <a
        href={backHref}
        className="flex items-center gap-2 text-[14px] lg:text-[15px] font-medium text-foreground/60 hover:text-foreground transition-colors"
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m12 19-7-7 7-7"/><path d="M19 12H5"/></svg>
        Back to Home
      </a>
    </nav>
  );
}
