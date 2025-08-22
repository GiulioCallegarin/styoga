import { promises as fs } from 'fs';
import BlurredImage from "../BlurredImage";

export default async function AboutPage() {
  const file = await fs.readFile(`${process.cwd()}/public/dynamic/content/about.json`, "utf8");
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const data: {
    paragraphs: string[];
  } = JSON.parse(file);
  
  return (
    <div className="flex flex-col gap-8 items-center">
      <BlurredImage
        src="/dynamic/images/about/landing.jpg"
        className="rounded-2xl w-full h-64"
        style={{ objectFit: "cover" }}
        alt=""
      />
      <div className="flex flex-col md:flex-row gap-8 items-center">
        <div className="flex flex-col gap-8">
          {data.paragraphs.map((paragraph, index) => (
            <h3 key={index}>{paragraph}</h3>
          ))}
        </div>
      </div>
    </div>
  );
}
