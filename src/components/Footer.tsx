import { personal, navLinks } from "@/data/portfolio";
import { Code2, Globe, Mail, MapPin, Phone } from "lucide-react";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-white/5 px-4 py-12 md:px-6">
      <div className="mx-auto max-w-6xl">
        <div className="glass-card mb-10 grid gap-10 rounded-3xl p-8 md:grid-cols-3 md:p-10">
          <div>
            <div className="mb-4 flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500 to-cyan-400 text-sm font-bold text-white">
                BD
              </span>
              <div>
                <p className="font-display text-lg font-semibold text-white">
                  {personal.name}
                </p>
                <p className="text-sm text-zinc-500">{personal.title}</p>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-zinc-400">
              Building beautiful, functional digital products from Mumbai.
            </p>
          </div>

          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-zinc-500">
              Navigation
            </p>
            <ul className="grid grid-cols-2 gap-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-zinc-400 transition-colors hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-zinc-500">
              Contact
            </p>
            <ul className="space-y-3">
              <li>
                <a
                  href={personal.social.email}
                  className="flex items-center gap-2 text-sm text-zinc-400 transition-colors hover:text-violet-400"
                >
                  <Mail size={14} />
                  {personal.email}
                </a>
              </li>
              <li>
                <a
                  href={personal.social.phone}
                  className="flex items-center gap-2 text-sm text-zinc-400 transition-colors hover:text-violet-400"
                >
                  <Phone size={14} />
                  {personal.phone}
                </a>
              </li>
              <li className="flex items-center gap-2 text-sm text-zinc-400">
                <MapPin size={14} />
                {personal.location}
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 text-sm text-zinc-500 md:flex-row">
          <p>© {year} {personal.name}. Crafted with passion.</p>
          <div className="flex items-center gap-4">
            <a
              href={personal.social.email}
              aria-label="Email"
              className="rounded-lg p-2 text-zinc-500 transition-colors hover:bg-white/5 hover:text-white"
            >
              <Mail size={18} />
            </a>
            <a
              href="#"
              aria-label="LinkedIn"
              className="rounded-lg p-2 text-zinc-500 transition-colors hover:bg-white/5 hover:text-white"
            >
              <Globe size={18} />
            </a>
            <a
              href="#"
              aria-label="GitHub"
              className="rounded-lg p-2 text-zinc-500 transition-colors hover:bg-white/5 hover:text-white"
            >
              <Code2 size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
