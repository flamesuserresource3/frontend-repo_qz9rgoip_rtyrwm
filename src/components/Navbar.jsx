import { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { label: 'Beranda', href: '#home' },
    { label: 'Layanan', href: '#services' },
    { label: 'Tentang', href: '#about' },
    { label: 'Kontak', href: '#contact' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/70 backdrop-blur border-b border-slate-200">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#home" className="flex items-center gap-2">
            <div className="h-9 w-9 rounded-lg bg-gradient-to-tr from-blue-600 to-indigo-500 flex items-center justify-center text-white font-bold">F</div>
            <span className="text-lg font-semibold tracking-tight text-slate-800">Flames Company</span>
          </a>

          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-slate-600 hover:text-slate-900 transition-colors"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              className="inline-flex items-center rounded-md bg-slate-900 px-4 py-2 text-sm font-medium text-white shadow hover:bg-slate-800"
            >
              Konsultasi
            </a>
          </div>

          <button
            className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-slate-700 hover:bg-slate-100"
            aria-label="Toggle menu"
            onClick={() => setOpen(!open)}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4">
            <div className="flex flex-col gap-2 pt-2">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="rounded-md px-3 py-2 text-slate-700 hover:bg-slate-100"
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-2 bg-slate-900 text-white hover:bg-slate-800"
              >
                Konsultasi
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
