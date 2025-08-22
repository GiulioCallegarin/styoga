import Image from "next/image";
import { promises as fs } from 'fs';
import { shuffle } from "~/util";
import HomeTile from "./home/HomeTile";

export default async function HomePage() {
  const file = await fs.readFile(`${process.cwd()}/public/dynamic/content/home.json`, "utf8");
  const images = await fs.readdir(`${process.cwd()}/public/dynamic/images/gallery`);
  shuffle(images);
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const data: {
    title1: string;
    subtitle1: string;
    subtitle2: string;
    title2: string;
    tiles: {
      title: string;
      description: string;
      image: string;
    }[];
    footing1: string;
    footing2: string;
  } = JSON.parse(file);

  return (
    <div className="flex flex-col gap-8 items-center">
      <section id="home"/>
      <Image
        src="/dynamic/images/home/landing.jpg"
        alt="Placeholder"
        className="rounded-2xl w-full h-64"
        style={{ objectFit: "cover" }}
        width={800}
        height={256}
      />

      <h1 className="text-3xl mt-8">{data.title1}</h1>
      <div className="flex flex-col md:flex-row gap-8 items-center">
        <div className="flex flex-col gap-8">
          <h3>{data.subtitle1}</h3>
          <h3>{data.subtitle2}</h3>
        </div>
        <Image
          src="/dynamic/images/home/intro.jpg"
          alt="Placeholder"
          className="rounded-2xl w-3/4 md:w-1/2"
          style={{ objectFit: "cover" }}
          width={800}
          height={256}
        />
      </div>

      <h1 className="text-3xl mt-8 text-center">{data.title2}</h1>
      <div className="flex flex-col w-full gap-4 px-4">
        {data.tiles.map((tile, index) => (
          <HomeTile
            key={index}
            alignment={index % 2 === 0 ? "right" : "left"}
            title={tile.title}
            description={tile.description}
            image={tile.image}
            offsets={{
              first: Math.floor(Math.random() * 100),
              second: Math.floor(Math.random() * 100),
              third: Math.floor(Math.random() * 100),
              fourth: Math.floor(Math.random() * 100)
            }}
          />
        ))}
      </div>

      <h3 className="mt-16 text-center">{data.footing1}</h3>
      <h3 className="mt-8 text-center">{data.footing2}</h3>
    </div >
  );
}
