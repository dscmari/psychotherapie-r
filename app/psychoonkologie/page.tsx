import Link from "next/link";
import { SendHorizontal } from "lucide-react";
import ContactBtn from "../components/btns/ContactBtn";
import TopicBtn from "../components/btns/TopicBtn";
import Hero from "../components/Hero";
import { psyonkoHero } from "../data/hero";
import ScrollToTopBtn from "../components/btns/ScrollToTopBtn";

export default function page() {
  const issues = [
    "Stress, Ängsten und emotionaler Überlastung",
    "Psychosomatischen Beschwerden",
    "Chronische Schmerzen und Erschöpfung",
    "Krankheitsverarbeitung und Lebenskrisen",
    "Schlafstörungen und innerer Unruhe",
    "Belastungen durch medizinische Behandlungen",
    "Förderung von Resilienz und Selbstfürsorge",
  ];
  const psychooncologySupport = [
    "Verarbeitung einer Krebsdiagnose",
    "Angst vor Untersuchungen oder Therapien",
    "Emotionaler Belastung während Chemo- oder Strahlentherapie",
    "Depressiven Verstimmungen und Erschöpfung",
    "Umgang mit Kontrollverlust und Zukunftsängsten",
    "Familiären und partnerschaftlichen Belastungen",
    "Stärkung von Hoffnung, Ressourcen und Lebensqualität",
  ];
  const { title, subtitle, text_1, text_2, btn, imgPath } = psyonkoHero;
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
      <section className="text-xl py-16 lg:py-32 mt-24 lg:mt-32 dark:mt-0 px-4 md:px-16 lg:px-32 bg-sage-dark dark:!bg-sage-dark">
        <div className="flex flex-col justify-center xl:flex-row xl:items-center gap-12 xl:gap-32">
          <div className="flex flex-col gap-4 lg:max-w-2xl xl:max-w-xl">
            <h1 className="!text-stone-light">
              Medizinische Psychologie – Unterstützung bei körperlicher und
              seelischer Belastung
            </h1>
            <p className="!text-stone-light text-xl lg:text-xl/12">
              Die Medizinische Psychologie beschäftigt sich mit den
              Zusammenhängen zwischen Körper, Psyche und Verhalten. Chronische
              Erkrankungen, Schmerzen oder belastende medizinische Diagnosen,
              wie beispielsweise Autoimmunerkrankungen, Multiple Sklerose,
              ME/CFS und „Long-Covid“, können emotional sehr herausfordernd sein
              und sich auf Alltag, Beziehungen und Beruf auswirken.
            </p>

            <div className="hidden lg:flex flex-col items-center gap-4 lg:flex-row mt-8">
              <ContactBtn className="text-base w-full lg:w-44 mx-4 lg:mx-0 hover:!bg-sage-brown" />
            </div>
          </div>
          <div className="">
            <p className="!text-stone-light max-w-xl">
              Mit meinem Behandlungsschwerpunkt Medizinische Psychologie
              unterstütze ich Sie im Umgang mit Ihrer Erkrankung bei:
            </p>
            <div className="flex flex-col gap-4 mt-8">
              {issues.map((e, index) => (
                <div key={index} className="flex gap-4 items-baseline">
                  <SendHorizontal
                    className="shrink-0 text-stone-light"
                    size={16}
                  />
                  <span className="!text-stone-light text-xl font-bold">
                    {e}
                  </span>
                </div>
              ))}
            </div>
            <p className="!text-stone-light max-w-xl mt-8">
              Ein vertrauensvoller Raum für Gespräche kann helfen, neue Kraft zu
              finden und mit der Erkrankung besser umzugehen.
            </p>
          </div>
          <div className="flex lg:hidden flex-col items-center gap-4 lg:flex-row mt-8">
            <ContactBtn className="w-full lg:w-44 mx-4 lg:mx-0 " />
          </div>
        </div>
      </section>
      <section className="pt-24 lg:pt-32 px-4 md:px-16 lg:px-32">
        <div className="flex flex-col xl:flex-row gap-12 xl:gap-16">
          <div className="flex-1 flex flex-col gap-4">
            <h1>Psychoonkologie – Psychologische Begleitung bei Krebs</h1>
            <p>
              Eine Krebsdiagnose löst häufig Gefühle wie Angst, Unsicherheit,
              Hilflosigkeit oder Überforderung aus. Die Psychoonkologie bietet
              professionelle psychologische Unterstützung für Menschen mit Krebs
              sowie deren Angehörige – während der Behandlung, in der Nachsorge
              oder in einer palliativen Behandlungssituation.
            </p>
            <p>
              Meine psychoonkologische Begleitung unterstützt Sie im Umgang mit
              der Krebserkrankung.
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
              {psychooncologySupport.map((e, index) => (
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
      <section className="py-12 lg:py-32 px-4 md:px-16 lg:px-32 ">
        <p className="text-center">
          Wenn Sie Unterstützung suchen oder Fragen zur Medizinischen
          Psychologie & Psychoonkologie haben, nehmen Sie gerne{" "}
          <Link
            href={"/kontakt/"}
            className="underline underline-offset-2 text-sage-dark font-semibold"
          >
            Kontakt
          </Link>{" "}
          auf.
        </p>
      </section>
      <section className="py-12 lg:py-32 px-4 md:px-16 lg:px-32 "></section>

      <ScrollToTopBtn />
    </div>
  );
}
