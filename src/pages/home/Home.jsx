import { useEffect, useState } from "react";
import ProductCard from "../../components/ProductCard";
import CategoryBox from "../../components/CategoryBox";
import "./home.scss";
import categorybgimg from "../../assets/categorybgimg.webp";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";

export default function Home() {
  // state created to show the product
  const [plants, setPlants] = useState([]);

  // list of all the categories in our site
  // TODO: these are static right now fetch them through api so when any new category is added it automatically gets added
  const categories = ["Indoor plants", "Herbs", "Pots"];

  useEffect(() => {
    fetch(`/api/products/featured`)
      .then((response) => response.json())
      .then((data) => setPlants(data.plants));
  }, []);

  const setting = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <>
      {/* banner section with slider starts */}
      <div className="home-banner-slider">
        <Slider {...setting}>
          <div className="home-banner slider-one">
            <div className="container flex-layout">
              <div className="hero-content">
                <h1>Plantify</h1>
                <p>
                  Join our plant-loving community today and experience the joy
                  of bringing natures beauty into your life. Happy planting!
                </p>
              </div>
            </div>
          </div>
          <div className="home-banner slider-one">
            <div className="container flex-layout">
              <div className="hero-content">
                <h1>Plantify</h1>
                <p>
                  Join our plant-loving community today and experience the joy
                  of bringing natures beauty into your life. Happy planting!
                </p>
              </div>
            </div>
          </div>
        </Slider>
      </div>
      {/* banner section with slider ends */}

      {/* categories section starts */}
      <div className="container all-product-categories-list section-gap">
        <h2 className="section-heading">Categories</h2>
        {/* TODO: change key from index to id */}
        <div className="flex-layout">
          {categories.map((category, index) => {
            return <CategoryBox key={index} categoryName={category} />;
          })}
        </div>
      </div>
      {/* categories section ends */}

      {/* our aim section starts */}
      <div className="container section-gap our-intro">
        <h2 className="section-heading">Our Aim</h2>
        <div className="flex-layout">
          <div className="column">
            <h3>Welcome to our Plant Paradise</h3>
            <p>
              At our plant selling website, we are passionate about bringing the
              beauty of nature into your homes and gardens. We offer an
              extensive variety of plants, from lush green foliage to vibrant
              blossoms, carefully curated to cater to all types of plant lovers,
              whether youre a seasoned gardener or a complete novice.
            </p>
          </div>
          <div className="column">
            <img src={categorybgimg} alt="" />
          </div>
        </div>
      </div>
      {/* our aim section ends */}

      <div className="product-listing  container section-gap">
        <h2 className="section-heading">Featured products</h2>
        <div className="flex-layout">
          {plants.map((plant) => (
            <ProductCard key={plant.id} plant={plant} />
          ))}
        </div>
      </div>
    </>
  );
}
