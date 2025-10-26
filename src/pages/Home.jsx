import { motion } from "framer-motion";
import { Link } from "react-router-dom";

// Dummy featured products
import tshirtImg from "../assets/tshirt.jpg";
import sneakersImg from "../assets/sneakers.jpeg";
import watchImg from "../assets/watch.jpg";
import backpackImg from "../assets/backpack.jpeg";
import laptopImg from "../assets/laptop.jpg";
import phoneImg from "../assets/phone.jpg";

const featuredProducts = [
  { id: 1, name: "T-Shirt", price: 25, image: tshirtImg },
  { id: 2, name: "Sneakers", price: 80, image: sneakersImg },
  { id: 3, name: "Watch", price: 150, image: watchImg },
  { id: 4, name: "Backpack", price: 60, image: backpackImg },
  { id: 5, name: "Laptop", price: 950, image: laptopImg },
  { id: 6, name: "Smartphone", price: 700, image: phoneImg },
];

const Home = () => {
  return (
    <div className="container mt-5">
      {/* 🏷️ Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="text-center mb-5"
      >
        <h1 className="fw-bold">Welcome to ShopEase 🛍️</h1>
        <p className="lead">
          Your one-stop destination for trendy fashion and top tech gear.
        </p>
        <Link to="/products" className="btn btn-primary btn-lg">
          Start Shopping
        </Link>
      </motion.div>

      {/* 🛒 Featured Products */}
      <h2 className="fw-semibold mb-4">Featured Products</h2>
      <div className="row">
        {featuredProducts.map((product) => (
          <div key={product.id} className="col-md-4 mb-4">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="card h-100 shadow-sm"
            >
              <img
                src={product.image}
                className="card-img-top"
                alt={product.name}
                style={{ height: "220px", objectFit: "cover" }}
              />
              <div className="card-body text-center">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text">${product.price}</p>
                <Link to="/products" className="btn btn-outline-primary btn-sm">
                  View More
                </Link>
              </div>
            </motion.div>
          </div>
        ))}
      </div>

      {/* 🌟 Info Section */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="text-center mt-5 p-4 bg-light rounded shadow-sm"
      >
        <h3 className="fw-bold">Why Choose ShopEase?</h3>
        <p className="lead">
          ✅ Fast Delivery &nbsp; ✅ Easy Returns &nbsp; ✅ Secure Payments <br />
          ✅ Best Deals Every Day &nbsp; ✅ 24/7 Customer Support
        </p>
      </motion.div>

      {/* 📦 Services Section */}
      <div className="row text-center mt-5">
        <div className="col-md-4">
          <i className="bi bi-truck fs-1 text-primary"></i>
          <h5 className="mt-2">Free Shipping</h5>
          <p>Enjoy free delivery on all orders over $50.</p>
        </div>
        <div className="col-md-4">
          <i className="bi bi-arrow-clockwise fs-1 text-primary"></i>
          <h5 className="mt-2">Easy Returns</h5>
          <p>Not satisfied? Return products easily within 7 days.</p>
        </div>
        <div className="col-md-4">
          <i className="bi bi-credit-card fs-1 text-primary"></i>
          <h5 className="mt-2">Secure Payments</h5>
          <p>We ensure safe transactions with trusted gateways.</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
