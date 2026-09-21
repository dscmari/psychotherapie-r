
import Hero from "../components/Hero";
import { onlinePsychHero } from "../data/hero";
import { onlinePsyCircles } from "../data/process";
import Process from "../components/Process";
import Image from "next/image";
import Link from "next/link";
import { CircleSmall } from "lucide-react";

export default function page() {
  const { title, subtitle, text_1, text_2, btn, imgPath } = onlinePsychHero;
  const reasons = [
    "eine Psychotherapie in München ohne zusätzliche Anfahrtswege wünschen,",
    "Ihre Therapietermine flexibel in Ihren Alltag integrieren möchten,",
    "sich in Ihrer vertrauten Umgebung wohler fühlen,",
    "beruflich oder familiär stark eingebunden sind,",
    "nicht regelmäßig eine Praxis vor Ort aufsuchen können.",
  ];
  return (
    <div>
      <Hero
        title={title}
        subtitle={subtitle}
        text_1={text_1}
        btn={btn}
        imgPath={imgPath}
      />
      <section className="px-4 sm:px-16 xl:px-32 pt-24 lg:pt-48 flex flex-col items-center">
        <h2>Digitale Psychotherapie</h2>
        <h1 className="text-center">Ablauf der Online Psychotherapie</h1>
        <p className="max-w-4xl mx-auto lg:text-center">Die Online-Therapie ermöglicht Ihnen, psychotherapeutische Unterstützung unabhängig davon wahrzunehmen, ob Sie direkt in München oder im Münchner Umland leben. Die Gespräche finden über eine sichere Videoverbindung statt und können von einem ruhigen, geschützten Ort aus geführt werden. Dabei steht Ihre persönliche Situation im Mittelpunkt. Gemeinsam betrachten wir, was Sie belastet, welche Veränderungen Sie sich wünschen und welche Schritte für Sie hilfreich sein können.</p>
        <Process circles={onlinePsyCircles} />
        <div className="grid lg:grid-cols-2 2xl:grid-cols-3 gap-4 md:gap-8 xl:gap-12 mt-12 lg:mt-32">
          <div className="lg:max-w-lg">
            <h2>Persönliches Erstgespräch</h2>
            <p>
              Im ersten Gespräch lernen wir uns persönlich in der Praxis kennen
              und besprechen Ihr Anliegen. Sie haben Raum, Ihre aktuelle
              Situation zu schildern und Fragen zur Online-Psychotherapie zu
              stellen. Gemeinsam klären wir, ob diese Form der Therapie für Sie
              geeignet ist.
            </p>
          </div>
          <div className="lg:max-w-lg">
            <h2>Individuelle Therapieziele</h2>
            <p>
              Wenn wir uns für eine Zusammenarbeit entscheiden, entwickeln wir
              gemeinsam konkrete Therapieziele. Die Behandlung orientiert sich
              an Ihrer persönlichen Situation, Ihren Bedürfnissen und Ihrem
              individuellen Tempo.
            </p>
          </div>
          <div className="lg:max-w-lg">
            <h2>Regelmäßige Online-Sitzungen</h2>
            <p>
              Die psychotherapeutischen Sitzungen finden dann regelmäßig per
              Videotelefonie statt. Dadurch entfallen Anfahrtswege innerhalb
              Münchens und Sie können Ihre Therapietermine flexibel in Ihren
              Alltag integrieren.
            </p>
          </div>
        </div>
      </section>
      <section className="px-4 sm:px-16 xl:px-32 py-24 lg:py-48">
        <div className="flex flex-col lg:flex-row lg:items-center gap-8 lg:gap-24 lg:border-b-1 border-slate-300 pb-12">
          <div className="flex-1 flex flex-col gap-4">
            <span className="">Online Psychotherapie</span>
            <h1 className="lg:!text-5xl !tracking-tight">
              Vorteile der Online Psychotherapie
            </h1>
          </div>
          <p className="flex-1 lg:text-base/8 max-w-xl">
            Für die Sitzungen benötigen Sie lediglich eine stabile
            Internetverbindung sowie einen ruhigen und geschützten Raum, in dem
            Sie ungestört sprechen können.
          </p>
        </div>
        <div className="flex flex-col lg:flex-row lg:items-center gap-12 lg:gap-24 lg:mt-24">
          <div className="flex-1">
            <Image
              src="/images/G-F4_squooshed.jpg"
              alt="Business environment in the office"
              width={800}
              height={600}
              className="rounded-xl mx-auto"
            />
          </div>
          <div className="flex-1">
            <h2 className="lg:max-w-sm">
              Online-Psychotherapie kann für Sie interessant sein, wenn Sie:
            </h2>
            <div className="flex flex-col gap-4 mt-8">
              {reasons.map((e: string, index: number) => (
                <div key={index} className="flex items-start gap-4">
                  <CircleSmall className="text-sage shrink-0" />
                  <span>{e}</span>
                </div>
              ))}
              <p className="font-semibold mt-4">Ist Online Psychotherapie für mich geeignet?</p>
              <p>Ob eine Psychotherapie online für Sie geeignet ist, hängt von Ihrer individuellen Situation und Ihrem Anliegen ab. Im persönlichen Erstgespräch können wir gemeinsam besprechen, ob eine Behandlung im Online-Setting sinnvoll ist oder ob eine Therapie vor Ort empfehlenswerter wäre.</p>
            </div>
          </div>
        </div>
        <p className="mt-12 lg:mt-32 lg:text-center max-w-2xl mx-auto">Wenn Sie im Raum München leben und sich psychotherapeutische Unterstützung wünschen, können Sie gerne <Link className="underline text-sage font-semibold" href={"/kontakt/"}>Kontakt</Link> aufnehmen.</p>
      </section>
    </div>
  );
}
