import React from "react";
import Card from "../card/card";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import "./slider.css";

function SliderBlock() {
  const responsive = {
    575: { items: 1 },
    992: { items: 2 },
    1200: { items: 3 },
    1920: {items: 3}
  };
  const items = [
    <Card colorLabel="turquoise" label="CATEGORY | MARKETING" picture="grey"/>,
        <Card colorLabel="turquoise" label="CATEGORY" picture="tree"/>,
        <Card colorLabel="blue" label="CATEGORY | DEVELOPMENT" picture="pink"/>,
        <Card colorLabel="blue" label="CATEGORY | MARKETING" picture="turquoise"/>,
        <Card colorLabel="turquoise" label="CATEGORY | MARKETING" picture="canon"/>,
        <Card colorLabel="blue" label="CATEGORY" picture="grey"/>
  ];
  const renderNextButton = ({ isDisabled }) => {
    return (
      <div className="next">
        <img src="imgs/next.png" alt="next" />
      </div>
    );
  };

  const renderPrevButton = ({ isDisabled }) => {
    return (
      <div className="prev">
        <img src="imgs/prev.png" alt="prev" />
      </div>
    );
  };
  return (
    <div className="container slider">
      <AliceCarousel
        mouseTracking
        items={items}
        buttonsDisabled
        responsive={responsive}
        infinite={true}
        renderDotsItem={false}
        dotsDisabled={true}
        controlsStrategy="alternate"
        renderPrevButton={renderPrevButton}
        renderNextButton={renderNextButton}
      />
    </div>
  );
}

export default SliderBlock;
