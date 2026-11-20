import { useEffect, useRef, useState } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useSpring,
  useMotionValueEvent,
} from "framer-motion";
import {
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  CreditCard,
  MapPin,
  ShieldCheck,
  Wifi,
} from "lucide-react";
import { LEAL_CARDS } from "../data/cards";
import { Button } from "./ui/button";

export function LealCardShowcase() {
  const sectionRef = useRef<HTMLElement>(null);
  const shouldReduceMotion = useReducedMotion();

  const [activeIndex, setActiveIndex] = useState(0);
  const [manualLockUntil, setManualLockUntil] = useState(0);
  const [hoverTilt, setHoverTilt] = useState({ x: 0, y: 0 });
  const [scrollAngle, setScrollAngle] = useState(0);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end end"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 110,
    damping: 22,
    mass: 0.5,
  });

  useMotionValueEvent(smoothProgress, "change", (latest) => {
    if (shouldReduceMotion) return;
    // Continuous subtle 3D rotation synced to scroll
    setScrollAngle((latest - 0.5) * 28);

    if (Date.now() < manualLockUntil) return;
    if (latest < 0.33) {
      setActiveIndex(0);
    } else if (latest < 0.68) {
      setActiveIndex(1);
    } else {
      setActiveIndex(2);
    }
  });

  useEffect(() => {
    if (shouldReduceMotion) {
      setScrollAngle(0);
    }
  }, [shouldReduceMotion]);

  const selectCard = (idx: number) => {
    setManualLockUntil(Date.now() + 1400);
    setActiveIndex(idx);
  };

  const handleNext = () => selectCard((activeIndex + 1) % LEAL_CARDS.length);
  const handlePrev = () =>
    selectCard((activeIndex - 1 + LEAL_CARDS.length) % LEAL_CARDS.length);

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (shouldReduceMotion) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    setHoverTilt({ x: -py * 14, y: px * 18 });
  };

  const handlePointerLeave = () => {
    setHoverTilt({ x: 0, y: 0 });
  };

  const currentCard = LEAL_CARDS[activeIndex];

  return (
    <section
      id="cartao-leal"
      ref={sectionRef}
      className="relative bg-[#0E0E13] text-white lg:min-h-[205vh]"
    >
      {/* Background atmospheric glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <div className="absolute top-24 left-1/4 h-96 w-96 rounded-full bg-[#DC1F26]/20 blur-[120px]" />
        <div className="absolute bottom-24 right-1/4 h-96 w-96 rounded-full bg-[#FACC15]/12 blur-[120px]" />
      </div>

      <div className="lg:sticky lg:top-16 lg:flex lg:min-h-[calc(100vh-4rem)] lg:items-center py-16 sm:py-20 lg:py-10">
        <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-10">
            {/* Left Copy & Step Selector */}
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3.5 py-1.5 text-xs font-semibold text-amber-300">
                <CreditCard className="h-3.5 w-3.5" aria-hidden="true" />
                Cartão Tricard Leal · Role ou clique para girar os cartões
              </div>

              <h2 className="font-['Sora'] text-3xl font-extrabold leading-tight sm:text-4xl lg:text-[2.75rem]">
                Mais prazo para a sua compra e vantagens nas{" "}
                <span className="text-[#FACC15]">lojas Leal</span>
              </h2>

              {/* Interactive Card Step Tabs */}
              <div
                role="tablist"
                aria-label="Benefícios do Cartão Leal"
                className="flex flex-wrap gap-2"
              >
                {LEAL_CARDS.map((card, idx) => {
                  const isActive = idx === activeIndex;
                  return (
                    <button
                      key={card.id}
                      role="tab"
                      type="button"
                      aria-selected={isActive}
                      onClick={() => selectCard(idx)}
                      className={`rounded-xl px-3.5 py-2 text-xs font-bold transition cursor-pointer ${
                        isActive
                          ? "bg-[#DC1F26] text-white shadow-lg shadow-[#DC1F26]/30"
                          : "border border-white/15 bg-white/5 text-zinc-300 hover:bg-white/10"
                      }`}
                    >
                      {card.step} · {card.tag}
                    </button>
                  );
                })}
              </div>

              {/* Dynamic Card Details */}
              <motion.div
                key={currentCard.id}
                initial={shouldReduceMotion ? false : { opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.25 }}
                className="rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-sm"
              >
                <p className="text-xs font-bold uppercase tracking-widest text-[#FACC15]">
                  {currentCard.subtitle}
                </p>
                <h3 className="mt-1 font-['Sora'] text-2xl font-bold text-white">
                  {currentCard.title}
                </h3>
                <p className="mt-2.5 text-sm leading-relaxed text-zinc-300">
                  {currentCard.description}
                </p>
                <ul className="mt-4 space-y-2">
                  {currentCard.bullets.map((bullet) => (
                    <li
                      key={bullet}
                      className="flex items-start gap-2.5 text-sm text-zinc-200"
                    >
                      <CheckCircle2
                        className="mt-0.5 h-4 w-4 shrink-0 text-[#FACC15]"
                        aria-hidden="true"
                      />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              <div className="flex flex-wrap items-center gap-3">
                <Button
                  variant="gold"
                  size="lg"
                  onClick={() =>
                    document
                      .querySelector("#lojas")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                >
                  <MapPin className="h-4 w-4" />
                  Solicitar no balcão de uma loja
                </Button>
                <span className="inline-flex items-center gap-1.5 text-xs text-zinc-400">
                  <ShieldCheck className="h-4 w-4 text-zinc-400" aria-hidden="true" />
                  Sujeito à análise de crédito Tricard
                </span>
              </div>
            </div>

            {/* Right 3D Stacked & Rotating Card Stage */}
            <div className="lg:col-span-6 flex flex-col items-center">
              <div
                onPointerMove={handlePointerMove}
                onPointerLeave={handlePointerLeave}
                className="perspective-stage relative flex h-[290px] w-full max-w-[440px] items-center justify-center sm:h-[340px]"
              >
                {LEAL_CARDS.map((card, idx) => {
                  // Relative offset in stack (0 = front, 1 = middle, 2 = back)
                  const offset =
                    (idx - activeIndex + LEAL_CARDS.length) % LEAL_CARDS.length;
                  const isFront = offset === 0;

                  const targetRotateY = shouldReduceMotion
                    ? 0
                    : isFront
                    ? scrollAngle + hoverTilt.y
                    : offset === 1
                    ? -14 + scrollAngle * 0.4
                    : -24 + scrollAngle * 0.2;

                  const targetRotateX = shouldReduceMotion
                    ? 0
                    : isFront
                    ? 6 + hoverTilt.x
                    : 4;

                  const targetX = offset * 14;
                  const targetY = offset * 24 - (isFront ? 10 : 0);
                  const targetScale = isFront ? 1 : offset === 1 ? 0.93 : 0.86;
                  const targetOpacity = isFront ? 1 : offset === 1 ? 0.84 : 0.58;

                  return (
                    <motion.div
                      key={card.id}
                      onClick={() => selectCard(idx)}
                      animate={{
                        x: targetX,
                        y: targetY,
                        scale: targetScale,
                        opacity: targetOpacity,
                        rotateY: targetRotateY,
                        rotateX: targetRotateX,
                        rotateZ: shouldReduceMotion ? 0 : isFront ? -1 : offset * 3,
                      }}
                      transition={
                        shouldReduceMotion
                          ? { duration: 0.2 }
                          : {
                              type: "spring",
                              stiffness: 165,
                              damping: 22,
                              mass: 0.8,
                            }
                      }
                      style={{
                        zIndex: LEAL_CARDS.length - offset,
                        transformStyle: "preserve-3d",
                      }}
                      className={`preserve-3d absolute w-[84%] max-w-[365px] aspect-[1.586/1] cursor-pointer rounded-3xl bg-gradient-to-br ${card.gradientClass} p-6 shadow-2xl ring-1 ring-white/25 select-none`}
                      role="button"
                      tabIndex={0}
                      aria-label={`Visualizar ${card.tag} — ${card.title}`}
                      onKeyDown={(e) => {
                        if (e.key === "Enter" || e.key === " ") {
                          e.preventDefault();
                          selectCard(idx);
                        }
                      }}
                    >
                      {/* Glossy Diagonal Specular Reflection */}
                      <div
                        aria-hidden="true"
                        className="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-tr from-white/0 via-white/15 to-white/0"
                      />

                      {/* Watermark emblem */}
                      <svg
                        viewBox="0 0 80 80"
                        aria-hidden="true"
                        className="pointer-events-none absolute -right-4 -bottom-4 h-36 w-36 opacity-10"
                      >
                        <path
                          d="M40 8C26 8 18 22 14 44C11 58 17 70 28 70C34 70 37 66 40 62C43 66 46 70 52 70C63 70 69 58 66 44C62 22 54 8 40 8Z"
                          fill="currentColor"
                        />
                      </svg>

                      <div className={`relative flex h-full flex-col justify-between ${card.textColor}`}>
                        {/* Card Top Row */}
                        <div className="flex items-start justify-between">
                          <div>
                            <span className="block text-[10px] font-extrabold tracking-[0.22em] uppercase opacity-80">
                              Supermercados
                            </span>
                            <span className="font-['Sora'] text-xl font-black tracking-tight">
                              LEAL
                            </span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Wifi
                              className="h-5 w-5 rotate-90 opacity-85"
                              aria-hidden="true"
                            />
                            <span
                              className="rounded-full px-2.5 py-0.5 text-[10px] font-extrabold tracking-wider uppercase"
                              style={{
                                backgroundColor:
                                  card.textColor === "text-white"
                                    ? "rgba(255,255,255,0.16)"
                                    : "rgba(20,20,24,0.12)",
                              }}
                            >
                              {card.badgeText}
                            </span>
                          </div>
                        </div>

                        {/* EMV Metallic Chip */}
                        <div className="flex items-center gap-3">
                          <div
                            aria-hidden="true"
                            className={`h-8 w-11 rounded-lg border ${
                              card.chipTone === "gold"
                                ? "border-amber-200/70 bg-gradient-to-br from-amber-200 via-yellow-400 to-amber-600"
                                : "border-zinc-300/70 bg-gradient-to-br from-zinc-100 via-zinc-300 to-zinc-500"
                            } shadow-inner`}
                          />
                          <span className="text-xs font-semibold opacity-85">
                            {card.highlight}
                          </span>
                        </div>

                        {/* Card Footer */}
                        <div className="flex items-end justify-between">
                          <div>
                            <p className="font-mono text-sm font-semibold tracking-[0.18em] opacity-90">
                              •••• •••• •••• LEAL
                            </p>
                            <p className="mt-0.5 text-[11px] font-semibold opacity-80">
                              Uberlândia · MG
                            </p>
                          </div>
                          <span className="font-['Sora'] text-xs font-extrabold tracking-wider uppercase">
                            Tricard
                          </span>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>

              {/* Card Navigation Controls below stage */}
              <div className="mt-4 flex items-center gap-3">
                <button
                  type="button"
                  onClick={handlePrev}
                  aria-label="Cartão anterior"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white transition hover:bg-white/15 cursor-pointer"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <div className="flex items-center gap-2">
                  {LEAL_CARDS.map((card, idx) => (
                    <button
                      key={card.id}
                      type="button"
                      aria-label={`Selecionar ${card.tag}`}
                      onClick={() => selectCard(idx)}
                      className={`h-2.5 rounded-full transition-all cursor-pointer ${
                        idx === activeIndex
                          ? "w-8 bg-[#FACC15]"
                          : "w-2.5 bg-white/25 hover:bg-white/45"
                      }`}
                    />
                  ))}
                </div>
                <button
                  type="button"
                  onClick={handleNext}
                  aria-label="Próximo cartão"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white transition hover:bg-white/15 cursor-pointer"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </div>
              <p className="mt-2 text-xs text-zinc-400">
                Role a página ou toque nos cartões para alternar em 3D
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
