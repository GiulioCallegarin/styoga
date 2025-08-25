import Link from "next/link";

export default function NotFoundPage() {
  return (
    <div className="flex h-full flex-col items-center justify-center text-center gap-8">
      <div className="flex flex-col items-center gap-2">
        <h1 className="text-4xl font-semibold text-zinc-300">Pagina non trovata</h1>
        <p>La risorsa che cerchi potrebbe essere stata spostata o rimossa.</p>
      </div>

      <div className="flex gap-4">
        <Link
          href="/"
          className="px-4 py-2 rounded-lg bg-zinc-300 text-zinc-900 hover:bg-zinc-400 transition-colors"
        >
          Torna alla Home
        </Link>
      </div>
    </div>
  );
}
