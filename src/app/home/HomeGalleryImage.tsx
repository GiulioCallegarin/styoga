import Image from "next/image";
import { motion } from "motion/react"


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
      <Image
      key={index}
      src={`/dynamic/images/gallery/${image}`}
      alt={"image"}
      width={800}
      height={600}
      className="rounded-2xl w-full"
      onClick={() => setIndex(index)}
    />
    </motion.div>
  );
}
