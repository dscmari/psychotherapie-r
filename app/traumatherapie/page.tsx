import Link from "next/link";
import Image from "next/image";
import Hero from "../components/Hero";
import { traumaHero } from "../data/hero";
import ContactBtn from "../components/btns/ContactBtn";
import TopicBtn from "../components/btns/TopicBtn";
import ScrollToTopBtn from "../components/btns/ScrollToTopBtn";
import { Activity, Brain, HeartPulse } from "lucide-react";

export default function page() {
  const issues = [
    "Unfälle oder medizinische Eingriffe",
    "Körperliche, sexuelle oder psychische Gewalt",
    "Verlust- und Trennungserfahrungen",
    "Emotionale Vernachlässigung",
    "Belastende Kindheitserfahrungen",
    "Schwere Erkrankungen",
    "Traumatische Geburtserfahrungen",
  ];

  const emotionalSymptoms = [
    "Angstzustände und Panikgefühle",
    "Emotionale Überforderung",
    "Depressive Verstimmungen",
  ];
  const cognitiveSymptoms = [
    "Konzentrationsprobleme",
    "Flashbacks oder belastende Erinnerungen",
    "Schlafstörungen und Albträume",
  ];
  const physicalSymptoms = [
    "Innere Unruhe und Anspannung",
    "Psychosomatische Beschwerden",
    "Erschöpfung und dauerhafte Stressreaktionen",
  ];

  const { title, subtitle, text_1, text_2, btn, imgPath } = traumaHero;
  return (
    <div>
      <Hero
        title={title}
        subtitle={subtitle}
        text_1={text_1}
        text_2={text_2}
        btn={btn}
        imgPath={imgPath}
      />
      <section className="text-xl py-16 mt-24 lg:py-32 lg:mt-32 px-4 md:px-16 lg:px-32 bg-sage-dark dark:mt-0">
        <div className="text-center lg:text-start">
          <span className="font-light text-xl !text-stone-light">
            Traumatherapie
          </span>
          <h1 className="mb-8 lg:!text-3xl/12 2xl:!text-5xl/14 !font-bold tracking-wide !text-stone-light">
            Symptome nach traumatischen Erfahrungen
          </h1>
          <p className=" text-center lg:text-start !text-stone-light lg:max-w-3/5 2xl:max-w-full">
            Traumatische Belastungen zeigen sich häufig auf emotionaler,
            körperlicher und mentaler Ebene.
          </p>
        </div>
        <div className="flex flex-col lg:flex-row justify-center gap-16 mt-16">
          <div className="flex-1">
            <HeartPulse
              className="text-stone-light mx-auto"
              size={82}
              strokeWidth={1}
            />
            <h2 className="!text-stone-light text-center mt-8">
              Emotionale Belastung
            </h2>
            <div className={`flex flex-col items-center gap-4 mt-8`}>
              {emotionalSymptoms.map((e, index) => (
                <div key={index} className="flex gap-4 items-baseline">
                  {/* <SendHorizontal
                    className="shrink-0 text-stone-light"
                    size={12}
                  /> */}
                  <span className="!text-stone-light text-center">{e}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="flex-1">
            <Activity
              className="text-stone-light mx-auto"
              size={82}
              strokeWidth={1}
            />
            <h2 className="!text-stone-light mt-8 text-center">
              Körperliche Belastung
            </h2>
            <div className={`flex flex-col items-center gap-4 mt-8`}>
              {physicalSymptoms.map((e, index) => (
                <div key={index} className="flex gap-4 items-baseline">
                  {/* <SendHorizontal
                    className="shrink-0 text-stone-light"
                    size={12}
                  /> */}
                  <span className="!text-stone-light text-center">{e}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="flex-1">
            <Brain
              className="text-stone-light mx-auto"
              size={82}
              strokeWidth={1}
            />
            <h2 className="!text-stone-light mt-8 text-center">
              Mentale Belastung
            </h2>
            <div className={`flex flex-col items-center gap-4 mt-8`}>
              {cognitiveSymptoms.map((e, index) => (
                <div key={index} className="flex gap-4 items-baseline">
                  {/* <SendHorizontal
                    className="shrink-0 text-stone-light"
                    size={12}
                  /> */}
                  <span className="!text-stone-light text-center">{e}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="pt-16 lg:pt-32 px-4 md:px-16 lg:px-32 ">
        <div className="flex flex-col xl:flex-row gap-12 xl:gap-16">
          <div className="flex-1 flex flex-col gap-4">
            <h1>Wie entsteht ein Trauma?</h1>
            <p>
              Traumata entstehen, wenn ein Mensch eine Situation als extrem
              bedrohlich oder lebensgefährlich erlebt und die eigenen
              Bewältigungsmechanismen schlichtweg überfordert sind.
            </p>
            <p>
              Die auslösenden Situationen können dabei individuell sehr
              unterschiedlich sein. Es kann sich um eine einmalige Situation
              oder um emotionale Überlastung durch wiederholte Konfrontation mit
              schweren Schicksalen im Beruf, z.B. bei Einsatzkräften, in der
              Pflege oder bei soziale Diensten handeln.
            </p>
            <div className="hidden lg:flex flex-col items-center gap-4 lg:flex-row mt-8">
              <ContactBtn className="w-full lg:w-44 mx-4 lg:mx-0 " />
              <TopicBtn
                className="w-full lg:w-52 mx-4 lg:mx-0 "
                text={`Online Psychotherapie`}
                path={`/online-psychotherapie/`}
              />
            </div>
          </div>
          <div className="flex-1">
            <ul className="flex flex-wrap gap-4">
              {issues.map((e, index) => (
                <li
                  key={index}
                  className="bg-sage-dark text-white font-semibold rounded-full px-4 py-2"
                >
                  {e}
                </li>
              ))}
            </ul>
          </div>
          <div className="flex lg:hidden flex-col items-center gap-4 lg:flex-row mt-8">
            <ContactBtn className="w-full lg:w-44 mx-4 lg:mx-0 " />
            <TopicBtn
              className="w-full lg:w-52 mx-4 lg:mx-0 "
              text={`Online Psychotherapie`}
              path={`/online-psychotherapie/`}
            />
          </div>
        </div>
      </section>

      <section className="px-4 sm:px-16 xl:px-32 pt-24 lg:pt-32 lg:text-center flex flex-col items-center">
        <h1>Traumatherapeutische Begleitung</h1>
        <div className="max-w-4xl flex flex-col gap-4">
          <p>
            In der Traumatherapie ist es mir wichtig, einen geschützten und
            vertrauensvollen Raum zu schaffen, in dem Stabilisierung, Sicherheit
            und behutsame Verarbeitung im Mittelpunkt stehen. Die Behandlung
            erfolgt individuell abgestimmt auf Ihre persönliche Situation und
            Ihr Tempo.
          </p>
          <p>
            Während einer traumafokussierten Psychotherapie möchte ich Sie dabei
            unterstützen, belastende Erfahrungen zu verarbeiten und emotionale
            Stabilität aufzubauen. Ziel ist es, Ihren Selbstwert und
            Selbstsicherheit zu stärken, wieder innere Ruhe und Kontrolle
            zurückzugewinnen und Ressourcen und Resilienz zu fördern. Dabei
            arbeite ich mit wissenschaftlich fundierten und modernen
            therapeutischen Methoden.
          </p>
          <p>
            Wenn Sie Unterstützung suchen oder Fragen zur traumatherapeutischen
            Begleitung haben, nehmen Sie gerne{" "}
            <Link
              href={"/kontakt/"}
              className="underline underline-offset-2 text-sage-dark font-semibold"
            >
              Kontakt
            </Link>{" "}
            auf.
          </p>
        </div>
      </section>
      <section className="py-12 lg:py-32 px-4 md:px-16 lg:px-32 "></section>

      <ScrollToTopBtn />
    </div>
  );
}
