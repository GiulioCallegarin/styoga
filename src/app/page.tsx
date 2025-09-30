import { promises as fs } from 'fs';
import { readContentJson, shuffle } from "~/util";
import HomeTile from "./home/CustomTile";
import Gallery from "./home/Gallery";
import BlurredImage from "./components/BlurredImage";
import CourseTile from './home/CourseTile';

export default async function HomePage() {
  const data = await readContentJson<{
    title1: string;
    subtitle1: string;
    subtitle2: string;
    title2: string;
    title3: string;
    courses: { title: string; description: string; image: string; dates: string }[];
    tiles: { title: string; description: string; image: string; dates: string }[];
    footing1: string;
    footing2: string;
  }>("home.json");
  const images = await fs.readdir(`${process.cwd()}/public/dynamic/images/gallery`);
  shuffle(images);

  return (
    <div className="flex flex-col items-center">
      <section id="home" />
      <div className="w-full card overflow-hidden">
        <BlurredImage
          src="/dynamic/images/home/landing.jpg"
          className="w-full h-64"
          style={{ objectFit: "cover" }}
          alt=""
        />
      </div>

      <div className="flex flex-col gap-8 items-center">
        <h1 className="text-3xl mt-16">{data.title1}</h1>
        <div className="flex flex-col md:flex-row gap-8 items-center">
          <div className="flex flex-col gap-6 p-4 text-center">
            <h3>{data.subtitle1}</h3>
            <h3>{data.subtitle2}</h3>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-8 items-center">
        <h1 className="text-3xl mt-16 text-center">{data.title2}</h1>
        <div className="flex w-full gap-4 px-4 flex-col md:flex-row">
          {data.courses.map((course, index) => (
            <CourseTile
              key={index}
              title={course.title}
              description={course.description}
              image={course.image}
            />
          ))}
        </div>
      </div>

      <div className="flex flex-col gap-8 items-center">
        <h1 className="text-3xl mt-16 text-center">{data.title3}</h1>
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
      </div>

      <h3 className="mt-24 text-center">{data.footing1}</h3>
      <h3 className="mt-8 mb-24 text-center">{data.footing2}</h3>

      <div className="mt-8 w-full">
        <Gallery images={images} />
      </div>

    </div >
  );
}
