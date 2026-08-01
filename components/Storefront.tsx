"use client";

import { products, type Product } from "@/data/products";
import { MessageCircle, X } from "lucide-react";
import { useMemo, useState } from "react";
import ProductCard from "./ProductCard";

const WHATSAPP_NUMBER = "5579998321317";
const categories = [
  "Todos",
  "Sala",
  // "Quarto",
  // "Escritório",
  // "Eletrodomésticos",
  "Área gourmet",
  "Iluminação",
] as const;

function formatPrice(value: number) {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
    maximumFractionDigits: 0,
  }).format(value);
}

function whatsappLink(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export default function Storefront() {
  const [category, setCategory] =
    useState<(typeof categories)[number]>("Todos");
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [detailsProduct, setDetailsProduct] = useState<Product | null>(null);
  const [detailsImageIndex, setDetailsImageIndex] = useState(0);
  const [expandedImage, setExpandedImage] = useState<string | null>(null);

  const filteredProducts = useMemo(() => {
    if (category === "Todos") return products;
    return products.filter((product) => product.category === category);
  }, [category]);

  function openDetails(product: Product) {
    setDetailsProduct(product);
    setDetailsImageIndex(0);
  }

  function buyFromDetails(product: Product) {
    setDetailsProduct(null);
    setSelectedProduct(product);
  }

  return (
    <>
      <header className="header">
        <div className="container">
          <div className="eyebrow">Mudança à vista</div>
          <h1>Desapego da mudança</h1>
          <p className="subtitle">
            Móveis e itens que fizeram parte da nossa casa e agora podem ganhar
            um novo lar.
          </p>

          <nav className="filters" aria-label="Filtrar por categoria">
            {categories.map((item) => (
              <button
                key={item}
                className={`filterButton ${category === item ? "active" : ""}`}
                onClick={() => setCategory(item)}
              >
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
              <ProductCard
                key={product.id}
                product={product}
                onBuy={setSelectedProduct}
                onDetails={openDetails}
              />
            ))}
          </section>
        ) : (
          <p className="empty">Nenhum item nesta categoria no momento.</p>
        )}
      </main>

      <footer className="contactFooter">
        <div className="container contactFooterInner">
          <div>
            <div className="eyebrow">Entre em contato</div>
            <h2>Ficou interessado em algum item?</h2>
            <p>
              Fale comigo pelo WhatsApp para tirar dúvidas, verificar
              disponibilidade ou combinar a compra.
            </p>
          </div>
          <a
            className="footerWhatsappButton"
            href={whatsappLink(
              "Olá! Vi o site de desapego e gostaria de mais informações.",
            )}
            target="_blank"
            rel="noreferrer"
          >
            <MessageCircle size={21} />
            Falar pelo WhatsApp
          </a>
        </div>
      </footer>

      <a
        className="floatingWhatsapp"
        href={whatsappLink(
          "Olá! Vi o seu site de desapego e queria saber mais sobre os itens disponíveis.",
        )}
        target="_blank"
        rel="noreferrer"
        aria-label="Falar no WhatsApp"
      >
        <MessageCircle size={28} />
      </a>

      {detailsProduct && (
        <div
          className="detailsOverlay"
          role="presentation"
          onMouseDown={() => setDetailsProduct(null)}
        >
          <section
            className="detailsModal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="details-title"
            onMouseDown={(event) => event.stopPropagation()}
          >
            <div className="detailsHandle" aria-hidden="true" />
            <button
              className="detailsClose"
              onClick={() => setDetailsProduct(null)}
              aria-label="Fechar detalhes"
            >
              <X size={22} />
            </button>

            <div className="detailsGallery">
              <button
                className="detailsMainImageButton"
                onClick={() =>
                  setExpandedImage(detailsProduct.images[detailsImageIndex])
                }
                aria-label={`Ampliar foto de ${detailsProduct.name}`}
              >
                <img
                  className="detailsMainImage"
                  src={detailsProduct.images[detailsImageIndex]}
                  alt={detailsProduct.name}
                />
              </button>

              <div
                className="detailsThumbnails"
                aria-label={`Fotos de ${detailsProduct.name}`}
              >
                {detailsProduct.images.map((image, index) => (
                  <button
                    className="thumbnailButton"
                    key={image}
                    onClick={() => setDetailsImageIndex(index)}
                    aria-label={`Ver foto ${index + 1} de ${detailsProduct.name}`}
                  >
                    <img
                      className={`thumbnail ${detailsImageIndex === index ? "active" : ""}`}
                      src={image}
                      alt=""
                    />
                  </button>
                ))}
              </div>
            </div>

            <div className="detailsContent">
              <div className="category">{detailsProduct.category}</div>
              <h2 id="details-title" className="detailsTitle">
                {detailsProduct.name}
              </h2>
              <div className="detailsPrice">
                {formatPrice(detailsProduct.price)}
              </div>

              <div className="detailsSection">
                <h3>Descrição</h3>
                <p>{detailsProduct.description}</p>
              </div>

              {detailsProduct.dimensions && (
                <div className="detailsSection">
                  <h3>Dimensões</h3>
                  <p>{detailsProduct.dimensions}</p>
                </div>
              )}

              {detailsProduct.referenceUrl && (
                <a
                  className="referenceLink"
                  href={detailsProduct.referenceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {detailsProduct.referenceLabel ?? "Ver produto ↗"}
                </a>
              )}

              <button
                className="detailsBuyButton"
                onClick={() => buyFromDetails(detailsProduct)}
              >
                Comprar
              </button>
            </div>
          </section>
        </div>
      )}

      {selectedProduct && (
        <div
          className="overlay"
          role="presentation"
          onMouseDown={() => setSelectedProduct(null)}
        >
          <section
            className="modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="purchase-title"
            onMouseDown={(event) => event.stopPropagation()}
          >
            <h2 id="purchase-title">Tenho interesse</h2>
            <p>
              Para comprar este item, fale comigo pelo WhatsApp. A mensagem já
              vai com o produto preenchido.
            </p>

            <div className="modalProduct">
              <strong>{selectedProduct.name}</strong>
              <div>{formatPrice(selectedProduct.price)}</div>
            </div>

            <div className="modalActions">
              <a
                className="whatsappButton"
                href={whatsappLink(
                  `Olá! Tenho interesse no ${selectedProduct.name}, anunciado por ${formatPrice(selectedProduct.price)}. Ele ainda está disponível?`,
                )}
                target="_blank"
                rel="noreferrer"
              >
                Falar pelo WhatsApp
              </a>
              <button
                className="cancelButton"
                onClick={() => setSelectedProduct(null)}
              >
                Cancelar
              </button>
            </div>
          </section>
        </div>
      )}

      {expandedImage && (
        <div
          className="lightbox"
          onClick={() => setExpandedImage(null)}
          role="presentation"
        >
          <button
            className="closeLightbox"
            onClick={() => setExpandedImage(null)}
            aria-label="Fechar imagem ampliada"
          >
            <X />
          </button>
          <img
            src={expandedImage}
            alt="Foto ampliada do produto"
            onClick={(event) => event.stopPropagation()}
          />
        </div>
      )}
    </>
  );
}
