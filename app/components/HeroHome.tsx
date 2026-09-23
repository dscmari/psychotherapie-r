import React from "react";
import Image from "next/image";
import ContactBtn from "./btns/ContactBtn";
import TopicBtn from "./btns/TopicBtn";
import Link from "next/link";
import { CircleSmall } from "lucide-react";

type Props = {
  className?: string;
  title?: React.ReactNode;
  subtitle?: string;
  intro?: string;
  imgPathMobile?: string;
  imgPathDesktop?: string;
};

export default function HeroHome({ className, title }: Props) {
  const reasons = [
    "Psychischen Belastungen",
    "Traumatischer Erfahrungen",
    "Ängsten",
    "Depressionen",
    "Emotionalen Herausforderungen im Zusammenhang mit schweren oder chronischen Erkrankungen",
  ];

  return (
    <div className={`dark ${className}`}>
      {/* mobile */}
      <section className="sm:hidden flex-col">
        <div className="relative mx-auto">
          <Image
            src="/images/portraits/40145-1280_squooshed.jpg"
            alt="Portrait von Psychotherapeuting Anne Julia Röhl"
            width={600}
            height={400}
            className="mx-auto"
            loading="eager"
          />
          <div className="absolute bottom-2 right-2 px-4 pt-1 text-sm/4 flex flex-col items-end">
            <span>Anne Julia Röhl</span>
            <span>Psychotherapeutin</span>
          </div>
        </div>
        <div className="text-start px-4 mt-4">
          <div className="flex flex-col !font-lora font-semibold">
            <h3 className="!text-xl !mb-0">Psychologische Psychotherapie</h3>
            <h3 className="!text-xl"> Traumatherapie & Psychoonkologie</h3>
          </div>
          <h3 className="mt-2 font-lora dark:text-stone-800">
            Privatpraxis in München
          </h3>
          <p className="mt-4">
            Jeder Mensch kann im Laufe seines Lebens an die Grenzen seelischer
            Belastbarkeit kommen. Als staatlich approbierte{" "}
            <span className="!text-sage-brown dark:!text-stone-light font-semibold">
              Psychologische Psychotherapeutin
            </span>{" "}
            (Verhaltenstherapie) und Psychoonkologin möchte ich Sie dabei
            unterstützen, in Krisen und herausfordernden Lebenssituationen neue
            Perspektiven zu finden.
          </p>
          <div className="flex flex-col mt-8 gap-4 justify-center">
            <ContactBtn className="" />
            <TopicBtn text={"Ablauf & Kosten"} path={"/ablauf-und-kosten/"} />
          </div>
        </div>
      </section>
      {/* tablet */}
      <section className="hidden sm:flex lg:hidden flex-col gap-20">
        <div className="flex justify-center mt-12">
          <div className="">
            <Image
              src="/images/G-F2_small.jpg"
              alt="Praxisräume von Psychotherapeuting Anne Julia Röhl"
              width={500}
              height={400}
              className=""
              loading="eager"
            />
          </div>
          <div className="">
            <Image
              src="/images/portraits/40145-1280_small.jpg"
              alt="Portrait von Psychotherapeuting Anne Julia Röhl"
              width={500}
              height={400}
              className=""
              loading="eager"
            />
          </div>
        </div>
        <div className="text-center px-16">
          <div className="">
            <h1 className="xl:!text-4xl/12 font-bold">
              <span className="!text-sage-brown">
                Psychologische Psychotherapie
              </span>{" "}
              <br />
              Psychoonkologie & Traumatherapie
            </h1>
          </div>
          <h2 className="mt-4 ">Privatpraxis in München</h2>
          <p className="mt-4 max-w-4/5 mx-auto">
            Jeder Mensch kann im Laufe seines Lebens an die Grenzen seelischer
            Belastbarkeit kommen. Als staatlich approbierte{" "}
            <span className="!text-sage-brown font-semibold">
              Psychologische Psychotherapeutin
            </span>{" "}
            (Verhaltenstherapie) und Psychoonkologin möchte ich Sie dabei
            unterstützen, in Krisen und herausfordernden Lebenssituationen neue
            Perspektiven zu finden.
          </p>
          <div className="flex flex-col items-center gap-4 lg:flex-row mt-8">
            <ContactBtn className="w-full lg:w-44 mx-4 lg:mx-0 " />
            <TopicBtn text={`Ablauf & Kosten`} path={`/ablauf-und-kosten/`} />
          </div>
        </div>
      </section>

      {/* desktop */}
      {/* lg-xl */}
      <section className="px-4 sm:px-16 xl:px-32 py-24 ">
        <div className="flex flex-col xl:flex-row xl:items-center gap-8 xl:gap-24 lg:border-b-1 border-slate-300 pb-12">
          <div className="flex-2 flex flex-col gap-4">
            <span className="">Privatpraxis in München</span>
            <h1 className="lg:!text-5xl/16 !tracking-tight font-bold bg-stone-50 dark:bg-darkblue rounded-br-xl">
              <span className="!text-sage-brown dark:!text-stone-light">
                Psychologische Psychotherapie
              </span>{" "}
              <br />
              Psychoonkologie & Traumatherapie
            </h1>
          </div>
          <p className="flex-1 lg:text-base/8 max-w-xl">
            Jeder Mensch kann im Laufe seines Lebens an die Grenzen seelischer
            Belastbarkeit kommen. In meiner psychotherapeutischen Privatpraxis
            in München unterstütze ich Sie im Umgang mit psychischen
            Belastungen.
          </p>
        </div>
        <div className="flex flex-col lg:flex-row lg:items-center gap-12 lg:gap-24 lg:mt-12 xl:mt-24">
          <div className="flex-1">
            <Image
              src="/images/portraits/40145-1280_small.jpg"
              alt="Business environment in the office"
              width={600}
              height={400}
              className="rounded-xl mx-auto"
            />
          </div>
          <div className="flex-1">
            <p className="text-base/8">
              Als staatlich approbierte Psychologische Psychotherapeutin
              (Verhaltenstherapie) und Psychoonkologin möchte ich Sie dabei
              unterstützen, in Krisen und herausfordernden Lebenssituationen
              neue Perspektiven zu finden.
            </p>
            <h2 className="lg:max-w-lg mt-8">
              Psychologische Begleitung bei der Bewältigung von:
            </h2>
            <div className="flex flex-col gap-4 mt-8 max-w-xl">
              {reasons.map((e: string, index: number) => (
                <div key={index} className="flex items-start gap-4">
                  <CircleSmall className="text-sage shrink-0" />
                  <span>{e}</span>
                </div>
              ))}
              <p className="font-semibold mt-4">
                Empathisch, individuell und wissenschaftlich fundiert.
              </p>
              <div className="flex flex-col items-center gap-4 lg:flex-row mt-8">
                <ContactBtn className="mx-4 lg:mx-0 " />
                <TopicBtn
                  text={"Ablauf & Kosten"}
                  path={"/ablauf-und-kosten/"}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
{/* standard hero */}
      {/* <section className="hidden lg:flex px-16 lg:px-32 items-center xl:gap-16 pt-20 xl:pb-26 2xl:pb-40 2xl:pt-32">
        <div className="xl:flex-1 flex flex-col items-end">
          <div>
            <div className="">
              <h1 className="xl:!text-4xl/12 font-bold bg-stone-50 dark:bg-darkblue rounded-br-xl">
                <span className="!text-sage-brown dark:!text-stone-light">
                  Psychologische Psychotherapie
                </span>{" "}
                <br />
                Psychoonkologie & Traumatherapie
              </h1>
            </div>
            <h2 className="mt-4">Privatpraxis in München</h2>
            <p className="mt-4">
              Jeder Mensch kann im Laufe seines Lebens an die Grenzen seelischer
              Belastbarkeit kommen. Als staatlich approbierte{" "}
              <span className="!text-sage-brown dark:!text-stone-light font-semibold">
                Psychologische Psychotherapeutin
              </span>{" "}
              (Verhaltenstherapie) und Psychoonkologin möchte ich Sie dabei
              unterstützen, in Krisen und herausfordernden Lebenssituationen
              neue Perspektiven zu finden.
            </p>
            <div className="hidden xl:block">
              <h3 className="mt-4 font-lora font-semibold dark:!text-stone-light">
                Psychologische Begleitung
              </h3>
              <p>
                Ich begleite Menschen bei der Bewältigung psychischer
                Belastungen, traumatischer Erfahrungen, Ängsten, Depressionen
                sowie emotionalen Herausforderungen im Zusammenhang mit schweren
                oder chronischen Erkrankungen – empathisch, individuell und
                wissenschaftlich fundiert.
              </p>
            </div>

            <div className="flex flex-col items-center gap-4 lg:flex-row mt-8">
              <ContactBtn className="mx-4 lg:mx-0 " />
              <TopicBtn text={"Ablauf & Kosten"} path={"/ablauf-und-kosten/"} />
            </div>
          </div>
        </div>

        <div className="xl:flex-1">
          <Image
            src="/images/portraits/40145-1280_small.jpg"
            alt="Portrait von Psychotherapeuting Anne Julia Röhl"
            width={600}
            height={400}
            className="rounded-xl ml-8"
            loading="eager"
          />
        </div>
      </section> */}

      {/* ab 2xl */}

      {/* <div className="hidden 2xl:flex justify-center px-32 gap-4 pt-20 xl:pb-26 2xl:pb-40 2xl:pt-32 ">
        <div className="min-w-0 w-1/4 overflow-visible">
          <div className="relative">
            <h1 className="xl:!text-4xl/12 font-bold w-max pt-4 pr-4 pb-4 bg-stone-50 rounded-br-xl">
              <span className="!text-sage-brown">
                Psychologische Psychotherapie
              </span>{" "}
              <br />
              Traumatherapie & Psychoonkologie
            </h1>
          </div>
          <h2 className="mt-4">Privatpraxis in München</h2>
          <p className="mt-4">
            Jeder Mensch kann im Laufe seines Lebens an die Grenzen seelischer
            Belastbarkeit kommen. Als staatlich approbierte{" "}
            <span className="!text-sage-brown font-semibold">
              Psychologische Psychotherapeutin
            </span>{" "}
            (Verhaltenstherapie) und Psychoonkologin möchte ich Sie dabei
            unterstützen, in Krisen und herausfordernden Lebenssituationen neue
            Perspektiven zu finden.
          </p>
          <div className="flex items-center gap-4 mt-4">
            <ContactBtn className="mx-4 lg:mx-0 " />
            <TopicBtn text={"Ablauf & Kosten"} path={"/ablauf-und-kosten/"} />
          </div>
        </div>
        <div className="">
          <Image
            src="/images/portraits/40145-1280_small.jpg"
            alt="Portrait von Psychotherapeuting Anne Julia Röhl"
            width={600}
            height={400}
            className="rounded-xl ml-8"
            loading="eager"
          />
        </div>

        <div className="flex flex-col gap-4">
          <Image
            src="/images/G-F2_small.jpg"
            alt="Praxisräume von Psychotherapeuting Anne Julia Röhl"
            width={300}
            height={300}
            className="rounded-xl"
            loading="eager"
          />
          <div className="max-w-[300px] flex flex-col">
            <h2>Psychologische Begleitung</h2>
            <p>
              Ich begleite Menschen bei der Bewältigung psychischer Belastungen,
              traumatischer Erfahrungen, Ängsten, Depressionen sowie schweren
              oder chronischen Erkrankungen.
            </p>
            <TopicBtn className="mt-4" text={"Psychoonkologie"} path={"/#/"} />
          </div>
        </div>
      </div> */}
    </div>
  );
}
