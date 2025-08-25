import BlurredImage from "../components/BlurredImage";

export default function EventsPage() {
  return (
    <div className="flex flex-col gap-8 items-center">
      <BlurredImage
        src="/dynamic/images/events/landing.jpg"
        className="rounded-2xl w-full h-64"
        style={{ objectFit: "cover" }}
        alt=""
      />
    </div>
  );
}
