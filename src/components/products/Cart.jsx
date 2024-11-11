import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container } from "react-bootstrap";
import { FaTrash } from "react-icons/fa"; 

const Cart = () => {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(storedCart);
    calculateTotal(storedCart);
  }, []);

  const calculateTotal = (items) => {
    const totalAmount = items.reduce((acc, item) => {
      return acc + (parseFloat(item.price) * item.quantity);
    }, 0);
    setTotal(totalAmount);
  };

  const handleDelete = (id) => {
    const updatedCart = cart.filter(item => item.id !== id);
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    calculateTotal(updatedCart);
  };

  const handlePurchase = () => {
    alert("Purchase successful!");
    localStorage.removeItem("cart");
    setCart([]);
    setTotal(0);
    navigate("/"); 
  };

  return (
    <Container fluid className="bg-gray-100 px-4 py-8">
      <div className="container mx-auto max-w-2xl">
        <h2 className="text-2xl font-bold mb-4">Your Cart</h2>
        {cart.length === 0 ? (
          <p className="text-gray-600">Your cart is empty.</p>
        ) : (
          <table className="min-w-full bg-white border border-gray-200">
            <thead>
              <tr className="bg-gray-200 text-center">
                <th className="py-2 px-4 border-b text-left">Product Name</th>
                <th className="py-2 px-4 border-b">Quantity</th>
                <th className="py-2 px-4 border-b">Subtotal</th>
                <th className="py-2 px-4 border-b">Action</th>
              </tr>
            </thead>
            <tbody>
              {cart.map((item) => (
                <tr key={item.id} className="border-b">
                  <td className="py-2 px-4 flex items-center">
                    <img 
                      src={item.image} 
                      alt={item.productName} 
                      className="w-16 h-20 rounded-md mr-4" 
                    />
                    {item.productName}
                  </td>
                  <td className="py-2">{item.quantity}</td>
                  <td className="py-2">
                    ${(item.price * item.quantity).toFixed(2)}
                  </td>
                  <td className="py-2 px-4">
                    <button 
                      onClick={() => handleDelete(item.id)} 
                      className="text-red-500 hover:text-red-700 transition"
                    >
                      <FaTrash />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
        {cart.length > 0 && (
          <div className="mt-4">
            <h3 className="font-semibold">Grand Total: ${total.toFixed(2)}</h3>
            <button onClick={handlePurchase} className="bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition">
              Purchase
            </button>
          </div>
        )}
      </div>
    </Container>
  );
};

export default Cart;

