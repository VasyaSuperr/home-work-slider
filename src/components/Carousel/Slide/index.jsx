import defaultImage from "./defaultSpaceImage.jpg";

function Slide({ slide: { title, description, src } }) {
  return (
    <>
      <figure>
        <img src={src ?? defaultImage} alt="" />
        <figcaption>
          <h3>{title ?? "The image title is missing"}</h3>
          <p>{description ?? "The image description is missing"}</p>
        </figcaption>
      </figure>
    </>
  );
}

export default Slide;
