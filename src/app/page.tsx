import Image from "next/image";

export default function HomePage() {
  return (
    <div className="flex flex-col w-full h-full items-center justify-center">
      <Image
        src="/dynamic/images/home/landing.jpg"
        alt="Placeholder"
        className="rounded-2xl w-full h-64"
        style={{ objectFit: "cover" }}
        width={800}
        height={256}
      />
      <h1 className="mt-16 text-5xl font-extrabold tracking-tight text-white sm:text-[5rem] text-center">
        Welcome to <span className="text-[hsl(280,100%,70%)]">Sentiero Yoga</span>
      </h1>
    </div>
  );
}
