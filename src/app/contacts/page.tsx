import FindMe from "./FindMe";
import Contacts from "./Contacts";
import BlurredImage from "../components/BlurredImage";
import { readContentJson } from "~/util";

export default async function ContactsPage() {
  const data = await readContentJson<{
    title: string,
    findme: {
      caption: string,
      adresses: { geo: string; address: string; city: string; cap: string; openings: string }[],
    }
  }>("contacts.json");
  const org = await readContentJson<{
    email: string;
    formEmail: string;
    phone: string;
    instagram: { username: string; url: string };
    whatsapp: { number: string; url: string };
  }>("org.json");

  return (
    <div className="flex flex-col gap-8 items-center justify-center h-full w-full">
      <div className="w-full card overflow-hidden">
        <BlurredImage
          src="/dynamic/images/contacts/landing.jpg"
          className="w-full h-64"
          style={{ objectFit: "cover" }}
          alt=""
        />
      </div>
      <div className="flex flex-col md:flex-row w-full gap-4">
        <Contacts data={{ title: data.title, email: org.formEmail }} />
        <FindMe data={{ findme: { caption: data.findme.caption, adresses: data.findme.adresses, email: org.email, phone: org.phone, instagram: org.instagram, whatsapp: org.whatsapp } }} />
      </div>
    </div >
  );
}
