import { useState } from "react";
import { Menu, X, MapPin, CreditCard } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { LealLogo } from "./LealLogo";
import { Button } from "./ui/button";

const NAV_LINKS = [
  { label: "Ofertas", href: "#ofertas" },
  { label: "Cartão Leal", href: "#cartao-leal" },
  { label: "Clube Leal", href: "#clube-leal" },
  { label: "Nossas Lojas", href: "#lojas" },
  { label: "Trabalhe Conosco", href: "#trabalhe-conosco" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  const handleLinkClick = (href: string) => {
    setOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="sticky top-0 z-50 border-b border-zinc-200/80 bg-white/90 backdrop-blur-md">
      {/* Top subtle demo + hours bar */}
      <div className="bg-[#141418] text-zinc-200 text-xs">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-2 px-4 py-1.5 sm:px-6 lg:px-8">
          <p className="flex items-center gap-2 text-[11px] sm:text-xs text-zinc-300">
            <span className="inline-block h-2 w-2 rounded-full bg-[#FACC15]" aria-hidden="true" />
            <span>
              Uberlândia/MG · 10 unidades · Seg. a Sáb. 07h–22h | Dom. e feriados 07h–21h30
            </span>
          </p>
          <span className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/10 px-2.5 py-0.5 text-[11px] font-medium text-amber-200">
            Modelo de demonstração — HRP Múltipla
          </span>
        </div>
      </div>

      {/* Main Nav */}
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a
          href="#inicio"
          aria-label="Voltar ao topo - Supermercados Leal"
          className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#DC1F26] rounded-lg"
        >
          <LealLogo />
        </a>

        <nav aria-label="Navegação principal" className="hidden items-center gap-1 lg:flex">
          {NAV_LINKS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-lg px-3.5 py-2 text-sm font-semibold text-zinc-700 transition-colors hover:bg-zinc-100 hover:text-[#DC1F26]"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-2.5 lg:flex">
          <Button
            variant="outline"
            size="sm"
            onClick={() => handleLinkClick("#cartao-leal")}
          >
            <CreditCard className="h-4 w-4 text-[#DC1F26]" />
            Cartão Tricard
          </Button>
          <Button
            variant="primary"
            size="sm"
            onClick={() => handleLinkClick("#lojas")}
          >
            <MapPin className="h-4 w-4" />
            10 Lojas em Uberlândia
          </Button>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-zinc-200 text-zinc-800 hover:bg-zinc-100 lg:hidden cursor-pointer"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden border-t border-zinc-200 bg-white lg:hidden"
          >
            <nav aria-label="Menu móvel" className="flex flex-col gap-1 px-4 py-4">
              {NAV_LINKS.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick(item.href);
                  }}
                  className="rounded-xl px-4 py-3 text-base font-semibold text-zinc-800 hover:bg-red-50 hover:text-[#DC1F26]"
                >
                  {item.label}
                </a>
              ))}
              <div className="mt-2 grid grid-cols-2 gap-2 pt-2 border-t border-zinc-100">
                <Button
                  variant="outline"
                  onClick={() => handleLinkClick("#cartao-leal")}
                >
                  Cartão Leal
                </Button>
                <Button
                  variant="primary"
                  onClick={() => handleLinkClick("#lojas")}
                >
                  Ver 10 Lojas
                </Button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
