import { ExternalLink, Link2 } from "lucide-react";
import { LealLogo } from "./LealLogo";

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

export function Footer() {
  return (
    <footer className="bg-[#141418] text-zinc-300">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-5 space-y-4">
            <LealLogo variant="dark" />
            <p className="max-w-sm text-sm leading-relaxed text-zinc-400">
              Supermercados Leal — Desde 1989 em Uberlândia/MG. Lojas nos bairros da cidade, com economia todos os dias. Aqui é tudo mais barato!
            </p>
            <span className="inline-flex items-center rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-medium text-amber-200">
              Modelo de demonstração — HRP Múltipla
            </span>
          </div>

          <div className="md:col-span-3 space-y-3">
            <h3 className="font-['Sora'] text-sm font-bold uppercase tracking-wider text-white">
              Navegação
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#sobre" className="hover:text-white transition">
                  Sobre o Leal
                </a>
              </li>
              <li>
                <a href="#ofertas" className="hover:text-white transition">
                  Ofertas da semana
                </a>
              </li>
              <li>
                <a href="#cartao-leal" className="hover:text-white transition">
                  Cartão Tricard Leal
                </a>
              </li>
              <li>
                <a href="#clube-leal" className="hover:text-white transition">
                  App Clube Leal
                </a>
              </li>
              <li>
                <a href="#lojas" className="hover:text-white transition">
                  Nossas Lojas
                </a>
              </li>
              <li>
                <a href="#trabalhe-conosco" className="hover:text-white transition">
                  Trabalhe Conosco
                </a>
              </li>
            </ul>
          </div>

          <div className="md:col-span-4 space-y-3">
            <h3 className="font-['Sora'] text-sm font-bold uppercase tracking-wider text-white">
              Canais Oficiais
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a
                  href="https://www.instagram.com/supermercadoleal/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 hover:text-white transition"
                >
                  <InstagramIcon className="h-4 w-4 text-[#FACC15]" />
                  <span>Instagram @supermercadoleal</span>
                  <ExternalLink className="h-3 w-3 opacity-60" aria-hidden="true" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.facebook.com/supermercadosleal.com.br/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 hover:text-white transition"
                >
                  <FacebookIcon className="h-4 w-4 text-[#FACC15]" />
                  <span>Facebook Supermercados Leal</span>
                  <ExternalLink className="h-3 w-3 opacity-60" aria-hidden="true" />
                </a>
              </li>
              <li>
                <a
                  href="https://beacons.ai/supermercadoleal"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 hover:text-white transition"
                >
                  <Link2 className="h-4 w-4 text-[#FACC15]" aria-hidden="true" />
                  <span>Links rápidos (beacons.ai/supermercadoleal)</span>
                  <ExternalLink className="h-3 w-3 opacity-60" aria-hidden="true" />
                </a>
              </li>
              <li className="text-xs text-zinc-400 pt-1">
                Domínio oficial da rede: <span className="text-zinc-200">supermercadoleal.com.br</span> · Matriz: Av. Cesário Crosara, 3855, Presidente Roosevelt, Uberlândia/MG · Tel.{" "}
                <a href="tel:+553432322124" className="text-zinc-200 underline-offset-2 hover:underline">
                  (34) 3232-2124
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t border-white/10 pt-6 text-xs text-zinc-500 sm:flex-row sm:items-center sm:justify-between">
          <p>
            SUPERMERCADOS LEAL LTDA · CNPJ matriz 25.926.205/0001-23 · Uberlândia/MG
          </p>
          <p>Proposta comercial demonstrativa desenvolvida por HRP Múltipla</p>
        </div>
      </div>
    </footer>
  );
}
