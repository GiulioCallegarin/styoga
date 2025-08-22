import { readJson } from "~/util";
import BlurredImage from "../BlurredImage";

export default async function AboutPage() {
  const data = await readJson<{ paragraphs: string[] }>(
    `${process.cwd()}/public/dynamic/content/about.json`
  );

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
