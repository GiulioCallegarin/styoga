import Image, { type ImageProps } from "next/image";

export default function BlurredImage(props: ImageProps) {
  const {
    width,
    height,
    alt,
    loading,
    placeholder,
    blurDataURL,
    ...rest
  } = props;

  return (
    <Image
      {...rest}
      width={width ?? 800}
      height={height ?? 256}
      alt={alt ?? ""}
      loading={loading ?? "lazy"}
      placeholder={placeholder ?? "blur"}
      blurDataURL={
        blurDataURL ??
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAADCAYAAACuyE5IAAAAVUlEQVR4AQzFSQ6AIBAEwA4eFMQPEDY1/v97ysC0HCplQiiMqTDna7qZYmUIibU+zOWkUSq6CJp8aO2FdAGVUB0YXWHsusG5A/vknJ97bNZiMQsA4gcAAP//IGuVBAAAAAZJREFUAwAg6SQ2jjFbQAAAAABJRU5ErkJggg=="
      }
    />
  );
}
