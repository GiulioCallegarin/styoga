import BlurredImage from "../components/BlurredImage";

export default function EventTile(props: { name: string; description: string; image: string; dates?: string; postDate?: string }) {
  const {
    name,
    description,
    image,
    dates,
    postDate,
  } = props;

  return (
    <>
      <section id={name.toLowerCase().replace(/\s+/g, "-")}></section>
      <div className="glass flex flex-col items-center justify-center gap-4">
        <h2>{name}</h2>
        <span className="absolute top-2 right-2 text-zinc-400">{postDate}</span>
        <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
          <div className="flex flex-col">
            <div className="card overflow-hidden">
              <BlurredImage
                src={image}
                style={{ objectFit: "cover" }}
                alt=""
              />
            </div>
            <span className="hidden md:block text-zinc-400 mt-4 w-full text-center">{dates}</span>
          </div>
          <span>{description}</span>
          <span className="md:hidden text-zinc-400 mt-4 w-full text-center">{dates}</span>
        </div>
      </div>
    </>
  );
}
