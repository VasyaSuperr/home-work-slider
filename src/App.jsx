import Carousel from "./components/Carousel";

const slides = [
  {
    title: "Tapestry of Blazing Starbirth",
    description:
      "This image is one of the most photogenic examples of the many turbulent stellar nurseries the NASA/ESA Hubble Space Telescope has observed during its 30-year lifetime. The portrait features the giant nebula NGC 2014 and its neighbour NGC 2020 which together form part of a vast star-forming region in the Large Magellanic Cloud, a satellite galaxy of the Milky Way, approximately 163 000 light-years away.",
    src: "https://img.freepik.com/free-photo/view-adorable-kitten-inside-house_23-2150758128.jpg",
  },
  {
    title: "Westerlund 2 — Hubble’s 25th anniversary image",
    description:
      "This NASA/ESA Hubble Space Telescope image of the cluster Westerlund 2 and its surroundings has been released to celebrate Hubble’s 25th year in orbit and a quarter of a century of new discoveries, stunning images and outstanding science. The image’s central region, containing the star cluster, blends visible- light data taken by the Advanced Camera for Surveys and near-infrared exposures taken by the Wide Field Camera 3. The surrounding region is composed of visible - light observations taken by the Advanced Camera for Surveys.",
    src: "https://i.pinimg.com/736x/a5/91/00/a5910020d91db783d7ad042d8a28a417.jpg",
  },
  {
    title: "Saturn and its northern auroras (composite image)",
    description:
      "This image is a composite of observations made of Saturn in early 2018 in the optical and of the auroras on Saturn’s north pole region, made in 2017. In contrast to the auroras on Earth the auroras on Saturn are mainly visible in the ultraviolet — a part of the electromagnetic spectrum blocked by Earth’s atmosphere — and therefore astronomers have to rely on space telescopes like the NASA/ ESA Hubble Space Telescope to study them.",
    src: "https://i.pinimg.com/736x/9c/cc/49/9ccc4941d8f9b9d21cadda79a514feac.jpg",
  },
  {
    title: "Hubble image of variable star RS Puppis",
    description:
      "This Hubble image shows RS Puppis, a type of variable star known as a Cepheid variable. As variable stars go, Cepheids have comparatively long periods — RS Puppis, for example, varies in brightness by almost a factor of five every 40 or so days. RS Puppis is unusual; this variable star is shrouded by thick, dark clouds of dust enabling a phenomenon known as a light echo to be shown with stunning clarity. These Hubble observations show the ethereal object embedded in its dusty environment, set against a dark sky filled with background galaxies.",
    src: "https://i.chzbgr.com/full/9817556992/hAA1BE0BC/bag-12",
  },
  {
    title: "Jupiter and its shrunken Great Red Spot",
    description:
      "This full-disc image of Jupiter was taken on 21 April 2014 with Hubble's Wide Field Camera 3 (WFC3).",
    src: "https://i.pinimg.com/736x/2c/ef/a4/2cefa4a8b03fa3161f3ad08746ac6faf.jpg",
  },
];

function App() {
  return (
    <>
      <Carousel slides={slides} />
    </>
  );
}

export default App;
