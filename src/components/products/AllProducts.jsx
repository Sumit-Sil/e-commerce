import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import { endPoints } from "../../apiURL/apiUrl";
import axiosInstance from "../../axiosInstance/axiosInstance";
import { Link } from "react-router-dom";

const SkeletonCard = () => (
  <div className="border rounded shadow p-4 animate-pulse">
    <div className="bg-gray-300 h-32 mb-2"></div>
    <div className="bg-gray-300 h-4 mb-2 w-3/4"></div>
    <div className="bg-gray-300 h-4 w-1/4"></div>
  </div>
);

const AllProducts = () => {
  const all_api = endPoints.products;
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  const getProducts = async () => {
    try {
      setLoading(true);
      const res = await axiosInstance.get(all_api);
      setProducts(res.data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  const filteredProducts = products.filter((product) =>
    product.productName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {Array.from({ length: 6 })?.map((_, index) => (
          <SkeletonCard key={index} />
        ))}
      </div>
    );
  }

  if (error) return <div>Error fetching products: {error}</div>;

  return (
    <div className="container mx-auto p-4">
      <div className="flex items-center mb-4">
        <div className="relative">
          <input
            type="text"
            placeholder="Search"
            className="border rounded-l px-2 py-1 w-32 focus:outline-none focus:ring focus:ring-blue-400"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <span
            className="absolute inset-y-0 flex items-center pl-2"
            style={{ marginLeft: "90px" }}
          >
            <svg
              className="h-4 w-4 text-gray-500"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M11 4a7 7 0 100 14 7 7 0 000-14zm3.657 10.657l4.95 4.95a1 1 0 001.415-1.415l-4.95-4.95a8 8 0 10-1.415 1.415z"
              />
            </svg>
          </span>
        </div>
      </div>
      {filteredProducts.length === 0 ? (
        <div className="text-center text-gray-500">No products available</div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredProducts?.map((product) => (
            <div key={product.id} className="border rounded shadow">
              <img
                src={product.image}
                alt={product.name}
                className="mb-2 w-full h-[230px] object-cover"
              />
              <h2 className="font-semibold">{product.productName}</h2>
              <p className="text-gray-600">$ {product.price}</p>
              <div className="mt-4 mb-4">
                <Link to={`/details/${product.id}`}>
                  <Button className="mr-2 bg-green-500 text-white">
                    Details
                  </Button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default AllProducts;
