export type Product = {
  id: string;
  name: string;
  price: number;
  description: string;
  dimensions?: string;
  images: string[];
  referenceUrl?: string;
  referenceLabel?: string;
};

export const products: Product[] = [
  {
    id: "mesa-redonda-mendoza",
    name: "Mesa Redonda Mendoza 1,30 m TOK&STOK",
    price: 2500,
    description:
      "Mesa em MDF revestido com lâmina natural de cinamomo e acabamento em verniz poliuretano. Tampo de 25 mm. Carga máxima de 30 kg.",
    dimensions: "Ø 1,30 m × 77 cm de altura • Peso: 46,5 kg",
    images: [
      "/products/mesa-mendoza/02.jpeg",
      "/products/mesa-mendoza/03.jpeg",
      "/products/mesa-mendoza/05.jpeg",
      "/products/mesa-mendoza/01.jpeg",
    ],
    referenceUrl:
      "https://www.tokstok.com.br/mesa-redonda-1-30-m-nozes-mendoza/p?idsku=392716&region_id=000003&utm_source=google&utm_medium=cpc&utm_campaign=18246975493&utm_term=&gad_source=1&gad_campaignid=18245623617&gbraid=0AAAAADGVPjUjaLgs7SCqP7Vpg_ZEOZKdc&gclid=CjwKCAjwsrbTBhAvEiwA0Bpp4cmudKG6x9SC4u4fTtVs0PzRstmi6a-0twTUkonglyATZ1s_8zzUvRoCKOsQAvD_BwE",
    referenceLabel: "Ver produto na Tok&Stok ↗",
  },
  {
    id: "cadeiras-jantar-rattan-linho",
    name: "Conjunto com 4 cadeiras de Jantar Madeira Maciça Estofada em Linho Bege Claro Encosto Rattan",
    price: 1200,
    description:
      "Conjunto com 4 cadeiras da marca Decore Casa. Estrutura em madeira maciça de eucalipto tratado, assento estofado em linho bege claro e encosto em rattan. Estrutura resistente, confortável e de estilo atemporal, ideal para sala de jantar, cozinha ou área gourmet.",
    dimensions:
      "60 cm (P) × 48 cm (L) × 82 cm (A) • Assento: aprox. 48 × 46 cm",
    images: [
      "/products/cadeiras-rattan/01.jpeg",
      "/products/cadeiras-rattan/02.jpeg",
      "/products/cadeiras-rattan/03.jpeg",
      "/products/cadeiras-rattan/04.jpeg",
    ],
    referenceUrl: "https://a.co/d/07B2Y3UL",
    referenceLabel: "Ver produto na Amazon ↗",
  },
  {
    id: "mesa-saarinen-oval-marmore",
    name: "Mesa Saarinen Oval Mármore",
    price: 2500,
    description:
      "Mesa de jantar Saarinen oval com tampo em mármore, contra-tampo em MDF e base tulipa em alumínio fundido com pintura automotiva PU. Inspirada no icônico design criado por Eero Saarinen em 1956, combina linhas orgânicas, elegância e versatilidade para salas de jantar e outros ambientes.",
    dimensions: "150 cm (C) × 80 cm (L) × 77 cm (A)",
    images: [
      "/products/mesa-saarinen-oval/02.jpeg",
      "/products/mesa-saarinen-oval/01.jpeg",
      "/products/mesa-saarinen-oval/03.jpeg",
    ],
  },
  {
    id: "sofa-retratil-astor",
    name: "Sofá Retrátil 3 Lugares Astor Tok&Stok",
    price: 2500,
    description:
      "Sofá retrátil de 3 lugares com estrutura em madeira maciça de eucalipto, percintas elásticas, molas, espuma de poliuretano D28, plumante siliconizado e revestimento 100% poliéster. Possui assento extensível/retrátil, pés maciços e acompanha 4 almofadas para o encosto com enchimento em fibra siliconizada plumante, forro em non woven e fechamento por zíper. Carga máxima suportável: 280 kg, distribuídos uniformemente.",
    dimensions:
      "216 cm (L) × 110 cm (P fechado) / 154 cm (P aberto) × 90 cm (A) • Assento: 45 cm de altura • Braços: 56 cm de altura • Peso: 90 kg",
    images: [
      "/products/sofa-astor/03.jpeg",
      "/products/sofa-astor/01.jpeg",
      "/products/sofa-astor/02.jpeg",
    ],
    referenceUrl:
      "https://www.tokstok.com.br/sofa-retratil-3-lugares-cinza-claro-astor/p?idsku=359083&region_id=000003&utm_source=google&utm_medium=cpc&utm_campaign=23545821093&utm_term=193443983935&gad_source=1&gad_campaignid=23545821093&gbraid=0AAAAADGVPjXDP5vk-nkZDfI3uPZORsHHd&gclid=CjwKCAjwsrbTBhAvEiwA0Bpp4X4gQgccigUO8yCGVLEZuATEzd3reAOC0BeOrmBYzAHk1aw1n2xJ7xoC0goQAvD_BwE",
    referenceLabel: "Ver produto na Tok&Stok ↗",
  },
  {
    id: "pendente-led-anello-triplo",
    name: "Pendente LED Anello Redondo Triplo 60 cm",
    price: 800,
    description:
      "Pendente LED de design moderno, pensado para compor ambientes residenciais, comerciais ou empresariais. O conjunto de anéis proporciona iluminação bem distribuída pelo espaço, combinando funcionalidade e decoração.",
    dimensions:
      "Diâmetro: 60 cm • Potência: 65W • Temperatura de cor: 4000K • Bivolt",
    images: ["/products/pendente-anello/01.png"],
    referenceUrl:
      "https://www.inspirehome.com.br/pendente-led-anello-redondo-triplo-3000k-92w-bivolt-o90cm-aluminio-montare-128-975-3000k/p?utm_source=google&utm_content=&utm_campaign=21346115649&gad_source=1&gad_campaignid=21346116912&gclid=CjwKCAjwsrbTBhAvEiwA0Bpp4TLtlnJyH4aplC-g81XbfDS2MzgJvebonkzr8vSVt8-xjp6u2xyvzhoCRssQAvD_BwE",
    referenceLabel: "Ver produto na Inspire Home ↗",
  },
  {
    id: "buffet-linhas-3-portas",
    name: "Buffet 3 Portas Linhas 1,60 m × 42 cm TOK&STOK",
    price: 1800,
    description:
      "Buffet em MDF de 15 mm com acabamento em pintura laqueada. Possui 3 portas com detalhes usinados, 6 nichos com prateleiras reguláveis, pés em tubo de aço carbono com pintura epóxi-pó e sapatas plásticas reguláveis. Dispensa o uso de puxadores. Carga máxima suportável: 25 kg no tampo e 5 kg nos nichos, distribuídos uniformemente.",
    dimensions: "160 cm (L) × 42 cm (P) × 79 cm (A) • Peso: 47,5 kg",
    images: [
      "/products/buffet/03.jpeg",
      "/products/buffet/01.jpeg",
      "/products/buffet/02.jpeg",
    ],
    referenceUrl:
      "https://www.tokstok.com.br/buffet-3-portas-1-60-m-x-42-cm-areia-areia-linhas/p",
    referenceLabel: "Ver produto na Tok&Stok ↗",
  },
  {
    id: "carrinho-jahari",
    name: "Carrinho 69 cm × 46 cm Jahari TOK&STOK",
    price: 800,
    description:
      "Carrinho com estrutura em tubo de aço com acabamento em pintura epóxi-pó. Possui tampo e prateleira em madeira maciça (Pinus Elliottii) tingida com detalhes desgastados e aplicação de verniz, rodas maciças e emborrachadas, e sapatas plásticas. Carga máxima suportável: 20 kg no tampo e 20 kg na prateleira, distribuídos uniformemente. Pode haver variação de tonalidades e veios.",
    dimensions: "69 cm (L) × 46,5 cm (P) × 81 cm (A) • Peso: 14 kg",
    images: [
      "/products/carrinho-bar/01.jpeg",
      "/products/carrinho-bar/02.jpeg",
      "/products/carrinho-bar/03.jpeg",
    ],
    referenceUrl:
      "https://www.tokstok.com.br/carrinho-69-cm-x-46-cm-preto-nozes-rustico-jahari/p",
    referenceLabel: "Ver produto na Tok&Stok ↗",
  },
  {
    id: "comoda-wink",
    name: "Cômoda 6 Gavetas 1,20 m × 40 cm Wink TOK&STOK",
    price: 800,
    description:
      "Cômoda em MDF (Medium Density Fiberboard) com acabamento em pintura por impressão. Possui 6 gavetas em MDF com corrediças metálicas, 2 nichos e sapatas plásticas. Dispensa puxadores. Possui sistema antitombamento. Carga máxima suportável: 15 kg no tampo, 3 kg por nicho e 3 kg por gaveta, distribuídos uniformemente.",
    dimensions: "120 cm (L) × 40 cm (P) × 89 cm (A) • Peso: 43,30 kg",
    images: [
      "/products/comoda-wink/03.jpeg",
      "/products/comoda-wink/01.jpeg",
      "/products/comoda-wink/02.jpeg",
    ],
    referenceUrl:
      "https://www.tokstok.com.br/comoda-6-gavetas-1-20-m-x-40-cm-branco-wink/p",
    referenceLabel: "Ver produto na Tok&Stok ↗",
  },
  {
    id: "smart-tv-lg-55-nano80tsa",
    name: "Smart TV LG 55” 4K UHD NanoCell 55NANO80TSA",
    price: 1700,
    description:
      "Smart TV LG de 55 polegadas com tecnologia NanoCell e resolução 4K UHD. Possui Wi-Fi, ThinQ AI e compatibilidade com Alexa. Conexões: 3 entradas HDMI 2.0, 2 entradas USB e 1 saída digital óptica.",
    dimensions: "Tela: 55 polegadas • Tecnologia: NanoCell • Resolução: 4K",
    images: [
      "/products/tv-lg-55-nanocell/02.jpeg",
      "/products/tv-lg-55-nanocell/01.jpeg",
      "/products/tv-lg-55-nanocell/03.jpeg",
    ],
    referenceUrl:
      "https://www.kabum.com.br/produto/629063/smart-tv-55-polegadas-lg-4k-uhd-3-hdmi-2-usb-wifi-thinq-ai-alexa-55nano80tsa?srsltid=AfmBOops9XEIyowl-HaSf4EhbWStWHkMlIARevfXmEIY3UAx0vhV_WVFCbo",
    referenceLabel: "Ver produto na KaBuM! ↗",
  },
  {
    id: "microondas-lg-mh7043r",
    name: "Forno de Micro-ondas LG MH7043R",
    price: 300,
    description:
      "Forno de micro-ondas LG MH7043R com acabamento prata, frente espelhada e puxador na porta. Possui Grill de Quartzo para pratos grelhados, dourados e saborosos, além de Função Grill e Função Combinada, que utiliza Grill + Micro-ondas.",
    dimensions: "Capacidade: 30 L • Micro-ondas + Grill de Quartzo",
    images: [
      "/products/microondas-lg-mh7043r/01.jpeg",
      "/products/microondas-lg-mh7043r/03.jpeg",
    ],
    referenceUrl:
      "https://www.casasbahia.com.br/forno-de-micro-ondas-lg-mh7043r-com-24-programas-funcao-grill-eco-on-i-wave-descongelamento-trava-para-criancas-e-frente-espelhada-30-l-prata/p/2933714",
    referenceLabel: "Ver produto nas Casas Bahia ↗",
  },
  {
    id: "smart-tv-lg-55-nano80tsa",
    name: "Smart TV LG 55” 4K UHD NanoCell 55NANO80TSA",
    price: 1700,
    description:
      "Smart TV LG de 55 polegadas com tecnologia NanoCell e resolução 4K UHD. Possui Wi-Fi, ThinQ AI e compatibilidade com Alexa. Conexões: 3 entradas HDMI 2.0, 2 entradas USB e 1 saída digital óptica.",
    dimensions: "Tela: 55 polegadas • Tecnologia: NanoCell • Resolução: 4K",
    images: ["/products/tv-lg-55-nanocell/03.jpeg"],
    referenceUrl:
      "https://www.kabum.com.br/produto/629063/smart-tv-55-polegadas-lg-4k-uhd-3-hdmi-2-usb-wifi-thinq-ai-alexa-55nano80tsa?srsltid=AfmBOops9XEIyowl-HaSf4EhbWStWHkMlIARevfXmEIY3UAx0vhV_WVFCbo",
    referenceLabel: "Ver produto na KaBuM! ↗",
  },
  {
    id: "ar-condicionado-gree-g-top-auto-12000",
    name: "Ar-Condicionado Split Inverter Gree G-Top Auto 12.000 BTUs",
    price: 1500,
    description:
      "Ar-condicionado Split Gree G-Top Auto Inverter, ciclo frio, 12.000 BTUs, gás refrigerante R-32, classificação energética INMETRO A, IDRS de 6,04 Wh/Wh e consumo anual de 481,4 kWh/ano. Voltagem 220 V.",
    dimensions: "Capacidade: 12.000 BTUs • Voltagem: 220 V",
    images: [
      "/products/ar-gree-12000/01.jpeg",
      "/products/ar-gree-12000/02.jpeg",
    ],
    referenceUrl:
      "https://loja.gree.com.br/ar-condicionado-split-inverter-gree-g-top-auto-12000-btuh-frio-r-32-220v-12000-frio-1.html",
    referenceLabel: "Ver produto na Gree ↗",
  },
  {
    id: "ar-condicionado-agratto-neo-9000",
    name: "Ar-Condicionado Split Inverter Agratto Neo 9.000 BTUs Quente e Frio",
    price: 1400,
    description:
      "Ar-Condicionado Split Inverter Agratto Neo Quente e Frio ICS9QF-02, com 9.000 BTUs. Possui design clean, serpentina com tubos 100% em cobre, tecnologia Inverter para maior eficiência e economia, gás ecológico R32 e painel de LED com iluminação backlight que pode ser desligada durante a noite.",
    dimensions:
      "Capacidade: 9.000 BTUs • Ciclo: Quente e Frio • Voltagem: 220 V",
    images: [
      "/products/ar-agratto-9000/01.jpeg",
      "/products/ar-agratto-9000/02.jpeg",
    ],
    referenceUrl:
      "https://www.mercadolivre.com.br/p/MLB45400682?pdp_filters=item_id:MLB5351491970&matt_tool=38524122#origin=share&sid=share&wid=MLB5351491970&action=copy",
    referenceLabel: "Ver produto no Mercado Livre ↗",
  },
];
