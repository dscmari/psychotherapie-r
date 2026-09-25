import { ablaufKostenHero } from "../data/hero";
import Image from "next/image";
import ContactBtn from "../components/btns/ContactBtn";
import TopicBtn from "../components/btns/TopicBtn";
import Process from "../components/Process";
import { processCircles } from "../data/process";
import ScrollToTopBtn from "../components/btns/ScrollToTopBtn";
import Link from "next/link";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Ablauf und Kosten für Psychotherapie in München",
  description: "Übersicht zu Ablauf und Kosten der Therapie in München | Pychologische Psychotherapeutin & Psychoonkologin Anne Julia Röhl"
}

export default function page() {
  const { title, subtitle, text_1, text_2} = ablaufKostenHero;
  return (
    <div>
      <section className="px-4 md: lg:px-32 lg:pt-32 dark:py-8 dark:md:py-16 dark:lg:py-32">
        <div className="lg:flex-1 lg:flex flex-col">
          <p className="hidden lg:block xl:hidden mt-4">{text_2}</p>
        </div>
        <div className="px-4 sm:px-8 md:px-16 lg:px-0 lg:flex-1 max-w-4xl">
          <h1 className="lg:!text-5xl font-bold !text-sage-brown dark:!text-stone-light mt-4 lg:mt-0">
            {title}
          </h1>
          <h2>{subtitle}</h2>
          <p>{text_1}</p>
          <p className="lg:hidden xl:block mt-4">{text_2}</p>
          <div className="flex flex-col items-center gap-4 lg:flex-row mt-8">
            <ContactBtn className="w-full lg:w-44 mx-4 lg:mx-0 " />
            <TopicBtn
              text="Ausbildung & Qualifikation"
              className="lg:!w-60"
              path={"/ausbildung-und-qualifikation/"}
            />
          </div>
        </div>
      </section>
      <section className="px-4 sm:px-16 xl:px-32 pt-24 lg:pt-32 xl:pt-48 flex flex-col items-center">
        <h2 className="text-center">Wie funktioniert Psychotherapie?</h2>
        <h1 className="text-center">
          Die Psychotherapie läuft in drei Phasen ab
        </h1>
        <Process circles={processCircles} />
        <div className="grid lg:grid-cols-2 2xl:grid-cols-3 gap-4 md:gap-8 xl:gap-12 mt-12 lg:mt-32">
          <div className="lg:max-w-lg">
            <h2>Erstgespräch</h2>
            <p>
              Im ersten Termin steht Ihr Anliegen im Mittelpunkt. Sie schildern,
              was Sie aktuell belastet und wir klären gemeinsam, welche
              Unterstützung sinnvoll sein kann. Gleichzeitig erhalten Sie einen
              Eindruck von meiner therapeutischen Arbeitsweise, eine erste
              fachliche Einschätzung sowie Informationen zum möglichen weiteren
              Vorgehen.
            </p>
          </div>
          <div className="lg:max-w-lg">
            <h2>Probatorik</h2>
            <p>
              In den folgenden Sitzungen vertiefen wir das Verständnis Ihrer
              Situation. Wir schauen gemeinsam auf Belastungen, Ressourcen und
              mögliche Ziele. Diese Phase dient dazu, eine vertrauensvolle
              therapeutische Beziehung aufzubauen und die passende
              Vorgehensweise zu finden.
            </p>
          </div>
          <div className="lg:max-w-lg">
            <h2>Beginn der Psychotherapie</h2>
            <p>
              Wenn Sie sich für eine Zusammenarbeit entscheiden, startet die
              regelmäßige psychotherapeutische Behandlung. Die Termine finden in
              der Regel einmal wöchentlich statt. Die Häufigkeit und Dauer der
              Sitzungen richten sich individuell nach Ihrer Situation und Ihrem
              Bedarf.
            </p>
          </div>
          <div className="lg:max-w-lg">
            <h2>Online-Termine</h2>
            <p>
              Auf Wunsch sind nach einem persönlichen Erstgespräch auch
              Online-Termine per Video möglich. Diese bieten eine flexible und
              ortsunabhängige Alternative zur Behandlung in der Praxis – in
              derselben Qualität und im geschützten therapeutischen Rahmen. Die
              Videositzungen finden über eine datenschutzkonforme,
              verschlüsselte Verbindung statt.
            </p>
          </div>
          <div className="lg:max-w-lg">
            <h2>Diskretion</h2>
            <p>
              Ihr Anliegen wird selbstverständlich vertraulich behandelt. Als
              staatlich approbierte Psychologische Psychotherapeutin unterliege
              ich der ärztlichen Schweigeplicht. Ihre Daten und Inhalte der
              Gespräche bleiben somit geschützt und werden nicht weitergegeben.
            </p>
          </div>
        </div>
      </section>
      <section className="sm:px-16 xl:px-32 pt-24 lg:pt-32 xl:pt-48">
        <div className="flex flex-col xl:flex-row xl:items-center gap-8 xl:gap-24">
          <div className="px-4 sm:px-0 flex-1 max-w-3xl">
            <h1>Kosten & Kostenübernahme</h1>
            <div className="flex flex-col gap-4">
              <p>
                Die Abrechnung erfolgt in meiner Privatpraxis nach der
                Gebührenordnung für PsychotherapeutInnen (GOP). Die genauen
                Kosten richten sich nach dem Abrechnungssatz und werden Ihnen
                transparent bei der Kontaktaufnahme und im Erstgespräch erklärt.
              </p>
              <p>
                Privatversicherungen und Beihilfeversicherungen übernehmen die
                Kosten in der Regel voll oder teilweise, je nach Ihrem Tarif.
                Ich empfehle, die Kostenübernahme vorab kurz mit Ihrer
                Versicherung zu klären. SelbstzahlerInnen können die Behandlung
                selbstverständlich ebenfalls in Anspruch nehmen, ohne Antrag und
                Formalitäten.
              </p>
              <p>
                Als Privatpraxis für Psychotherapie kann ich{" "}
                <span className="font-semibold"> nicht </span> mit gesetzlichen
                Krankenkassen abrechnen. Wenn Sie gesetzlich versichert sind,
                besteht jedoch die Möglichkeit, bei Ihrer gesetzlichen
                Krankenkasse einen Antrag auf eine Kostenerstattungsverfahren zu
                stellen. Weitere Informationen hierzu finden Sie{" "}
                <Link
                  href="https://www.ptk-bayern.de/ptk/web.nsf/id/li_veranstaltungkostenerstattung2018.html"
                  className="text-sage-dark underline underline-offset-2"
                >
                  hier
                </Link>
                .
              </p>
            </div>
          </div>
          <div className="flex-1 mx-auto">
            <Image
              src={"/images/G-F5_squooshed.jpg"}
              width={800}
              height={400}
              alt="Bild der Psychotherapiepraxis von Psychotherapeutin Anne Julia Röhl"
              className="sm:rounded-xl"
            />
          </div>
        </div>
        <div className="px-4 sm:px-0 pt-16 xl:pt-32 max-w-3xl flex flex-col items-center mx-auto">
          <h2>Kontaktaufnahme</h2>
          <div className="flex flex-col gap-4 items-center text-center">
            <p>
              Sie möchten einen Termin vereinbaren oder haben Fragen zu meinem
              psychotherapeutischen Angebot? Gerne können Sie mich telefonisch
              oder per E-Mail kontaktieren.
            </p>
            <p>
              Ich bemühe mich, Ihre Anfrage zeitnah zu beantworten und einen
              passenden Termin für ein erstes Gespräch zu finden. Alle Anfragen
              werden selbstverständlich vertraulich behandelt.
            </p>
            <p>Ich freue mich auf Ihre Kontaktaufnahme.</p>
            <div className="flex flex-col items-center gap-4 lg:flex-row mt-8">
              <ContactBtn className="w-full lg:w-44 mx-4 lg:mx-0 " />
              <TopicBtn
                text={"Ausbildung & Qualifikation"}
                path={`/ausbildung-und-qualifikation/`}
                className="lg:w-60"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="px-4 sm:px-16 xl:px-32 py-24 lg:py-32 ">
        {/* <Reimbursement /> */}
      </section>
      <ScrollToTopBtn />
    </div>
  );
}
