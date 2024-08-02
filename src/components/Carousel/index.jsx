import React, { Component } from "react";
import PropTypes from "prop-types";
import Slide from "./Slide";
import CarouselControlPanel from "./CarouselControlPanel";

class Carousel extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentSlideIndex: 0,
    };
  }

  incSlideIndex = () => {
    this.setState((prevState) => ({
      currentSlideIndex:
        (prevState.currentSlideIndex + 1) % this.props.slides.length,
    }));
  };

  decSlideIndex = () => {
    this.setState((prevState) => ({
      currentSlideIndex:
        (prevState.currentSlideIndex - 1 + this.props.slides.length) %
        this.props.slides.length,
    }));
  };

  render() {
    const { slides } = this.props;
    const { currentSlideIndex } = this.state;

    return (
      <>
        <article>
          <Slide slide={slides[currentSlideIndex]} />
          <CarouselControlPanel
            incSlideIndex={this.incSlideIndex}
            decSlideIndex={this.decSlideIndex}
          >
            <span>{currentSlideIndex + 1}</span>
          </CarouselControlPanel>
        </article>
      </>
    );
  }
}

Carousel.propTypes = {
  slides: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      description: PropTypes.string,
      src: PropTypes.string,
    })
  ).isRequired,
};

export default Carousel;
