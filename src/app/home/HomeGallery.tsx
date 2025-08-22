"use client"
import Masonry from "react-responsive-masonry";
import { useEffect, useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import NextJsImage from "./NextJsImage";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import { Thumbnails, Zoom } from "yet-another-react-lightbox/plugins";
import HomeGalleryImage from "./HomeGalleryImage";

export default function HomeGallery(props: { images: string[] }) {
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
            <HomeGalleryImage
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
