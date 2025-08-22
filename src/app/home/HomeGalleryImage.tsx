import { motion } from "motion/react"
import BlurredImage from "../BlurredImage";


type HomeGalleryImageProps = {
  image: string;
  index: number;
  setIndex: (index: number) => void;
};

export default function HomeGalleryImage({ image, index, setIndex }: HomeGalleryImageProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1, ease: "easeIn" }}
    >
      <BlurredImage
      key={index}
      src={`/dynamic/images/gallery/${image}`}
      className="rounded-2xl w-full"
      alt=""
      onClick={() => setIndex(index)}
    />
    </motion.div>
  );
}
