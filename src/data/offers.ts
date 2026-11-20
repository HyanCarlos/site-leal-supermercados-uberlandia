export type OfferCategory =
  | "Todas"
  | "Hortifrúti"
  | "Açougue"
  | "Padaria"
  | "Mercearia & Bebidas";

export interface DemoOfferItem {
  id: string;
  category: Exclude<OfferCategory, "Todas">;
  title: string;
  unitLabel: string;
  demoBadge: string;
  demoPriceLabel: string;
  clubeTag: string;
  image: string;
  imageAlt: string;
}

export const OFFER_CATEGORIES: OfferCategory[] = [
  "Todas",
  "Hortifrúti",
  "Açougue",
  "Padaria",
  "Mercearia & Bebidas",
];

// Estrutura modular de fácil atualização semanal: basta substituir os itens, datas e valores oficiais do encarte.
export const DEMO_OFFERS: DemoOfferItem[] = [
  {
    id: "hortifruti-selecionado",
    category: "Hortifrúti",
    title: "Hortifrúti Fresco da Semana",
    unitLabel: "Frutas, legumes e verduras selecionadas · kg / unid.",
    demoBadge: "Exemplo de encarte",
    demoPriceLabel: "Valor oficial definido no encarte",
    clubeTag: "Desconto extra no Clube Leal",
    image:
      "https://images.unsplash.com/photo-1542838132-92c53300491e?w=900&q=80&auto=format&fit=crop",
    imageAlt: "Bancada de hortifrúti com verduras, pimentões e legumes frescos",
  },
  {
    id: "acougue-cortes",
    category: "Açougue",
    title: "Cortes Selecionados do Açougue",
    unitLabel: "Bovinos, suínos e aves com procedência · kg",
    demoBadge: "Exemplo de encarte",
    demoPriceLabel: "Valor oficial definido no encarte",
    clubeTag: "Condição especial no Cartão Leal",
    image:
      "https://images.unsplash.com/photo-1544025162-d76694265947?w=900&q=80&auto=format&fit=crop",
    imageAlt: "Corte de carne preparado para ilustrar o setor de açougue",
  },
  {
    id: "padaria-producao",
    category: "Padaria",
    title: "Padaria & Confeitaria Própria",
    unitLabel: "Pães fresquinhos, roscas e quitandas · kg / unid.",
    demoBadge: "Exemplo de encarte",
    demoPriceLabel: "Valor oficial definido no encarte",
    clubeTag: "Fornadas diárias em todas as lojas",
    image:
      "https://images.unsplash.com/photo-1764608871512-f8909f6bbbcd?w=900&q=80&auto=format&fit=crop",
    imageAlt: "Pães artesanais assados na hora para ilustrar a padaria",
  },
  {
    id: "mercearia-despensa",
    category: "Mercearia & Bebidas",
    title: "Itens Essenciais da Despensa",
    unitLabel: "Arroz, feijão, café, laticínios e bebidas · embalagem",
    demoBadge: "Exemplo de encarte",
    demoPriceLabel: "Valor oficial definido no encarte",
    clubeTag: "Ofertas de segunda a quarta e fim de semana",
    image:
      "https://images.unsplash.com/photo-1604719312245-6d2c47114758?w=1000&q=80&auto=format&fit=crop",
    imageAlt: "Corredor de supermercado organizado com produtos de mercearia",
  },
  {
    id: "cafe-matinal",
    category: "Mercearia & Bebidas",
    title: "Café, Bebidas e Matinais",
    unitLabel: "Linha completa para o dia a dia da família",
    demoBadge: "Exemplo de encarte",
    demoPriceLabel: "Valor oficial definido no encarte",
    clubeTag: "Ative no app Clube Leal com CPF",
    image:
      "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=900&q=80&auto=format&fit=crop",
    imageAlt: "Xícaras de café representando a linha de cafés e matinais",
  },
  {
    id: "ofertas-loja-nova",
    category: "Hortifrúti",
    title: "Seleção Especial nas Lojas",
    unitLabel: "Válido nas unidades de Uberlândia enquanto durarem os estoques",
    demoBadge: "Exemplo de encarte",
    demoPriceLabel: "Valor oficial definido no encarte",
    clubeTag: "Preços atualizados toda semana",
    image:
      "https://regionalzao.com.br/wp-content/uploads/2025/12/e83e4976-fc8d-41fa-8efc-36841a3ecb9e.webp",
    imageAlt: "Interior da loja Supermercados Leal no bairro Novo Mundo com setor de Hortifrúti",
  },
];
