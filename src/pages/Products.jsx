import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext.jsx";
import ProductCard from "../components/ProductCard.jsx";
import { motion } from "framer-motion";

// 🖼️ Import images
import tshirtImg from "../assets/tshirt.jpg";
import sneakersImg from "../assets/sneakers.jpeg";
import watchImg from "../assets/watch.jpg";
import backpackImg from "../assets/backpack.jpeg";
import jacketImg from "../assets/jacket.jpg";
import laptopImg from "../assets/laptop.jpg";
import phoneImg from "../assets/phone.jpg";
import perfumeImg from "../assets/perfume.jpeg";
import sunglassesImg from "../assets/sunglass.jpg";
import headphonesImg from "../assets/headphones.jpg";
import walletImg from "../assets/wallet.jpg";
import capImg from "../assets/cap.jpg";

// 🧩 Product List
const allProducts = [
  { id: 1, name: "T-Shirt", price: 25, category: "Clothes", image: tshirtImg },
  { id: 2, name: "Sneakers", price: 80, category: "Clothes", image: sneakersImg },
  { id: 3, name: "Watch", price: 150, category: "Accessories", image: watchImg },
  { id: 4, name: "Backpack", price: 60, category: "Accessories", image: backpackImg },
  { id: 5, name: "Headphones", price: 120, category: "Electronics", image: headphonesImg },
  { id: 6, name: "Jacket", price: 200, category: "Clothes", image: jacketImg },
  { id: 7, name: "Laptop", price: 950, category: "Electronics", image: laptopImg },
  { id: 8, name: "Smartphone", price: 700, category: "Electronics", image: phoneImg },
  { id: 9, name: "Perfume", price: 75, category: "Accessories", image: perfumeImg },
  { id: 10, name: "Sunglasses", price: 45, category: "Accessories", image: sunglassesImg },
  { id: 11, name: "Leather Wallet", price: 35, category: "Accessories", image: walletImg },
  { id: 12, name: "Cap", price: 20, category: "Clothes", image: capImg },
];

// 🏷️ Categories
const categories = ["All", "Electronics", "Clothes", "Accessories"];

const Products = () => {
  const { addToCart } = useContext(CartContext);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProducts =
    selectedCategory === "All"
      ? allProducts
      : allProducts.filter((p) => p.category === selectedCategory);

  return (
    <div className="container mt-5">
      <h2 className="fw-bold text-center mb-4">Explore Our Products</h2>

      {/* 🔘 Filters */}
      <div className="text-center mb-4">
        {categories.map((cat) => (
          <motion.button
            key={cat}
            whileHover={{ scale: 1.1 }}
            className={`btn mx-2 ${
              selectedCategory === cat ? "btn-primary" : "btn-outline-primary"
            }`}
            onClick={() => setSelectedCategory(cat)}
          >
            {cat}
          </motion.button>
        ))}
      </div>

      {/* 🛍️ Product Grid */}
      <div className="row">
        {filteredProducts.map((product) => (
          <div key={product.id} className="col-md-3 mb-4">
            <ProductCard product={product} addToCart={addToCart} />
          </div>
        ))}
      </div>

      {filteredProducts.length === 0 && (
        <p className="text-center text-muted mt-5">No products found.</p>
      )}
    </div>
  );
};

export default Products;
