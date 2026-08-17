"use client";
import Link from "next/link";
import ContactBtn from "./btns/ContactBtn";

type Props = {
  className?: string;
};

export default function Footer({ className }: Props) {
  return (
    <footer className={`text-stone-50 bg-stone-600 ${className}`}>
      <div className="p-4 lg:pt-32 md:px-16 xl:px-32 grid grid-cols-1 gap-12 lg:grid-cols-4">
        <div className="flex flex-col items-center lg:items-start gap-2 order-2 lg:order-1">
          <ul className="flex flex-col items-center lg:items-start gap-2">
            <li>Anne Julia Röhl</li>
            <li>www.psychotherapie-roehl.de</li>
            <li>+49 1234 123456</li>
            <li>info@musterfrau.de</li>
            <li> Nußbaumstraße 14, 80336 München</li>
          </ul>
        </div>
        <div className="flex flex-col gap-8 order-3 mb-12 lg:mb-0 lg:order-2">
          <div className="flex flex-col  items-center lg:items-start gap-2">
            <Link
              href={"#"}
              className="font-semibold underline underline-offset-4 !text-stone-50"
            >
              Verhaltenstherapie
            </Link>
            <Link
              href={"#"}
              className="font-semibold underline underline-offset-4 !text-stone-50"
            >
              Traumatherapie
            </Link>
            <Link
              href={"#"}
              className="font-semibold underline underline-offset-4 !text-stone-50"
            >
              Psychoonkologie
            </Link>
            <Link
              href={"#"}
              className="font-semibold underline underline-offset-4 !text-stone-50"
            >
              Ausbildung & Qualifikation
            </Link>
            <Link
              href={"#"}
              className="font-semibold underline underline-offset-4 !text-stone-50"
            >
              Ablauf & Kosten
            </Link>
            <Link
              href={"/blog"}
              className="font-semibold underline underline-offset-4 !text-stone-50"
            >
              Blog
            </Link>
          </div>
        </div>
        <div className="lg:col-span-2 order-1 lg:order-3 mt-12 lg:mt-0 flex flex-col ">
          <h1 className="text-center lg:text-start !text-stone-light">
            {" "}
            Privatpraxis für Psychotherapie, Traumatherapie und Psychoonkologie
            in München
          </h1>
          <p className="mb-2 !text-stone-50 text-center lg:text-start">
            Jeder Mensch kann im Laufe seines Lebens an die Grenzen seelischer
            Belastbarkeit kommen. Als approbierte Psychologische
            Psychotherapeutin (Verhaltenstherapie) und Psychoonkologin möchte
            ich Sie dabei unterstützen, in Krisen und herausfordernden
            Lebenssituationen neue Perspektiven zu finden.
          </p>
          <ContactBtn className="bg-custom-bronce mt-8 self-center lg:self-start" />
        </div>
      </div>
      <div className="px-4 lg:px-32 pt-4 lg:pt-16 flex flex-col lg:flex-row items-center lg:justify-center gap-2 lg:gap-8">
        {/* <Link href={"#"} className="underline">
          Allgemeine Geschäftsbedingungen
        </Link> */}
        <Link href={"/datenschutz/"} className="underline !text-stone-50">
          Datenschutzerklärung
        </Link>
        <Link href={"/impressum/"} className="underline !text-stone-50">
          Impressum
        </Link>
      </div>
      <div className="px-4 py-8 lg:px-32 lg:py-16 text-sm font-light flex flex-col md:flex-row justify-between items-center gap-4">
        <span className="!text-stone-50">© 2026 Anne Julia Röhl</span>
        <span className="!text-stone-50">
          Design & Entwicklung von{" "}
          <Link
            href="https://namaste-websites.de"
            className="underline font-light decoration-1 !text-stone-50"
          >
            Marian Nökel
          </Link>
        </span>
      </div>
    </footer>
  );
}
