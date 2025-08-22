"server-only"

import HomeTileContainer from "./HomeTileContainer";
import BlurredImage from "../BlurredImage";

export default function HomeTile(props: { offsets: {first: number, second: number, third: number, fourth: number}, alignment: "left" | "right", title: string, description: string, image: string }) {
  const {
    alignment,
    title,
    description,
    image,
    offsets
  } = props;

  return (
    <div className="flex">
      {alignment === "left" && <div className="w-1/4 hidden md:block" />}
      <HomeTileContainer offsets={offsets} side={alignment}>
        <div className="relative flex gap-4 w-full">
          {alignment === "right" && (
            <div className="flex flex-col gap-2 grow">
              <h2 className="text-xl">{title}</h2>
              <h3>{description}</h3>
            </div>
          )}
          <BlurredImage
            src={image}
            className="rounded-2xl w-1/4 aspect-1/1 md:aspect-3/2 relative"
            style={{ objectFit: "cover" }}
            alt=""
          />
          {alignment === "left" && (
            <div className="flex flex-col gap-2 grow">
              <h2 className="text-xl">{title}</h2>
              <h3>{description}</h3>
            </div>
          )}
        </div>
      </HomeTileContainer>
      {alignment === "right" && <div className="w-1/4 hidden md:block" />}
    </div>
  );
}
