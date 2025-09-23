import { readContentJson } from "~/util";
import BlurredImage from "../components/BlurredImage";

export default async function AboutPage() {
  const data = await readContentJson<{ paragraphs: { text: string; image: string; imageAlignment: string }[] }>(
    "about.json"
  );

  return (
    <div className="flex flex-col gap-8 items-center">
      <div className="w-full card overflow-hidden">
        <BlurredImage
          src="/dynamic/images/about/landing.jpg"
          className="w-full h-64"
          style={{ objectFit: "cover" }}
          alt=""
        />
      </div>
      <div className="flex flex-col md:flex-row gap-8 items-center">
        <div className="flex flex-col gap-8 w-full">
          {data.paragraphs.map((paragraph, index) => (
            <div className={`flex flex-col ${paragraph.imageAlignment === "right" ? "md:flex-row" : "md:flex-row-reverse"} justify-between items-center gap-6`} key={index}>
              <div className="card p-4 w-full">
                <h3>{paragraph.text}</h3>
              </div>
              {paragraph.image?.length > 0 && (
                <div className="card overflow-hidden w-4/5 md:w-1/2 aspect-square">
                  <BlurredImage
                    src={paragraph.image}
                    className="w-full h-full"
                    style={{ objectFit: "cover" }}
                    alt=""
                  />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
