"use client"
import Masonry from "react-responsive-masonry";
import { useEffect, useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import BlurredImage from "../BlurredImage";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import { Thumbnails, Zoom } from "yet-another-react-lightbox/plugins";
import { motion } from "motion/react"

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
      <BlurredImage
        src={`/dynamic/images/gallery/${image}`}
        className="rounded-2xl w-full"
        alt=""
        onClick={() => setIndex(index)}
      />
    </motion.div>
  );
}

type Rect = { width: number; height: number };
type Slide = { src: string; blurDataURL?: string };

function NextJsImage({ slide, rect }: { slide: unknown; rect: Rect }) {
  const width = Math.max(1, Math.round(rect.width));
  const height = Math.max(1, Math.round(rect.height));

  if (!slide || typeof slide !== "object" || !("src" in (slide as Record<string, unknown>))) return null;

  return (
    <div style={{ position: "relative", width, height }}>
      <BlurredImage
        alt=""
        src={(slide as Slide).src}
        style={{ objectFit: "contain" }}
      />
    </div>
  );
}