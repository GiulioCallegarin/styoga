import { readContentJson } from "~/util";
import BlurredImage from "../BlurredImage";

export default async function AboutPage() {
  const data = await readContentJson<{ paragraphs: { text: string; image: string; imageAlignment: string }[] }>(
    "about.json"
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
            <div className={`flex flex-col ${paragraph.imageAlignment === "right" ? "md:flex-row" : "md:flex-row-reverse"} justify-between items-center gap-4`} key={index}>
              <h3>{paragraph.text}</h3>
              {paragraph.image?.length > 0 && (
                <BlurredImage
                  src={paragraph.image}
                  className="rounded-2xl w-4/5 md:w-1/2 aspect-square"
                  style={{ objectFit: "cover" }}
                  alt=""
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
