import { motion } from "framer-motion";

const ProductCard = ({ product, addToCart }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}   // Slight zoom effect on hover
      whileTap={{ scale: 0.95 }}     // Click effect
      className="card m-2"
      style={{ width: "18rem" }}
    >
      <img
        src={product.image}
        className="card-img-top"
        alt={product.name}
        style={{ height: "200px", objectFit: "cover" }}
      />
      <div className="card-body">
        <h5 className="card-title">{product.name}</h5>
        <p className="card-text">${product.price}</p>
        <button
          className="btn btn-primary w-100"
          onClick={() => addToCart(product)}
        >
          Add to Cart
        </button>
      </div>
    </motion.div>
  );
};

export default ProductCard;
