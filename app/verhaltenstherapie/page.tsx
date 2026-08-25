import Link from "next/link";
import Hero from "../components/Hero";
import { verhaltenstherapieHero } from "../data/hero";
import Features from "../components/Features";
import { verhaltenstherapieFeatures } from "../data/features";
import ContactBtn from "../components/btns/ContactBtn";
import TopicBtn from "../components/btns/TopicBtn";

export default function page() {
  const issues = [
    "Ängsten und Panik",
    "Depression",
    "Stress und Erschöpfung / „Burn-Out“",
    "Essstörungen",
    "Schlafproblemen",
    "Zwangserkrankungen",
    "Selbstwertproblemen",
    "Belastende Lebenssituationen",
    "Chronischen Schmerzen und psychosomatische Beschwerden",
    "Trauer und Verlusterfahrungen",
  ];
  const { title, subtitle, text_1, btn, imgPath } = verhaltenstherapieHero;
  return (
    <div>
      <Hero
        title={title}
        subtitle={subtitle}
        text_1={text_1}
        btn={btn}
        imgPath={imgPath}
      />
      <Features
        data={verhaltenstherapieFeatures}
        className="px-4 py-24 md:px-16 lg:p-32 mt-24 lg:mt-32 2xl:mt-48"
      />
      <section className="pt-24 lg:pt-32 px-4 md:px-16 lg:px-32 ">
        <div className="flex flex-col xl:flex-row gap-12 xl:gap-16">
          <div className="flex-1 flex flex-col gap-4">
            <h2>Wobei hilft die Verhaltenstherapie?</h2>
            <p>
              Im Mittelpunkt stehen dabei konkrete Lösungen für den Alltag.
              Gemeinsam werden individuelle Strategien entwickelt, um neue
              Perspektiven zu gewinnen, emotionale Stabilität aufzubauen und
              langfristig die Lebensqualität zu verbessern.
            </p>
            <p>
              Unterstützung bietet die Verhaltenstherapie bei zahlreichen
              psychischen und psychosomatischen Beschwerden.
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
      <section className="py-12 lg:py-32 px-4 md:px-16 lg:px-32 ">
        <p className="text-center">
          Wenn Sie Unterstützung suchen oder Fragen zur Verhaltenstherapie
          haben, nehme Sie gerne{" "}
          <Link
            href={"/#/"}
            className="underline underline-offset-2 text-sage-dark font-semibold"
          >
            Kontakt
          </Link>{" "}
          auf.
        </p>
      </section>
    </div>
  );
}
