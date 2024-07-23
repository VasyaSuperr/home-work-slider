function CarouselControlPanel({ decSlideIndex, incSlideIndex, children }) {
  return (
    <>
      <button onClick={() => decSlideIndex()}>{"<"}</button>
      {children}
      <button onClick={() => incSlideIndex()}>{">"}</button>
    </>
  );
}

export default CarouselControlPanel;
