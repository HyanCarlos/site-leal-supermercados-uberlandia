export interface StoreUnit {
  id: string;
  name: string;
  neighborhood: string;
  badge?: string;
  address: string;
  cep: string;
  phoneDisplay: string;
  phoneHref: string;
  phoneNote?: string;
  hoursWeekday: string;
  hoursSunday: string;
  mapsUrl: string;
  embedQuery: string;
  region: "Norte" | "Leste" | "Sul" | "Oeste";
}

export const STORES: StoreUnit[] = [
  {
    id: "roosevelt",
    name: "Unidade Presidente Roosevelt",
    neighborhood: "Presidente Roosevelt",
    badge: "Matriz",
    address: "Av. Cesário Crosara, 3855 — Presidente Roosevelt",
    cep: "38401-048",
    phoneDisplay: "(34) 3232-2124",
    phoneHref: "tel:+553432322124",
    hoursWeekday: "Seg. a Sáb.: 07h às 22h",
    hoursSunday: "Dom. e feriados: 07h às 21h30",
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Supermercado+Leal+Av+Cesario+Crosara+3855+Presidente+Roosevelt+Uberlandia+MG",
    embedQuery: "Av. Cesário Crosara, 3855, Presidente Roosevelt, Uberlândia - MG",
    region: "Norte",
  },
  {
    id: "tibery",
    name: "Unidade Tibery",
    neighborhood: "Tibery",
    address: "Av. Noruega, 180 — Tibery",
    cep: "38405-002",
    phoneDisplay: "(34) 3213-5707",
    phoneHref: "tel:+553432135707",
    hoursWeekday: "Seg. a Sáb.: 07h às 22h",
    hoursSunday: "Dom. e feriados: 07h às 21h30",
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Supermercado+Leal+Av+Noruega+180+Tibery+Uberlandia+MG",
    embedQuery: "Av. Noruega, 180, Tibery, Uberlândia - MG",
    region: "Leste",
  },
  {
    id: "santa-monica",
    name: "Unidade Santa Mônica",
    neighborhood: "Santa Mônica",
    address: "Av. Segismundo Pereira, 2411 — Santa Mônica",
    cep: "38408-170",
    phoneDisplay: "(34) 3228-2100",
    phoneHref: "tel:+553432282100",
    hoursWeekday: "Seg. a Sáb.: 07h às 22h",
    hoursSunday: "Dom. e feriados: 07h às 21h30",
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Supermercado+Leal+Av+Segismundo+Pereira+2411+Santa+Monica+Uberlandia+MG",
    embedQuery: "Av. Segismundo Pereira, 2411, Santa Mônica, Uberlândia - MG",
    region: "Leste",
  },
  {
    id: "novo-mundo",
    name: "Unidade Novo Mundo",
    neighborhood: "Novo Mundo",
    badge: "Nova loja",
    address: "Av. Segismundo Pereira, 5188 — Novo Mundo",
    cep: "38407-718",
    phoneDisplay: "(34) 3232-2124",
    phoneHref: "tel:+553432322124",
    phoneNote: "Central da rede",
    hoursWeekday: "Seg. a Sáb.: 07h às 22h",
    hoursSunday: "Dom. e feriados: 07h às 21h30",
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Supermercado+Leal+Av+Segismundo+Pereira+5188+Novo+Mundo+Uberlandia+MG",
    embedQuery: "Av. Segismundo Pereira, 5188, Novo Mundo, Uberlândia - MG",
    region: "Leste",
  },
  {
    id: "patrimonio",
    name: "Unidade Patrimônio",
    neighborhood: "Patrimônio",
    address: "Rua da Carioca, 500 — Patrimônio / Copacabana",
    cep: "38411-046",
    phoneDisplay: "(34) 3228-2100",
    phoneHref: "tel:+553432282100",
    phoneNote: "Central da rede",
    hoursWeekday: "Seg. a Sáb.: 07h às 22h",
    hoursSunday: "Dom. e feriados: 07h às 21h30",
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Supermercado+Leal+Rua+da+Carioca+500+Patrimonio+Uberlandia+MG",
    embedQuery: "Rua da Carioca, 500, Patrimônio, Uberlândia - MG",
    region: "Sul",
  },
  {
    id: "gravatas",
    name: "Unidade Gravatás",
    neighborhood: "Gravatás",
    address: "Av. Alípio Abrão, 1730 — Gravatás / Granada",
    cep: "38410-539",
    phoneDisplay: "(34) 3228-2100",
    phoneHref: "tel:+553432282100",
    phoneNote: "Central da rede",
    hoursWeekday: "Seg. a Sáb.: 07h às 22h",
    hoursSunday: "Dom. e feriados: 07h às 21h30",
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Supermercado+Leal+Av+Alipio+Abrao+1730+Gravatas+Uberlandia+MG",
    embedQuery: "Av. Alípio Abrão, 1730, Granada, Uberlândia - MG",
    region: "Sul",
  },
  {
    id: "jardim-holanda",
    name: "Unidade Jardim Holanda",
    neighborhood: "Jardim Holanda",
    address: "Alameda Paulo César Santana, 22 (esq. Av. Olímpio de Freitas, 200) — Jardim Holanda",
    cep: "38412-326",
    phoneDisplay: "(34) 3257-4011",
    phoneHref: "tel:+553432574011",
    hoursWeekday: "Seg. a Sáb.: 07h às 22h",
    hoursSunday: "Dom.: 07h às 21h",
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Supermercado+Leal+Av+Olimpio+de+Freitas+200+Jardim+Holanda+Uberlandia+MG",
    embedQuery: "Av. Olímpio de Freitas, 200, Jardim Holanda, Uberlândia - MG",
    region: "Oeste",
  },
  {
    id: "chacaras-tubalina",
    name: "Unidade Chácaras Tubalina",
    neighborhood: "Chácaras Tubalina",
    badge: "Pátio Tem Tem",
    address: "Av. Imbaúba, 1676, Loja 1035 — Chácaras Tubalina",
    cep: "38413-316",
    phoneDisplay: "(34) 3228-2100",
    phoneHref: "tel:+553432282100",
    phoneNote: "Central da rede",
    hoursWeekday: "Seg. a Sáb.: 07h às 22h",
    hoursSunday: "Dom. e feriados: 07h às 21h30",
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Supermercado+Leal+Av+Imbauba+1676+Chacaras+Tubalina+Uberlandia+MG",
    embedQuery: "Av. Imbaúba, 1676, Chácaras Tubalina, Uberlândia - MG",
    region: "Oeste",
  },
  {
    id: "alvorada",
    name: "Unidade Alvorada",
    neighborhood: "Alvorada",
    address: "Rua Aristides Fernandes Morais, 495, Loja 01 — Conj. Alvorada",
    cep: "38407-114",
    phoneDisplay: "(34) 3228-2100",
    phoneHref: "tel:+553432282100",
    phoneNote: "Central da rede",
    hoursWeekday: "Seg. a Sáb.: 07h às 22h",
    hoursSunday: "Dom. e feriados: 07h às 21h30",
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Supermercado+Leal+Rua+Aristides+Fernandes+Morais+495+Alvorada+Uberlandia+MG",
    embedQuery: "Rua Aristides Fernandes Morais, 495, Alvorada, Uberlândia - MG",
    region: "Leste",
  },
  {
    id: "mansour",
    name: "Unidade Mansour",
    neighborhood: "Mansour",
    address: "Av. Rio Mississipi, 1380 — Mansour",
    cep: "38414-466",
    phoneDisplay: "(34) 3232-2124",
    phoneHref: "tel:+553432322124",
    phoneNote: "Central da rede",
    hoursWeekday: "Seg. a Sáb.: 07h às 22h",
    hoursSunday: "Dom. e feriados: 07h às 21h30",
    mapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Supermercado+Leal+Av+Rio+Mississipi+1380+Mansour+Uberlandia+MG",
    embedQuery: "Av. Rio Mississipi, 1380, Mansour, Uberlândia - MG",
    region: "Oeste",
  },
];
