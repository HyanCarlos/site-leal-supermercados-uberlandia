import { motion } from "framer-motion";
import { Clock, Heart, ShoppingBasket } from "lucide-react";

export function AboutSection() {
  return (
    <section id="sobre" className="relative w-full overflow-hidden bg-[#141418] text-white">
      <div className="grid w-full lg:grid-cols-2">
        <div className="relative min-h-[260px] sm:min-h-[340px] lg:min-h-[440px]">
          <img
            src="https://regionalzao.com.br/wp-content/uploads/2025/12/e83e4976-fc8d-41fa-8efc-36841a3ecb9e.webp"
            alt="Interior de uma loja do Supermercados Leal em Uberlândia, com o letreiro da marca e o setor de hortifrúti"
            className="absolute inset-0 h-full w-full object-cover"
            loading="lazy"
          />
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-gradient-to-t from-[#141418] via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-[#141418]"
          />
        </div>

        <div className="flex flex-col justify-center px-5 py-12 sm:px-8 sm:py-16 lg:px-16">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.4 }}
            className="max-w-xl space-y-5"
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-[#FACC15]/40 bg-[#FACC15]/15 px-3 py-1 text-xs font-bold uppercase tracking-wider text-[#FACC15]">
              <Clock className="h-3.5 w-3.5" aria-hidden="true" />
              Desde 1989
            </span>

            <h2 className="font-['Sora'] text-3xl font-extrabold tracking-tight sm:text-4xl">
              Sobre o Leal
            </h2>

            <p className="text-base leading-relaxed text-zinc-300 sm:text-lg">
              Uma história de Uberlândia, feita perto da sua família. Açougue,
              padaria própria, hortifrúti selecionado e mercearia completa — com
              o jeito Leal de economizar todos os dias.
            </p>

            <ul className="grid gap-3 sm:grid-cols-2">
              <li className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 p-4">
                <Heart className="mt-0.5 h-5 w-5 shrink-0 text-[#DC1F26]" aria-hidden="true" />
                <span>
                  <span className="block font-['Sora'] text-sm font-bold text-white">
                    Tradição local
                  </span>
                  <span className="text-xs text-zinc-400">
                    Presente na cidade desde 1989
                  </span>
                </span>
              </li>
              <li className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/5 p-4">
                <ShoppingBasket className="mt-0.5 h-5 w-5 shrink-0 text-[#FACC15]" aria-hidden="true" />
                <span>
                  <span className="block font-['Sora'] text-sm font-bold text-white">
                    Tudo mais barato
                  </span>
                  <span className="text-xs text-zinc-400">
                    Economia real, perto da sua casa
                  </span>
                </span>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
