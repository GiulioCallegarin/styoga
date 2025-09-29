"use client"

import { motion } from "motion/react"
import { useState } from "react"
import BlurredImage from "../components/BlurredImage";

export default function CourseTile(props: { title: string, description: string, image: string }) {
  const {
    title,
    description,
    image,
  } = props;

  return (
    <div className="flex">
      <CourseTileContainer>
        <div className="relative flex flex-col gap-4 w-full items-center">
          <div className="card overflow-hidden relative w-1/4 aspect-[1/1] md:aspect-[3/2]">
            <BlurredImage
              src={image}
              className="w-full h-full"
              style={{ objectFit: "cover" }}
              alt=""
            />
          </div>
          <div className="flex flex-col gap-2 grow">
            <h2 className="text-xl">{title}</h2>
            <h3>{description}</h3>
          </div>
        </div>
      </CourseTileContainer>
    </div>
  );
}

function CourseTileContainer(props: { children: React.ReactNode }) {
  return (
    <motion.div
      className="relative flex gap-4 w-full md:w-3/4 glasslike p-4"
    >
      {props.children}
    </motion.div>
  );
}