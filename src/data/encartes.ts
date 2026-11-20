export interface EncartePageItem {
  pageNumber: number;
  title: string;
  subtitle: string;
  /** Quando houver arte real do encarte da semana, basta preencher imageUrl com o caminho da página (JPG/WEBP/PNG). */
  imageUrl: string | null;
  statusLabel: string;
  sectorsPreview: string[];
}

export interface EncarteEdition {
  id: string;
  title: string;
  validityLabel: string;
  participatingStores: string;
  isDemoPlaceholder: boolean;
  pages: EncartePageItem[];
}

export const CURRENT_ENCARTE: EncarteEdition = {
  id: "encarte-semanal-demo",
  title: "Encarte Semanal Supermercados Leal",
  validityLabel: "Aguardando publicação oficial da semana",
  participatingStores: "Válido em todas as unidades de Uberlândia/MG",
  isDemoPlaceholder: true,
  pages: [
    {
      pageNumber: 1,
      title: "Capa · Encarte da Semana em Breve",
      subtitle:
        "Área pronta para exibir a capa do tabloide oficial em alta resolução, sem simular preços ou descontos inexistentes.",
      imageUrl: null,
      statusLabel: "Página demonstrativa · Sem preços inventados",
      sectorsPreview: ["Hortifrúti", "Açougue", "Padaria & Frios"],
    },
    {
      pageNumber: 2,
      title: "Páginas Internas · Estrutura por Setores",
      subtitle:
        "Espaço configurado para receber a lâmina interna de ofertas semanais com zoom, tela cheia e compartilhamento.",
      imageUrl: null,
      statusLabel: "Página demonstrativa · Aguardando arte oficial",
      sectorsPreview: ["Mercearia", "Bebidas", "Higiene e Limpeza"],
    },
  ],
};
