import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import "./Main.scss";
import ProductCard from "../components/ProductCard";

const MainPage = () => {
  const navigate = useNavigate();
  const params = useParams();

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // имитация загрузки одной карточки
    setTimeout(() => {
      setProduct({
        id: 1,
        image:
          "https://campioshop.ru/upload/resize_cache/iblock/df9/530_530_1/vu7uj83sxc9wg7yksxo7c5rkxpol31mi.jpg",
        price: 112000,
        bonus: 1120,
        title: "Кроссовки Nike Pegasus",
      });
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <div className="main">
      <div className="main__container">
        <h2 style={{ marginTop: "20px" }}>Карточка товара</h2>

        {loading ? (
          <p>Загрузка...</p>
        ) : (
          product && (
            <ProductCard
              image={product.image}
              price={product.price}
              bonus={product.bonus}
              title={product.title}
            />
          )
        )}
      </div>
    </div>
  );
};

export default MainPage;
