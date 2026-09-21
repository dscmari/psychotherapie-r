"use client";
import Link from "next/link";
import ContactBtn from "./btns/ContactBtn";
import TopicBtn from "./btns/TopicBtn";

type Props = {
  className?: string;
};

export default function Footer({ className }: Props) {
  return (
    <footer className={`bg-sage/40 dark:bg-stone-800 ${className}`}>
      <div className="p-4 lg:pt-32 md:px-16 xl:px-32 grid grid-cols-1 gap-12 lg:grid-cols-4">
        <div className="flex flex-col items-center lg:items-start gap-2 order-2 lg:order-1">
          <ul className="flex flex-col items-center lg:items-start gap-2">
            <li>Anne Julia Röhl</li>
            <li>www.psychotherapie-roehl.de</li>
            <li>0176/21908630</li>
            <li>info@psychotherapie-roehl.de</li>
            <li>c/o Praxis am Nussbaumpark</li>
            <li>Nußbaumstraße 14</li>
            <li>80336 München</li>
          </ul>
        </div>
        <div className="flex flex-col gap-8 order-3 mb-12 lg:mb-0 lg:order-2">
          <div className="flex flex-col  items-center lg:items-start gap-2">
            <Link
              href={"#"}
              className=" underline underline-offset-4"
            >
              Verhaltenstherapie
            </Link>
            <Link
              href={"#"}
              className=" underline underline-offset-4"
            >
              Traumatherapie
            </Link>
            <Link
              href={"#"}
              className="underline underline-offset-4"
            >
              Psychoonkologie
            </Link>
            <Link
              href={"#"}
              className=" underline underline-offset-4"
            >
              Ausbildung & Qualifikation
            </Link>
            <Link
              href={"#"}
              className="underline underline-offset-4"
            >
              Ablauf & Kosten
            </Link>
            <Link
              href={"/blog"}
              className=" underline underline-offset-4"
            >
              Blog
            </Link>
          </div>
        </div>
        <div className="lg:col-span-2 order-1 lg:order-3 mt-12 lg:mt-0 flex flex-col ">
          <h2 className="">
            {" "}
            Privatpraxis für Psychotherapie, Traumatherapie & Psychoonkologie
            in München
          </h2>
          <p className="">
            Jeder Mensch kann im Laufe seines Lebens an die Grenzen seelischer
            Belastbarkeit kommen. Als approbierte Psychologische
            Psychotherapeutin (Verhaltenstherapie) und Psychoonkologin möchte
            ich Sie dabei unterstützen, in Krisen und herausfordernden
            Lebenssituationen neue Perspektiven zu finden.
          </p>
          <div className="flex flex-col lg:flex-row items-center gap-4 mt-8">
            <ContactBtn className="w-full lg:w-44 hover:bg-sage-brown" />
            <TopicBtn
              text={"Ablauf & Kosten"}
              path={"/ablauf-und-kosten/"}
              className="border-none"
            />
          </div>
        </div>
      </div>
      <div className="px-4 lg:px-32 pt-4 lg:pt-16 flex flex-col lg:flex-row items-center lg:justify-center gap-2 lg:gap-8">
        {/* <Link href={"#"} className="underline">
          Allgemeine Geschäftsbedingungen
        </Link> */}
        <Link href={"/datenschutz/"} className="underline">
          Datenschutzerklärung
        </Link>
        <Link href={"/impressum/"} className="underline">
          Impressum
        </Link>
      </div>
      <div className="px-4 py-8 lg:px-32 lg:py-16 text-sm font-light flex flex-col md:flex-row justify-between items-center gap-4">
        <span className=">© 2026 Anne Julia Röhl</span>
        <span className=">
          Design & Entwicklung von{" "}
          <Link
            href="https://namaste-websites.de"
            className="underline font-light decoration-1"
          >
            Marian Nökel
          </Link>
        </span>
      </div>
    </footer>
  );
}
