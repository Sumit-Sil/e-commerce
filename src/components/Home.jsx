import React from "react";
import { Button } from "react-bootstrap";
import { Carousel } from "react-bootstrap";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Home() {
  const products = [
    {
      id: 1,
      name: "Combo Shirt",
      price: "$29.99",
      image:
        "https://images.unsplash.com/photo-1484515991647-c5760fcecfc7?q=80&w=1498&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 2,
      name: "Formal Shoe",
      price: "$39.99",
      image:
        "https://images.unsplash.com/photo-1673201183138-e68d0b47dbe5?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 3,
      name: "Wallet",
      price: "$49.99",
      image:
        "https://images.unsplash.com/photo-1675582090584-4ae9400f7326?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8d2FsbGV0JTIwZm9yJTIwbWVufGVufDB8fDB8fHww",
    },
    {
      id: 4,
      name: "Watch",
      price: "$59.99",
      image:
        "https://images.unsplash.com/photo-1623998021450-85c29c644e0d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODZ8fHdhdGNoJTIwZm9yJTIwbWVufGVufDB8fDB8fHww",
    },
  ];
  const data = [
    {
      name: "John Morgan",
      image:
        "https://plus.unsplash.com/premium_photo-1678197937465-bdbc4ed95815?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cGVyc29ufGVufDB8fDB8fHww",
      review:
        "In the first place we have granted to God, and by this our present charter confirmed for us and our heirs forever that the English Church shall be free, and shall have her",
    },
    {
      name: "Saige Fuentes",
      image:
        "https://plus.unsplash.com/premium_photo-1664536392896-cd1743f9c02c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8cGVyc29ufGVufDB8fDB8fHww",
      review:
        "In the first place we have granted to God, and by this our present charter confirmed for us and our heirs forever that the English Church shall be free, and shall have her",
    },
    {
      name: "Bowen Higgins",
      image:
        "https://images.unsplash.com/photo-1640701027660-120641572910?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fG1lbiUyMHBob3RvfGVufDB8MHwwfHx8MA%3D%3D",
      review:
        "In the first place we have granted to God, and by this our present charter confirmed for us and our heirs forever that the English Church shall be free, and shall have her",
    },
    {
      name: "Leighton Kramer.",
      image:
        "https://plus.unsplash.com/premium_photo-1678197937465-bdbc4ed95815?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cGVyc29ufGVufDB8fDB8fHww",
      review:
        "In the first place we have granted to God, and by this our present charter confirmed for us and our heirs forever that the English Church shall be free, and shall have her",
    },
    {
      name: "John Morgan",
      image:
        "https://plus.unsplash.com/premium_photo-1678197937465-bdbc4ed95815?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cGVyc29ufGVufDB8fDB8fHww",
      review:
        "In the first place we have granted to God, and by this our present charter confirmed for us and our heirs forever that the English Church shall be free, and shall have her",
    },
  ];
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
  };
  return (
    <container>
      {/* --------carousel------ */}
      <div>
        <Carousel data-bs-theme="dark">
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://images.unsplash.com/photo-1603252109360-909baaf261c7?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              style={{ height: "480px" }}
              alt="First slide"
            />
            <Carousel.Caption>
              <h5>Formal Shirts</h5>
              <p>Buy exclusive shirts</p>
              {/* <Button variant="primary">Buy</Button> */}
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://plus.unsplash.com/premium_photo-1682096261732-88a83f8bb20b?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              style={{ height: "480px" }}
              alt="Second slide"
            />
            <Carousel.Caption>
              <h5>Second slide label</h5>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://images.unsplash.com/photo-1479064555552-3ef4979f8908?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Third slide"
              style={{ height: "480px" }}
            />
            <Carousel.Caption>
              <h5>Third slide label</h5>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>

      {/* ------top selling products--------- */}
      <h2
        className="text-3xl font-bold text-center"
        style={{
          fontFamily: "'Your Stylish Font', sans-serif",
          marginTop: "50px",
        }}
      >
        Our Top Selling Products
      </h2>
      <div className="parallax-section">
        <section className="p-[5rem] mt-[1rem]">
          <div className="max-w-screen-xl mx-auto px-1 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {products?.map((product) => (
              <div
                key={product.id}
                className="bg-white shadow-lg rounded-lg overflow-hidden"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-[290px] object-cover transition-transform duration-300 transform hover:scale-105"
                />
                <div className="">
                  <h3
                    className="text-lg font-semibold mt-3"
                    style={{ color: "black" }}
                  >
                    {product.name}
                  </h3>
                  <p className="text-gray-600">{product.price}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
        <Link to="/all">
          <Button
            className="px-3 py-2 mb-4"
            style={{ backgroundColor: "rgb(250 204 21)" }}
          >
            View All Products
          </Button>
        </Link>
      </div>

      {/* ------ sleek slider----- */}

      <div className="h-[570px] ">
        <h2
          className="text-3xl font-bold text-center"
          style={{
            fontFamily: "'Your Stylish Font', sans-serif",
            marginTop: "50px",
          }}
        >
          Customer Reviews
        </h2>
        <div className=" w-3/4 m-auto">
          <div className="">
            <Slider {...settings}>
              {data?.map((dta) => (
                <div className="bg-white h-[440px] text-black rounded-xl mt-5">
                  <div className=" h-56rounded-t-xl bg-yellow-500 flex justify-center items-center">
                    <img
                      src={dta.image}
                      alt=""
                      className="h-44 w-44 rounded-full"
                    />
                  </div>
                  <div className=" gap-4 p-4">
                    <p className="text-xl font-semibold">{dta.name}</p>
                    <p>" {dta.review} "</p>
                    <button className="bg-yellow-500 text-white text-lg px-6 py-1 rounded-xl">
                      Read More
                    </button>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </container>
  );
}

export default Home;
