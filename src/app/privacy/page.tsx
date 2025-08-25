export default function PrivacyPage() {
  return (
    <div className="mx-auto max-w-3xl">
      <section className="rounded-xl border border-zinc-800/60 bg-zinc-900/60 p-6 sm:p-8 shadow-lg shadow-black/10 backdrop-blur supports-[backdrop-filter]:bg-zinc-900/40">
        <header className="mb-6 sm:mb-8">
          <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight text-zinc-200">Privacy Policy</h1>
          <p className="mt-2 text-sm text-zinc-500">Ultimo aggiornamento: 25 agosto 2025</p>
        </header>

        <div className="space-y-6 leading-relaxed text-zinc-400">
          <p>
            La presente Privacy Policy descrive come ASD Sentiero Yoga tratta i dati personali degli utenti che utilizzano il sito {" "}
            <a
              href="https://sentieroyoga.it"
              target="_blank"
              rel="noopener noreferrer"
              className="underline text-zinc-300 underline-offset-4 decoration-zinc-600 hover:text-zinc-100 hover:decoration-zinc-400 transition-colors"
            >
              https://sentieroyoga.it
            </a>
            , in conformità al Regolamento (UE) 2016/679 (GDPR).
          </p>

          <section>
            <h2 className="mt-8 text-2xl font-semibold tracking-tight text-zinc-300">Titolare del trattamento</h2>
            <p className="mt-2">
              <b>ASD Sentiero Yoga</b>
              <br />
              Via Palladio 7, San Fior (TV), 33120
              <br />
              Email: {" "}
              <a
                href="mailto:lumachina@lumacona.it"
                className="underline text-zinc-300 underline-offset-4 decoration-zinc-600 hover:text-zinc-100 hover:decoration-zinc-400 transition-colors"
              >
                lumachina@lumacona.it
              </a>
              <br />
              Telefono: {" "}
              <a
                href="tel:+39 3928460968"
                className="underline text-zinc-300 underline-offset-4 decoration-zinc-600 hover:text-zinc-100 hover:decoration-zinc-400 transition-colors"
              >
                +39 3928460968
              </a>
              <br />
              Rappresentante legale: Katia Nervo
            </p>
          </section>

          <section>
            <h2 className="mt-8 text-2xl font-semibold tracking-tight text-zinc-300">Tipologie di dati trattati</h2>
            <ul className="mt-3 list-disc pl-6 space-y-2 marker:text-zinc-500">
              <li>
                <strong>Dati forniti volontariamente dall&apos;utente</strong>: tramite la pagina <b>Contatti</b> (
                <a
                  href="https://sentieroyoga.it/contacts"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline text-zinc-300 underline-offset-4 decoration-zinc-600 hover:text-zinc-100 hover:decoration-zinc-400 transition-colors"
                >
                  https://sentieroyoga.it/contacts
                </a>
                ), è possibile compilare un form dove vengono richiesti nome, cognome, indirizzo email e messaggio.
              </li>
              <li>
                <strong>Non vengono utilizzati cookie o sistemi di tracciamento</strong>.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="mt-8 text-2xl font-semibold tracking-tight text-zinc-300">Finalità del trattamento</h2>
            <p className="mt-2">
              I dati inseriti nel form di contatto vengono utilizzati esclusivamente per rispondere alla richiesta dell’utente e fornire le informazioni richieste.
              <br />
              La base giuridica del trattamento è il <b>consenso dell&apos;interessato</b> (art. 6, par. 1, lett. a GDPR), espresso mediante la selezione della relativa casella di accettazione prima dell&apos;invio del messaggio.
            </p>
          </section>

          <section>
            <h2 className="mt-8 text-2xl font-semibold tracking-tight text-zinc-300">Modalità del trattamento</h2>
            <p className="mt-2">
              I dati vengono trasmessi direttamente tramite email all’indirizzo {" "}
              <a
                href="mailto:lumachina@lumacona.it"
                className="underline text-zinc-300 underline-offset-4 decoration-zinc-600 hover:text-zinc-100 hover:decoration-zinc-400 transition-colors"
              >
                lumachina@lumacona.it
              </a>
              {" "} e non sono memorizzati su database o archivi online.
              <br />
              Il trattamento avviene in forma manuale, con strumenti di comunicazione elettronica (posta elettronica).
              <br />
              Non viene effettuata profilazione né alcun tipo di trattamento automatizzato.
            </p>
          </section>

          <section>
            <h2 className="mt-8 text-2xl font-semibold tracking-tight text-zinc-300">Conferimento dei dati</h2>
            <p className="mt-2">
              Il conferimento dei dati nel form di contatto è facoltativo. L’eventuale mancato conferimento comporta l’impossibilità di ricevere riscontro alla richiesta.
            </p>
          </section>

          <section>
            <h2 className="mt-8 text-2xl font-semibold tracking-tight text-zinc-300">Conservazione dei dati</h2>
            <p className="mt-2">
              I dati inviati tramite form sono conservati dal titolare solo per il tempo necessario a gestire la comunicazione e non oltre quanto richiesto da obblighi legali.
            </p>
          </section>

          <section>
            <h2 className="mt-8 text-2xl font-semibold tracking-tight text-zinc-300">Destinatari dei dati</h2>
            <p className="mt-2">
              I dati non vengono comunicati a terzi né diffusi, salvo obblighi di legge.
              <br />
              Potranno essere trattati esclusivamente dal Titolare del trattamento e da eventuali soggetti autorizzati (es. consulenti tecnici o amministrativi) nei limiti delle finalità sopra indicate.
            </p>
          </section>

          <section>
            <h2 className="mt-8 text-2xl font-semibold tracking-tight text-zinc-300">Trasferimento dei dati fuori dall&apos;Unione Europea</h2>
            <p className="mt-2">Non è previsto alcun trasferimento di dati personali verso Paesi terzi o organizzazioni internazionali.</p>
          </section>

          <section>
            <h2 className="mt-8 text-2xl font-semibold tracking-tight text-zinc-300">Diritti dell&apos;interessato</h2>
            <p className="mt-2">
              L&apos;utente ha il diritto di esercitare, in qualunque momento, i diritti previsti dagli artt. 15-22 del GDPR, e in particolare:
            </p>
            <ul className="mt-3 list-disc pl-6 space-y-2 marker:text-zinc-500">
              <li>ottenere la conferma dell&apos;esistenza dei dati che lo riguardano;</li>
              <li>accedere ai dati personali e ottenerne copia;</li>
              <li>conoscerne origine, finalità e modalità di trattamento;</li>
              <li>chiederne la rettifica o l&apos;aggiornamento;</li>
              <li>chiederne la cancellazione (“diritto all&apos;oblio”);</li>
              <li>limitare il trattamento;</li>
              <li>opporsi al trattamento per motivi legittimi;</li>
              <li>revocare in qualsiasi momento il consenso prestato;</li>
              <li>proporre reclamo all&apos;Autorità Garante per la protezione dei dati personali (
                <a
                  href="https://www.garanteprivacy.it"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline text-zinc-300 underline-offset-4 decoration-zinc-600 hover:text-zinc-100 hover:decoration-zinc-400 transition-colors"
                >
                  www.garanteprivacy.it
                </a>
                ).</li>
            </ul>
          </section>

          <section>
            <h2 className="mt-8 text-2xl font-semibold tracking-tight text-zinc-300">Modifiche alla presente policy</h2>
            <p className="mt-2">
              La presente informativa può essere aggiornata in caso di modifiche normative o variazioni delle modalità di trattamento dei dati. Eventuali nuove versioni saranno pubblicate su questa pagina.
            </p>
          </section>

          <section>
            <h2 className="mt-8 text-2xl font-semibold tracking-tight text-zinc-300">Contatti</h2>
            <p className="mt-2">Per esercitare i propri diritti o richiedere informazioni è possibile contattare:</p>
            <ul className="mt-3 list-disc pl-6 space-y-2 marker:text-zinc-500">
              <li>
                Email: {" "}
                <a
                  href="mailto:lumachina@lumacona.it"
                  className="underline text-zinc-300 underline-offset-4 decoration-zinc-600 hover:text-zinc-100 hover:decoration-zinc-400 transition-colors"
                >lumachina@lumacona.it
                </a>
              </li>
              <li>
                Modulo di contatto:{" "}
                <a
                  href="https://sentieroyoga.it/contacts"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline text-zinc-300 underline-offset-4 decoration-zinc-600 hover:text-zinc-100 hover:decoration-zinc-400 transition-colors"
                >
                  https://sentieroyoga.it/contacts
                </a>
              </li>
            </ul>
          </section>
        </div>
      </section >
    </div >
  );
}
