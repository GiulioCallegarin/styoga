import FindMe from "./FindMe";
import Contacts from "./Contacts";
import BlurredImage from "../BlurredImage";
import { readJson } from "~/util";

export default async function ContactsPage() {
  const data = await readJson<{
    title: string,
    findme: {
      caption: string,
      adresses: { geo: string; address: string; city: string; cap: string; openings: string }[],
      email: string,
      phone: string,
      instagram: { username: string; url: string },
      whatsapp: { number: string; url: string }
    }
  }>(`${process.cwd()}/public/dynamic/content/contacts.json`);

  return (
    <div className="flex flex-col gap-8 items-center">
      <BlurredImage
        src="/dynamic/images/contacts/landing.jpg"
        className="rounded-2xl w-full h-64"
        style={{ objectFit: "cover" }}
        alt=""
      />
      <div className="flex flex-col md:flex-row w-full gap-4">
        <Contacts data={data} />
        <FindMe data={data} />
      </div>
    </div >
  );
}
