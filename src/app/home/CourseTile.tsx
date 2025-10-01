"use client"

import { useState } from "react"
import BlurredImage from "../components/BlurredImage";
import Link from "next/link";
import { routes } from "../routing/routes";
import { RefreshCw } from "@deemlol/next-icons";

export default function CourseTile(props: { title: string, description: string, image: string }) {
  const {
    title,
    description,
    image,
  } = props;

  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div
      className="relative flex gap-4 max-h-80 aspect-5/4 glasslike items-center justify-center cursor-pointer"
      onClick={handleFlip}
    >
      <div className="flip-container h-full flex justify-center items-center">
        <div className={`flipper${isFlipped ? " flipped" : ""}`}>
          <div className="front flex flex-col gap-4 items-center ">
            <div className="card overflow-hidden aspect-7/5">
              <BlurredImage
                src={image}
                style={{ objectFit: "cover" }}
                alt=""
              />
            </div>
            <h2 className="text-xl">{title}</h2>
          </div>
          <div className="back p-4 flex flex-col items-center justify-center">
            <div className="text-center w-full flex flex-col gap-4">
              <p
                className="leading-relaxed overflow-hidden text-ellipsis"
                style={{
                  display: '-webkit-box',
                  WebkitBoxOrient: 'vertical',
                  WebkitLineClamp: 5,
                }}
              >
                {description}
              </p>
              <Link
                href={`${routes.events}/#${title.replace(/\s+/g, '-').toLowerCase()}`}
                className="font-medium text-zinc-300 underline underline-offset-4 decoration-zinc-500 hover:text-white hover:decoration-zinc-400 transition-colors"
                onClick={(e) => e.stopPropagation()}
              >
                Scopri di più
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-2 right-2 p-2 rounded-full bg-zinc-700/30 hover:bg-zinc-700/50 backdrop-blur transition-colors">
        <RefreshCw size={16} />
      </div>
    </div>
  );
}