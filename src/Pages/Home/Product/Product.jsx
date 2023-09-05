import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

const Product = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("product.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div className="my-16 px-2 lg:px-6">
      <h1 className="uppercase text-2xl md:text-5xl font-black text-center mt-20 ">
        our latest product
      </h1>
      <p className="text-center mb-10 mt-2">
        Discover all the new arrivals of ready-to-Sneaker collection.
      </p>
      <p></p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {products?.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Product;
