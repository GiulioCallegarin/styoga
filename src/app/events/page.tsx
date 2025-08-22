import Image from "next/image";

export default function EventsPage() {
  return (
    <div className="flex flex-col gap-8 items-center">
      <Image
        src="/dynamic/images/events/landing.jpg"
        alt="Placeholder"
        className="rounded-2xl w-full h-64"
        style={{ objectFit: "cover" }}
        width={800}
        height={256}
      />
    </div>
  );
}
