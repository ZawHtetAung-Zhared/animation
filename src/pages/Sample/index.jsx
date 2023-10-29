import "./index.scss";
import { useState, useEffect } from "react";
import { useSpring, animated } from "@react-spring/web";
import cat from "./assets/cat.png";
import stage from "./assets/stage.png";
import Carousel from "react-spring-3d-carousel";
import { config } from "react-spring";

const Index = () => {
  const [goToSlide, setGoToSlide] = useState(0);
  const [offsetRadius, setOffsetRadius] = useState(2);
  const [showNavigation, setShowNavigation] = useState(true);
  const [animationConfig] = useState(config.gentle);

  const Item = () => {
    return (
      <>
        <div className="item">
          <div className="cat-wrap">
            <img src={cat} alt="1" />
          </div>
          <p>
            Lorem ipsum blah blah Lorem ipsum blah blah Lorem ipsum blah blah
            Lorem ipsum blah blah Lorem ipsum blah blah
          </p>
        </div>
      </>
    );
  };

  const slides = [
    {
      key: 1,
      content: <Item />,
    },
    {
      key: 2,
      content: <Item />,
    },
    {
      key: 3,
      content: <Item />,
    },
  ].map((slide, index) => ({
    ...slide,
    onClick: () => setGoToSlide(index),
  }));

  return (
    <section className="not-found-section">
      <div className="container">
        <Carousel
          slides={slides}
          goToSlide={goToSlide}
          offsetRadius={offsetRadius}
          // showNavigation={showNavigation}
          animationConfig={animationConfig}
        />
        {/* <div>
          <img src={stage} alt="stage" />
        </div> */}
      </div>
    </section>
  );
};

export default Index;
