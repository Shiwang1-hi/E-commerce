import { useContext } from "react";
import { CartContext } from "../context/CartContext.jsx";

const Cart = () => {
  const { cart, removeFromCart, updateQty } = useContext(CartContext);
  const totalPrice = cart.reduce((acc, item) => acc + item.price * item.qty, 0);

  return (
    <div className="container mt-4">
      <h2>Your Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <table className="table">
          <thead>
            <tr>
              <th>Product</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Subtotal</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {cart.map(item => (
              <tr key={item.id}>
                <td>{item.name}</td>
                <td>${item.price}</td>
                <td>
                  <input type="number" min="1" value={item.qty} 
                    onChange={(e) => updateQty(item.id, parseInt(e.target.value))} 
                    className="form-control w-50"/>
                </td>
                <td>${item.price * item.qty}</td>
                <td><button className="btn btn-danger" onClick={() => removeFromCart(item.id)}>Remove</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      <h4>Total: ${totalPrice}</h4>
    </div>
  );
};

export default Cart;
