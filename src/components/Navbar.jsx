import { useState } from 'react';
import { Menu, X, Download } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { name: 'Home', href: '#' },
    { name: 'News', href: '#news' },
    { name: 'Heroes', href: '#heroes' },
    { name: 'Esports', href: '#esports' },
  ];

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 rounded-2xl border border-white/10 bg-zinc-900/60 backdrop-blur supports-[backdrop-filter]:bg-zinc-900/60">
          <div className="flex items-center justify-between px-6 py-4">
            <a href="#" className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-amber-400 to-rose-500" />
              <span className="text-white font-semibold tracking-wide">PointBlank</span>
            </a>

            <nav className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-sm text-zinc-300 hover:text-white transition-colors"
                >
                  {item.name}
                </a>
              ))}
              <a
                href="#download"
                className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-amber-500 to-rose-500 px-4 py-2 text-sm font-semibold text-zinc-900 shadow hover:opacity-95"
              >
                <Download className="h-4 w-4" />
                Download
              </a>
            </nav>

            <button
              className="md:hidden text-white"
              aria-label="Toggle menu"
              onClick={() => setOpen((v) => !v)}
            >
              {open ? <X /> : <Menu />}
            </button>
          </div>

          {open && (
            <div className="md:hidden border-t border-white/10 px-6 py-4">
              <div className="flex flex-col gap-3">
                {navItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-sm text-zinc-300 hover:text-white transition-colors"
                    onClick={() => setOpen(false)}
                  >
                    {item.name}
                  </a>
                ))}
                <a
                  href="#download"
                  className="mt-2 inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-amber-500 to-rose-500 px-4 py-2 text-sm font-semibold text-zinc-900 shadow hover:opacity-95"
                  onClick={() => setOpen(false)}
                >
                  <Download className="h-4 w-4" />
                  Download
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
