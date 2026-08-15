import Image from "next/image";
import Hero from "./components/Hero";
import Link from "next/link";
import { Anchor, HandHeart, Leaf, Lightbulb, Sunrise } from "lucide-react";

export default function Home() {
  return (
    <div>
      <Hero />
      <section className="pt-24 lg:pt-32 px-4 md:px-16 lg:px-32 ">
        <div className="grid lg:grid-cols-3 gap-24 sm:gap-16 max-w-5xl mx-auto">
          <div className="flex flex-col gap-8 items-center">
            <Lightbulb className="text-sage" size={82} strokeWidth={1} />
            <div className="text-center">
              <h2 className="!font-semibold">Verhaltenstherapie</h2>
              <p>Moderne Psychotherapie für nachhaltige Veränderungen</p>
              <Link
                href={"#"}
                className="block mt-2 underline !text-sage font-semibold"
              >
                Mehr erfahren
              </Link>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="flex flex-col gap-8 items-center">
              <Leaf className="text-sage" size={82} strokeWidth={1} />
              <div className="text-center">
                <h2 className="!font-semibold">Traumatherapie</h2>
                <p>Professionelle Unterstützung nach belastenden Erfahrungen</p>
                <Link
                  href={"#"}
                  className="block mt-2 underline !text-sage font-semibold"
                >
                  Mehr erfahren
                </Link>
              </div>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="flex flex-col gap-8 items-center">
              <HandHeart className="text-sage" size={82} strokeWidth={1} />
              <div className="text-center">
                <h2 className="!font-semibold">Psychoonkologie</h2>
                <p>Psychologische Begleitung bei Krebs</p>
              </div>
              <Link
                href={"#"}
                className="block mt-auto underline !text-sage font-semibold"
              >
                Mehr erfahren
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className="py-24 lg:py-32 px-4 md:px-16 lg:px-32 ">
        <h2>//TODO weitere Inhalte</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
          recusandae eveniet harum, doloremque velit illo alias. Ex laborum at
          velit eveniet explicabo veniam in incidunt minus hic magni, vero
          repellendus.
        </p>
      </section>
    </div>
  );
}
