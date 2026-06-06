import "../styles/Hero.css";
import heroImage from "../assets/hero.jpg.png";

function Hero() {
  return (
   <section
  className="hero"
  data-aos="zoom-in"
      style={{
        backgroundImage: `url(${heroImage})`,
      }}
    >
      <div className="hero-overlay"></div>

    <div className="hero-content" data-aos="fade-right">
        <span className="hero-subtitle">
          LUXURY COLLECTION
        </span>

        <h1>
          Crafted For
          <br />
          Eternity
        </h1>

        <p>
          Discover timeless jewelry designed with elegance,
          luxury and perfection for unforgettable moments.
        </p>

        <button>
          Explore Collection
        </button>
      </div>
    </section>
  );
}

export default Hero;