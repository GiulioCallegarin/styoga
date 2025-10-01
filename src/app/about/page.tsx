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
              <div
                className={`flex flex-col md:flex-row ${paragraph.imageAlignment === "right" ? "md:flex-row" : "md:flex-row-reverse"} items-stretch gap-8 w-full`}
                key={index}
              >
                {paragraph.image?.length > 0 && (
                  <div className="flex-1 flex items-center justify-center p-0 md:p-6">
                    <div className="card-image-container">
                      <BlurredImage
                        src={paragraph.image}
                        className="w-full h-full object-cover"
                        alt=""
                      />
                    </div>
                  </div>
                )}
                <div className={`${paragraph.image?.length > 0 ? "glass" : "text-center"} flex-2 w-full flex flex-col justify-center`}>
                  <span>{paragraph.text}</span>
                </div>
              </div>
          ))}
        </div>
      </div>
    </div>
  );
}
