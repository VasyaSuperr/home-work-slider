function CarouselControlPanel({ decSlideIndex, incSlideIndex }) {
  return (
    <>
      <button onClick={() => decSlideIndex()}>{"<"}</button>
      <button onClick={() => incSlideIndex()}>{">"}</button>
    </>
  );
}

export default CarouselControlPanel;
