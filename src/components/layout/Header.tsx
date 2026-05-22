"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Terminal } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { SITE } from "@/lib/site";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
  { href: "/tools", label: "Toolbox" },
  { href: "/pricing", label: "Access" },
];

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--border)] bg-[var(--background)]/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2.5">
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-violet-600 text-white shadow-lg shadow-violet-900/50">
            <Terminal className="h-5 w-5" />
          </span>
          <span className="text-base font-bold tracking-tight text-white sm:text-lg">
            {SITE.creator.split(" ")[0]}
            <span className="text-violet-400">.</span>
            <span className="font-normal text-slate-400">toolbox</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-colors ${
                pathname === link.href
                  ? "text-violet-400"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <Link href="/tools">
            <Button variant="outline" size="sm">
              Open toolbox
            </Button>
          </Link>
          <Link href="/pricing">
            <Button size="sm">Support access</Button>
          </Link>
        </div>

        <button
          type="button"
          className="rounded-lg p-2 text-slate-400 md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-[var(--border)] bg-[var(--surface)] px-4 py-4 md:hidden">
          <nav className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-sm font-medium text-slate-300"
              >
                {link.label}
              </Link>
            ))}
            <Link href="/pricing" onClick={() => setOpen(false)}>
              <Button className="w-full" size="sm">
                Support access
              </Button>
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
