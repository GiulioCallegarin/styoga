import Link from "next/link";
import { readContentJson } from "~/util";

export default async function Footer() {
  const data = await readContentJson<{
    name: string,
    address1: string,
    address2: string,
    piva: string,
    email: string,
    phone: string
  }>("org.json");

  return (
    <div className="flex bg-zinc-950 w-full mt-8 shrink-0 items-center justify-center" >
      <div className="flex w-full h-full p-2 text-sm max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex-grow flex flex-col md:flex-row gap-4">
          <div>
            <p>{data.name}</p>
            <div className="flex flex-col md:flex-row">
              <p >P.I. {data.piva}</p>
            </div>
          </div>
          <div>
            <p>{data.address1}</p>
            <p>{data.address2}</p>
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-4">
          <div>
            <p>
              <a
                href={`mailto:${data.email}`}
                className="underline underline-offset-4 decoration-zinc-500 hover:text-zinc-300 hover:decoration-zinc-400 transition-colors"
              >
                {data.email}
              </a>
            </p>
            <p>
              <a
                href={`tel:${data.phone}`}
                className="underline underline-offset-4 decoration-zinc-500 hover:text-zinc-300 hover:decoration-zinc-400 transition-colors"
              >
                {data.phone}
              </a>
            </p>
          </div>
          <Link
            href="/privacy"
            className="font-medium text-zinc-400 underline underline-offset-4 decoration-zinc-500 hover:text-zinc-300 hover:decoration-zinc-400 transition-colors"
          >
            Privacy Policy
          </Link>
        </div>
      </div>
    </div>
  );
}
