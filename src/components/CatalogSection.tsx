import { useMemo, useState } from "react";
import {
  Info,
  Minus,
  Plus,
  Search,
  ShoppingBag,
  Tag,
  Trash2,
  X,
} from "lucide-react";
import { motion } from "framer-motion";
import {
  CATALOG_PRODUCTS,
  DEPARTMENTS,
  type CatalogFilter,
} from "../data/catalog";
import { formatBRL, useBag } from "../context/BagContext";
import { Badge } from "./ui/badge";
import { Card } from "./ui/card";
import { Button } from "./ui/button";

interface CatalogSectionProps {
  selectedCategory: CatalogFilter;
  onSelectCategory: (cat: CatalogFilter) => void;
}

export function CatalogSection({
  selectedCategory,
  onSelectCategory,
}: CatalogSectionProps) {
  const [searchQuery, setSearchQuery] = useState("");
  const [showAllInOverview, setShowAllInOverview] = useState(false);

  const { getQuantity, addItem, setQuantity, totalItems, subtotal, openDrawer } =
    useBag();

  const departmentMap = useMemo(
    () => new Map(DEPARTMENTS.map((d) => [d.id, d])),
    []
  );

  const filteredProducts = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    return CATALOG_PRODUCTS.filter((item) => {
      const catOk =
        selectedCategory === "todas" || item.category === selectedCategory;
      if (!catOk) return false;
      if (!q) return true;
      const catLabel = departmentMap.get(item.category)?.title.toLowerCase() ?? "";
      return (
        item.name.toLowerCase().includes(q) ||
        item.unit.toLowerCase().includes(q) ||
        catLabel.includes(q)
      );
    });
  }, [selectedCategory, searchQuery, departmentMap]);

  const visibleProducts = useMemo(() => {
    if (
      selectedCategory !== "todas" ||
      searchQuery.trim().length > 0 ||
      showAllInOverview
    ) {
      return filteredProducts;
    }
    const perCat = new Map<string, number>();
    return filteredProducts.filter((item) => {
      const count = perCat.get(item.category) ?? 0;
      if (count >= 2) return false;
      perCat.set(item.category, count + 1);
      return true;
    });
  }, [filteredProducts, selectedCategory, searchQuery, showAllInOverview]);

  const activeDepartment =
    selectedCategory === "todas" ? null : departmentMap.get(selectedCategory) ?? null;

  return (
    <section id="ofertas" className="w-full bg-[#F7F7F9] py-16 sm:py-20">
      <div className="w-full px-5 sm:px-8 lg:px-12 xl:px-16">
        {/* Cabeçalho de campanha promocional + busca + sacola */}
        <div className="flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl space-y-3">
            <Badge variant="red">
              <Tag className="h-3.5 w-3.5" />
              Ofertas da Semana &amp; Catálogo · Demonstração
            </Badge>
            <h2 className="font-['Sora'] text-3xl font-extrabold text-zinc-950 sm:text-4xl">
              Ofertas de campanha e catálogo para montar sua sacola
            </h2>
            <p className="text-base text-zinc-600">
              Estrutura comercial pronta para publicar promoções da semana por
              departamento, com preços demonstrativos marcados e sacola interativa.
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <div className="relative w-full sm:w-72">
              <Search
                className="pointer-events-none absolute top-1/2 left-3.5 h-4 w-4 -translate-y-1/2 text-zinc-400"
                aria-hidden="true"
              />
              <input
                type="search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Buscar produto no catálogo..."
                aria-label="Buscar produto no catálogo"
                className="h-11 w-full rounded-xl border border-zinc-300 bg-white pr-9 pl-10 text-sm text-zinc-900 shadow-xs placeholder:text-zinc-400 focus:border-[#DC1F26] focus:outline-none focus:ring-2 focus:ring-[#DC1F26]/20"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery("")}
                  aria-label="Limpar busca"
                  className="absolute top-1/2 right-2.5 -translate-y-1/2 rounded-md p-1 text-zinc-400 hover:text-zinc-700 cursor-pointer"
                >
                  <X className="h-4 w-4" />
                </button>
              )}
            </div>

            <Button
              variant="secondary"
              onClick={openDrawer}
              className="shrink-0 justify-between gap-3"
              data-testid="catalog-open-bag-btn"
            >
              <span className="inline-flex items-center gap-2">
                <ShoppingBag className="h-4 w-4 text-[#FACC15]" aria-hidden="true" />
                Ver sacola ({totalItems})
              </span>
              {totalItems > 0 && (
                <span className="rounded-md bg-[#FACC15] px-2 py-0.5 text-xs font-extrabold text-zinc-950">
                  {formatBRL(subtotal)}
                </span>
              )}
            </Button>
          </div>
        </div>

        {/* Aviso transparente de demonstração */}
        <div
          role="note"
          className="mt-6 flex flex-col gap-2 rounded-2xl border border-amber-300/90 bg-amber-50 px-4 py-3 text-sm text-amber-950 sm:flex-row sm:items-center sm:justify-between"
        >
          <div className="flex items-start gap-2.5 sm:items-center">
            <Info className="mt-0.5 h-5 w-5 shrink-0 text-amber-700 sm:mt-0" aria-hidden="true" />
            <p>
              <strong>Modelo de demonstração:</strong> nenhum desconto ou preço
              oficial foi inventado. Os valores abaixo são{" "}
              <strong>preços ilustrativos</strong> prontos para receber o encarte
              real da semana e a validade de cada loja participante.
            </p>
          </div>
          <span className="shrink-0 self-start rounded-full bg-amber-200/80 px-3 py-1 text-xs font-bold text-amber-950 sm:self-auto">
            Preços ilustrativos
          </span>
        </div>

        {/* Abas de filtro rápido por departamento */}
        <div
          role="tablist"
          aria-label="Filtrar catálogo por departamento"
          className="mt-6 flex flex-wrap gap-2"
        >
          <button
            role="tab"
            type="button"
            aria-selected={selectedCategory === "todas"}
            onClick={() => onSelectCategory("todas")}
            className={`rounded-full px-4 py-2 text-sm font-semibold transition cursor-pointer ${
              selectedCategory === "todas"
                ? "bg-[#DC1F26] text-white shadow-sm shadow-[#DC1F26]/25"
                : "border border-zinc-200 bg-white text-zinc-700 hover:border-zinc-300 hover:bg-zinc-50"
            }`}
          >
            Todas ({CATALOG_PRODUCTS.length})
          </button>
          {DEPARTMENTS.map((dept) => {
            const active = selectedCategory === dept.id;
            const count = CATALOG_PRODUCTS.filter((p) => p.category === dept.id).length;
            return (
              <button
                key={dept.id}
                role="tab"
                type="button"
                aria-selected={active}
                onClick={() => onSelectCategory(dept.id)}
                className={`rounded-full px-4 py-2 text-sm font-semibold transition cursor-pointer ${
                  active
                    ? "bg-[#DC1F26] text-white shadow-sm shadow-[#DC1F26]/25"
                    : "border border-zinc-200 bg-white text-zinc-700 hover:border-zinc-300 hover:bg-zinc-50"
                }`}
              >
                {dept.tabLabel} ({count})
              </button>
            );
          })}
        </div>

        {/* Banner com a foto real do departamento selecionado */}
        {activeDepartment && (
          <div className="mt-6 relative overflow-hidden rounded-2xl border border-zinc-200 bg-[#141418] text-white shadow-sm">
            <img
              src={activeDepartment.coverImage}
              alt={activeDepartment.coverAlt}
              className="absolute inset-0 h-full w-full object-cover opacity-50"
            />
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-gradient-to-r from-black/88 via-black/65 to-black/30"
            />
            <div className="relative z-10 flex flex-col gap-3 px-6 py-6 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <span className="inline-block rounded-full bg-[#FACC15] px-2.5 py-0.5 text-[11px] font-extrabold uppercase tracking-wide text-zinc-950">
                  Departamento selecionado
                </span>
                <h3 className="mt-1.5 font-['Sora'] text-xl font-extrabold sm:text-2xl">
                  {activeDepartment.title}
                </h3>
                <p className="text-sm text-zinc-200">
                  {activeDepartment.shortDesc} · {filteredProducts.length} itens
                </p>
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => onSelectCategory("todas")}
                className="self-start border border-white/30 bg-white/10 text-white hover:bg-white/20 hover:text-white sm:self-auto"
              >
                Ver todos os departamentos
              </Button>
            </div>
          </div>
        )}

        {/* Grade de Produtos com Sacola */}
        {visibleProducts.length === 0 ? (
          <div className="mt-10 rounded-2xl border border-dashed border-zinc-300 bg-white p-10 text-center">
            <p className="font-['Sora'] text-base font-bold text-zinc-900">
              Nenhum produto encontrado para &ldquo;{searchQuery}&rdquo;
            </p>
            <p className="mt-1 text-sm text-zinc-600">
              Tente outro termo ou limpe os filtros para ver todo o catálogo.
            </p>
            <Button
              variant="outline"
              size="sm"
              className="mt-4"
              onClick={() => {
                setSearchQuery("");
                onSelectCategory("todas");
              }}
            >
              Limpar filtros
            </Button>
          </div>
        ) : (
          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:gap-5">
            {visibleProducts.map((product) => {
              const qty = getQuantity(product.id);
              const deptInfo = departmentMap.get(product.category);
              return (
                <motion.div
                  key={product.id}
                  layout
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.1 }}
                  transition={{ duration: 0.25 }}
                  className="h-full"
                >
                  <Card
                    data-testid={`product-card-${product.id}`}
                    className="group flex h-full flex-col overflow-hidden border-zinc-200/90 bg-white hover:border-zinc-300 hover:shadow-lg"
                  >
                    <div className="relative aspect-[4/3] overflow-hidden bg-zinc-100">
                      <img
                        src={product.image}
                        alt={product.imageAlt}
                        loading="lazy"
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
                        <span className="rounded-full bg-zinc-950/80 px-2.5 py-1 text-[11px] font-bold text-white backdrop-blur-xs">
                          {deptInfo?.tabLabel}
                        </span>
                        {product.badge && (
                          <span className="rounded-full bg-[#FACC15] px-2.5 py-1 text-[11px] font-extrabold text-zinc-950">
                            {product.badge}
                          </span>
                        )}
                      </div>
                    </div>

                    <div className="flex flex-1 flex-col justify-between p-4 sm:p-5">
                      <div>
                        <h3 className="font-['Sora'] text-base font-bold leading-snug text-zinc-950">
                          {product.name}
                        </h3>
                        <p className="mt-0.5 text-xs font-medium text-zinc-500">
                          Unidade: {product.unit} · Todas as lojas
                        </p>
                      </div>

                      <div className="mt-4 border-t border-zinc-100 pt-3.5">
                        <div className="flex flex-wrap items-baseline justify-between gap-2">
                          <div>
                            <span className="font-['Sora'] text-xl font-extrabold text-[#DC1F26]">
                              {formatBRL(product.illustrativePrice)}
                            </span>
                            <span className="ml-1 text-xs font-semibold text-zinc-500">
                              / {product.unit}
                            </span>
                          </div>
                          <span className="rounded-md border border-amber-200 bg-amber-50 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-amber-900">
                            preço ilustrativo
                          </span>
                        </div>

                        <div className="mt-3.5">
                          {qty === 0 ? (
                            <Button
                              variant="primary"
                              size="md"
                              onClick={() => addItem(product)}
                              className="w-full"
                              data-testid={`add-to-bag-${product.id}`}
                            >
                              <ShoppingBag className="h-4 w-4" aria-hidden="true" />
                              Adicionar à sacola
                            </Button>
                          ) : (
                            <div
                              className="flex h-11 items-center justify-between rounded-xl border border-[#DC1F26]/30 bg-red-50/70 px-1.5"
                              data-testid={`qty-control-${product.id}`}
                            >
                              <button
                                type="button"
                                onClick={() => setQuantity(product.id, qty - 1)}
                                aria-label={
                                  qty === 1
                                    ? `Remover ${product.name} da sacola`
                                    : `Diminuir quantidade de ${product.name}`
                                }
                                data-testid={`dec-${product.id}`}
                                className="inline-flex h-8 w-9 items-center justify-center rounded-lg bg-white text-[#DC1F26] shadow-xs transition hover:bg-[#DC1F26] hover:text-white cursor-pointer"
                              >
                                {qty === 1 ? (
                                  <Trash2 className="h-4 w-4" />
                                ) : (
                                  <Minus className="h-4 w-4" />
                                )}
                              </button>
                              <span
                                className="font-['Sora'] text-sm font-extrabold text-zinc-950"
                                data-testid={`qty-value-${product.id}`}
                              >
                                {qty} na sacola
                              </span>
                              <button
                                type="button"
                                onClick={() => setQuantity(product.id, qty + 1)}
                                aria-label={`Aumentar quantidade de ${product.name}`}
                                data-testid={`inc-${product.id}`}
                                className="inline-flex h-8 w-9 items-center justify-center rounded-lg bg-[#DC1F26] text-white shadow-xs transition hover:bg-[#B8161C] cursor-pointer"
                              >
                                <Plus className="h-4 w-4" />
                              </button>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        )}

        {selectedCategory === "todas" &&
          searchQuery.trim() === "" &&
          filteredProducts.length > visibleProducts.length && (
            <div className="mt-8 flex justify-center">
              <Button
                variant="outline"
                size="lg"
                onClick={() => setShowAllInOverview(true)}
                className="bg-white"
              >
                Mostrar todos os {filteredProducts.length} produtos do catálogo
              </Button>
            </div>
          )}
      </div>
    </section>
  );
}
