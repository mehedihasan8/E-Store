import { useEffect, useState } from "react";

const useCard = () => {
  const [products, setProducts] = useState([]);
  const allId = JSON.parse(localStorage.getItem("productId")) || [];

  const product = products.filter((p) => allId.includes(p.id));

  useEffect(() => {
    fetch("product.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, [allId]);
  return product;
};

export default useCard;
