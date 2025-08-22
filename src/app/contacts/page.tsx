import Image from "next/image";
import { promises as fs } from 'fs';
import FindMe from "./FindMe";
import Contacts from "./Contacts";

export default async function ContactsPage() {
  const file = await fs.readFile(`${process.cwd()}/public/dynamic/content/contacts.json`, "utf8");
  // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  const data: {
    title: string,
    findme: {
      caption: string,
      adresses: {
        geo: string,
        address: string,
        city: string,
        cap: string
        openings: string
      }[],
      email: string,
      phone: string,
      instagram: {
        username: string,
        url: string
      },
      whatsapp: {
        number: string,
        url: string
      }
    }
  } = JSON.parse(file);

  return (
    <div className="flex flex-col gap-8 items-center">
      <Image
        src="/dynamic/images/contacts/landing.jpg"
        alt="Placeholder"
        className="rounded-2xl w-full h-64"
        style={{ objectFit: "cover" }}
        width={800}
        height={256}
      />
      <div className="flex flex-col md:flex-row w-full gap-4">
        <Contacts data={data} />
        <FindMe data={data} />
      </div>
    </div >
  );
}
