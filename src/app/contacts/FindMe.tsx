import { Mail, Phone, MapPin, Instagram, MessageCircle } from "@deemlol/next-icons";

export default function FindMe(props: { data: { findme: { caption: string, adresses: Array<{ geo: string, address: string, city: string, cap: string, openings: string }>, email: string, phone: string, instagram: { username: string, url: string }, whatsapp: { number: string, url: string } } } }) {
  const { data } = props

  return (
    <div className="flex flex-col card p-4 w-full md:w-1/4">
      <h1 className="text-2xl text-center">{data.findme.caption}</h1>
      {data.findme.adresses.map((a, i) => (
        <div className="mt-4" key={i}>
          <a href={a.geo} target="_blank" rel="noopener noreferrer">
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
      <h3 className="mt-8 flex gap-2">
        <Mail />
        <a
          href={`mailto:${data.findme.email}`}
          className="underline underline-offset-4 decoration-zinc-500 hover:text-white hover:decoration-zinc-400 transition-colors"
        >
          {data.findme.email}
        </a>
      </h3>
      <h3 className="mt-3 flex gap-2">
        <Phone />
        <a
          href={`tel:${data.findme.phone}`}
          className="underline underline-offset-4 decoration-zinc-500 hover:text-white hover:decoration-zinc-400 transition-colors"
        >
          {data.findme.phone}
        </a>
      </h3>
      <h3 className="mt-3 flex gap-2">
        <Instagram />
        <a
          href={data.findme.instagram.url}
          target="_blank"
          rel="noopener noreferrer"
          className="underline underline-offset-4 decoration-zinc-500 hover:text-white hover:decoration-zinc-400 transition-colors"
        >
          {data.findme.instagram.username}
        </a>
      </h3>
      <h3 className="mt-3 flex gap-2"
      >
        <MessageCircle />
        <a
          href={data.findme.whatsapp.url}
          target="_blank"
          rel="noopener noreferrer"
          className="underline underline-offset-4 decoration-zinc-500 hover:text-white hover:decoration-zinc-400 transition-colors"
        >
          {data.findme.whatsapp.number}
        </a>
      </h3>
    </div>
  );
}
