import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "Impressum | Pychologische Psychotherapeutin & Psychoonkologin Anne Julia Röhl",
  description:
    "Impressum | Pychologische Psychotherapeutin & Psychoonkologin Anne Julia Röhl",
  alternates: {
    canonical: "https://psychotherapie-roehl.de/impressum/",
  },
};

export default function page() {
  return (
    <main className="dark:bg-darkblue">
      <section className="px-4 md:px-16 lg:px-32 py-16 lg:py-32 flex flex-col gap-4 max-w-7xl">
        <h1>Impressum</h1>
        <p>Angaben gemäß § 5 DDG</p>
        <div>
          <p>Anne Julia Röhl</p>
          <p>Psychotherapeutische Privatpraxis</p>
          <p>Praxis am Nussbaumpark</p>
          <p>z.Hd. Anne Julia Röhl</p>
          <p>Nußbaumstraße 14</p>
          <p>80336 München</p>
        </div>
        <div>
          <p>Kontakt</p>
          <p>Telefon: 0176/21908630</p>
          <p>E-Mail: info@psychotherapie-roehl.de</p>
          <p>Website: www.psychotherapie-roehl.de</p>
        </div>
        <div>
          <p>Berufsbezeichnung:</p>
          <p>Psychologische Psychotherapeutin</p>
          <p>Approbation verliehen durch die Regierung von Oberbayern</p>
          <p>
            Die Approbation berechtigt den Psychologischen Psychotherapeuten zur
            Ausübung der heilkundlichen Psychotherapie im Sinne des Paragraphen
            1 Abs. 3 Satz 1 des Psychotherapeutengesetzes.
          </p>
          <p>Arztregister-Nummer (LANR): 2609894</p>
        </div>
        <div>
          <p> Zuständige Aufsichtsbehörde:</p>
          <p>
            Bayerische Landeskammer der Psychologischen Psychotherapeuten und
            der Kinder- und Jugendlichenpsychotherapeuten
          </p>
          <p>Birketweg 30</p>
          <p>80639 München</p>
          <p>www.ptk-bayern.de</p>
        </div>
        <div>
          <p>Kammerzugehörigkeit:</p>
          <p>
            Ich bin Mitglied der Landespsychotherapeutenkammer Bayern,
            Birkeitweg 30, 80639 München
          </p>
        </div>
        <div>
          <p>Kassenärztliche Vereinigung:</p>

          <p>
            Kassenärztliche Vereinigung Bayerns, Elsenheimerstr. 39, 80687
            München
          </p>
        </div>
        <div>
          <p>Es gelten folgende berufsrechtliche Regelungen:</p>
          <ul className="ml-4 flex flex-col gap-2 pt-4 list-disc">
            <li>
              Gesetz über die Berufe des Psychologischen Psychotherapeuten und
              des Kinder- und Jugendlichenpsychotherapeuten
              (Psychotherapeutengesetz - PsychThG) einsehbar unter:
              <Link
                target="_blank"
                href={
                  "http://www.ptk-bayern.de/ptk/web.nsf/id/li_rechtsquellen.html"
                }
                className="underline"
              >
                {" "}
                http://www.ptk-bayern.de/ptk/web.nsf/id/li_rechtsquellen.html
              </Link>
            </li>
            <li>
              Gesetz über die Berufsausübung, die Berufsvertretungen und die
              Berufsgerichtsbarkeit der Ärzte, Zahnärzte, Tierärzte, Apotheker
              sowie der Psychologischen Psychotherapeuten und der Kinder- und
              Jugendlichenpsychotherapeuten (Heilberufe-Kammergesetz - HKaG)
              einsehbar unter:
              <Link
                target="_blank"
                href={
                  "http://www.ptk-bayern.de/ptk/web.nsf/id/li_rechtsquellen.html"
                }
                className="underline"
              >
                {" "}
                http://www.ptk-bayern.de/ptk/web.nsf/id/li_rechtsquellen.html
              </Link>
            </li>
            <li>
              Berufsordnung für die Psychologischen Psychotherapeutinnen und
              Psychotherapeuten und für die Kinder- und
              Jugendlichenpsychotherapeutinnen und -psychotherapeuten Bayerns
              einsehbar unter:
              <Link
                target="_blank"
                href={
                  "http://www.ptk-bayern.de/ptk/web.nsf/id/li_satzungen.html"
                }
                className="underline"
              >
                {" "}
                http://www.ptk-bayern.de/ptk/web.nsf/id/li_satzungen.html
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <p>Umsatzsteuer:</p>
          <p>Umsatzsteuerbefreit gemäß § 4 Nr. 14 UStG</p>
        </div>
        <div>
          <p>Berufshaftpflichtversicherung:</p>
          <p>Continentale Sachversicherung AG</p>
          <p>Ruhrallee 92</p>
          <p>44139 Dortmund</p>
        </div>
        <div>
          <p>Haftung für Inhalte:</p>
          <p>
            Als Diensteanbieter bin ich gemäß § 7 Abs. 1 TMG für eigene Inhalte
            auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach
            §§ 8 bis 10 TMG bin ich jedoch nicht verpflichtet, übermittelte oder
            gespeicherte fremde Informationen zu überwachen oder nach Hinweisen
            auf rechtswidrige Tätigkeiten zu suchen. Verpflichtungen zur
            Entfernung oder Sperrung der Nutzung von Informationen nach den
            allgemeinen Gesetzen bleiben hiervon unberührt. Eine Haftung ist
            jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten
            Rechtsverletzung möglich. Bei Bekanntwerden entsprechender
            Rechtsverletzungen werde ich die betroffenen Inhalte umgehend
            entfernen.
          </p>
        </div>
        <div>
          <p>Haftung für Links</p>
          <p>
            Mein Angebot enthält Links zu externen Websites Dritter, auf deren
            Inhalte ich keinen Einfluss habe. Daher kann ich für diese fremden
            Inhalte keine Gewähr übernehmen. Für die Inhalte der verlinkten
            Seiten ist stets der jeweilige Anbieter oder Betreiber
            verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der
            Verlinkung auf mögliche Rechtsverstöße überprüft; rechtswidrige
            Inhalte waren dabei nicht erkennbar. Eine permanente inhaltliche
            Kontrolle ist jedoch ohne konkrete Anhaltspunkte einer
            Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von
            Rechtsverletzungen werde ich derartige Links umgehend entfernen.
          </p>
        </div>
        <div>
          <p>Urheberrecht</p>
          <p>
            Die von mir erstellten Inhalte und Werke auf diesen Seiten
            unterliegen dem deutschen Urheberrecht. Die Vervielfältigung,
            Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der
            Grenzen des Urheberrechts bedürfen meiner schriftlichen Zustimmung.
            Downloads und Kopien dieser Seite sind nur für den privaten, nicht
            kommerziellen Gebrauch gestattet. Soweit Inhalte auf dieser Seite
            nicht von mir erstellt wurden, werden die Urheberrechte Dritter
            beachtet. Insbesondere werden Inhalte Dritter als solche
            gekennzeichnet. Sollten Sie dennoch auf eine Urheberrechtsverletzung
            aufmerksam werden, bitte ich um einen entsprechenden Hinweis. Bei
            Bekanntwerden werde ich derartige Inhalte umgehend entfernen.
          </p>
        </div>
        <div>
          <p>Anne Julia Röhl</p>
          <p>Psychotherapeutische Privatpraxis</p>
          <p>Praxis am Nussbaumpark</p>
          <p>z.Hd. Anne Julia Röhl</p>
          <p>Nußbaumstraße 14</p>
          <p>80336 München</p>
        </div>
      </section>
    </main>
  );
}
