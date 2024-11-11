import React, { useEffect, useState } from "react";
import { AiOutlineUser } from "react-icons/ai";
import { FiShoppingCart } from "react-icons/fi";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { endPoints } from "../apiURL/apiUrl";
import axiosInstance from "../axiosInstance/axiosInstance";

function Header() {
  const [cartItemsCount, setCartItemsCount] = useState(0);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    const totalItems = storedCart.reduce((acc, item) => acc + item.quantity, 0);
    setCartItemsCount(totalItems);
  }, []);

  let uid = window.localStorage.getItem("uid");
  let id = window.localStorage.getItem("id");
  const api=endPoints.register+"/"+id
  const [userData,setUserData]=useState([])
useEffect(()=>{
axiosInstance.get(api).then((res)=>setUserData(res.data)).catch((err)=>console.log(err))
},[setUserData])
const {profile_pic}=userData

  return !uid ? (
    <div className="bg-yellow-400 shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between h-[60px] p-2.5">
        <div className="flex items-center">
          <h1 className="text-2xl font-bold ml-3">Clothy</h1>
        </div>

        <div className="hidden md:flex space-x-8">
          <NavLink to="/" className="text-gray-700 hover:text-blue-500">
            Home
          </NavLink>
          <NavLink to="/aboutus" className="text-gray-700 hover:text-blue-500">
            About
          </NavLink>
          <NavLink to="/all" className="text-gray-700 hover:text-blue-500">
            Products
          </NavLink>
        </div>

        <div className="flex items-center space-x-4">
          <Link to={"/login"}>
            <AiOutlineUser style={{ fontSize: "30px" }} />
          </Link>
          <div className="relative">
            <FiShoppingCart
              style={{ fontSize: "26px", margin: "0px 13px" }}
              onClick={() => {
                alert("Please log in first");
              }}
            />
          </div>
        </div>

        <div className="md:hidden">
          <button className="focus:outline-none">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  ) : (
    <div className="bg-yellow-400 shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between h-[60px] p-2.5">
        <div className="flex items-center">
          <h1 className="text-2xl font-bold ml-3">Clothy</h1>
        </div>

        <div className="hidden md:flex space-x-8">
          <NavLink to="/" className="text-gray-700 hover:text-blue-500">
            Home
          </NavLink>
          <NavLink to="/aboutus" className="text-gray-700 hover:text-blue-500">
            About
          </NavLink>
          <NavLink to="/all" className="text-gray-700 hover:text-blue-500">
            Products
          </NavLink>
        </div>

        <div className="flex items-center space-x-4">
          <Link to={`/profile/${id}`}>
            <img
              src={profile_pic}
              alt="Profile"
              className="w-10 h-10 rounded-full border border-gray-300"
            />
          </Link>
          <Link to={`/cart`}>
            <div className="relative">
              <FiShoppingCart style={{ fontSize: "26px", margin: "0px 13px" }} />
              {cartItemsCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full h-5 w-5 flex items-center justify-center text-xs">
                  {cartItemsCount}
                </span>
              )}
            </div>
          </Link>
        </div>

        <div className="md:hidden">
          <button className="focus:outline-none">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Header;

