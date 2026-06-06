import { useState } from "react";
import { FiHeart } from "react-icons/fi";

import "../styles/Products.css";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import ringImage from "../assets/ring.jpg.jpg";
import necklaceImage from "../assets/necklace.jpg.jpg";
import braceletImage from "../assets/bracelet.jpg.jpg";
import earringImage from "../assets/earings.jpg.jpg";

const products = [
  {
    id: 1,
    name: "Diamond Ring",
    price: "$1,250",
    image: ringImage,
  },
  {
    id: 2,
    name: "Luxury Necklace",
    price: "$1,850",
    image: necklaceImage,
  },
  {
    id: 3,
    name: "Gold Bracelet",
    price: "$950",
    image: braceletImage,
  },
  {
    id: 4,
    name: "Elegant Earrings",
    price: "$720",
    image: earringImage,
  },
];

function Products() {
  const [favorites, setFavorites] = useState([]);

  return (
    <section className="products" data-aos="fade-up">
      <div className="section-title">
        <div>
          <span>OUR COLLECTION</span>
          <h2>Bestsellers</h2>
        </div>
      </div>

      <Swiper
        spaceBetween={25}
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 2,
          },
          1200: {
            slidesPerView: 4,
          },
        }}
      >
        {products.map((product) => (
          <SwiperSlide key={product.id}>
            <div className="product-card">

              <div
                className={`wishlist ${
                  favorites.includes(product.id)
                    ? "active"
                    : ""
                }`}
                onClick={() =>
                  setFavorites((prev) =>
                    prev.includes(product.id)
                      ? prev.filter(
                          (id) => id !== product.id
                        )
                      : [...prev, product.id]
                  )
                }
              >
                <FiHeart />
              </div>

              <div className="product-image">
                <img
                  src={product.image}
                  alt={product.name}
                />
              </div>

              <div className="product-content">
                <h3>{product.name}</h3>
                <p>{product.price}</p>
                <button>Shop Now</button>
              </div>

            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

export default Products;