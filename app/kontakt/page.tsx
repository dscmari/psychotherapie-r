import { Phone, Mail } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function page() {
  return (
    <div>
      <section className="pt-8 lg:pt-32 px-4 md:px-8 lg:px-32 h-screen">
        <div className="flex flex-col lg:flex-row gap-16">
          <div className="flex-1 flex flex-col gap-4">
            <h1 className="!text-sage-brown">Kontakt</h1>
            <p className="max-w-2xl">
              Sie möchten einen Termin vereinbaren oder haben Fragen zu meinem
              psychotherapeutischen Angebot? Gerne können Sie mich telefonisch
              oder per E-Mail kontaktieren.
            </p>
            <p>Als <span className="!text-sage-brown">Privatpraxis</span>  kann die Abrechnung nicht direkt über die gesetzliche Krankenkasse erfolgen, sondern privat nach der Gebührenordnung für PsychotherapeutInnen (GOP).</p>
            <div className="flex flex-col gap-4 my-8">
              <Link href="tel: 123456789" className="flex items-center gap-4">
                <Phone className="shrink-0 size-6 text-sage" />
                <span className="!cursor-pointer text-lg underline underline-offset-2">
                  {" "}
                  12345678910
                </span>
              </Link>
              <Link href="mailto:" className="flex items-center gap-4">
                <Mail className="shrink-0 size-6 text-sage" />
                <span className="!cursor-pointer text-lg underline underline-offset-2">
                  {" "}
                  info@musterfrau.de
                </span>
              </Link>
            </div>
            <p className="max-w-2xl">
              Ich bemühe mich, Ihre Anfrage zeitnah zu beantworten und einen
              passenden Termin für ein erstes Gespräch zu finden. Alle Anfragen
              werden selbstverständlich vertraulich behandelt.
            </p>
            <p>Ich freue mich auf Ihre Kontaktaufnahme.</p>
          </div>
          <div className="flex-1 hidden xl:block">
            {" "}
            <Image
              src={"/images/G-F5_squooshed.jpg"}
              width={800}
              height={400}
              alt="Bild der Psychotherapiepraxis von Psychotherapeutin Anne Julia Röhl"
              className="sm:rounded-xl max-w-xl"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
