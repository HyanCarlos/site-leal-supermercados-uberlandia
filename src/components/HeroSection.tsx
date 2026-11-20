import { motion, useReducedMotion } from "framer-motion";
import { MapPin, Tag, CreditCard, Smartphone, Clock, ArrowRight } from "lucide-react";
import { Button } from "./ui/button";

const FACADE_SRC =
  "https://s2-g1.glbimg.com/P9-fs2eM_SVFcWGfKTyvhvUeVyM=/1600x0/filters:format(jpeg)/https://i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2022/A/i/01ZIRBQ7O5OcSz4UlEeQ/leal.jpeg";

const CAPSULES = [
  {
    icon: Clock,
    label: "Desde 1989",
    shortLabel: "Desde 1989",
    detail: "Tradição em Uberlândia",
    href: "#sobre",
  },
  {
    icon: MapPin,
    label: "Perto do seu bairro",
    shortLabel: "Seu bairro",
    detail: "Encontre a loja mais próxima",
    href: "#lojas",
  },
  {
    icon: CreditCard,
    label: "Cartão Tricard Leal",
    shortLabel: "Cartão Leal",
    detail: "Até 40 dias para pagar",
    href: "#cartao-leal",
  },
  {
    icon: Smartphone,
    label: "App Clube Leal",
    shortLabel: "Clube Leal",
    detail: "Descontos no CPF",
    href: "#clube-leal",
  },
];

export function HeroSection() {
  const shouldReduceMotion = useReducedMotion();

  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="inicio"
      className="relative isolate w-full overflow-hidden bg-[#141418]"
    >
      <img
        src={FACADE_SRC}
        alt="Fachada do Supermercados Leal em Uberlândia-MG"
        className="absolute inset-0 h-full w-full object-cover object-[center_42%]"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-r from-black/82 via-black/58 to-black/38"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-gradient-to-b from-black/70 via-transparent to-black/75"
      />

      <div className="relative z-10 flex min-h-[100svh] w-full flex-col justify-end px-5 pb-8 pt-32 sm:px-8 sm:pb-10 sm:pt-36 lg:justify-between lg:px-12 lg:pb-12 lg:pt-36 xl:px-16">
        <div className="hidden lg:block" aria-hidden="true" />

        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl space-y-5 sm:space-y-6"
        >
          <h1 className="font-['Sora'] text-4xl font-extrabold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-6xl xl:text-[4rem]">
            No Leal é{" "}
            <span className="relative inline-block text-[#FACC15]">
              tudo mais barato!
              <span
                aria-hidden="true"
                className="absolute -bottom-1 left-0 h-2 w-full rounded-full bg-[#DC1F26]/85"
              />
            </span>
          </h1>

          <p className="max-w-xl text-base font-medium text-white/90 sm:text-lg">
            Economia perto da sua família, em todos os bairros de Uberlândia.
          </p>

          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button
              size="lg"
              variant="primary"
              onClick={() => scrollTo("#lojas")}
              className="shadow-lg shadow-black/35"
            >
              <MapPin className="h-5 w-5" />
              Encontrar loja mais próxima
              <ArrowRight className="h-4 w-4" />
            </Button>
            <Button
              size="lg"
              variant="ghost"
              onClick={() => scrollTo("#ofertas")}
              className="border border-white/40 bg-white/10 text-white backdrop-blur-sm hover:bg-white/20 hover:text-white focus-visible:ring-white"
            >
              <Tag className="h-5 w-5 text-[#FACC15]" />
              Ver ofertas e catálogo
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: shouldReduceMotion ? 0 : 0.12 }}
          className="mt-8 grid w-full grid-cols-2 gap-2.5 sm:mt-10 sm:gap-3 lg:mt-12 lg:grid-cols-4"
        >
          {CAPSULES.map((item) => {
            const Icon = item.icon;
            return (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollTo(item.href);
                }}
                className="glass-capsule group flex items-center gap-3 rounded-full border border-white/25 bg-white/12 px-3.5 py-3 shadow-lg shadow-black/20 backdrop-blur-md transition-transform duration-300 hover:-translate-y-1 hover:scale-[1.03] hover:border-white/45 hover:bg-white/20 hover:shadow-xl hover:shadow-black/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FACC15] motion-reduce:transform-none motion-reduce:transition-none sm:px-5 sm:py-3.5"
              >
                <span className="capsule-icon inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#DC1F26] text-white shadow-sm sm:h-10 sm:w-10">
                  <Icon className="h-4 w-4 sm:h-5 sm:w-5" aria-hidden="true" />
                </span>
                <span className="min-w-0 text-left">
                  <span className="block font-['Sora'] text-[11px] font-bold leading-tight text-white sm:hidden">
                    {item.shortLabel}
                  </span>
                  <span className="hidden font-['Sora'] text-sm font-bold text-white sm:block">
                    {item.label}
                  </span>
                  <span className="mt-0.5 hidden text-[11px] text-white/75 sm:block">
                    {item.detail}
                  </span>
                </span>
              </a>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
