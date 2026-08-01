"use client";

import { useMemo, useState } from "react";
import { MessageCircle, X } from "lucide-react";
import ProductCard from "./ProductCard";
import { products, type Product } from "@/data/products";

const WHATSAPP_NUMBER = "5579999999999"; // troque pelo seu número com DDI + DDD
const categories = ["Todos", "Sala", "Quarto", "Escritório", "Eletrodomésticos"] as const;

function formatPrice(value: number) {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
    maximumFractionDigits: 0
  }).format(value);
}

function whatsappLink(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export default function Storefront() {
  const [category, setCategory] = useState<(typeof categories)[number]>("Todos");
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [expandedImage, setExpandedImage] = useState<string | null>(null);

  const filteredProducts = useMemo(() => {
    if (category === "Todos") return products;
    return products.filter((product) => product.category === category);
  }, [category]);

  return (
    <>
      <header className="header">
        <div className="container">
          <div className="eyebrow">Mudança à vista</div>
          <h1>Desapego da mudança</h1>
          <p className="subtitle">Móveis e itens que fizeram parte da nossa casa e agora podem ganhar um novo lar.</p>

          <nav className="filters" aria-label="Filtrar por categoria">
            {categories.map((item) => (
              <button key={item} className={`filterButton ${category === item ? "active" : ""}`} onClick={() => setCategory(item)}>
                {item}
              </button>
            ))}
          </nav>
        </div>
      </header>

      <main className="container">
        {filteredProducts.length ? (
          <section className="grid">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} onBuy={setSelectedProduct} onExpand={setExpandedImage} />
            ))}
          </section>
        ) : (
          <p className="empty">Nenhum item nesta categoria no momento.</p>
        )}
      </main>

      <a
        className="floatingWhatsapp"
        href={whatsappLink("Olá! Vi o seu site de desapego e queria saber mais sobre os itens disponíveis.")}
        target="_blank"
        rel="noreferrer"
        aria-label="Falar no WhatsApp"
      >
        <MessageCircle size={28} />
      </a>

      {selectedProduct && (
        <div className="overlay" role="presentation" onMouseDown={() => setSelectedProduct(null)}>
          <section className="modal" role="dialog" aria-modal="true" aria-labelledby="purchase-title" onMouseDown={(event) => event.stopPropagation()}>
            <h2 id="purchase-title">Tenho interesse</h2>
            <p>Para comprar este item, fale comigo pelo WhatsApp. A mensagem já vai com o produto preenchido.</p>

            <div className="modalProduct">
              <strong>{selectedProduct.name}</strong>
              <div>{formatPrice(selectedProduct.price)}</div>
            </div>

            <div className="modalActions">
              <a
                className="whatsappButton"
                href={whatsappLink(`Olá! Tenho interesse no ${selectedProduct.name}, anunciado por ${formatPrice(selectedProduct.price)}. Ele ainda está disponível?`)}
                target="_blank"
                rel="noreferrer"
              >
                Falar pelo WhatsApp
              </a>
              <button className="cancelButton" onClick={() => setSelectedProduct(null)}>Cancelar</button>
            </div>
          </section>
        </div>
      )}

      {expandedImage && (
        <div className="lightbox" onClick={() => setExpandedImage(null)} role="presentation">
          <button className="closeLightbox" onClick={() => setExpandedImage(null)} aria-label="Fechar imagem ampliada"><X /></button>
          <img src={expandedImage} alt="Foto ampliada do produto" onClick={(event) => event.stopPropagation()} />
        </div>
      )}
    </>
  );
}
