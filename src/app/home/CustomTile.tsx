"use client"

import { motion } from "motion/react"
import BlurredImage from "../components/BlurredImage";

export default function CustomTile(props: { offsets: { first: number, second: number, third: number, fourth: number }, alignment: "left" | "right", title: string, description: string, image: string }) {
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
      <CustomTileContainer offsets={offsets} side={alignment}>
        <div className="relative flex gap-4 w-full items-center">
          {alignment === "right" && (
            <div className="flex flex-col gap-2 grow">
              <h2 className="text-xl">{title}</h2>
              <h3>{description}</h3>
            </div>
          )}
          <div className="card overflow-hidden relative w-1/4 aspect-[1/1] md:aspect-[3/2]">
            <BlurredImage
              src={image}
              className="w-full h-full"
              style={{ objectFit: "cover" }}
              alt=""
            />
          </div>
          {alignment === "left" && (
            <div className="flex flex-col gap-2 grow">
              <h2 className="text-xl">{title}</h2>
              <h3>{description}</h3>
            </div>
          )}
        </div>
      </CustomTileContainer>
      {alignment === "right" && <div className="w-1/4 hidden md:block" />}
    </div>
  );
}

function CustomTileContainer(props: { offsets: { first: number, second: number, third: number, fourth: number }, children: React.ReactNode, side: "left" | "right" }) {
  const { offsets, side } = props;

  return (
    <motion.div
      className="relative flex gap-4 w-full md:w-3/4 card p-4"
      initial={{ x: side === "right" ? -32 : 32, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      exit={{ x: side === "right" ? -32 : 32, opacity: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      viewport={{ once: false, margin: "-10%" }}
    >
      <svg
        className="absolute bottom-0 left-0 w-full h-24 z-0 rounded-2xl"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox="0 24 150 28"
        preserveAspectRatio="none"
        shapeRendering="auto"
      >
        <defs>
          <path id="gentle-wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
        </defs>
        <g className="parallax">
          <use xlinkHref="#gentle-wave" x={0 + offsets.first} y="15" className="fill-zinc-400 opacity-30" />
          <use xlinkHref="#gentle-wave" x={20 + offsets.second} y="18" className="fill-zinc-400 opacity-50" />
          <use xlinkHref="#gentle-wave" x={37 + offsets.third} y="20" className="fill-zinc-400 opacity-70" />
          <use xlinkHref="#gentle-wave" x={48 + offsets.fourth} y="22" className="fill-zinc-400" />
        </g>
      </svg>
      {props.children}
    </motion.div>
  );
}