import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { endPoints } from "../../apiURL/apiUrl";
import axiosInstance from "../../axiosInstance/axiosInstance";
import { Container } from "react-bootstrap";

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const details_api = `${endPoints.products}/${id}`;
  const [details, setDetails] = useState({});
  const [quantity, setQuantity] = useState(1);
  const [color, setColor] = useState("black"); 
  const [error, setError] = useState(""); 

  const getDetails = () => {
    axiosInstance
      .get(details_api)
      .then((res) => setDetails(res.data))
      .catch((err) => {
        console.error(err);
        setError("Failed to fetch product details. Please try again later.");
      });
  };

  useEffect(() => {
    getDetails();
  }, [setDetails]);

  const { productName, company, price, description, image } = details;

  const handleAddToCart = () => {
    const cartItem = {
      id,
      productName,
      company,
      price,
      quantity,
      color,
      image,
    };

    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    
    const existingItemIndex = cart.findIndex(item => item.id === id);

    if (existingItemIndex !== -1) {
      cart[existingItemIndex].quantity += quantity;
      if (cart[existingItemIndex].quantity > 5) {
        cart[existingItemIndex].quantity = 5; 
      }
    } else {
      cart.push(cartItem);
    }
    
    localStorage.setItem("cart", JSON.stringify(cart));
    navigate("/cart"); 
  };

  return (
    <Container fluid className="bg-gray-100 px-4 py-8">
      {error && <div className="text-red-500 mb-4">{error}</div>}
      <div className="flex flex-wrap -mx-4">
        <div className="w-full md:w-1/2 px-4 mb-8">
          <img
            src={image}
            alt="Product"
            className="w-full h-[500px] rounded-lg shadow-md mb-4"
            id="mainImage"
          />
        </div>
        <div className="w-full md:w-1/2 px-4 text-start">
          <h2 className="text-3xl font-bold mb-2">{productName}</h2>
          <p className="text-gray-600 mb-4">{company}</p>
          <div className="mb-4">
            <span className="text-2xl font-bold mr-2">${price}</span>
          </div>
          <p className="text-gray-700 mb-6">{description}</p>
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-2">Color:</h3>
            <div className="flex space-x-2">
              {["black", "gray", "blue"].map((colorOption) => (
                <button
                  key={colorOption}
                  className={`w-8 h-8 rounded-full border-2 ${colorOption === color ? 'border-indigo-500' : 'border-transparent'}`}
                  style={{ backgroundColor: colorOption }}
                  onClick={() => setColor(colorOption)}
                />
              ))}
            </div>
          </div>
          <div className="mb-6">
            <label htmlFor="quantity" className="block text-sm font-medium text-gray-700 mb-1">
              Quantity:
            </label>
            <div className="flex items-center">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="bg-gray-300 rounded-l-md px-3"
              >
                -
              </button>
              <input
                type="number"
                id="quantity"
                name="quantity"
                min={1}
                max={5}
                value={quantity}
                readOnly
                className="w-12 text-center border-gray-300 shadow-sm"
              />
              <button
                onClick={() => setQuantity(Math.min(5, quantity + 1))}
                className="bg-gray-300 rounded-r-md px-3"
              >
                +
              </button>
            </div>
          </div>
          <div className="flex space-x-4 mb-6">
            <button
              onClick={handleAddToCart}
              className="bg-indigo-600 flex gap-2 items-center text-white px-6 py-2 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default ProductDetails;



