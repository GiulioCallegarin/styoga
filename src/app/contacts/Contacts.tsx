"use client"

import Link from "next/link";
import { useState, type FormEvent } from "react";

export default function Contacts(props: { data: { title: string, email: string } }) {
  const { data } = props
  const [consent, setConsent] = useState(false);
  const [loading, setLoading] = useState(false);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [touched, setTouched] = useState<{ name?: boolean; email?: boolean; message?: boolean }>({});
  const [submitted, setSubmitted] = useState(false);

  const isValidEmail = (val: string) => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(val.trim());
  const isValidFullName = (val: string) => {
    const v = val.trim();
    const re = /^[A-Za-zÀ-ÖØ-öø-ÿ'’-]+(?:\s+[A-Za-zÀ-ÖØ-öø-ÿ'’-]+)+$/;
    return v.length >= 3 && re.test(v);
  };

  const getErrors = () => {
    const errs: Partial<Record<"name" | "email" | "message", string>> = {};
    if (!isValidFullName(name)) {
      errs.name = "Inserisci nome e cognome";
    }
    if (!isValidEmail(email)) {
      errs.email = "Inserisci un'email valida";
    }
    if (message.trim().length < 10) {
      errs.message = "Il messaggio deve contenere almeno 10 caratteri";
    }
    return errs;
  };

  const errors = getErrors();
  const isValid = Object.keys(errors).length === 0;

  const showError = (field: keyof typeof errors) => {
    const wasTouched = touched[field] ?? false;
    return !!errors[field] && (wasTouched ? true : submitted);
  };

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    if (!isValid || !consent) return;

    setLoading(true);
    const response = await sendMail();
    if (response.ok) {
      setName("");
      setEmail("");
      setMessage("");
      setConsent(false); 
      setTouched({});
      setSubmitted(false);
      alert("Messaggio inviato! Ti contatteremo al più presto.");
    } else {
      console.error(response);
      alert("Si è verificato un errore durante l'invio del messaggio.");
    }
    setLoading(false);
  };

  const sendMail = async () => {
    try {
      const res = await fetch("/api/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, message }),
      });
      return res;
    } catch (error) {
      return new Response(JSON.stringify({ error: String(error) }), { status: 500 });
    }
  };

  return (
    <>
      {loading && (
        <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm flex items-center justify-center" role="status" aria-live="polite" aria-label="Caricamento">
          <div className="flex flex-col items-center">
            <div className="h-12 w-12 border-4 border-white/30 border-t-white rounded-full animate-spin" />
            <p className="mt-3 text-white">Invio in corso…</p>
          </div>
        </div>
      )}
  <form onSubmit={onSubmit} noValidate aria-busy={loading} className="flex flex-col card p-4 w-full md:w-3/4">
        <h2 className="text-2xl text-center">{data.title}</h2>
        <div className="flex flex-col md:flex-row mt-4">
          <div className="flex-grow m-2">
            <input
              type="text"
              name="name"
              id="input-name"
              placeholder="NOME E COGNOME"
              value={name}
              onChange={(e) => setName(e.target.value)}
              onBlur={() => setTouched((t) => ({ ...t, name: true }))}
              aria-invalid={showError("name")}
              disabled={loading}
              className={`w-full rounded-xl p-2 outline-none bg-transparent border ${showError("name") ? "border-red-700" : "border-zinc-700"}`}
            />
            {showError("name") && (
              <p className="text-red-800 text-sm mt-1">{errors.name}</p>
            )}
          </div>
          <div className="flex-grow m-2">
            <input
              type="email"
              name="email"
              id="input-email"
              placeholder="EMAIL"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onBlur={() => setTouched((t) => ({ ...t, email: true }))}
              aria-invalid={showError("email")}
              disabled={loading}
              className={`w-full rounded-xl p-2 outline-none bg-transparent border ${showError("email") ? "border-red-700" : "border-zinc-700"}`}
            />
            {showError("email") && (
              <p className="text-red-800 text-sm mt-1">{errors.email}</p>
            )}
          </div>
        </div>
        <div className="m-2 flex flex-col flex-grow">
          <textarea
            name="message"
            id="textarea-message"
            placeholder="MESSAGGIO"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onBlur={() => setTouched((t) => ({ ...t, message: true }))}
            aria-invalid={showError("message")}
            disabled={loading}
            className={`h-full min-h-32 flex-grow rounded-xl p-2 outline-none bg-transparent border ${showError("message") ? "border-red-700" : "border-zinc-700"}`}
          />
          {showError("message") && (
            <p className="text-red-800 text-sm mt-1">{errors.message}</p>
          )}
        </div>
        <div className="inline-flex items-center justify-center">
          <label className="flex items-center cursor-pointer relative">
            <input type="checkbox"
              checked={consent}
              onChange={() => setConsent(!consent)}
              className="peer h-5 w-5 cursor-pointer transition-all appearance-none rounded shadow hover:shadow-md border border-zinc-500 checked:border-zinc-800 checked:bg-blue-700"
              disabled={loading}
              id="check-with-link" />
            <span className="absolute text-white opacity-0 peer-checked:opacity-100 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor"
                stroke="currentColor" strokeWidth="1">
                <path fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"></path>
              </svg>
            </span>
          </label>
          <label className="ml-2 text-sm text-zinc-500">
            <p>
              Acconsento al trattamento dei miei dati personali per essere ricontattato, come indicato nell’
              <Link
                href="/privacy"
                className="font-medium text-zinc-400 underline underline-offset-4 decoration-zinc-500 hover:text-zinc-300 hover:decoration-zinc-400 transition-colors"
              >
                informativa privacy
              </Link>
              .
            </p>
          </label>
        </div>
        <button
          type="submit"
          className="btn-primary rounded-xl p-2 m-2 disabled:opacity-60 disabled:cursor-not-allowed transition duration-300 ease-in-out"
          disabled={!consent || !isValid || loading}
        >
          {loading ? "INVIO…" : "INVIA"}
        </button>
      </form>
    </>
  );
}
