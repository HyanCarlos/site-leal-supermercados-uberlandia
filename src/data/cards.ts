export interface LealCardVariant {
  id: string;
  step: string;
  tag: string;
  title: string;
  subtitle: string;
  highlight: string;
  description: string;
  bullets: string[];
  gradientClass: string;
  accentColor: string;
  textColor: string;
  chipTone: "gold" | "silver";
  badgeText: string;
}

export const LEAL_CARDS: LealCardVariant[] = [
  {
    id: "tricard-classico",
    step: "01",
    tag: "Cartão Tricard Leal",
    title: "Até 40 dias para pagar",
    subtitle: "PARCERIA TRICARD · REDE LEAL",
    highlight: "Mais fôlego no orçamento de casa",
    description:
      "Compre hoje em qualquer unidade do Supermercados Leal e aproveite prazo estendido conforme a melhor data de compra da sua fatura.",
    bullets: [
      "Prazo de até 40 dias dependendo da data da compra",
      "Solicitação presencial rápida no balcão das lojas",
      "Anuidade e condições transparentes na adesão",
    ],
    gradientClass:
      "from-[#DC1F26] via-[#B9161D] to-[#6E0D12]",
    accentColor: "#FACC15",
    textColor: "text-white",
    chipTone: "gold",
    badgeText: "TRICARD LEAL",
  },
  {
    id: "clube-beneficios",
    step: "02",
    tag: "Clube + Cartão",
    title: "Parcelamento e limite progressivo",
    subtitle: "LIMITE QUE CRESCE COM VOCÊ",
    highlight: "Condições pensadas para a família",
    description:
      "Além do parcelamento facilitado em compras selecionadas, o uso frequente ajuda na evolução do limite mediante análise de crédito.",
    bullets: [
      "Parcelamento facilitado nas lojas da rede",
      "Limite progressivo conforme histórico de uso",
      "Combine com ofertas exclusivas do Clube Leal no CPF",
    ],
    gradientClass:
      "from-[#1B1B22] via-[#262630] to-[#0D0D11]",
    accentColor: "#FACC15",
    textColor: "text-white",
    chipTone: "gold",
    badgeText: "CLUBE + LEAL",
  },
  {
    id: "familia-dez-lojas",
    step: "03",
    tag: "Em toda Uberlândia",
    title: "Aceito nas 10 unidades Leal",
    subtitle: "DO ROOSEVELT AO NOVO MUNDO",
    highlight: "Sempre uma loja perto do seu bairro",
    description:
      "Seja na matriz do Presidente Roosevelt ou nas filiais em expansão por Uberlândia, seu Cartão Tricard Leal funciona em todos os caixas.",
    bullets: [
      "10 supermercados espalhados pela cidade",
      "Atendimento próximo e caixas sinalizados",
      "Sujeito à aprovação de crédito no balcão da loja",
    ],
    gradientClass:
      "from-[#FACC15] via-[#F59E0B] to-[#C2410C]",
    accentColor: "#141418",
    textColor: "text-zinc-950",
    chipTone: "silver",
    badgeText: "10 UNIDADES",
  },
];
