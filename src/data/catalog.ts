export type CatalogCategoryId =
  | "hortifruti"
  | "acougue"
  | "padaria"
  | "mercearia"
  | "bebidas-matinais"
  | "selecoes-especiais";

export type CatalogFilter = "todas" | CatalogCategoryId;

export interface CategoryCoverConfig {
  id: CatalogCategoryId;
  tabLabel: string;
  coverTitle: string;
  coverSubtitle: string;
  /** Caminho local em public/images/categorias/. Para trocar a foto da capa, substitua o arquivo ou atualize este caminho. */
  coverImage: string;
  coverAlt: string;
}

/**
 * CAPAS DAS CATEGORIAS (FÁCIL DE TROCAR)
 * Basta colocar as novas imagens em `public/images/categorias/` com o mesmo nome
 * ou alterar a propriedade `coverImage` abaixo.
 */
export const CATEGORY_COVERS: CategoryCoverConfig[] = [
  {
    id: "hortifruti",
    tabLabel: "Hortifrúti",
    coverTitle: "Hortifrúti",
    coverSubtitle: "Frutas, legumes e verduras selecionadas",
    coverImage: "/images/categorias/hortifruti.webp",
    coverAlt: "Bancada de hortifrúti com frutas, verduras e legumes frescos",
  },
  {
    id: "acougue",
    tabLabel: "Açougue",
    coverTitle: "Cortes de açougue",
    coverSubtitle: "Bovinos, suínos e aves selecionados",
    coverImage: "/images/categorias/acougue.webp",
    coverAlt: "Capa da categoria Cortes de açougue",
  },
  {
    id: "padaria",
    tabLabel: "Padaria",
    coverTitle: "Padaria e confeitaria próprias",
    coverSubtitle: "Pães quentinhos, bolos e quitandas",
    coverImage: "/images/categorias/padaria.webp",
    coverAlt: "Capa da categoria Padaria e confeitaria próprias",
  },
  {
    id: "mercearia",
    tabLabel: "Mercearia",
    coverTitle: "Itens essenciais da despensa",
    coverSubtitle: "Arroz, feijão, óleo, massas e básicos",
    coverImage: "/images/categorias/mercearia.webp",
    coverAlt: "Capa da categoria Itens essenciais da despensa",
  },
  {
    id: "bebidas-matinais",
    tabLabel: "Bebidas e Matinais",
    coverTitle: "Café, bebidas e matinais",
    coverSubtitle: "Café, leite, sucos, lácteos e bebidas",
    coverImage: "/images/categorias/bebidas-matinais.webp",
    coverAlt: "Capa da categoria Café, bebidas e matinais",
  },
  {
    id: "selecoes-especiais",
    tabLabel: "Seleções especiais",
    coverTitle: "Seleções especiais da loja",
    coverSubtitle: "Queijos mineiros, azeites, vinhos e frios",
    coverImage: "/images/categorias/selecoes-especiais.webp",
    coverAlt: "Capa da categoria Seleções especiais da loja no Supermercados Leal",
  },
];

export interface CatalogProduct {
  id: string;
  category: CatalogCategoryId;
  name: string;
  unit: string;
  /** Preço puramente ilustrativo para demonstração visual do catálogo */
  illustrativePrice: number;
  image: string;
  imageAlt: string;
  badge?: string;
}

export const CATALOG_PRODUCTS: CatalogProduct[] = [
  // Hortifrúti
  {
    id: "banana-prata",
    category: "hortifruti",
    name: "Banana Prata Selecionada",
    unit: "kg",
    illustrativePrice: 5.49,
    image: "/images/produtos/banana-prata.webp",
    imageAlt: "Bananas prata maduras",
    badge: "Hortifrúti",
  },
  {
    id: "tomate-italiano",
    category: "hortifruti",
    name: "Tomate Italiano Fresco",
    unit: "kg",
    illustrativePrice: 6.99,
    image: "/images/produtos/tomate-italiano.webp",
    imageAlt: "Tomates vermelhos frescos",
  },
  {
    id: "batata-inglesa",
    category: "hortifruti",
    name: "Batata Inglesa Lavada",
    unit: "kg",
    illustrativePrice: 4.79,
    image: "/images/produtos/batata-inglesa.webp",
    imageAlt: "Batatas inglesas lavadas",
  },
  {
    id: "laranja-pera",
    category: "hortifruti",
    name: "Laranja Pera Doce",
    unit: "kg",
    illustrativePrice: 4.49,
    image: "/images/produtos/laranja-pera.webp",
    imageAlt: "Laranjas frescas",
  },
  {
    id: "maca-gala",
    category: "hortifruti",
    name: "Maçã Gala Nacional",
    unit: "kg",
    illustrativePrice: 8.9,
    image: "/images/produtos/maca-gala.webp",
    imageAlt: "Maçã gala vermelha",
  },
  {
    id: "alface-crespa",
    category: "hortifruti",
    name: "Alface Crespa Hidropônica",
    unit: "unid.",
    illustrativePrice: 3.29,
    image: "/images/produtos/alface-crespa.webp",
    imageAlt: "Folhas frescas de alface crespa",
  },

  // Cortes de açougue
  {
    id: "alcatra-bovina",
    category: "acougue",
    name: "Alcatra Bovina em Bifes",
    unit: "kg",
    illustrativePrice: 39.9,
    image: "/images/produtos/alcatra-bovina.webp",
    imageAlt: "Corte bovino de alcatra",
    badge: "Açougue",
  },
  {
    id: "peito-frango",
    category: "acougue",
    name: "Filé de Peito de Frango",
    unit: "kg",
    illustrativePrice: 18.9,
    image: "/images/produtos/peito-frango.webp",
    imageAlt: "Filés de peito de frango frescos",
  },
  {
    id: "carne-moida",
    category: "acougue",
    name: "Carne Moída Patinho",
    unit: "kg",
    illustrativePrice: 36.9,
    image: "/images/produtos/carne-moida.webp",
    imageAlt: "Carne bovina moída na hora",
  },
  {
    id: "linguica-toscana",
    category: "acougue",
    name: "Linguiça Toscana Suína",
    unit: "kg",
    illustrativePrice: 21.9,
    image: "/images/produtos/linguica-toscana.webp",
    imageAlt: "Linguiça toscana para churrasco",
  },
  {
    id: "coxa-sobrecoxa",
    category: "acougue",
    name: "Coxa e Sobrecoxa de Frango",
    unit: "kg",
    illustrativePrice: 12.9,
    image: "/images/produtos/coxa-sobrecoxa.webp",
    imageAlt: "Cortes de coxa e sobrecoxa de frango",
  },
  {
    id: "costela-suina",
    category: "acougue",
    name: "Costela Suína Selecionada",
    unit: "kg",
    illustrativePrice: 24.9,
    image: "/images/produtos/costela-suina.webp",
    imageAlt: "Costela suína preparada",
  },

  // Padaria e confeitaria próprias
  {
    id: "pao-frances",
    category: "padaria",
    name: "Pão Francês Quentinho",
    unit: "kg",
    illustrativePrice: 14.9,
    image: "/images/produtos/pao-frances.webp",
    imageAlt: "Cestas com pães franceses assados na hora",
    badge: "Fornada do dia",
  },
  {
    id: "pao-de-queijo",
    category: "padaria",
    name: "Pão de Queijo Mineiro",
    unit: "400 g",
    illustrativePrice: 12.9,
    image: "/images/produtos/pao-de-queijo.webp",
    imageAlt: "Pães de queijo mineiros assados",
  },
  {
    id: "bolo-fuba",
    category: "padaria",
    name: "Bolo Caseiro de Fubá",
    unit: "unid.",
    illustrativePrice: 16.9,
    image: "/images/produtos/bolo-fuba.webp",
    imageAlt: "Fatia de bolo de fubá caseiro",
  },
  {
    id: "pao-de-forma",
    category: "padaria",
    name: "Pão de Forma Tradicional",
    unit: "400 g",
    illustrativePrice: 6.99,
    image: "/images/produtos/pao-de-forma.webp",
    imageAlt: "Pão fatiado tradicional",
  },
  {
    id: "rosca-doce",
    category: "padaria",
    name: "Rosca Doce Caseira",
    unit: "unid.",
    illustrativePrice: 11.9,
    image: "/images/produtos/rosca-doce.webp",
    imageAlt: "Rosca doce trançada da padaria",
  },
  {
    id: "croissant-manteiga",
    category: "padaria",
    name: "Croissant Folhado",
    unit: "unid.",
    illustrativePrice: 5.9,
    image: "/images/produtos/croissant-manteiga.webp",
    imageAlt: "Croissant dourado folhado",
  },

  // Itens essenciais da despensa (Mercearia)
  {
    id: "arroz-branco",
    category: "mercearia",
    name: "Arroz Branco Tipo 1",
    unit: "5 kg",
    illustrativePrice: 25.9,
    image: "/images/produtos/arroz-branco.webp",
    imageAlt: "Grãos de arroz branco tipo 1",
    badge: "Despensa",
  },
  {
    id: "feijao-carioca",
    category: "mercearia",
    name: "Feijão Carioca Tipo 1",
    unit: "1 kg",
    illustrativePrice: 7.49,
    image: "/images/produtos/feijao-carioca.webp",
    imageAlt: "Grãos de feijão selecionados",
  },
  {
    id: "oleo-soja",
    category: "mercearia",
    name: "Óleo de Soja Refinado",
    unit: "900 ml",
    illustrativePrice: 7.29,
    image: "/images/produtos/oleo-soja.webp",
    imageAlt: "Garrafas de óleo vegetal na gôndola",
  },
  {
    id: "macarrao-espaguete",
    category: "mercearia",
    name: "Macarrão Espaguete Sêmola",
    unit: "500 g",
    illustrativePrice: 4.49,
    image: "/images/produtos/macarrao-espaguete.webp",
    imageAlt: "Fios de macarrão espaguete",
  },
  {
    id: "acucar-cristal",
    category: "mercearia",
    name: "Açúcar Cristal Especial",
    unit: "5 kg",
    illustrativePrice: 16.9,
    image: "/images/produtos/acucar-cristal.webp",
    imageAlt: "Tigela com açúcar cristal branco",
  },
  {
    id: "molho-tomate",
    category: "mercearia",
    name: "Molho de Tomate Tradicional",
    unit: "340 g",
    illustrativePrice: 2.99,
    image: "/images/produtos/molho-tomate.webp",
    imageAlt: "Molho de tomate com tomates frescos",
  },

  // Café, bebidas e matinais
  {
    id: "cafe-moido",
    category: "bebidas-matinais",
    name: "Café Torrado e Moído",
    unit: "500 g",
    illustrativePrice: 21.9,
    image: "/images/produtos/cafe-moido.webp",
    imageAlt: "Pó de café torrado e moído",
    badge: "Matinal",
  },
  {
    id: "leite-integral",
    category: "bebidas-matinais",
    name: "Leite Integral UHT",
    unit: "1 L",
    illustrativePrice: 4.89,
    image: "/images/produtos/leite-integral.webp",
    imageAlt: "Copo com leite integral",
  },
  {
    id: "suco-laranja",
    category: "bebidas-matinais",
    name: "Suco de Laranja Integral",
    unit: "1 L",
    illustrativePrice: 11.9,
    image: "/images/produtos/suco-laranja.webp",
    imageAlt: "Copo de suco de laranja natural",
  },
  {
    id: "manteiga-sal",
    category: "bebidas-matinais",
    name: "Manteiga com Sal",
    unit: "200 g",
    illustrativePrice: 9.9,
    image: "/images/produtos/manteiga-sal.webp",
    imageAlt: "Pedaços de manteiga cremosa",
  },
  {
    id: "iogurte-natural",
    category: "bebidas-matinais",
    name: "Iogurte Natural Integral",
    unit: "170 g",
    illustrativePrice: 3.79,
    image: "/images/produtos/iogurte-natural.webp",
    imageAlt: "Porção de iogurte natural branco",
  },
  {
    id: "refrigerante-cola",
    category: "bebidas-matinais",
    name: "Refrigerante Sabor Cola",
    unit: "2 L",
    illustrativePrice: 8.99,
    image: "/images/produtos/refrigerante-cola.webp",
    imageAlt: "Copo de refrigerante de cola com gelo",
  },

  // Seleções especiais da loja
  {
    id: "queijo-minas",
    category: "selecoes-especiais",
    name: "Queijo Minas Frescal",
    unit: "kg",
    illustrativePrice: 38.9,
    image: "/images/produtos/queijo-minas.webp",
    imageAlt: "Queijo Minas Frescal inteiro no prato",
    badge: "Seleção da loja",
  },
  {
    id: "azeite-extra-virgem",
    category: "selecoes-especiais",
    name: "Azeite de Oliva Extra Virgem",
    unit: "500 ml",
    illustrativePrice: 34.9,
    image: "/images/produtos/azeite-extra-virgem.webp",
    imageAlt: "Garrafa de azeite extra virgem",
  },
  {
    id: "vinho-tinto",
    category: "selecoes-especiais",
    name: "Vinho Tinto Seco Selecionado",
    unit: "750 ml",
    illustrativePrice: 29.9,
    image: "/images/produtos/vinho-tinto.webp",
    imageAlt: "Garrafa e taça de vinho tinto",
  },
  {
    id: "requeijao-cremoso",
    category: "selecoes-especiais",
    name: "Requeijão Cremoso Tradicional",
    unit: "200 g",
    illustrativePrice: 7.9,
    image: "/images/produtos/requeijao-cremoso.webp",
    imageAlt: "Pote de creme cremoso branco",
  },
  {
    id: "chocolate-barra",
    category: "selecoes-especiais",
    name: "Chocolate ao Leite em Barra",
    unit: "90 g",
    illustrativePrice: 6.49,
    image: "/images/produtos/chocolate-barra.webp",
    imageAlt: "Tablete de chocolate ao leite em pedaços",
  },
  {
    id: "presunto-fatiado",
    category: "selecoes-especiais",
    name: "Presunto Cozido Fatiado",
    unit: "200 g",
    illustrativePrice: 8.49,
    image: "/images/produtos/presunto-fatiado.webp",
    imageAlt: "Frios e presunto fatiado na tábua",
  },
];
