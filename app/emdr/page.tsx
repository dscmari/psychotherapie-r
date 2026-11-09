import { emdrHero } from "../data/hero";
import Image from "next/image";
import ContactBtn from "../components/btns/ContactBtn";
import TopicBtn from "../components/btns/TopicBtn";
import Process from "../components/Process";
import { processCircles } from "../data/process";
import ScrollToTopBtn from "../components/btns/ScrollToTopBtn";
import Link from "next/link";
import { Metadata } from "next";
import {
  Circle,
  CircleSmall,
  Diamond,
  Eye,
  HeartHandshake,
} from "lucide-react";

export const metadata: Metadata = {
  title: "EMDR im Rahmen der Psychotherapie in München",
  alternates: {
    canonical: "https://psychotherapie-roehl.de/emdr/",
  },
};

export default function page() {
  const { title, subtitle, text_1, text_2 } = emdrHero;
  const issues = [
    {
      title: "Traumatische Erlebnisse",
      text: "Unfälle, Gewalterfahrungen, Verluste oder andere Situationen, die als überwältigend erlebt wurden.",
    },
    {
      title: "Ängste und Panik",
      text: "Belastende Erfahrungen, die mit bestimmten Ängsten oder wiederkehrenden Panikgefühlen verbunden sind.",
    },
    {
      title: "Belastende Erinnerungen",
      text: "Erinnerungen, die immer wieder auftauchen und starke emotionale Reaktionen auslösen.",
    },
    {
      title: "Stress und Überforderung",
      text: "Situationen, die emotional nachwirken und das Gefühl von Sicherheit beeinträchtigen.",
    },
    {
      title: "Negative Selbstüberzeugungen",
      text: "Belastende Gedanken über sich selbst, beispielsweise „Ich bin nicht gut genug“ oder „Ich bin hilflos“.",
    },
  ];
  return (
    <main>
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
              text="Ablauf & Kosten"
              className="lg:!w-60"
              path={"/ablauf-und-kosten/"}
            />
          </div>
        </div>
      </section>
      <section className="px-4 sm:px-16 xl:px-32 pt-24 lg:pt-32 xl:pt-48 flex flex-col items-center">
        <h2 className="text-center"> Methode</h2>
        <h1 className="text-center">
          EMDR in der Psychotherapeutischen Praxis in München
        </h1>

        <div className="grid lg:grid-cols-2 gap-4 md:gap-8 lg:gap-16 mt-4 lg:mt-16">
          <div className="md:pb-8 md:border-b-3 border-stone-300">
            <div className="flex items-center gap-4 text-stone">
              <Eye className="shrink-0" />
              <h2 className="!mb-0">Geführte Augenbewegungen</h2>
            </div>
            <p className="py-4 lg:max-w-xl">
              Während der Behandlung wird eine belastende Erinnerung gedanklich
              aufgerufen und gleichzeitig durch sogenannte bilaterale
              Stimulation begleitet. Dies geschieht beispielsweise durch
              geführte Augenbewegungen, bei denen die Augen abwechselnd nach
              rechts und links bewegt werden. Alternativ können auch
              abwechselnde akustische oder taktile Reize eingesetzt werden.
            </p>
          </div>
          <div className="md:border-b-3 border-stone-300">
            <div className="flex items-center gap-4 text-stone">
              <HeartHandshake className="shrink-0" />
              <h2 className="!mb-0">Traumaverarbeitung stützen</h2>
            </div>
            <p className="py-4 lg:max-w-xl">
              Diese Vorgehensweise unterstützt die Verarbeitung belastender
              Erinnerungen. Ziel ist es, dass die Erinnerung ihren
              überwältigenden emotionalen Charakter verliert und zunehmend als
              Teil der eigenen Vergangenheit erlebt werden kann, ohne das
              gegenwärtige Erleben weiterhin so stark zu beeinträchtigen.
            </p>
          </div>
        </div>
      </section>
      <section className="pt-24 lg:pt-32 xl:pt-48 px-4 md:px-16 lg:px-32">
        <div className="flex flex-col xl:flex-row gap-12 xl:gap-16">
          <div
            className={`flex flex-col xl:flex-row gap-8 xl:gap-16 2xl:gap-32  md:py-16 lg:pt-0`}
          >
            <div className="xl:flex-1">
              <h1 className="max-w-lg">Wann kann EMDR helfen?</h1>
              <div className="flex flex-col gap-4">
                <p>
                  EMDR ist insbesondere bei der Behandlung einer
                  posttraumatischen Belastungsstörung (PTBS) etabliert. Darüber
                  hinaus kann die Methode – abhängig von der individuellen
                  Situation – auch bei anderen psychischen Belastungen
                  unterstützend eingesetzt werden.
                </p>
                <p>
                  Ob EMDR für Ihr persönliches Anliegen geeignet ist, wird im
                  Rahmen eines therapeutischen Gesprächs gemeinsam geklärt.
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

              {/* <ContactBtn text={contactBtn.text} className="md:w-64 hidden md:flex" /> */}
            </div>
            <div className="xl:flex-1 grid md:grid-cols-2 xl:grid-cols-1 gap-4 pb-12 xl:pb-0">
              {issues.map((e, index) => (
                <div key={index} className={``}>
                  <div className="flex items-center gap-2">
                    <CircleSmall className="shrink-0 text-sage" size={24} />
                    <h2 className="!mb-0">{e.title}</h2>
                  </div>
                  <p className={`ml-8`}>{e.text}</p>
                </div>
              ))}
            </div>
            {/* <ContactBtn text={contactBtn.text} className="md:hidden mt-12" /> */}
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
      <section className="px-4 sm:px-16 xl:px-32 py-24 lg:py-32 ">
        {/* <Reimbursement /> */}
      </section>
      <ScrollToTopBtn />
    </main>
  );
}
