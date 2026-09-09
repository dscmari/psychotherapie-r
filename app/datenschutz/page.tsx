export default function page() {
  return (
    <div className="dark:bg-darkblue">
      <section className="max-w-7xl px-4 md:px-16 lg:px-32 py-12 md:py-16 lg:py-32">
        <div className="">
          <h1 className="">Datenschutzerklärung</h1>
          <p className="text-sm mb-4">Stand: September 2026</p>
        </div>

        <article className="mb-10">
          <h2 className=" mb-4 flex items-center gap-2">
            1. Name und Kontaktdaten des Verantwortlichen
          </h2>
          <div className="">
            <p className="font-medium">Praxis für Psychotherapie</p>
            <p>Anne Julia Roehl</p>
            <p>c/o Praxis am Nussbaumpark, Nußbaumstraße 14, 80336 München</p>
            <p className="pt-2 !text-red-500">
              <span className="font-medium">Telefon:</span> 089 / 12345678
            </p>
            <p className="!text-red-500">
              <span className="font-medium">E-Mail:</span>{" "}
              kontakt@musterpraxis.de
            </p>
          </div>
        </article>

        <article className="mb-10">
          <h2 className=" mb-4 flex items-center gap-2">2. Hosting</h2>
          <p className="mb-4">
            Wir hosten die Inhalte unserer Website bei folgendem Anbieter:
          </p>
          <div className="">
            <p className="font-medium">Vercel Inc.</p>
            <p>440 N Barranca Ave #4133, Covina, CA 91723, USA</p>
          </div>
          <p className="my-4">
            Wenn Sie unsere Website besuchen, erfasst Vercel automatisiert
            Server-Log-Dateien. Dabei werden folgende Daten verarbeitet:
          </p>
          <ul className="list-disc list-inside space-y-1 mb-4 pl-2">
            <li>IP-Adresse des anfragenden Geräts</li>
            <li>Datum und Uhrzeit des Zugriffs</li>
            <li>Name und URL der abgerufenen Datei</li>
            <li>Website, von der aus der Zugriff erfolgt (Referrer-URL)</li>
            <li>
              Verwendeter Browser, Betriebssystem sowie der Name Ihres
              Access-Providers
            </li>
          </ul>

          <div className="">
            <p>
              <strong className="font-semibold">
                Zweck und Rechtsgrundlage:
              </strong>{" "}
              Die Verarbeitung dieser Daten erfolgt zur Sicherstellung eines
              reibungslosen Verbindungsaufbaus, zur Gewährleistung der
              Systemsicherheit und -stabilität sowie zu administrativen Zwecken.
              Rechtsgrundlage ist unser berechtigtes Interesse gemäß Art. 6 Abs.
              1 lit. f DSGVO.
            </p>
            <p className="mt-4">
              <strong className="font-semibold">
                Datenübermittlung in Drittstaaten:{" "}
              </strong>
              Da Vercel seinen Sitz in den USA hat, werden Daten in ein
              sogenanntes Drittland übertragen. Der Datentransfer ist durch die
              Zertifizierung von Vercel unter dem{" "}
              <em>EU-U.S. Data Privacy Framework</em> sowie durch die Einbindung
              von Standardvertragsklauseln der EU-Kommission abgesichert.
            </p>
            <p className="mt-4">
              <strong className="font-semibold">
                Empfänger und Weitergabe von Daten:{" "}
              </strong>{" "}
              Empfänger der genannten Logfile-Daten ist unser Hoster Vercel
              Inc., der als Auftragsverarbeiter für uns tätig ist. Eine darüber
              hinausgehende Übermittlung oder Weitergabe Ihrer persönlichen
              Daten an Dritte findet nicht statt, es sei denn, dass hierzu eine
              gesetzliche Verpflichtung besteht (Art. 6 Abs. 1 lit. c DSGVO)
              oder Sie ausdrücklich eingewilligt haben.
            </p>
          </div>
          <div>
            <h2 className=" my-4 flex items-center gap-2">
              SSL- bzw. TLS-Verschlüsselung
            </h2>
            <p className="mb-3">
              Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der
              Übertragung vertraulicher Inhalte, die Sie an uns als
              Seitenbetreiber senden, eine SSL- bzw. TLS-Verschlüsselung. Eine
              verschlüsselte Verbindung erkennen Sie daran, dass die Adresszeile
              des Browsers von{" "}
              <code className="px-1 py-0.5 rounded text-xs">
                http://
              </code>{" "}
              auf{" "}
              <code className="px-1 py-0.5 rounded text-xs">
                https://
              </code>{" "}
              wechselt und an dem Schloss-Symbol in Ihrer Browserzeile.
            </p>
            <p>
              Wenn die SSL- bzw. TLS-Verschlüsselung aktiviert ist, können die
              Daten, die Sie an uns übermitteln, nicht von Dritten mitgelesen
              werden.
            </p>
          </div>
        </article>

        <article className="mb-10">
          <h2 className=" mb-4 flex items-center gap-2">
            3. Datenerfassung und Tracking
          </h2>
          <p>
            Auf dieser Website werden <strong>keine</strong> Tracking-Tools (wie
            Google Analytics), <strong>keine</strong> Cookies,{" "}
            <strong>keine</strong> Analyse-Dienste, <strong>keine</strong>{" "}
            extern eingebundenen Schriftarten (z. B. Google Fonts) und{" "}
            <strong>keine</strong> Einbindungen von Drittanbietern (wie Google
            Maps, YouTube oder Social-Media-Plugins) eingesetzt. Die
            Datenverarbeitung beschränkt sich ausschließlich auf den rein
            technischen Aufruf der Website über den Hoster.
          </p>
        </article>

        <article className="mb-10">
          <h2 className=" mb-4 flex items-center gap-2">
            4. Ihre Rechte als betroffene Person
          </h2>
          <p className="mb-4">
            Ihnen stehen nach der DSGVO bezüglich der Sie betreffenden
            personenbezogenen Daten folgende Rechte gegenüber uns zu:
          </p>

          <div className="grid gap-3 sm:grid-cols-2 mb-6">
            <div className="border border-slate-200 rounded-lg p-3">
              <h3 className="font-semibold text-sm">
                Auskunft (Art. 15 DSGVO)
              </h3>
              <p className="text-xs mt-1">
                Auskunft über Ihre von uns verarbeiteten Daten verlangen.
              </p>
            </div>

            <div className="border border-slate-200 rounded-lg p-3">
              <h3 className="font-semibold text-sm">
                Berichtigung (Art. 16 DSGVO)
              </h3>
              <p className="text-xs mt-1">
                Korrektur unrichtiger oder unvollständiger Daten verlangen.
              </p>
            </div>

            <div className="border border-slate-200 rounded-lg p-3">
              <h3 className="font-semibold text-sm">
                Löschung (Art. 17 DSGVO)
              </h3>
              <p className="text-xs mt-1">
                Löschung Ihrer bei uns gespeicherten Daten verlangen.
              </p>
            </div>

            <div className="border border-slate-200 rounded-lg p-3">
              <h3 className="font-semibold text-sm">
                Einschränkung (Art. 18 DSGVO)
              </h3>
              <p className="text-xs mt-1">
                Einschränkung der Verarbeitung Ihrer Daten verlangen.
              </p>
            </div>

            <div className="border border-slate-200 rounded-lg p-3">
              <h3 className="font-semibold text-sm">
                Widerruf (Art. 7 Abs. 3 DSGVO)
              </h3>
              <p className="text-xs mt-1">
                Erteilte Einwilligungen jederzeit ohne Angabe von Gründen für
                die Zukunft widerrufen.
              </p>
            </div>

            <div className="border border-slate-200 rounded-lg p-3">
              <h3 className="font-semibold text-sm">
                Widerspruch (Art. 21 DSGVO)
              </h3>
              <p className="text-xs mt-1">
                Jederzeit gegen die Verarbeitung auf Basis berechtigter
                Interessen Widerspruch einlegen.
              </p>
            </div>
          </div>
          <div className="sm:col-span-2">
            <p className="font-semibold mb-2">
              Beschwerderecht bei der Aufsichtsbehörde:
            </p>
            <p className="mb-4">
              Sie haben das Recht, sich bei der zuständigen
              Datenschutz-Aufsichtsbehörde zu beschweren:
            </p>
            <div className="">
              <p className="font-medium">
                Bayerisches Landesamt für Datenschutzaufsicht (BayLDA)
              </p>
              <p>Promenade 18, 91522 Ansbach</p>
              <p className="mt-1">
                <span className="font-medium">Website:</span>{" "}
                <a
                  href="https://www.lda.bayern.de"
                  target="_blank"
                  rel="noopener"
                  className="text-blue-600 underline hover:text-blue-800"
                >
                  www.lda.bayern.de
                </a>
              </p>
            </div>
          </div>
        </article>
        <article className="mb-10 ">
          <h2 className=" mb-4 flex items-center gap-2">
            5. Kontaktaufnahme per E-Mail oder Telefon
          </h2>

          <p className="mb-3">
            Wenn Sie uns per E-Mail oder Telefon kontaktieren, werden Ihre
            Angaben (z. B. Name, Telefonnummer, E-Mail-Adresse sowie der Inhalt
            Ihrer Anfrage) zwecks Bearbeitung der Anfrage und für den Fall von
            Anschlussfragen bei uns gespeichert und verarbeitet.
          </p>

          <div className=" mb-4">
            <p>
              <strong className="font-semibold">Rechtsgrundlage: </strong>
              Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6
              Abs. 1 lit. b DSGVO, sofern Ihre Anfrage mit der Erfüllung eines
              Vertrags zusammenhängt oder zur Durchführung vorvertraglicher
              Maßnahmen (z. B. Erstgespräch / Terminvergabe) erforderlich ist.
              In allen übrigen Fällen beruht die Verarbeitung auf unserem
              berechtigten Interesse an der effektiven Bearbeitung der an uns
              gerichteten Anfragen (Art. 6 Abs. 1 lit. f DSGVO).
            </p>
            <p className="mt-4">
              <strong className="font-semibold">Speicherdauer: </strong>
              Die von Ihnen an uns übersandten Daten verbleiben bei uns, bis Sie
              uns zur Löschung auffordern, Ihre Einwilligung zur Speicherung
              widerrufen oder der Zweck für die Datenspeicherung entfällt (z. B.
              nach abgeschlossener Bearbeitung Ihres Anliegens). Zwingende
              gesetzliche Bestimmungen – insbesondere gesetzliche
              Aufbewahrungsfristen – bleiben unberührt.
            </p>
          </div>

          <div className="">
            <p className="font-medium mb-1">
              Wichtiger Hinweis zur Vertraulichkeit:
            </p>
            <p>
              Wir weisen darauf hin, dass die Datenübertragung im Internet per
              unverschlüsselter E-Mail Sicherheitslücken aufweisen kann. Ein
              lückenloser Schutz der Daten vor dem Zugriff durch Dritte ist
              nicht möglich. Übermitteln Sie vertrauliche medizinische oder
              therapeutische Informationen bevorzugt auf dem Postweg oder
              telefonisch.
            </p>
          </div>
        </article>
      </section>
    </div>
  );
}
