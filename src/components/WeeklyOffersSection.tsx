import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight, Info, Sparkles, Tag } from "lucide-react";
import { motion } from "framer-motion";
import {
  DEMO_OFFERS,
  OFFER_CATEGORIES,
  type OfferCategory,
} from "../data/offers";
import { Badge } from "./ui/badge";
import { Card } from "./ui/card";

export function WeeklyOffersSection() {
  const [selectedCategory, setSelectedCategory] =
    useState<OfferCategory>("Todas");

  const filteredOffers =
    selectedCategory === "Todas"
      ? DEMO_OFFERS
      : DEMO_OFFERS.filter((item) => item.category === selectedCategory);

  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    containScroll: "trimSnaps",
    dragFree: false,
  });

  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(false);

  const updateScrollButtons = useCallback(() => {
    if (!emblaApi) return;
    setCanPrev(emblaApi.canScrollPrev());
    setCanNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.reInit();
    updateScrollButtons();
    emblaApi.on("select", updateScrollButtons);
    emblaApi.on("reInit", updateScrollButtons);
  }, [emblaApi, selectedCategory, updateScrollButtons]);

  return (
    <section id="ofertas" className="bg-[#F7F7F9] py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl space-y-3">
            <Badge variant="red">
              <Tag className="h-3.5 w-3.5" />
              Ofertas da Semana · Demonstração de Encarte
            </Badge>
            <h2 className="font-['Sora'] text-3xl font-extrabold text-zinc-950 sm:text-4xl">
              Encarte semanal pronto para atualizar em minutos
            </h2>
            <p className="text-base text-zinc-600">
              Estrutura organizada por setores (Hortifrúti, Açougue, Padaria e
              Mercearia) para publicar promoções válidas em todas as 10 lojas de
              Uberlândia.
            </p>
          </div>

          {/* Embla Carousel Controls */}
          <div className="flex items-center gap-2 self-start lg:self-end">
            <button
              type="button"
              onClick={() => emblaApi?.scrollPrev()}
              disabled={!canPrev}
              aria-label="Oferta anterior"
              className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-zinc-300 bg-white text-zinc-800 shadow-xs transition hover:bg-zinc-100 disabled:opacity-40 cursor-pointer"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={() => emblaApi?.scrollNext()}
              disabled={!canNext}
              aria-label="Próxima oferta"
              className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-zinc-300 bg-white text-zinc-800 shadow-xs transition hover:bg-zinc-100 disabled:opacity-40 cursor-pointer"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Honest Example Notice Banner */}
        <div
          role="note"
          className="mt-6 flex flex-col gap-2 rounded-2xl border border-amber-300/80 bg-amber-50 px-4 py-3 text-sm text-amber-950 sm:flex-row sm:items-center sm:justify-between"
        >
          <div className="flex items-start gap-2.5 sm:items-center">
            <Info className="h-5 w-5 shrink-0 text-amber-700 mt-0.5 sm:mt-0" aria-hidden="true" />
            <p>
              <strong>Conteúdo provisório de demonstração:</strong> os cards abaixo
              ilustram o formato do encarte semanal, sem preços inventados. Na versão
              oficial, recebem os valores reais da semana.
            </p>
          </div>
          <span className="shrink-0 rounded-full bg-amber-200/70 px-3 py-1 text-xs font-bold text-amber-950">
            Fácil atualização semanal
          </span>
        </div>

        {/* Category Filter Tabs */}
        <div
          role="tablist"
          aria-label="Filtrar ofertas por setor"
          className="mt-6 flex flex-wrap gap-2"
        >
          {OFFER_CATEGORIES.map((category) => {
            const active = selectedCategory === category;
            return (
              <button
                key={category}
                role="tab"
                type="button"
                aria-selected={active}
                onClick={() => setSelectedCategory(category)}
                className={`rounded-full px-4 py-2 text-sm font-semibold transition cursor-pointer ${
                  active
                    ? "bg-[#DC1F26] text-white shadow-sm shadow-[#DC1F26]/25"
                    : "bg-white text-zinc-700 border border-zinc-200 hover:border-zinc-300 hover:bg-zinc-50"
                }`}
              >
                {category}
              </button>
            );
          })}
        </div>

        {/* Embla Carousel Viewport */}
        <div className="mt-8 overflow-hidden" ref={emblaRef}>
          <div className="flex -ml-4">
            {filteredOffers.map((item, idx) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.3, delay: idx * 0.04 }}
                className="min-w-0 shrink-0 basis-[85%] pl-4 sm:basis-1/2 lg:basis-1/3"
              >
                <Card className="group flex h-full flex-col overflow-hidden hover:shadow-md">
                  <div className="relative aspect-[16/10] overflow-hidden bg-zinc-100">
                    <img
                      src={item.image}
                      alt={item.imageAlt}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
                      <span className="rounded-full bg-zinc-950/85 px-2.5 py-1 text-[11px] font-bold text-white backdrop-blur-xs">
                        {item.category}
                      </span>
                      <span className="rounded-full bg-[#FACC15] px-2.5 py-1 text-[11px] font-extrabold text-zinc-950">
                        {item.demoBadge}
                      </span>
                    </div>
                  </div>

                  <div className="flex flex-1 flex-col justify-between p-5">
                    <div>
                      <h3 className="font-['Sora'] text-lg font-bold text-zinc-950">
                        {item.title}
                      </h3>
                      <p className="mt-1 text-sm text-zinc-600">{item.unitLabel}</p>
                    </div>

                    <div className="mt-5 border-t border-zinc-100 pt-4">
                      <div className="flex items-center justify-between gap-2">
                        <span className="text-xs font-semibold uppercase tracking-wide text-zinc-500">
                          Espaço do preço
                        </span>
                        <span className="rounded-lg bg-red-50 px-2.5 py-1 text-xs font-bold text-[#DC1F26]">
                          {item.demoPriceLabel}
                        </span>
                      </div>
                      <p className="mt-2.5 flex items-center gap-1.5 text-xs font-semibold text-zinc-700">
                        <Sparkles className="h-3.5 w-3.5 text-[#DC1F26]" aria-hidden="true" />
                        {item.clubeTag}
                      </p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
