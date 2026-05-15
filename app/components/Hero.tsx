import React from "react";
import Image from "next/image";

type Props = {
  className?: string;
  title?: React.ReactNode;
  subtitle?: string;
  intro?: string;
  imgPathMobile?: string;
  imgPathDesktop?: string;
};

export default function Hero({ className, title }: Props) {
  return (
    <div className={`h-[90vh] lg:h-[60vh] ${className}`}>
      {/* mobile */}
      <div className="sm:hidden relative h-full">
        <Image
          src="/images/flower.jpg"
          alt="Hintergrundbild der Herosection"
          fill
          className="object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="p-8 rounded text-stone-50 absolute ">
          <div className="text-center py-12">
            <h1 className=" !font-bold">Psychotherapie</h1>
            <h1 className="!font-bold">Traumatherapie</h1>
            <h1 className="!font-bold">Psychoonkologie</h1>
          </div>

          <p className="!font-bold mt-4 text-center !text-stone-50">Privatpraxis in München</p>
          <p className="mt-4 !text-stone-50 text-center">
            Jeder Mensch kann im Laufe seines Lebens an die Grenzen seelischer
            Belastbarkeit kommen. Als approbierte Psychologische
            Psychotherapeutin (Verhaltenstherapie) und Psychoonkologin möchte
            ich Sie dabei unterstützen, in Krisen und herausfordernden
            Lebenssituationen neue Perspektiven zu finden.
          </p>
        </div>
      </div>
      {/* tablet & desktop */}
      <div className="hidden sm:block relative h-full">
        <Image
          src="/images/flower.jpg"
          alt="Hintergrundbild der Herosection"
          fill
          className="object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="p-8 rounded text-stone-50 absolute top-1/2 -translate-y-1/2 left-1/8">
          <div className="mb-12">
            <h1 className="!text-5xl/14 !font-bold">Psychotherapie</h1>
            <h1 className="!text-5xl/14 !font-bold">Traumatherapie</h1>
            <h1 className="!text-5xl/14 !font-bold">Psychoonkologie</h1>
          </div>
          <h2 className="!font-bold mt-4">Privatpraxis in München</h2>
          <p className="mt-4 !text-stone-50 max-w-3/5">
            Jeder Mensch kann im Laufe seines Lebens an die Grenzen seelischer
            Belastbarkeit kommen. Als approbierte Psychologische
            Psychotherapeutin (Verhaltenstherapie) und Psychoonkologin möchte
            ich Sie dabei unterstützen, in Krisen und herausfordernden
            Lebenssituationen neue Perspektiven zu finden.
          </p>
        </div>
      </div>
    </div>
  );
}
