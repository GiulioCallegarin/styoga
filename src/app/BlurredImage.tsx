import Image, { type ImageProps } from "next/image";

export default function BlurredImage(props: ImageProps) {
  return (
    <Image
      {...props}
      loading="lazy"
      placeholder="blur"
      blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAADCAYAAACuyE5IAAAAVUlEQVR4AQzFSQ6AIBAEwA4eFMQPEDY1/v97ysC0HCplQiiMqTDna7qZYmUIibU+zOWkUSq6CJp8aO2FdAGVUB0YXWHsusG5A/vknJ97bNZiMQsA4gcAAP//IGuVBAAAAAZJREFUAwAg6SQ2jjFbQAAAAABJRU5ErkJggg=="
      width={800}
      height={256}
      alt=""
    />
  );
}
