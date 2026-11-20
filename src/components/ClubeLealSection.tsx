import { motion } from "framer-motion";
import { Check, ExternalLink, Smartphone, Sparkles } from "lucide-react";
import { Badge } from "./ui/badge";

const CLUBE_BENEFITS = [
  "Ofertas personalizadas de acordo com o seu perfil de compras",
  "Identificação simples informando apenas o CPF no caixa",
  "Acesso gratuito para Android e iPhone nas lojas da rede",
];

export function ClubeLealSection() {
  return (
    <section id="clube-leal" className="bg-white py-16 sm:py-20">
      <div className="w-full px-5 sm:px-8 lg:px-12 xl:px-16">
        <div className="relative overflow-hidden rounded-3xl border border-zinc-200 bg-gradient-to-br from-[#FFF9EB] via-white to-[#FEF2F2] p-6 sm:p-10 lg:p-12 shadow-sm">
          <div className="grid items-center gap-10 lg:grid-cols-12">
            {/* App Mockup Card */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.4 }}
              className="lg:col-span-5 flex justify-center"
            >
              <div className="w-full max-w-[320px] rounded-[2.2rem] border-[6px] border-zinc-900 bg-white p-5 shadow-2xl">
                <div className="mx-auto mb-4 h-1.5 w-14 rounded-full bg-zinc-200" />

                <div className="flex items-center gap-3.5 rounded-2xl bg-zinc-50 p-3.5 border border-zinc-100">
                  <img
                    src="/images/clube-leal-icon.png"
                    alt="Ícone oficial do aplicativo Clube Leal"
                    className="h-14 w-14 rounded-xl object-contain bg-white p-1 shadow-xs"
                    loading="lazy"
                  />
                  <div>
                    <p className="font-['Sora'] text-base font-extrabold text-zinc-950">
                      Clube Leal
                    </p>
                    <p className="text-xs font-medium text-zinc-500">
                      10 mil+ downloads · Grátis
                    </p>
                  </div>
                </div>

                <div className="mt-4 space-y-3 rounded-2xl bg-[#DC1F26] p-4 text-white">
                  <div className="flex items-center justify-between text-xs font-semibold text-amber-200">
                    <span>No caixa, informe seu CPF</span>
                    <Sparkles className="h-4 w-4" aria-hidden="true" />
                  </div>
                  <p className="font-['Sora'] text-lg font-bold leading-snug">
                    Ative vantagens exclusivas antes de passar suas compras
                  </p>
                  <div className="rounded-xl bg-white/15 px-3 py-2 text-xs text-white/95">
                    Desenvolvido pela Cresce Vendas Tecnologia · © Supermercado Leal
                  </div>
                </div>

                <div className="mt-4 flex items-center justify-between text-xs text-zinc-500 px-1">
                  <span>Android & iOS</span>
                  <span className="font-semibold text-[#DC1F26]">
                    Válido em todas as lojas
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Copy & Official App Store Links */}
            <div className="lg:col-span-7 space-y-6">
              <Badge variant="gold">
                <Smartphone className="h-3.5 w-3.5" />
                Aplicativo Oficial Clube Leal
              </Badge>

              <h2 className="font-['Sora'] text-3xl font-extrabold text-zinc-950 sm:text-4xl">
                Baixe o app Clube Leal e economize com o seu CPF
              </h2>

              <p className="text-base leading-relaxed text-zinc-600">
                Cadastre-se no aplicativo oficial Clube Leal, ative as vantagens
                disponíveis e identifique-se com o seu CPF no caixa ao finalizar
                suas compras em qualquer unidade de Uberlândia.
              </p>

              <ul className="space-y-3">
                {CLUBE_BENEFITS.map((benefit) => (
                  <li
                    key={benefit}
                    className="flex items-start gap-3 text-sm font-medium text-zinc-800"
                  >
                    <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#DC1F26]/10 text-[#DC1F26]">
                      <Check className="h-3.5 w-3.5" aria-hidden="true" />
                    </span>
                    <span>{benefit}</span>
                  </li>
                ))}
              </ul>

              {/* Real Official Download Links */}
              <div className="flex flex-col gap-3 pt-2 sm:flex-row sm:items-center">
                <a
                  href="https://play.google.com/store/apps/details?id=com.crescevendas.leal"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-between gap-4 rounded-2xl bg-zinc-950 px-5 py-3.5 text-white shadow-md transition hover:bg-zinc-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#DC1F26]"
                >
                  <div>
                    <span className="block text-[10px] uppercase tracking-wider text-zinc-400">
                      Disponível no
                    </span>
                    <span className="font-['Sora'] text-base font-bold">
                      Google Play
                    </span>
                  </div>
                  <ExternalLink className="h-4 w-4 text-[#FACC15]" aria-hidden="true" />
                </a>

                <a
                  href="https://apps.apple.com/br/app/clube-leal/id1418846052"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-between gap-4 rounded-2xl border border-zinc-300 bg-white px-5 py-3.5 text-zinc-950 shadow-sm transition hover:bg-zinc-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#DC1F26]"
                >
                  <div>
                    <span className="block text-[10px] uppercase tracking-wider text-zinc-500">
                      Baixar na
                    </span>
                    <span className="font-['Sora'] text-base font-bold">
                      App Store
                    </span>
                  </div>
                  <ExternalLink className="h-4 w-4 text-[#DC1F26]" aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
