"use client";

import type { Product } from "@/data/products";
import { Share2 } from "lucide-react";
import { useState } from "react";

function formatPrice(value: number) {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
    maximumFractionDigits: 0,
  }).format(value);
}

export default function ProductCard({
  product,
  onBuy,
  onDetails,
}: {
  product: Product;
  onBuy: (product: Product) => void;
  onDetails: (product: Product) => void;
}) {
  const [activeImage, setActiveImage] = useState(0);

  async function handleShare() {
    const url = `${window.location.origin}${window.location.pathname}#${product.id}`;
    const shareData = {
      title: product.name,
      text: `${product.name} — ${formatPrice(product.price)}`,
      url,
    };

    if (navigator.share) {
      await navigator.share(shareData);
      return;
    }

    await navigator.clipboard.writeText(url);
    alert("Link do item copiado!");
  }

  return (
    <article className="card" id={product.id}>
      <button
        className="mainImageButton"
        onClick={() => onDetails(product)}
        aria-label={`Ver detalhes de ${product.name}`}
      >
        <img
          className="mainImage"
          src={product.images[activeImage]}
          alt={product.name}
        />
      </button>

      <div className="thumbnails" aria-label={`Fotos de ${product.name}`}>
        {product.images.map((image, index) => (
          <button
            className="thumbnailButton"
            key={image}
            onClick={() => setActiveImage(index)}
            aria-label={`Ver foto ${index + 1} de ${product.name}`}
          >
            <img
              className={`thumbnail ${activeImage === index ? "active" : ""}`}
              src={image}
              alt=""
            />
          </button>
        ))}
      </div>

      <div className="cardBody">
        <div className="cardInfo">
          <div className="category">{product.category}</div>
          <button
            className="productNameButton"
            onClick={() => onDetails(product)}
          >
            <h2 className="productName">{product.name}</h2>
          </button>
          <div className="price">{formatPrice(product.price)}</div>
        </div>

        <div className="cardFooter">
          <button className="detailsButton" onClick={() => onDetails(product)}>
            Ver detalhes
          </button>

          <div className="actions">
            <button className="buyButton" onClick={() => onBuy(product)}>
              Comprar
            </button>
            <button
              className="shareButton"
              onClick={handleShare}
              aria-label={`Compartilhar ${product.name}`}
              title="Compartilhar"
            >
              <Share2 size={20} />
            </button>
          </div>
        </div>
      </div>
    </article>
  );
}
