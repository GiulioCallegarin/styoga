"use client";

import { Share2 } from "@deemlol/next-icons";
import BlurredImage from "../components/BlurredImage";

export default function EventTile(props: { name: string; description: string; image: string; dates?: string; postDate?: string }) {
  const {
    name,
    description,
    image,
    dates,
    postDate,
  } = props;

  return (
    <>
      <section id={name.toLowerCase().replace(/\s+/g, "-")}></section>
      <div className="glass flex flex-col items-center justify-center gap-4">
        <h2>{name}</h2>
        <span className="absolute top-2 right-2 text-zinc-400">{postDate}</span>
        <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
          <div className="flex flex-col">
            <div className="card overflow-hidden aspect-7/5">
              <BlurredImage
                src={image}
                style={{ objectFit: "cover" }}
                alt=""
              />
            </div>
            <span className="hidden md:block text-zinc-400 mt-4 w-full text-center">{dates}</span>
          </div>
          <span>{description}</span>
          <span className="md:hidden text-zinc-400 mt-4 w-full text-center">{dates}</span>
        </div>
        <div
          className="absolute bottom-2 right-2 p-2 rounded-full bg-zinc-700/30 hover:bg-zinc-700/50 backdrop-blur transition-colors"
          onClick={async () => {
            if (navigator.share) {
              await navigator.share({
                title: name,
                text: description,
                url: window.location.pathname + `#${name.toLowerCase().replace(/\s+/g, "-")}`,
              });
              console.log(window.location)
            }
          }}
        >
          <Share2 size={16} />
        </div>
      </div>
    </>
  );
}
