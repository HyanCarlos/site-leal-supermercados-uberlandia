import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, MapPin, Sparkles, Tag } from "lucide-react";
import { Button } from "./ui/button";
import type { CatalogCategoryId } from "../data/catalog";

interface HeroSectionProps {
  onSelectDepartment: (dept: CatalogCategoryId) => void;
}

const HERO_DEPARTMENTS: Array<{
  id: CatalogCategoryId;
  title: string;
  subtitle: string;
  image: string;
  alt: string;
}> = [
  {
    id: "hortifruti",
    title: "Hortifrúti",
    subtitle: "Seleção fresca todo dia",
    image: "/images/categorias/hortifruti.webp",
    alt: "Hortifrúti fresco com frutas e verduras",
  },
  {
    id: "acougue",
    title: "Açougue",
    subtitle: "Cortes preparados na hora",
    image: "/images/categorias/acougue.webp",
    alt: "Balcão de açougue com cortes selecionados",
  },
  {
    id: "padaria",
    title: "Padaria",
    subtitle: "Pães quentinhos e frios",
    image: "/images/categorias/padaria.webp",
    alt: "Setor de padaria e frios",
  },
];

export function HeroSection({ onSelectDepartment }: HeroSectionProps) {
  const shouldReduceMotion = useReducedMotion();

  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="inicio"
      className="relative isolate w-full overflow-hidden bg-[#141418]"
    >
      {/* Fotografia viva e vibrante de hortifrúti */}
      <img
        src="/images/hero-hortifruti.webp"
        alt="Banca viva de hortifrúti com verduras, pimentões e frutas frescas"
        className="absolute inset-0 h-full w-full object-cover object-center"
      />

      {/* Gradiente editorial apenas o necessário para contraste forte do texto à esquerda e topo */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-r from-[#141418]/90 via-[#141418]/62 to-[#141418]/20"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-b from-black/70 via-transparent to-black/75"
      />

      <div className="relative z-10 flex min-h-[100svh] w-full flex-col justify-between px-5 pb-8 pt-32 sm:px-8 sm:pb-10 sm:pt-36 lg:px-12 lg:pb-12 lg:pt-32 xl:px-16">
        <div className="hidden lg:block" aria-hidden="true" />

        <div className="grid items-end gap-8 lg:grid-cols-12">
          {/* Bloco editorial de campanha à esquerda */}
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7 space-y-5"
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-[#FACC15]/50 bg-[#DC1F26]/90 px-3.5 py-1 text-xs font-extrabold uppercase tracking-wider text-white shadow-md shadow-black/25">
              <Sparkles className="h-3.5 w-3.5 text-[#FACC15]" aria-hidden="true" />
              Supermercados Leal · Uberlândia/MG
            </span>

            <h1 className="font-['Sora'] text-4xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl xl:text-[4rem]">
              Sua família merece mais.
              <span className="mt-2 block text-3xl text-[#FACC15] sm:text-4xl lg:text-5xl">
                <span className="relative inline-block">
                  Mais qualidade. Mais economia!
                  <span
                    aria-hidden="true"
                    className="absolute -bottom-1.5 left-0 h-1.5 w-full rounded-full bg-[#DC1F26]"
                  />
                </span>
              </span>
            </h1>

            <p className="max-w-xl text-base font-medium leading-relaxed text-white/95 sm:text-lg">
              Tudo o que você precisa para o dia a dia, pertinho de você.
            </p>

            <div className="flex flex-col gap-3 pt-1 sm:flex-row sm:items-center">
              <Button
                size="lg"
                variant="primary"
                onClick={() => scrollTo("#lojas")}
                className="shadow-xl shadow-black/35"
              >
                <MapPin className="h-5 w-5" />
                Encontrar loja mais próxima
                <ArrowRight className="h-4 w-4" />
              </Button>
              <Button
                size="lg"
                variant="gold"
                onClick={() => scrollTo("#ofertas")}
                className="shadow-xl shadow-black/30"
              >
                <Tag className="h-5 w-5" />
                Ver ofertas da semana
              </Button>
            </div>
          </motion.div>

          {/* Destaque visual discreto à direita em telas grandes */}
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.55, delay: shouldReduceMotion ? 0 : 0.1 }}
            className="hidden lg:col-span-5 lg:flex lg:justify-end"
          >
            <div className="rounded-3xl border border-white/25 bg-[#141418]/65 p-5 text-white backdrop-blur-md shadow-2xl max-w-xs">
              <p className="text-[11px] font-bold uppercase tracking-widest text-[#FACC15]">
                No Leal é tudo mais barato!
              </p>
              <p className="mt-1.5 font-['Sora'] text-lg font-extrabold leading-snug">
                Frescor no hortifrúti, cortes selecionados e padaria própria
              </p>
              <p className="mt-2 text-xs text-zinc-300">
                Desde 1989 nos bairros de Uberlândia, com atendimento próximo e
                vantagens no Cartão Tricard e Clube Leal.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Elementos visuais secundários dos 3 departamentos principais */}
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: shouldReduceMotion ? 0 : 0.14 }}
          className="mt-8 grid w-full grid-cols-1 gap-2.5 sm:grid-cols-3 sm:gap-3 lg:mt-10"
        >
          {HERO_DEPARTMENTS.map((dept) => (
            <button
              key={dept.id}
              type="button"
              onClick={() => {
                onSelectDepartment(dept.id);
                scrollTo("#ofertas");
              }}
              className="glass-capsule group flex items-center gap-3.5 rounded-2xl border border-white/25 bg-black/45 p-2.5 pr-4 text-left shadow-lg shadow-black/25 backdrop-blur-md transition-transform duration-300 hover:-translate-y-1 hover:border-[#FACC15]/70 hover:bg-black/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FACC15] motion-reduce:transform-none motion-reduce:transition-none cursor-pointer"
            >
              <img
                src={dept.image}
                alt={dept.alt}
                className="h-12 w-16 shrink-0 rounded-xl object-cover border border-white/15 sm:h-14 sm:w-20"
              />
              <div className="min-w-0 flex-1">
                <span className="block font-['Sora'] text-sm font-extrabold text-white group-hover:text-[#FACC15] transition-colors">
                  {dept.title}
                </span>
                <span className="block truncate text-xs text-zinc-200/90">
                  {dept.subtitle}
                </span>
              </div>
              <ArrowRight
                className="h-4 w-4 shrink-0 text-[#FACC15] transition-transform group-hover:translate-x-1"
                aria-hidden="true"
              />
            </button>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
