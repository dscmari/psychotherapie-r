import Image from "next/image";
import ContactBtn from "../components/btns/ContactBtn";
import TopicBtn from "../components/btns/TopicBtn";
import { MessageCircle, SendHorizontal } from "lucide-react";
import Link from "next/link";
import Qualifications from "../components/Qualifications";
import { qualifications } from "../data/qualifications";
export default function page() {
  return (
    <div>
      <section className="pt-4 md:pt-16 lg:pt-32 md:px-8 lg:px-16 xl:px-32">
        <div className="flex flex-col-reverse md:flex-row md:gap-8 lg:gap-16">
          <div className="flex-1 -mt-40 sm:-mt-60 md:mt-0 bg-stone-light px-4 md:px-0">
            <p className="md:hidden sm:ml-8 text-sm font-light pt-2">
              Anne Julia Röhl - Psychotherapeutin
            </p>
            <h1 className="!text-sage-brown pt-8">
              Ausbildung & Qualifikation
            </h1>
            <h2> Approbierte Psychologische Psychotherapeutin</h2>
            <p>
              Ich bin approbierte Psychologische Psychotherapeutin mit den
              Schwerpunkten Trauma und Psychoonkologie. Durch meine umfassende
              Berufserfahrung in der ambulanten und stationären Psychotherapie
              sowie im klinischen Bereich, unter anderem in der Onkologie,
              Schmerztherapie sowie Notfall- und Palliativmedizin, begleite ich
              Menschen in sehr unterschiedlichen und oft herausfordernden
              Lebenssituationen.
            </p>
            <h2 className="mt-4">Meine Schwerpunkte</h2>
            <div className="flex flex-col gap-4">
              <div className="flex gap-4">
                <SendHorizontal className="shrink-0 text-sage" />
                <Link
                  href={"/verhaltenstherapie/"}
                  className="underline underline-offset-2"
                >
                  Verhaltenstherapie
                </Link>
              </div>
              <div className="flex gap-4">
                <SendHorizontal className="shrink-0 text-sage" />
                <Link
                  href={"/psychoonkologie/"}
                  className="underline underline-offset-2"
                >
                  Psychoonkologie
                </Link>
              </div>
              <div className="flex gap-4">
                <SendHorizontal className="shrink-0 text-sage" />
                <Link
                  href={"/Trauma/"}
                  className="underline underline-offset-2"
                >
                  Trauma
                </Link>
              </div>
            </div>
            <div className="flex flex-col lg:flex-row items-center gap-4 mt-8">
              <ContactBtn className="w-full lg:w-44 " />
              <TopicBtn text={"Ablauf & Kosten"} path={"/ablauf-und-kosten/"} />
            </div>
          </div>
          <div className="flex-1">
            <Image
              src={"/images/portraits/40145-1249_sqooshed.jpg"}
              width={600}
              height={900}
              alt="Portrait von Psychotherapeutin Anne Julia Röhl"
              className="sm:rounded-xl mx-auto"
            />
          </div>
          <div className="hidden 2xl:block flex-1">
            <h2>So arbeite ich</h2>
            <p>
              In meiner therapeutischen Arbeit ist mir ein authentischer,
              wertschätzender und vertrauensvoller Kontakt besonders wichtig.
              Ich sehe jeden Menschen mit seiner individuellen Lebensgeschichte,
              seinen Erfahrungen und seinen Stärken. Dabei verstehe ich Therapie
              als einen gemeinsamen Prozess, der Raum für Entwicklung,
              Stabilisierung und neue Perspektiven schaffen kann.
            </p>
            <p className="mt-4">
              Mir ist wichtig, Menschen dabei zu unterstützen, Ihren eigenen Weg
              zu finden, persönliche Handlungsmöglichkeiten zu erweitern und
              wieder mehr Sinn, Selbstvertrauen und innere Sicherheit zu
              erleben. Im therapeutischen Prozess geht es mir neben der
              Besserung der psychischen Beschwerden auch darum gemeinsam zu
              erkunden:
            </p>
            <div className="flex flex-col gap-4 mt-4">
              <div className="flex gap-4">
                <MessageCircle className="shrink-0 text-sage" />
                <span>Was gibt meinem Leben Bedeutung?</span>
              </div>
              <div className="flex gap-4">
                <MessageCircle className="shrink-0 text-sage" />
                <span>Was trägt mich in schwierigen Zeiten?</span>
              </div>
              <div className="flex gap-4">
                <MessageCircle className="shrink-0 text-sage" />
                <span>
                  Welche Werte, Beziehungen und Ziele sind mir wichtig?
                </span>
              </div>
              <div className="flex gap-4">
                <MessageCircle className="shrink-0 text-sage" />
                <span>
                  Wie kann ich trotz Belastung Lebensqualität und innere
                  Orientierung bewahren?
                </span>
              </div>
            </div>
            <p className="mt-4">
              Die Auseinandersetzung mit diesen Themen kann helfen, ein
              bewusstes und erfülltes Leben zu führen.
            </p>
          </div>
        </div>

        <div className="2xl:hidden flex-1 max-w-3xl mt-16 px-4 md:px-0">
          <h2>So arbeite ich</h2>
          <p>
            In meiner therapeutischen Arbeit ist mir ein authentischer,
            wertschätzender und vertrauensvoller Kontakt besonders wichtig. Ich
            sehe jeden Menschen mit seiner individuellen Lebensgeschichte,
            seinen Erfahrungen und seinen Stärken. Dabei verstehe ich Therapie
            als einen gemeinsamen Prozess, der Raum für Entwicklung,
            Stabilisierung und neue Perspektiven schaffen kann.
          </p>
          <p className="mt-4">
            Mir ist wichtig, Menschen dabei zu unterstützen, Ihren eigenen Weg
            zu finden, persönliche Handlungsmöglichkeiten zu erweitern und
            wieder mehr Sinn, Selbstvertrauen und innere Sicherheit zu erleben.
            Im therapeutischen Prozess geht es mir neben der Besserung der
            psychischen Beschwerden auch darum gemeinsam zu erkunden:
          </p>
          <div className="grid lg:grid-cols-2 gap-y-4 lg:gap-x-16 py-8">
            <div className="flex gap-4">
              <MessageCircle className="shrink-0 text-sage" />
              <span>Was gibt meinem Leben Bedeutung?</span>
            </div>
            <div className="flex gap-4">
              <MessageCircle className="shrink-0 text-sage" />
              <span>Was trägt mich in schwierigen Zeiten?</span>
            </div>
            <div className="flex gap-4">
              <MessageCircle className="shrink-0 text-sage" />
              <span>Welche Werte, Beziehungen und Ziele sind mir wichtig?</span>
            </div>
            <div className="flex gap-4">
              <MessageCircle className="shrink-0 text-sage" />
              <span>
                Wie kann ich trotz Belastung Lebensqualität und innere
                Orientierung bewahren?
              </span>
            </div>
          </div>
          <p>
            Die Auseinandersetzung mit diesen Themen kann helfen, ein bewusstes
            und erfülltes Leben zu führen.
          </p>
        </div>
      </section>
        <section className="pt-16 pb-24 md:py-16 lg:py-32 px-4 md:px-8 lg:px-16 xl:px-32">
          <h1>Ausbildung & psychotherapeutische Qualifikation</h1>
          <Qualifications qualifications={qualifications} className="max-w-4xl" />
      </section>
    </div>
  );
}
