import BlurredImage from "../components/BlurredImage";

export default function EventsPage() {
  return (
    <div className="flex flex-col gap-8 items-center">
      <div className="w-full card overflow-hidden">
        <BlurredImage
          src="/dynamic/images/events/landing.jpg"
          className="w-full h-64"
          style={{ objectFit: "cover" }}
          alt=""
        />
      </div>
    </div>
  );
}
