import aboutImage from "../assets/about.jpg";
import "../styles/About.css";

function About() {
  return (
    <section className="about">

<div className="about-content" data-aos="fade-right">
        <span>ABOUT US</span>

        <h2>
          Crafted With
          Passion
        </h2>

        <p>
          We create luxury jewelry with timeless elegance,
          exceptional craftsmanship and premium materials.
        </p>

        <button>Discover More</button>
      </div>

   <div className="about-image" data-aos="fade-left">
        <img src={aboutImage} alt="About" />
      </div>

    </section>
  );
}

export default About;