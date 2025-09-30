"use client"

import { useState } from "react"
import BlurredImage from "../components/BlurredImage";
import Link from "next/link";
import { routes } from "../routing/routes";

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
            <div className="card overflow-hidden">
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
      <div className="absolute bottom-4 right-4 p-2 rounded-full bg-zinc-700/30 hover:bg-zinc-700/50 backdrop-blur transition-colors">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 4V1L8 5l4 4V6c3.31 0 6 2.69 6 6 0 1.01-.25 1.97-.7 2.8l1.46 1.46C19.54 15.03 20 13.57 20 12c0-4.42-3.58-8-8-8zm0 14c-3.31 0-6-2.69-6-6 0-1.01.25-1.97.7-2.8L5.24 7.74C4.46 8.97 4 10.43 4 12c0 4.42 3.58 8 8 8v3l4-4-4-4v3z" fill="currentColor" opacity="0.7" />
        </svg>
      </div>
    </div>
  );
}