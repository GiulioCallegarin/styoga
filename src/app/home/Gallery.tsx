"use client"
import Masonry from "react-responsive-masonry";
import { useEffect, useState } from "react";
import BlurredImage from "../components/BlurredImage";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import { Thumbnails, Zoom } from "yet-another-react-lightbox/plugins";
import { motion } from "motion/react"
import {
  Lightbox,
  isImageFitCover,
  isImageSlide,
  useLightboxProps,
  type Slide,
} from "yet-another-react-lightbox";

export default function Gallery(props: { images: string[] }) {
  const { images } = props;

  const [columns, setColumns] = useState(3);
  const [index, setIndex] = useState(-1);

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleResize = () => {
    const newColumns = Math.floor(window.innerWidth / 600 + 1);
    setColumns(Math.min(newColumns, 4));
  };

  return (
    <>
      <section id="gallery"/>
      <Masonry
        gutter="20px"
        columnsCount={columns}
      >
        {images.map((image, index) => {
          return (
            <GalleryImage
              key={index}
              image={image}
              index={index}
              setIndex={setIndex}
            />
          );
        })}
      </Masonry>
      <Lightbox
        open={index >= 0}
        close={() => setIndex(-1)}
        index={index}
        slides={images.map((image) => ({ src: `/dynamic/images/gallery/${image}` }))}
        render={{ slide: NextJsImage }}
        plugins={[Thumbnails, Zoom]}
      />
    </>
  );
}

type HomeGalleryImageProps = {
  image: string;
  index: number;
  setIndex: (index: number) => void;
};

function GalleryImage({ image, index, setIndex }: HomeGalleryImageProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1, ease: "easeIn" }}
    >
      <div className="card-image-container simple">
        <BlurredImage
        src={`/dynamic/images/gallery/${image}`}
        className="rounded-2xl w-full"
        alt=""
        onClick={() => setIndex(index)}
      />
      </div>
    </motion.div>
  );
}

function isNextJsImage(slide: Slide) {
  return (
    isImageSlide(slide) &&
    typeof slide.width === "number" &&
    typeof slide.height === "number"
  );
}

type Rect = { width: number; height: number };

function NextJsImage({ slide, rect }: { slide: Slide; rect: Rect }) {
  const {
    carousel: { imageFit },
  } = useLightboxProps();
  const cover = isImageSlide(slide) && isImageFitCover(slide, imageFit);
  if (!isNextJsImage(slide)) return undefined;
  const width = !cover
    ? Math.round(
        Math.min(rect.width, (rect.height / slide.height!) * slide.width!),
      )
    : rect.width;

  const height = !cover
    ? Math.round(
        Math.min(rect.height, (rect.width / slide.width!) * slide.height!),
      )
    : rect.height;
  return (
    <div style={{ position: "relative", width, height }}>
      <BlurredImage
        alt=""
        src={(slide as { src: string }).src}
        style={{ objectFit: cover ? "cover" : "contain" }}
      />
    </div>
  );
}