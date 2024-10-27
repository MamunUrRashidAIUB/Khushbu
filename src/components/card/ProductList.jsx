// ProductList.js
import { useState, useEffect } from "react";
import Card from "./Card";
import productsData from "../../Khushbu.json"; // Adjust path if needed

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Assuming productsData is an array of product objects
    setProducts(productsData);
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {products.map((product) => (
        <Card
          key={product.id}
          image={product.image}
          name={product.name}
          price={product.price}
        />
      ))}
    </div>
  );
};

export default ProductList;
