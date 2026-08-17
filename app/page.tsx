import Image from "next/image";
import HeroHome from "./components/HeroHome";
import Link from "next/link";
import { HandHeart, Leaf, Lightbulb } from "lucide-react";
import ContactBtn from "./components/btns/ContactBtn";
import TopicBtn from "./components/btns/TopicBtn";

export default function Home() {
  return (
    <div>
      <HeroHome />
      <section className="pt-24 lg:pt-32 xl:pt-16 px-4 md:px-16 lg:px-32 ">
        <h1 className="text-center ">Behandlungsschwerpunkte</h1>
        <div className="mt-12 grid lg:grid-cols-3 gap-12 sm:gap-16 max-w-5xl mx-auto">
          <div className="flex flex-col gap-8 items-center">
            <Lightbulb className="text-sage" size={82} strokeWidth={1} />
            <div className="text-center">
              <h2 className="!font-semibold">Verhaltenstherapie</h2>
              <p>Moderne Psychotherapie für nachhaltige Veränderungen</p>
              <Link
                href={"#"}
                className="block mt-2 underline !text-sage font-semibold"
              >
                Mehr erfahren
              </Link>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="flex flex-col gap-8 items-center">
              <Leaf className="text-sage" size={82} strokeWidth={1} />
              <div className="text-center">
                <h2 className="!font-semibold">Traumatherapie</h2>
                <p>Professionelle Unterstützung nach belastenden Erfahrungen</p>
                <Link
                  href={"#"}
                  className="block mt-2 underline !text-sage font-semibold"
                >
                  Mehr erfahren
                </Link>
              </div>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="flex flex-col gap-8 items-center">
              <HandHeart className="text-sage" size={82} strokeWidth={1} />
              <div className="text-center">
                <h2 className="!font-semibold">Psychoonkologie</h2>
                <p>Psychologische Begleitung bei Krebs</p>
              </div>
              <Link
                href={"#"}
                className="block mt-auto underline !text-sage font-semibold"
              >
                Mehr erfahren
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="sm:px-16 xl:px-32 pt-24 lg:pt-32  flex flex-col-reverse gap-12 xl:flex-row xl:items-center xl:gap-24 xl:justify-center">
        <div className="flex-1 px-4 sm:px-0 lg:max-w-4/5 xl:max-w-auto">
          <h2 className="text-center lg:text-start">
            Verhaltenstherapie – Moderne Psychotherapie für nachhaltige
            Veränderungen
          </h2>
          <div className="flex flex-col gap-4">
            <p>
              Die Verhaltenstherapie ist eine wissenschaftlich anerkannte Form
              der Psychotherapie zur Behandlung psychischer Belastungen und
              Erkrankungen.
            </p>
            <p>
              Die Verhaltenstherapie bietet wirksame Unterstützung bei einer
              Vielzahl psychischer und psychosomatischer Belastungen. Sie hilft
              unter anderem bei Ängsten und Panikattacken, Depressionen,
              anhaltendem Stress und Burn-out sowie bei Essstörungen und
              Schlafproblemen, um Schritt für Schritt neue Wege aus der Krise zu
              finden.
            </p>
            <div className="flex flex-col lg:flex-row items-center gap-4 mt-4">
              <ContactBtn className="w-full lg:w-44 " />
              <TopicBtn
                text={"Verhaltenstherapie"}
                path={"/verhaltenstherapie/"}
              />
            </div>
          </div>
        </div>
        <div className="flex gap-4 ">
          <div className="mx-auto">
            <Image
              src={"/images/40145-1171_squooshed.jpg"}
              width={600}
              height={300}
              alt="Portraitbild von Psychotherapeutin Anne Julia Röhl"
              className="sm:rounded-xl"
            />
          </div>
          <div className="hidden lg:block xl:hidden">
            <Image
              src={"/images/G-F5_squooshed.jpg"}
              width={600}
              height={300}
              alt="Bild der Psychotherapiepraxis von Psychotherapeutin Anne Julia Röhl"
              className="sm:rounded-xl"
            />
          </div>
        </div>
      </section>

      <section className="sm:px-16 xl:px-32 pt-24 lg:pt-32  flex flex-col gap-12 items-center lg:grid grid-cols-2 xl:flex xl:flex-row lg:gap-24 lg:justify-center">
        <div className="">
          <Image
            src={"/images/G-F5_squooshed.jpg"}
            width={600}
            height={300}
            alt="Bild der Psychotherapiepraxis von Psychotherapeutin Anne Julia Röhl"
            className="sm:rounded-xl"
          />
        </div>
        <div className="flex-1 px-4 sm:px-0">
          <h2 className="text-center lg:text-start">
            Psychoonkologie – Psychologische Begleitung bei Krebs
          </h2>
          <div className="flex flex-col gap-4">
            <p className="lg:hidden xl:block">
              Eine Krebsdiagnose löst häufig Gefühle wie Angst, Unsicherheit,
              Hilflosigkeit oder Überforderung aus. Meine psychoonkologische
              Begleitung unterstützt Sie einfühlsam bei der Verarbeitung einer
              Krebsdiagnose, beim Umgang mit Ängsten vor Untersuchungen oder
              Therapien sowie bei emotionalen Belastungen, depressiven
              Verstimmungen und Erschöpfung während der Behandlung.
            </p>
            <p>
              Die Psychoonkologie bietet professionelle psychologische
              Unterstützung für Menschen mit Krebs sowie deren Angehörige –
              während der Behandlung, in der Nachsorge oder in einer palliativen
              Behandlungssituation.
            </p>

            <div className="flex flex-col lg:flex lg:flex-row items-center gap-4 mt-4">
              <ContactBtn className="w-full lg:w-44 " />
              <TopicBtn text={"Psychoonkologie"} path={"/#/"} />
            </div>
          </div>
        </div>
        <div className="flex-1 px-4 sm:px-0 hidden lg:block xl:hidden">
          <h2 className="text-center lg:text-start">
            Medizinische Psychologie – Unterstützung bei körperlicher und
            seelischer Belastung
          </h2>
          <div className="flex flex-col gap-4">
            <p>
              Mit meinem Behandlungsschwerpunkt „Medizinische Psychologie“
              unterstütze ich Sie bei psychosomatischen Beschwerden, chronischen
              Schmerzen und Erschöpfung sowie bei der Bewältigung von Stress,
              Ängsten, Lebenskrisen und emotionaler Überlastung.
            </p>
            <div className="flex flex-col lg:flex-row items-center gap-4 mt-4">
              <ContactBtn className="w-full lg:w-44 " />
              <TopicBtn text={"Psychoonkologie"} path={"/#/"} />
            </div>
          </div>
        </div>
        <div className="hidden lg:block xl:hidden">
          <Image
            src={"/images/G-F4_squooshed.jpg"}
            width={600}
            height={300}
            alt="Portraitbild von Psychotherapeutin Anne Julia Röhl"
            className="sm:rounded-xl"
          />
        </div>
      </section>
      <section className="sm:px-16 xl:px-32 pt-24 lg:pt-32  flex flex-col-reverse gap-12 lg:flex-row items-center lg:gap-24 xl:justify-center">
        <div className="flex-1 px-4 sm:px-0 lg:max-w-4/5">
          <h2 className="text-center lg:text-start">
            Traumatherapie in München – Professionelle Unterstützung nach
            belastenden Erfahrungen
          </h2>
          <div className="flex flex-col gap-4">
            <p>
              Die Traumatherapie ist eine spezialisierte psychotherapeutische
              Behandlung zur Verarbeitung traumatischer Erfahrungen.
              Traumatische Ereignisse können plötzlich auftreten oder über
              längere Zeit bestehen und das emotionale Erleben tief
              beeinflussen.
            </p>
            <p>
              Traumatische Belastungen zeigen sich häufig auf emotionaler,
              körperlicher sowie mentaler Ebene und können sich durch typische
              Symptome wie Angstzustände, Panikgefühle, Schlafstörungen,
              Albträume oder eine anhaltende innere Unruhe und Anspannung
              äußern.
            </p>
            <div className="flex flex-col lg:flex-row items-center gap-4 mt-4">
              <ContactBtn className="w-full lg:w-44" />
              <TopicBtn text={"Traumatherapie"} path={"/#/"} />
            </div>
          </div>
        </div>
        <div className="lg:hidden xl:block">
          <Image
            src={"/images/40145-1065_squooshed.jpg"}
            width={600}
            height={300}
            alt="Portraitbild von Psychotherapeutin Anne Julia Röhl"
            className="sm:rounded-xl"
          />
        </div>
      </section>
      <section className="py-24 lg:py-32 px-4 md:px-16 lg:px-32 ">
        <h2>//TODO weitere Inhalte</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
          recusandae eveniet harum, doloremque velit illo alias. Ex laborum at
          velit eveniet explicabo veniam in incidunt minus hic magni, vero
          repellendus.
        </p>
      </section>
    </div>
  );
}
