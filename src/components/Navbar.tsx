import { useEffect, useState } from "react";
import { Menu, X, MapPin, ShoppingBag } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { LealLogo } from "./LealLogo";
import { Button } from "./ui/button";
import { useBag } from "../context/BagContext";

const NAV_LINKS = [
  { label: "Sobre o Leal", href: "#sobre" },
  { label: "Ofertas", href: "#ofertas" },
  { label: "Cartão Leal", href: "#cartao-leal" },
  { label: "Clube Leal", href: "#clube-leal" },
  { label: "Nossas Lojas", href: "#lojas" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { totalItems, openDrawer } = useBag();

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleLinkClick = (href: string) => {
    setOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "bg-[#141418]/92 backdrop-blur-md border-b border-white/10 shadow-xl shadow-black/30"
          : "bg-gradient-to-b from-black/80 via-black/45 to-transparent"
      }`}
    >
      {/* Topbar integrada ao cabeçalho escuro, recolhe suavemente ao rolar */}
      <div
        className={`w-full border-b border-white/10 bg-black/35 backdrop-blur-xs text-zinc-200 text-xs transition-all duration-300 overflow-hidden ${
          scrolled ? "max-h-0 opacity-0 border-b-0" : "max-h-28 opacity-100"
        }`}
      >
        <div className="flex w-full flex-wrap items-center justify-between gap-2 px-5 py-1.5 sm:px-8 lg:px-12 xl:px-16">
          <p className="flex items-center gap-2 text-[11px] sm:text-xs text-zinc-200">
            <span className="inline-block h-2 w-2 rounded-full bg-[#FACC15]" aria-hidden="true" />
            <span>
              Uberlândia/MG · Seg. a Sáb. 07h–22h | Dom. e feriados 07h–21h30
            </span>
          </p>
          <span className="inline-flex items-center gap-1.5 rounded-full border border-white/15 bg-white/10 px-2.5 py-0.5 text-[11px] font-medium text-amber-200">
            Modelo de demonstração — HRP Múltipla
          </span>
        </div>
      </div>

      <div className="flex h-16 w-full items-center justify-between px-5 sm:px-8 lg:px-12 xl:px-16">
        <a
          href="#inicio"
          aria-label="Voltar ao topo - Supermercados Leal"
          className="rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FACC15]"
        >
          <LealLogo variant="dark" />
        </a>

        <nav aria-label="Navegação principal" className="hidden items-center gap-1 lg:flex">
          {NAV_LINKS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(e) => {
                e.preventDefault();
                handleLinkClick(item.href);
              }}
              className="rounded-lg px-2.5 py-2 text-[13px] font-semibold text-white/90 transition-colors hover:bg-white/10 hover:text-[#FACC15] xl:px-3.5 xl:text-sm"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-2.5 lg:flex">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => handleLinkClick("#lojas")}
            className="border border-white/25 bg-white/10 text-white hover:bg-white/20 hover:text-white focus-visible:ring-[#FACC15]"
          >
            <MapPin className="h-4 w-4 text-[#FACC15]" />
            Encontrar loja
          </Button>

          <button
            type="button"
            onClick={openDrawer}
            aria-label={`Abrir sacola de compras (${totalItems} ${totalItems === 1 ? "item" : "itens"})`}
            data-testid="navbar-bag-button"
            className="relative inline-flex h-9 items-center gap-2 rounded-lg bg-[#DC1F26] px-3.5 text-xs font-bold text-white shadow-sm shadow-black/30 transition hover:bg-[#B8161C] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FACC15] cursor-pointer"
          >
            <ShoppingBag className="h-4 w-4" aria-hidden="true" />
            <span>Sacola</span>
            <span
              data-testid="navbar-bag-count"
              className="inline-flex min-w-5 items-center justify-center rounded-full bg-[#FACC15] px-1.5 py-0.5 text-[11px] font-extrabold leading-none text-zinc-950"
            >
              {totalItems}
            </span>
          </button>
        </div>

        {/* Ações mobile: Sacola + Menu */}
        <div className="flex items-center gap-2 lg:hidden">
          <button
            type="button"
            onClick={openDrawer}
            aria-label={`Abrir sacola de compras (${totalItems} ${totalItems === 1 ? "item" : "itens"})`}
            data-testid="mobile-bag-button"
            className="relative inline-flex h-10 items-center gap-1.5 rounded-xl border border-white/20 bg-[#DC1F26] px-3 text-xs font-bold text-white shadow-sm hover:bg-[#B8161C] cursor-pointer"
          >
            <ShoppingBag className="h-4 w-4" aria-hidden="true" />
            <span>{totalItems}</span>
          </button>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/25 bg-black/35 text-white backdrop-blur-xs hover:bg-white/15 cursor-pointer"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden border-t border-white/10 bg-[#141418]/98 backdrop-blur-md lg:hidden"
          >
            <nav aria-label="Menu móvel" className="flex flex-col gap-1 px-5 py-4 sm:px-8">
              {NAV_LINKS.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick(item.href);
                  }}
                  className="rounded-xl px-4 py-3 text-base font-semibold text-white/90 hover:bg-white/10 hover:text-[#FACC15]"
                >
                  {item.label}
                </a>
              ))}
              <div className="mt-2 grid grid-cols-2 gap-2 border-t border-white/10 pt-3">
                <Button
                  variant="primary"
                  onClick={() => handleLinkClick("#lojas")}
                >
                  <MapPin className="h-4 w-4" />
                  Encontrar loja
                </Button>
                <Button
                  variant="gold"
                  onClick={() => {
                    setOpen(false);
                    openDrawer();
                  }}
                >
                  <ShoppingBag className="h-4 w-4" />
                  Sacola ({totalItems})
                </Button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
