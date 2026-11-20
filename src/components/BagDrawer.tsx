import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  CheckCircle2,
  Info,
  Minus,
  Plus,
  ShoppingBag,
  Trash2,
  X,
} from "lucide-react";
import { formatBRL, useBag } from "../context/BagContext";
import { Button } from "./ui/button";

export function BagDrawer() {
  const {
    items,
    totalItems,
    subtotal,
    isDrawerOpen,
    closeDrawer,
    setQuantity,
    removeItem,
    clearBag,
  } = useBag();

  const [demoSubmitted, setDemoSubmitted] = useState(false);

  useEffect(() => {
    if (!isDrawerOpen) {
      setDemoSubmitted(false);
      return;
    }
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeDrawer();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isDrawerOpen, closeDrawer]);

  const handleGoToCatalog = () => {
    closeDrawer();
    document.querySelector("#ofertas")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <AnimatePresence>
      {isDrawerOpen && (
        <div
          className="fixed inset-0 z-[70] flex justify-end"
          role="dialog"
          aria-modal="true"
          aria-label="Sacola de compras demonstrativa"
          data-testid="bag-drawer"
        >
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={closeDrawer}
            className="fixed inset-0 bg-black/60 backdrop-blur-xs"
            aria-hidden="true"
          />

          {/* Painel lateral */}
          <motion.aside
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 320, damping: 32 }}
            className="relative z-10 flex h-full w-full max-w-md flex-col bg-white shadow-2xl"
          >
            {/* Topo do Drawer */}
            <div className="flex items-center justify-between border-b border-zinc-200 px-5 py-4">
              <div className="flex items-center gap-2.5">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-[#DC1F26] text-white">
                  <ShoppingBag className="h-4 w-4" aria-hidden="true" />
                </span>
                <div>
                  <h2 className="font-['Sora'] text-base font-extrabold text-zinc-950">
                    Sua Sacola
                  </h2>
                  <p className="text-xs text-zinc-500">
                    {totalItems} {totalItems === 1 ? "item" : "itens"} · modelo
                    demonstrativo
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                {items.length > 0 && !demoSubmitted && (
                  <button
                    type="button"
                    onClick={clearBag}
                    className="rounded-lg px-2.5 py-1.5 text-xs font-semibold text-zinc-500 hover:bg-zinc-100 hover:text-zinc-900 cursor-pointer"
                  >
                    Limpar
                  </button>
                )}
                <button
                  type="button"
                  onClick={closeDrawer}
                  aria-label="Fechar sacola"
                  className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-zinc-200 text-zinc-700 hover:bg-zinc-100 cursor-pointer"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
            </div>

            {/* Corpo do Drawer */}
            <div
              data-lenis-prevent
              className="flex-1 overflow-y-auto px-5 py-4"
            >
              {demoSubmitted ? (
                <div
                  className="space-y-4 rounded-2xl border border-emerald-200 bg-emerald-50/70 p-5"
                  data-testid="demo-order-modal"
                >
                  <div className="flex items-center gap-2.5 text-emerald-800">
                    <CheckCircle2 className="h-6 w-6 shrink-0" aria-hidden="true" />
                    <span className="rounded-full bg-emerald-200/70 px-2.5 py-0.5 text-xs font-extrabold uppercase tracking-wide">
                      Pedido de demonstração
                    </span>
                  </div>

                  <h3 className="font-['Sora'] text-xl font-extrabold text-zinc-950">
                    Pedido de demonstração exibido na tela
                  </h3>

                  <p className="text-sm leading-relaxed text-zinc-700">
                    <strong>Nenhum pedido foi enviado.</strong> Esta tela mostra
                    como o cliente finaliza a sacola no site. Na versão oficial
                    do Supermercados Leal, os itens e preços reais podem seguir
                    para retirada em loja ou sistema interno da rede.
                  </p>

                  <div className="rounded-xl border border-zinc-200 bg-white p-3.5 text-sm">
                    <p className="mb-2 text-xs font-bold uppercase tracking-wide text-zinc-500">
                      Resumo ilustrativo ({totalItems}{" "}
                      {totalItems === 1 ? "item" : "itens"})
                    </p>
                    <ul className="space-y-1.5 text-xs text-zinc-700">
                      {items.map(({ product, quantity }) => (
                        <li
                          key={product.id}
                          className="flex items-center justify-between gap-2"
                        >
                          <span>
                            {quantity}× {product.name}
                          </span>
                          <span className="font-bold text-zinc-950">
                            {formatBRL(product.illustrativePrice * quantity)}
                          </span>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-3 flex items-center justify-between border-t border-zinc-100 pt-2.5 text-sm font-extrabold text-zinc-950">
                      <span>Total (preço ilustrativo)</span>
                      <span className="text-[#DC1F26]">{formatBRL(subtotal)}</span>
                    </div>
                  </div>

                  <div className="flex flex-col gap-2 pt-1">
                    <Button
                      variant="primary"
                      onClick={() => {
                        clearBag();
                        setDemoSubmitted(false);
                        closeDrawer();
                      }}
                    >
                      Limpar sacola e voltar ao site
                    </Button>
                    <Button
                      variant="outline"
                      onClick={() => setDemoSubmitted(false)}
                    >
                      Voltar para editar itens
                    </Button>
                  </div>
                </div>
              ) : items.length === 0 ? (
                <div className="flex h-full flex-col items-center justify-center py-12 text-center">
                  <span className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-zinc-100 text-zinc-400">
                    <ShoppingBag className="h-7 w-7" aria-hidden="true" />
                  </span>
                  <h3 className="mt-4 font-['Sora'] text-lg font-bold text-zinc-950">
                    Sua sacola está vazia
                  </h3>
                  <p className="mt-1 max-w-xs text-sm text-zinc-600">
                    Adicione produtos do catálogo para testar o carrinho e o cálculo
                    ilustrativo do pedido.
                  </p>
                  <Button
                    variant="primary"
                    className="mt-5"
                    onClick={handleGoToCatalog}
                  >
                    Explorar catálogo
                  </Button>
                </div>
              ) : (
                <ul className="space-y-3">
                  {items.map(({ product, quantity }) => (
                    <li
                      key={product.id}
                      data-testid={`bag-item-${product.id}`}
                      className="flex gap-3 rounded-2xl border border-zinc-200 bg-white p-3 shadow-2xs"
                    >
                      <img
                        src={product.image}
                        alt={product.imageAlt}
                        className="h-18 w-20 shrink-0 rounded-xl object-cover bg-zinc-100"
                      />
                      <div className="min-w-0 flex-1">
                        <div className="flex items-start justify-between gap-2">
                          <div>
                            <h3 className="font-['Sora'] text-sm font-bold leading-snug text-zinc-950">
                              {product.name}
                            </h3>
                            <p className="text-xs text-zinc-500">
                              {formatBRL(product.illustrativePrice)} / {product.unit}{" "}
                              · preço ilustrativo
                            </p>
                          </div>
                          <button
                            type="button"
                            onClick={() => removeItem(product.id)}
                            aria-label={`Remover ${product.name}`}
                            data-testid={`bag-remove-${product.id}`}
                            className="rounded-lg p-1 text-zinc-400 hover:bg-red-50 hover:text-[#DC1F26] cursor-pointer"
                          >
                            <Trash2 className="h-4 w-4" />
                          </button>
                        </div>

                        <div className="mt-2.5 flex items-center justify-between gap-2">
                          <div className="inline-flex items-center gap-1 rounded-lg border border-zinc-200 bg-zinc-50 p-0.5">
                            <button
                              type="button"
                              onClick={() => setQuantity(product.id, quantity - 1)}
                              aria-label={`Diminuir ${product.name}`}
                              data-testid={`bag-dec-${product.id}`}
                              className="inline-flex h-7 w-7 items-center justify-center rounded-md bg-white text-zinc-800 shadow-2xs hover:bg-zinc-100 cursor-pointer"
                            >
                              <Minus className="h-3.5 w-3.5" />
                            </button>
                            <span
                              className="min-w-7 text-center font-['Sora'] text-xs font-extrabold text-zinc-950"
                              data-testid={`bag-qty-${product.id}`}
                            >
                              {quantity}
                            </span>
                            <button
                              type="button"
                              onClick={() => setQuantity(product.id, quantity + 1)}
                              aria-label={`Aumentar ${product.name}`}
                              data-testid={`bag-inc-${product.id}`}
                              className="inline-flex h-7 w-7 items-center justify-center rounded-md bg-[#DC1F26] text-white shadow-2xs hover:bg-[#B8161C] cursor-pointer"
                            >
                              <Plus className="h-3.5 w-3.5" />
                            </button>
                          </div>

                          <span className="font-['Sora'] text-sm font-extrabold text-zinc-950">
                            {formatBRL(product.illustrativePrice * quantity)}
                          </span>
                        </div>
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {/* Rodapé do Drawer */}
            {items.length > 0 && !demoSubmitted && (
              <div className="border-t border-zinc-200 bg-zinc-50 px-5 py-4 space-y-3">
                <div className="flex items-start gap-2 rounded-xl border border-amber-200 bg-amber-50 px-3 py-2 text-[11px] text-amber-950">
                  <Info className="mt-0.5 h-3.5 w-3.5 shrink-0 text-amber-700" aria-hidden="true" />
                  <span>
                    Subtotal baseado em <strong>preços ilustrativos</strong> (modelo
                    de demonstração).
                  </span>
                </div>

                <div className="flex items-baseline justify-between">
                  <span className="text-sm font-semibold text-zinc-700">
                    Subtotal ilustrativo
                  </span>
                  <span
                    className="font-['Sora'] text-xl font-extrabold text-[#DC1F26]"
                    data-testid="bag-subtotal"
                  >
                    {formatBRL(subtotal)}
                  </span>
                </div>

                <Button
                  variant="primary"
                  size="lg"
                  className="w-full"
                  onClick={() => setDemoSubmitted(true)}
                  data-testid="bag-checkout-demo-btn"
                >
                  Finalizar pedido (demonstração)
                </Button>
              </div>
            )}
          </motion.aside>
        </div>
      )}
    </AnimatePresence>
  );
}
