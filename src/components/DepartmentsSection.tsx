import { motion } from "framer-motion";
import { ArrowRight, Layers } from "lucide-react";
import { DEPARTMENTS, type CatalogCategoryId } from "../data/catalog";
import { Badge } from "./ui/badge";

interface DepartmentsSectionProps {
  onSelectDepartment: (dept: CatalogCategoryId) => void;
}

export function DepartmentsSection({
  onSelectDepartment,
}: DepartmentsSectionProps) {
  const goToDepartment = (id: CatalogCategoryId) => {
    onSelectDepartment(id);
    document.querySelector("#ofertas")?.scrollIntoView({ behavior: "smooth" });
  };

  const [hortifruti, acougue, padaria, mercearia, bebidas, higiene] = DEPARTMENTS;

  return (
    <section id="departamentos" className="w-full bg-white py-16 sm:py-20">
      <div className="w-full px-5 sm:px-8 lg:px-12 xl:px-16">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl space-y-3">
            <Badge variant="red">
              <Layers className="h-3.5 w-3.5" />
              Departamentos do Supermercado
            </Badge>
            <h2 className="font-['Sora'] text-3xl font-extrabold text-zinc-950 sm:text-4xl">
              Tudo organizado por setor para a sua compra render mais
            </h2>
            <p className="text-base text-zinc-600">
              Toque em qualquer departamento para filtrar os produtos no catálogo
              e montar sua sacola com praticidade.
            </p>
          </div>
          <span className="inline-flex self-start rounded-full border border-zinc-200 bg-zinc-50 px-3.5 py-1.5 text-xs font-semibold text-zinc-700 md:self-auto">
            6 setores completos nas lojas Leal
          </span>
        </div>

        {/* Grade editorial assimétrica com composições variadas por departamento */}
        <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-12 lg:gap-5">
          {/* 1. Hortifrúti - Card vertical de destaque */}
          <motion.button
            type="button"
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.35 }}
            onClick={() => goToDepartment(hortifruti.id)}
            className="group relative overflow-hidden rounded-3xl border border-zinc-200 bg-zinc-900 text-left shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl md:col-span-6 lg:col-span-5 lg:row-span-2 min-h-[280px] lg:min-h-[460px] cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#DC1F26]"
          >
            <img
              src={hortifruti.coverImage}
              alt={hortifruti.coverAlt}
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-black/15"
            />
            <div className="relative z-10 flex h-full flex-col justify-between p-6">
              <span className="inline-flex self-start rounded-full bg-[#FACC15] px-3 py-1 text-xs font-extrabold text-zinc-950 shadow-xs">
                {hortifruti.accentTag}
              </span>
              <div className="space-y-2">
                <h3 className="font-['Sora'] text-2xl font-extrabold text-white sm:text-3xl">
                  {hortifruti.title}
                </h3>
                <p className="max-w-sm text-sm text-zinc-200">
                  {hortifruti.shortDesc}
                </p>
                <span className="inline-flex items-center gap-1.5 pt-1 text-xs font-extrabold uppercase tracking-wider text-[#FACC15]">
                  Explorar {hortifruti.title}
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </div>
          </motion.button>

          {/* 2. Açougue - Panorâmico com foto real */}
          <motion.button
            type="button"
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.35, delay: 0.05 }}
            onClick={() => goToDepartment(acougue.id)}
            className="group relative overflow-hidden rounded-3xl border border-zinc-200 bg-zinc-900 text-left shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl md:col-span-6 lg:col-span-7 min-h-[240px] cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#DC1F26]"
          >
            <img
              src={acougue.coverImage}
              alt={acougue.coverAlt}
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
            />
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/45 to-transparent"
            />
            <div className="relative z-10 flex h-full flex-col justify-between p-6">
              <span className="inline-flex self-start rounded-full bg-[#DC1F26] px-3 py-1 text-xs font-extrabold text-white shadow-xs">
                {acougue.accentTag}
              </span>
              <div className="max-w-md space-y-1.5">
                <h3 className="font-['Sora'] text-2xl font-extrabold text-white">
                  {acougue.title}
                </h3>
                <p className="text-sm text-zinc-200">{acougue.shortDesc}</p>
                <span className="inline-flex items-center gap-1.5 pt-1 text-xs font-extrabold uppercase tracking-wider text-[#FACC15]">
                  Ver cortes e produtos
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </div>
          </motion.button>

          {/* 3. Padaria - Card médio com foto real */}
          <motion.button
            type="button"
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.35, delay: 0.1 }}
            onClick={() => goToDepartment(padaria.id)}
            className="group relative overflow-hidden rounded-3xl border border-zinc-200 bg-zinc-900 text-left shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl md:col-span-6 lg:col-span-4 min-h-[220px] cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#DC1F26]"
          >
            <img
              src={padaria.coverImage}
              alt={padaria.coverAlt}
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/15"
            />
            <div className="relative z-10 flex h-full flex-col justify-between p-5">
              <span className="inline-flex self-start rounded-full border border-white/25 bg-black/45 px-2.5 py-0.5 text-[11px] font-bold text-[#FACC15] backdrop-blur-xs">
                {padaria.accentTag}
              </span>
              <div className="space-y-1">
                <h3 className="font-['Sora'] text-xl font-extrabold text-white">
                  {padaria.title}
                </h3>
                <p className="text-xs leading-relaxed text-zinc-200">
                  {padaria.shortDesc}
                </p>
              </div>
            </div>
          </motion.button>

          {/* 4. Bebidas - Card lateral com foto real */}
          <motion.button
            type="button"
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.35, delay: 0.14 }}
            onClick={() => goToDepartment(bebidas.id)}
            className="group relative overflow-hidden rounded-3xl border border-zinc-200 bg-zinc-900 text-left shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl md:col-span-6 lg:col-span-3 min-h-[220px] cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#DC1F26]"
          >
            <img
              src={bebidas.coverImage}
              alt={bebidas.coverAlt}
              loading="lazy"
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-gradient-to-t from-black/92 via-black/45 to-black/20"
            />
            <div className="relative z-10 flex h-full flex-col justify-between p-5">
              <span className="inline-flex self-start rounded-full bg-white/15 px-2.5 py-0.5 text-[11px] font-bold text-white backdrop-blur-xs border border-white/20">
                {bebidas.accentTag}
              </span>
              <div className="space-y-1">
                <h3 className="font-['Sora'] text-xl font-extrabold text-white">
                  {bebidas.title}
                </h3>
                <p className="text-xs leading-relaxed text-zinc-200">
                  {bebidas.shortDesc}
                </p>
              </div>
            </div>
          </motion.button>

          {/* 5. Mercearia - Foto compacta com desfoque sutil de fundo para manter nitidez (720x404) */}
          <motion.button
            type="button"
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.35, delay: 0.18 }}
            onClick={() => goToDepartment(mercearia.id)}
            className="group relative flex flex-col sm:flex-row overflow-hidden rounded-3xl border border-zinc-200 bg-[#141418] text-left text-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl md:col-span-6 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#DC1F26]"
          >
            <div className="relative h-40 w-full shrink-0 overflow-hidden sm:h-auto sm:w-52">
              <img
                src={mercearia.coverImage}
                alt={mercearia.coverAlt}
                loading="lazy"
                className="h-full w-full object-cover blur-[0.5px] scale-[1.02] transition-transform duration-700 group-hover:scale-105"
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-r from-transparent to-[#141418]/75 hidden sm:block"
              />
            </div>
            <div className="flex flex-1 flex-col justify-between p-5 sm:p-6">
              <div>
                <span className="inline-block rounded-full bg-[#DC1F26] px-2.5 py-0.5 text-[11px] font-bold text-white">
                  {mercearia.accentTag}
                </span>
                <h3 className="mt-2 font-['Sora'] text-xl font-extrabold">
                  {mercearia.title}
                </h3>
                <p className="mt-1 text-sm text-zinc-300">{mercearia.shortDesc}</p>
              </div>
              <span className="mt-4 inline-flex items-center gap-1.5 text-xs font-extrabold uppercase tracking-wider text-[#FACC15]">
                Ver itens de mercearia
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </span>
            </div>
          </motion.button>

          {/* 6. Higiene e limpeza - Card claro editorial */}
          <motion.button
            type="button"
            initial={{ opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.35, delay: 0.22 }}
            onClick={() => goToDepartment(higiene.id)}
            className="group relative flex flex-col sm:flex-row overflow-hidden rounded-3xl border border-zinc-200 bg-[#F7F7F9] text-left text-zinc-950 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#DC1F26]/40 hover:shadow-xl md:col-span-6 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#DC1F26]"
          >
            <div className="relative h-40 w-full shrink-0 overflow-hidden sm:h-auto sm:w-52 bg-zinc-200">
              <img
                src={higiene.coverImage}
                alt={higiene.coverAlt}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <div className="flex flex-1 flex-col justify-between p-5 sm:p-6">
              <div>
                <span className="inline-block rounded-full bg-[#FACC15]/35 px-2.5 py-0.5 text-[11px] font-extrabold text-amber-950">
                  {higiene.accentTag}
                </span>
                <h3 className="mt-2 font-['Sora'] text-xl font-extrabold text-zinc-950">
                  {higiene.title}
                </h3>
                <p className="mt-1 text-sm text-zinc-600">{higiene.shortDesc}</p>
              </div>
              <span className="mt-4 inline-flex items-center gap-1.5 text-xs font-extrabold uppercase tracking-wider text-[#DC1F26]">
                Ver itens de limpeza
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </span>
            </div>
          </motion.button>
        </div>
      </div>
    </section>
  );
}
