    import { motion } from "framer-motion";

const CartItem = ({ item, updateQty, removeFromCart }) => {
  return (
    <motion.tr
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 50 }}
    >
      <td>{item.name}</td>
      <td>${item.price}</td>
      <td>
        <input
          type="number"
          min="1"
          value={item.qty}
          onChange={(e) => updateQty(item.id, parseInt(e.target.value))}
          className="form-control w-50"
        />
      </td>
      <td>${(item.price * item.qty).toFixed(2)}</td>
      <td>
        <button
          className="btn btn-danger btn-sm"
          onClick={() => removeFromCart(item.id)}
        >
          Remove
        </button>
      </td>
    </motion.tr>
  );
};

export default CartItem;
