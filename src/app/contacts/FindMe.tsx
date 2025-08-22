import { Mail, Phone, MapPin, Instagram, MessageCircle } from "@deemlol/next-icons";

export default function FindMe(props: { data: { findme: { caption: string, adresses: Array<{ geo: string, address: string, city: string, cap: string, openings: string }>, email: string, phone: string, instagram: { username: string, url: string }, whatsapp: { number: string, url: string } } } }) {
  const { data } = props

  return (
    <div className="flex flex-col border-zinc-400 border-1 rounded-2xl p-4 w-full md:w-1/4">
      <h1 className="text-2xl text-center">{data.findme.caption}</h1>
      {data.findme.adresses.map((a, i) => (
        <div className="mt-4" key={i}>
          <a href={a.geo} target="_blank">
            <div className="flex items-center gap-2">
              <MapPin />
              <div>
                <h2 className="text-xl">{a.address}</h2>
                <h2 className="text-xl">{a.city}, {a.cap}</h2>
              </div>
            </div>
          </a>
          <h3 className="mt-2 ml-8 text-zinc-500">{a.openings}</h3>
        </div>
      ))}
      <a href={`mailto:${data.findme.email}`}>
        <h3 className="mt-8 flex gap-2"><Mail /> {data.findme.email}</h3>
      </a>
      <a href={`tel:${data.findme.phone}`}>
        <h3 className="mt-3 flex gap-2"><Phone /> {data.findme.phone}</h3>
      </a>
      <a href={data.findme.instagram.url} target="_blank">
        <h3 className="mt-3 flex gap-2"><Instagram /> {data.findme.instagram.username}</h3>
      </a>
      <a href={data.findme.whatsapp.url} target="_blank">
        <h3 className="mt-3 flex gap-2"><MessageCircle /> {data.findme.whatsapp.number}</h3>
      </a>
    </div>
  );
}
