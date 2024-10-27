import { useState, useEffect } from "react";
import Card from "./Card";
import productsData from "../../Khushbu.json"; // Adjust path if needed

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [visibleCount, setVisibleCount] = useState(6); // Number of products to show initially

  useEffect(() => {
    // Set products from the data file
    setProducts(productsData);
  }, []);

  // Handle "See More" button click to show additional products
  const handleSeeMore = () => {
    setVisibleCount((prevCount) => prevCount + 6); // Increase by 6 each time
  };

  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {products.slice(0, visibleCount).map((product) => (
          <Card
            key={product.id}
            image={product.image}
            name={product.name}
            price={product.price}
          />
        ))}
      </div>
      {visibleCount < products.length && (
        <div className="text-center mt-4">
          <button
            onClick={handleSeeMore}
            className="px-4 py-2 bg-blue-500 text-white rounded"
          >
            See More
          </button>
        </div>
      )}
    </div>
  );
};

export default ProductList;
