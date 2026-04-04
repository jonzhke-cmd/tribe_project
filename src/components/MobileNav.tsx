"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

interface NavItem {
  href: string;
  label: string;
}

export default function MobileNav({ nav }: { nav: NavItem[] }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button
        onClick={() => setOpen(!open)}
        className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur transition hover:bg-white/20"
        aria-label="Toggle menu"
      >
        {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
      </button>

      {open && (
        <div className="fixed inset-0 top-0 z-40 flex flex-col bg-slate-950/95 backdrop-blur-xl pt-28 px-6">
          <nav className="flex flex-col gap-2">
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-2xl px-6 py-4 text-xl font-bold text-white/80 transition hover:bg-white/10 hover:text-white"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/book"
              onClick={() => setOpen(false)}
              className="mt-4 rounded-2xl bg-primary px-6 py-4 text-center text-xl font-bold text-white transition hover:bg-primary-hover"
            >
              Book Now
            </Link>
          </nav>
        </div>
      )}
    </div>
  );
}
