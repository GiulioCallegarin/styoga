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
                className={`flex flex-col md:flex-row ${paragraph.imageAlignment === "right" ? "md:flex-row" : "md:flex-row-reverse"} items-stretch gap-0 md:gap-8 w-full`}
                key={index}
              >
                {paragraph.image?.length > 0 && (
                  <div className="flex-1 flex items-center justify-center p-0 md:p-6">
                    <div className="overflow-hidden rounded-2xl shadow-lg transition-transform duration-200 hover:scale-105 hover:shadow-xl w-full aspect-square max-w-xs md:max-w-sm">
                      <BlurredImage
                        src={paragraph.image}
                        className="w-full h-full object-cover"
                        alt=""
                      />
                    </div>
                  </div>
                )}
                <div className="paragraph-card flex-2 w-full flex flex-col justify-center">
                  <span className="paragraph-icon mb-4 md:mb-6">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="12" cy="12" r="10" fill="white" fillOpacity="0.12"/>
                      <path d="M8 12l2.5 2.5L16 9" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </span>
                  <span className="paragraph-text">{paragraph.text}</span>
                </div>
              </div>
          ))}
        </div>
      </div>
    </div>
  );
}
