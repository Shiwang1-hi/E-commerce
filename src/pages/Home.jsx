import { motion } from "framer-motion";
import { Link } from "react-router-dom";

// Dummy featured products for home page
import tshirtImg from "../assets/tshirt.jpg";
import sneakersImg from "../assets/sneakers.jpeg";
import watchImg from "../assets/watch.jpg";
import backpackImg from "../assets/backpack.jpeg";

const featuredProducts = [
  { id: 1, name: "T-Shirt", price: 25, image: tshirtImg },
  { id: 2, name: "Sneakers", price: 80, image: sneakersImg },
  { id: 3, name: "Watch", price: 150, image: watchImg },
  { id: 4, name: "Backpack", price: 60, image: backpackImg },
];

const Home = () => {
  return (
    <div className="container mt-5">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-5"
      >
        <h1>Welcome to ShopEase</h1>
        <p>Your one-stop online shop for trendy products</p>
        <Link to="/products" className="btn btn-primary btn-lg">
          Shop Early
        </Link>
      </motion.div>

      {/* Featured Products */}
      <h2 className="mb-4">Featured Products</h2>
      <div className="row">
        {featuredProducts.map((product) => (
          <div key={product.id} className="col-md-3 mb-4">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="card h-100"
            >
              <img
                src={product.image}
                className="card-img-top"
                alt={product.name}
                style={{ height: "200px", objectFit: "cover" }}
              />
              <div className="card-body text-center">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text">${product.price}</p>
                <Link to="/products" className="btn btn-outline-primary btn-sm">
                  View
                </Link>
              </div>
            </motion.div>
          </div>
        ))}
      </div>

      {/* Info Section */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-center mt-5"
      >
        <h3>Why ShopEase?</h3>
        <p>
          Fast delivery, easy returns, and amazing products. Browse our collections
          and enjoy a seamless shopping experience!
        </p>
      </motion.div>
    </div>
  );
};

export default Home;
