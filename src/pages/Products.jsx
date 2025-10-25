import { useContext } from "react";
import { CartContext } from "../context/CartContext.jsx";
import ProductCard from "../components/ProductCard.jsx";
import tshirtImg from "../assets/tshirt.jpg";
import sneakersImg from "../assets/sneakers.jpeg";
import watchImg from "../assets/watch.jpg";
import backpackImg from "../assets/backpack.jpeg";

// Dummy Products
const products = [
  { id: 1, name: "T-Shirt", price: 25, image: tshirtImg },
  { id: 2, name: "Sneakers", price: 80, image: sneakersImg },
  { id: 3, name: "Watch", price: 150, image: watchImg },
  { id: 4, name: "Backpack", price: 60, image: backpackImg },
];

const Products = () => {
  const { addToCart } = useContext(CartContext);

  return (
    <div className="container mt-4">
      <div className="row">
        {products.map(product => (
          <div key={product.id} className="col-md-3">
            <ProductCard product={product} addToCart={addToCart} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
