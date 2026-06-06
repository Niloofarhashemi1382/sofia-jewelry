import necklaceImage from "../assets/necklace-category.jpg";
import ringImage from "../assets/ring-category.jpg";
import braceletImage from "../assets/bracelet-category.jpg";
import earringImage from "../assets/earring-category.jpg";
import "../styles/Categories.css";

function Categories() {
  const categories = [
  {
    title: "Necklaces",
    image: necklaceImage,
  },
  {
    title: "Rings",
    image: ringImage,
  },
  {
    title: "Bracelets",
    image: braceletImage,
  },
  {
    title: "Earrings",
    image: earringImage,
  },
];

  return (
   <section className="categories" data-aos="fade-up">

      {categories.map((item, index) => (
        <div className="category-card" key={index}>

          <img src={item.image} alt="" />

          <div className="category-overlay">
            <h3>{item.title}</h3>
          </div>

        </div>
      ))}

    </section>
  );
}

export default Categories;