export type Product = {
  id: string;
  name: string;
  price: number;
  category: "Sala" | "Quarto" | "Escritório" | "Eletrodomésticos";
  description: string;
  dimensions?: string;
  images: string[];
  referenceUrl?: string;
};

export const products: Product[] = [
  {
    id: "mesa-redonda-mendoza",
    name: "Mesa Redonda Mendoza TOK&STOK 1,30 m",
    price: 2500,
    category: "Sala",
    description:
      "Mesa em MDF revestido com lâmina natural de cinamomo e acabamento em verniz poliuretano. Tampo de 25 mm. Carga máxima de 30 kg.",
    dimensions: "Ø 1,30 m × 77 cm de altura • Peso: 46,5 kg",
    images: [
      "/products/mesa-mendoza/02.jpeg",
      "/products/mesa-mendoza/03.jpeg",
      "/products/mesa-mendoza/04.jpeg",
      "/products/mesa-mendoza/05.jpeg",
      "/products/mesa-mendoza/01.jpeg",
    ],
    referenceUrl:
      "https://www.tokstok.com.br/mesa-redonda-1-30-m-nozes-mendoza/p?idsku=392716&region_id=000003&utm_source=google&utm_medium=cpc&utm_campaign=18246975493&utm_term=&gad_source=1&gad_campaignid=18245623617&gbraid=0AAAAADGVPjUjaLgs7SCqP7Vpg_ZEOZKdc&gclid=CjwKCAjwsrbTBhAvEiwA0Bpp4cmudKG6x9SC4u4fTtVs0PzRstmi6a-0twTUkonglyATZ1s_8zzUvRoCKOsQAvD_BwE",
  },
];
