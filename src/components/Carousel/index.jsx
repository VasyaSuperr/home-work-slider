import React, { useEffect, useState } from "react";
import Slide from "./Slide";
import CarouselControlPanel from "./CarouselControlPanel";

function Carousel({ slides }) {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  const incSlideIndex = () => {
    setCurrentSlideIndex(
      (currentSlideIndex) => (currentSlideIndex + 1) % slides.length
    );
  };

  const decSlideIndex = () => {
    setCurrentSlideIndex(
      (currentSlideIndex) =>
        (currentSlideIndex - 1 + slides.length) % slides.length
    );
  };

  useEffect(() => {}, [currentSlideIndex]);

  return (
    <>
      <article>
        <Slide slide={slides[currentSlideIndex]} />
        <CarouselControlPanel
          incSlideIndex={incSlideIndex}
          decSlideIndex={decSlideIndex}
        >
          <span>{currentSlideIndex + 1}</span>
        </CarouselControlPanel>
      </article>
    </>
  );
}

// Carousel.propTypes = {
//   slide: propTypes.arrayOf(
//     PropTypes.shape({
//       title: PropTypes.string,
//       description: PropTypes.string,
//       src: PropTypes.string,
//     })
//   ).isRequired,
// };

export default Carousel;
