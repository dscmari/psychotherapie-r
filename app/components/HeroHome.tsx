import React from "react";
import Image from "next/image";
import ContactBtn from "./btns/ContactBtn";
import TopicBtn from "./btns/TopicBtn";

type Props = {
  className?: string;
  title?: React.ReactNode;
  subtitle?: string;
  intro?: string;
  imgPathMobile?: string;
  imgPathDesktop?: string;
};

export default function HeroHome({ className, title }: Props) {
  return (
    <div className={`${className}`}>
      {/* mobile */}
      <div className="sm:hidden flex-col">
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
            <h3 className="!text-xl text-sage-brown !mb-0">
              Psychologische Psychotherapie
            </h3>
            <h3 className="!text-xl dark:text-stone-800">
              {" "}
              Traumatherapie & Psychoonkologie
            </h3>
          </div>
          <h3 className="mt-2 font-lora dark:text-stone-800">
            Privatpraxis in München
          </h3>
          <p className="mt-4">
            Jeder Mensch kann im Laufe seines Lebens an die Grenzen seelischer
            Belastbarkeit kommen. Als approbierte{" "}
            <span className="!text-sage-brown font-semibold">
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
      </div>
      {/* tablet */}
      <div className="hidden sm:flex lg:hidden flex-col gap-20">
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
              Traumatherapie & Psychoonkologie
            </h1>
          </div>
          <h2 className="mt-4 ">Privatpraxis in München</h2>
          <p className="mt-4 max-w-4/5 mx-auto">
            Jeder Mensch kann im Laufe seines Lebens an die Grenzen seelischer
            Belastbarkeit kommen. Als approbierte{" "}
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
      </div>

      {/* desktop */}
      {/* lg-xl */}
      <div className="hidden lg:flex justify-center 2xl:hidden lg:px-16 xl:px-32 gap-4 pt-20 xl:pb-26 2xl:pb-40 2xl:pt-32 ">
        <div className="flex-1 min-w-0 overflow-visible">
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
            Belastbarkeit kommen. Als approbierte{" "}
            <span className="!text-sage-brown font-semibold">
              Psychologische Psychotherapeutin
            </span>{" "}
            (Verhaltenstherapie) und Psychoonkologin möchte ich Sie dabei
            unterstützen, in Krisen und herausfordernden Lebenssituationen neue
            Perspektiven zu finden.
          </p>
          <div className="hidden xl:block">
            <h3 className="mt-4 font-lora font-semibold">
              Psychologische Begleitung
            </h3>
            <p>
              Ich begleite Menschen bei der Bewältigung psychischer Belastungen,
              traumatischer Erfahrungen, Ängsten, Depressionen sowie emotionalen
              Herausforderungen im Zusammenhang mit schweren oder chronischen
              Erkrankungen – empathisch, individuell und wissenschaftlich
              fundiert.
            </p>
          </div>

          <div className="flex flex-col items-center gap-4 lg:flex-row mt-8">
            <ContactBtn className="mx-4 lg:mx-0 " />
            <TopicBtn text={"Psychoonkologie"} path={"/#/"} />
          </div>
        </div>
        <div className="flex-1">
          <Image
            src="/images/portraits/40145-1280_small.jpg"
            alt="Portrait von Psychotherapeuting Anne Julia Röhl"
            width={600}
            height={400}
            className="rounded-xl ml-8"
            loading="eager"
          />
        </div>
      </div>

      {/* ab 2xl */}
      <div className="hidden 2xl:flex justify-center px-32 gap-4 pt-20 xl:pb-26 2xl:pb-40 2xl:pt-32 ">
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
            Belastbarkeit kommen. Als approbierte{" "}
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
      </div>
    </div>
  );
}
