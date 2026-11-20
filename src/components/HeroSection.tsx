import { motion } from "framer-motion";
import { MapPin, Tag, CreditCard, Smartphone, Clock, ArrowRight } from "lucide-react";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";

const HIGHLIGHTS = [
  {
    icon: Clock,
    label: "Desde 1989",
    detail: "Tradição em Uberlândia",
  },
  {
    icon: MapPin,
    label: "10 Supermercados",
    detail: "Perto do seu bairro",
  },
  {
    icon: CreditCard,
    label: "Cartão Tricard Leal",
    detail: "Até 40 dias para pagar",
  },
  {
    icon: Smartphone,
    label: "App Clube Leal",
    detail: "Descontos no CPF",
  },
];

export function HeroSection() {
  const scrollTo = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="inicio"
      className="relative overflow-hidden bg-gradient-to-b from-[#FFFDF9] via-white to-[#F7F7F9] pt-8 pb-14 sm:pt-12 sm:pb-20"
    >
      {/* Subtle geometric brand backdrop */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 right-0 h-96 w-96 rounded-full bg-[#DC1F26]/6 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 -left-24 h-80 w-80 rounded-full bg-[#FACC15]/15 blur-3xl"
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-12">
          {/* Left Copy Column */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="lg:col-span-6 space-y-6"
          >
            <div className="flex flex-wrap items-center gap-2">
              <Badge variant="red">Desde 1989 em Uberlândia/MG</Badge>
              <Badge variant="gold">10 Lojas na cidade</Badge>
            </div>

            <h1 className="relative z-0 font-['Sora'] text-3xl font-extrabold leading-[1.12] tracking-tight text-zinc-950 sm:text-5xl lg:text-[3.25rem]">
              No Leal é{" "}
              <span className="relative inline-block text-[#DC1F26]">
                tudo mais barato!
                <span
                  aria-hidden="true"
                  className="absolute -bottom-1 left-0 h-2 w-full rounded-full bg-[#FACC15]/70 -z-10"
                />
              </span>{" "}
              Economia perto da sua família.
            </h1>

            <p className="max-w-xl text-base leading-relaxed text-zinc-600 sm:text-lg">
              Rede supermercadista uberlandense com açougue, padaria própria, hortifrúti
              selecionado e mercearia completa. Encontre a loja mais próxima, aproveite o{" "}
              <strong className="font-semibold text-zinc-900">Cartão Tricard Leal</strong> e
              ative ofertas no <strong className="font-semibold text-zinc-900">Clube Leal</strong>.
            </p>

            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button
                size="lg"
                variant="primary"
                onClick={() => scrollTo("#lojas")}
              >
                <MapPin className="h-5 w-5" />
                Encontrar loja mais próxima
                <ArrowRight className="h-4 w-4" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => scrollTo("#ofertas")}
              >
                <Tag className="h-5 w-5 text-[#DC1F26]" />
                Ver ofertas da semana
              </Button>
            </div>

            <div className="grid grid-cols-2 gap-3 pt-4 sm:grid-cols-4">
              {HIGHLIGHTS.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.label}
                    className="rounded-2xl border border-zinc-200/80 bg-white/90 p-3.5 shadow-xs"
                  >
                    <Icon className="h-5 w-5 text-[#DC1F26] mb-2" aria-hidden="true" />
                    <p className="text-xs font-bold text-zinc-950">{item.label}</p>
                    <p className="text-[11px] text-zinc-500 mt-0.5">{item.detail}</p>
                  </div>
                );
              })}
            </div>
          </motion.div>

          {/* Right Visual Collage Column with Real Leal Photos */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.08 }}
            className="lg:col-span-6"
          >
            <div className="relative">
              {/* Primary Real Store Photo */}
              <div className="relative overflow-hidden rounded-3xl border border-zinc-200 bg-zinc-900 shadow-2xl shadow-zinc-900/10 aspect-[4/3]">
                <img
                  src="https://s2-g1.glbimg.com/P9-fs2eM_SVFcWGfKTyvhvUeVyM=/1600x0/filters:format(jpeg)/https://i.s3.glbimg.com/v1/AUTH_59edd422c0c84a879bd37670ae4f538a/internal_photos/bs/2022/A/i/01ZIRBQ7O5OcSz4UlEeQ/leal.jpeg"
                  alt="Fachada real de uma das unidades do Supermercados Leal em Uberlândia-MG"
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-zinc-950/15 to-transparent" />

                {/* Top pill inside photo */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between gap-2">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-white/95 px-3 py-1 text-xs font-bold text-zinc-900 shadow-sm">
                    <span className="h-2 w-2 rounded-full bg-[#DC1F26]" aria-hidden="true" />
                    Uberlândia · MG
                  </span>
                  <span className="rounded-full bg-[#FACC15] px-3 py-1 text-xs font-extrabold text-zinc-950 shadow-sm">
                    10 Lojas Ativas
                  </span>
                </div>

                {/* Bottom info overlay */}
                <div className="absolute bottom-4 left-4 right-4 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wider text-amber-300">
                      Matriz Presidente Roosevelt + 9 filiais
                    </p>
                    <p className="font-['Sora'] text-lg font-bold text-white sm:text-xl">
                      Presente nos principais bairros de Uberlândia
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => scrollTo("#cartao-leal")}
                    className="inline-flex shrink-0 items-center gap-1.5 rounded-xl bg-[#DC1F26] px-4 py-2.5 text-xs font-bold text-white shadow-lg transition hover:bg-[#B8161C] cursor-pointer"
                  >
                    Conhecer Cartão 3D
                    <ArrowRight className="h-3.5 w-3.5" />
                  </button>
                </div>
              </div>

              {/* Secondary real interior inset card (hidden on smallest screens or cleanly stacked) */}
              <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
                <div className="flex items-center gap-3 rounded-2xl border border-zinc-200 bg-white p-3 shadow-sm">
                  <img
                    src="https://regionalzao.com.br/wp-content/uploads/2025/12/e83e4976-fc8d-41fa-8efc-36841a3ecb9e.webp"
                    alt="Unidade Novo Mundo do Supermercados Leal em Uberlândia"
                    className="h-16 w-20 shrink-0 rounded-xl object-cover"
                    loading="lazy"
                  />
                  <div>
                    <p className="text-xs font-bold text-[#DC1F26]">Expansão em Uberlândia</p>
                    <p className="text-sm font-bold text-zinc-900 leading-snug">
                      10ª loja inaugurada no Novo Mundo
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3 rounded-2xl border border-zinc-200 bg-white p-3 shadow-sm">
                  <img
                    src="https://play-lh.googleusercontent.com/abowZ3thw1d6DPAwvZepWSevWtibrfrr1bndFyPgLgDqdYXJDrtAfCTZk1az8TP2XSFXUzs4mXccLcXqKy5baQ=s0-br30"
                    alt="Ícone oficial do aplicativo Clube Leal"
                    className="h-14 w-14 shrink-0 rounded-xl border border-zinc-100 object-contain bg-white p-1"
                    loading="lazy"
                  />
                  <div>
                    <p className="text-xs font-bold text-zinc-500">Fidelidade Digital</p>
                    <p className="text-sm font-bold text-zinc-900 leading-snug">
                      App Clube Leal com vantagens no CPF
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
