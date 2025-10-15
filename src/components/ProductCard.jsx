import React from "react";
import "./ProductCard.scss";
import { ShoppingCart } from "lucide-react"; // красивая иконка корзины

function ProductCard({ image, price, bonus, title }) {
  return (
    <div className="product-card">
      <div className="product-card__image-container">
        <img src={image} alt={title} className="product-card__image" />
        <div className="product-card__bonus">{bonus} ₽</div>
      </div>

      <div className="product-card__info">
        <div className="product-card__price">
          {price.toLocaleString("ru-RU")} ₽
        </div>
        <div className="product-card__title">{title}</div>
      </div>

      <button className="product-card__button">
        В корзину <ShoppingCart size={18} />
      </button>
    </div>
  );
}

export default ProductCard;
