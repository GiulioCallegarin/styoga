export default function Contacts(props: { data: { title: string } }) {
  const { data } = props
  return (
    <div className="flex flex-col border-zinc-400 border rounded-2xl p-4 w-full md:w-3/4">
      <h1 className="text-2xl text-center">{data.title}</h1>
      <div className="flex flex-col md:flex-row mt-4">
        <input type="text" name="name" id="input-name" placeholder="NOME E COGNOME" className="flex-grow border border-zinc-400 rounded-xl p-2 m-2" />
        <input type="email" name="email" id="input-email" placeholder="EMAIL" className="flex-grow border border-zinc-400 rounded-xl p-2 m-2" />
      </div>
      <textarea name="message" id="textarea-message" placeholder="MESSAGGIO" className="flex-grow min-h-32 border border-zinc-400 rounded-xl p-2 m-2"></textarea>
      <button className="bg-blue-700 hover:bg-blue-800 active:bg-blue-900 text-white rounded-xl p-2 m-2">INVIA</button>
    </div>
  );
}
