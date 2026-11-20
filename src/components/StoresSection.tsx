import { useMemo, useState } from "react";
import {
  Clock,
  ExternalLink,
  MapPin,
  Navigation,
  Phone,
  Search,
} from "lucide-react";
import { STORES, type StoreUnit } from "../data/stores";
import { Badge } from "./ui/badge";
import { Card } from "./ui/card";

const REGIONS: Array<"Todas" | StoreUnit["region"]> = [
  "Todas",
  "Norte",
  "Leste",
  "Sul",
  "Oeste",
];

export function StoresSection() {
  const [search, setSearch] = useState("");
  const [regionFilter, setRegionFilter] = useState<
    "Todas" | StoreUnit["region"]
  >("Todas");
  const [selectedNeighborhood, setSelectedNeighborhood] =
    useState<string>("Todos");
  const [activeStoreId, setActiveStoreId] = useState<string>(STORES[0].id);

  const filteredStores = useMemo(() => {
    return STORES.filter((store) => {
      const matchesRegion =
        regionFilter === "Todas" || store.region === regionFilter;
      const matchesNeighborhood =
        selectedNeighborhood === "Todos" ||
        store.neighborhood === selectedNeighborhood;
      const q = search.trim().toLowerCase();
      const matchesQuery =
        !q ||
        store.name.toLowerCase().includes(q) ||
        store.neighborhood.toLowerCase().includes(q) ||
        store.address.toLowerCase().includes(q);
      return matchesRegion && matchesNeighborhood && matchesQuery;
    });
  }, [regionFilter, selectedNeighborhood, search]);

  const activeStore =
    STORES.find((s) => s.id === activeStoreId) ?? filteredStores[0] ?? STORES[0];

  const embedUrl = `https://maps.google.com/maps?q=${encodeURIComponent(
    activeStore.embedQuery
  )}&t=&z=15&ie=UTF8&iwloc=&output=embed`;

  return (
    <section id="lojas" className="bg-[#F7F7F9] py-16 sm:py-20">
      <div className="w-full px-5 sm:px-8 lg:px-12 xl:px-16">
        <div className="max-w-3xl space-y-3">
          <Badge variant="red">
            <MapPin className="h-3.5 w-3.5" />
            Lojas em Uberlândia/MG
          </Badge>
          <h2 className="font-['Sora'] text-3xl font-extrabold text-zinc-950 sm:text-4xl">
            Nossas Lojas em Uberlândia
          </h2>
          <p className="text-base text-zinc-600">
            Filtre por bairro ou região para ver endereço completo, telefone,
            horário de funcionamento e traçar rota no Google Maps.
          </p>
        </div>

        {/* Search & Filters */}
        <div className="mt-8 space-y-4">
          <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
            {/* Search by street/neighborhood */}
            <div className="relative w-full lg:max-w-sm">
              <Search
                className="pointer-events-none absolute top-1/2 left-3.5 h-4 w-4 -translate-y-1/2 text-zinc-400"
                aria-hidden="true"
              />
              <input
                type="search"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Buscar bairro ou avenida..."
                aria-label="Buscar loja por bairro ou endereço"
                className="h-11 w-full rounded-xl border border-zinc-300 bg-white pr-4 pl-10 text-sm text-zinc-900 placeholder:text-zinc-400 focus:border-[#DC1F26] focus:outline-none focus:ring-2 focus:ring-[#DC1F26]/20"
              />
            </div>

            {/* Region Filter Pills */}
            <div
              role="group"
              aria-label="Filtrar lojas por região"
              className="flex flex-wrap gap-2"
            >
              {REGIONS.map((region) => {
                const active = regionFilter === region;
                return (
                  <button
                    key={region}
                    type="button"
                    onClick={() => {
                      setRegionFilter(region);
                      setSelectedNeighborhood("Todos");
                    }}
                    className={`rounded-full px-4 py-2 text-xs font-bold transition cursor-pointer ${
                      active
                        ? "bg-zinc-950 text-white"
                        : "bg-white text-zinc-700 border border-zinc-200 hover:bg-zinc-100"
                    }`}
                  >
                    {region === "Todas" ? "Todas as lojas" : `Região ${region}`}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Direct Neighborhood Quick Chips */}
          <div
            role="group"
            aria-label="Filtrar por bairro"
            className="flex flex-wrap gap-1.5"
          >
            <button
              type="button"
              onClick={() => setSelectedNeighborhood("Todos")}
              className={`rounded-lg px-3 py-1.5 text-xs font-semibold transition cursor-pointer ${
                selectedNeighborhood === "Todos"
                  ? "bg-[#DC1F26] text-white"
                  : "bg-white text-zinc-600 border border-zinc-200 hover:bg-zinc-50"
              }`}
            >
              Todos os bairros
            </button>
            {STORES.map((store) => {
              const active = selectedNeighborhood === store.neighborhood;
              return (
                <button
                  key={store.id}
                  type="button"
                  onClick={() => {
                    setSelectedNeighborhood(store.neighborhood);
                    setRegionFilter("Todas");
                    setActiveStoreId(store.id);
                  }}
                  className={`rounded-lg px-3 py-1.5 text-xs font-semibold transition cursor-pointer ${
                    active
                      ? "bg-[#DC1F26] text-white"
                      : "bg-white text-zinc-600 border border-zinc-200 hover:bg-zinc-50"
                  }`}
                >
                  {store.neighborhood}
                </button>
              );
            })}
          </div>
        </div>

        {/* Interactive Split: Store List + Sticky Map */}
        <div className="mt-8 grid gap-8 lg:grid-cols-12">
          {/* Store Cards */}
          <div className="lg:col-span-7 space-y-3">
            {filteredStores.length === 0 ? (
              <Card className="p-8 text-center">
                <p className="text-sm font-semibold text-zinc-800">
                  Nenhuma unidade encontrada para "{search}".
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setSearch("");
                    setRegionFilter("Todas");
                    setSelectedNeighborhood("Todos");
                  }}
                  className="mt-3 text-xs font-bold text-[#DC1F26] underline cursor-pointer"
                >
                  Mostrar todas as lojas
                </button>
              </Card>
            ) : (
              <div className="grid gap-3.5 sm:grid-cols-2">
                {filteredStores.map((store) => {
                  const isSelected = store.id === activeStore.id;
                  return (
                    <Card
                      key={store.id}
                      className={`flex flex-col justify-between p-5 transition-all ${
                        isSelected
                          ? "border-[#DC1F26] ring-2 ring-[#DC1F26]/20 shadow-md"
                          : "hover:border-zinc-300"
                      }`}
                    >
                      <div>
                        <div className="flex items-start justify-between gap-2">
                          <div>
                            <span className="text-[11px] font-bold uppercase tracking-wider text-zinc-500">
                              Região {store.region}
                            </span>
                            <h3 className="font-['Sora'] text-base font-bold text-zinc-950">
                              {store.name}
                            </h3>
                          </div>
                          {store.badge && (
                            <span className="shrink-0 rounded-full bg-[#FACC15]/25 px-2.5 py-0.5 text-[11px] font-bold text-amber-950 border border-[#FACC15]/50">
                              {store.badge}
                            </span>
                          )}
                        </div>

                        <p className="mt-2.5 text-sm text-zinc-700 leading-snug">
                          {store.address}
                        </p>
                        <p className="text-xs text-zinc-500 mt-0.5">
                          Uberlândia - MG · CEP {store.cep}
                        </p>

                        <div className="mt-3 space-y-1.5 text-xs text-zinc-600">
                          <p className="flex items-center gap-1.5">
                            <Clock className="h-3.5 w-3.5 shrink-0 text-[#DC1F26]" aria-hidden="true" />
                            <span>
                              {store.hoursWeekday} · {store.hoursSunday}
                            </span>
                          </p>
                          <p className="flex items-center gap-1.5">
                            <Phone className="h-3.5 w-3.5 shrink-0 text-[#DC1F26]" aria-hidden="true" />
                            <a
                              href={store.phoneHref}
                              className="font-semibold text-zinc-900 hover:text-[#DC1F26] underline-offset-2 hover:underline"
                            >
                              {store.phoneDisplay}
                            </a>
                            {store.phoneNote && (
                              <span className="text-[11px] text-zinc-400">
                                ({store.phoneNote})
                              </span>
                            )}
                          </p>
                        </div>
                      </div>

                      <div className="mt-4 flex items-center gap-2 border-t border-zinc-100 pt-3.5">
                        <button
                          type="button"
                          onClick={() => setActiveStoreId(store.id)}
                          className={`flex-1 rounded-xl px-3 py-2 text-xs font-bold transition cursor-pointer ${
                            isSelected
                              ? "bg-zinc-950 text-white"
                              : "bg-zinc-100 text-zinc-800 hover:bg-zinc-200"
                          }`}
                        >
                          {isSelected ? "No mapa" : "Ver no mapa"}
                        </button>
                        <a
                          href={store.mapsUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-xl bg-[#DC1F26] px-3 py-2 text-xs font-bold text-white transition hover:bg-[#B8161C]"
                        >
                          <Navigation className="h-3.5 w-3.5" aria-hidden="true" />
                          Como chegar
                        </a>
                      </div>
                    </Card>
                  );
                })}
              </div>
            )}
          </div>

          {/* Sticky Map Panel */}
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-24 rounded-3xl border border-zinc-200 bg-white p-4 shadow-sm">
              <div className="mb-3 flex items-start justify-between gap-3">
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#DC1F26]">
                    Unidade selecionada no mapa
                  </span>
                  <h3 className="font-['Sora'] text-lg font-bold text-zinc-950">
                    {activeStore.name}
                  </h3>
                  <p className="text-xs text-zinc-600 mt-0.5">
                    {activeStore.address}
                  </p>
                </div>
                <a
                  href={activeStore.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Abrir ${activeStore.name} no Google Maps`}
                  className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-zinc-100 text-zinc-800 hover:bg-zinc-200"
                >
                  <ExternalLink className="h-4 w-4" />
                </a>
              </div>

              <div className="overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-100 aspect-[4/3]">
                <iframe
                  title={`Mapa de localização: ${activeStore.name}`}
                  src={embedUrl}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="h-full w-full border-0"
                />
              </div>

              <div className="mt-3 flex flex-wrap items-center justify-between gap-2 text-xs text-zinc-600">
                <a
                  href={activeStore.phoneHref}
                  className="inline-flex items-center gap-1.5 font-bold text-zinc-900 hover:text-[#DC1F26]"
                >
                  <Phone className="h-3.5 w-3.5 text-[#DC1F26]" aria-hidden="true" />
                  Ligar: {activeStore.phoneDisplay}
                </a>
                <a
                  href={activeStore.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 font-bold text-[#DC1F26] hover:underline"
                >
                  Abrir rotas no Google Maps
                  <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
