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
    <div className={`h-screen ${className}`}>
      <div className="hidden lg:block relative h-screen">
          <Image
            src="/images/flower.jpg"
            alt="Hintergrundbild der Herosection"
            fill
            className="object-cover"
            loading="eager"
          />
            <div className="absolute inset-0 bg-black/40"></div>
          {/* <div className="flex flex-col items-center justify-center w-2/3 p-16 absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 !text-stone-50 border-16 border-stone-50">
            <h1 className="text-center !font-bold !text-6xl/20 tracking-wider">Psychotherapie, Traumatherapie und Psychoonkologie</h1>
            <h2 className="!font-bold mt-4">Privatpraxis in München</h2>
            <h2></h2>
          </div> */}
                  <div className="p-8 rounded text-stone-50 max-w-4/5 xl:max-w-3/5 absolute top-1/2 -translate-y-1/2 left-1/8">
          <h1 className="mb-8 lg:!text-3xl/12 xl:!text-6xl/16 !font-bold">Psychotherapie, Traumatherapie und Psychoonkologie</h1>
       <h2 className="!font-bold mt-4">Privatpraxis in München</h2>
       <p className="mt-4 !text-stone-50">Jeder Mensch kann im Laufe seines Lebens an die Grenzen seelischer Belastbarkeit kommen. Als approbierte Psychologische Psychotherapeutin (Verhaltenstherapie) und Psychoonkologin möchte ich Sie dabei unterstützen, in Krisen und herausfordernden Lebenssituationen neue Perspektiven zu finden.</p>
        </div>
        
        
      </div>
    </div>
  );
}
