import { useContext } from "react";
import { CartContext } from "../context/CartContext.jsx";
import { motion } from "framer-motion";

const Cart = () => {
  const { cart, removeFromCart, updateQty } = useContext(CartContext);
  const totalPrice = cart.reduce((acc, item) => acc + item.price * item.qty, 0);

  return (
    <div className="container mt-5">
      <h2 className="fw-bold mb-4 text-center">🛒 Your Shopping Cart</h2>

      {cart.length === 0 ? (
        <p className="text-center">Your cart is empty. Start shopping!</p>
      ) : (
        <motion.table
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="table table-striped table-hover"
        >
          <thead>
            <tr>
              <th>Product</th>
              <th>Price</th>
              <th>Qty</th>
              <th>Subtotal</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((item) => (
              <motion.tr key={item.id}>
                <td>{item.name}</td>
                <td>${item.price}</td>
                <td>
                  <input
                    type="number"
                    min="1"
                    value={item.qty}
                    onChange={(e) =>
                      updateQty(item.id, parseInt(e.target.value))
                    }
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
            ))}
          </tbody>
        </motion.table>
      )}

      <h4 className="text-end mt-4 fw-semibold">Total: ${totalPrice.toFixed(2)}</h4>
      {cart.length > 0 && (
        <div className="text-end">
          <button className="btn btn-success mt-3">Proceed to Checkout</button>
        </div>
      )}
    </div>
  );
};

export default Cart;
