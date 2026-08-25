import {
  BadgeEuro,
  CigaretteOff,
  SearchCheck,
  ShieldCheck,
} from "lucide-react";
import ContactBtn from "./btns/ContactBtn";

type Bullet = {
  icon: React.ReactNode;
  header: string;
  text: string;
};

type Data = {
  headline: string;
  subheader: string;
  intro: string;
  bullets: Bullet[];
};

type Props = {
  className?: string;
  data: Data;
};

export default function Features({ className, data }: Props) {
  const { headline, subheader, intro, bullets } = data;

  return (
    <div
      className={`bg-sage-dark flex flex-col 2xl:flex-row 2xl:items-start gap-12 lg:gap-16 2xl:gap-32 text-stone-light ${className}`}
    >
      <div className="flex-1 flex flex-col items-center lg:items-start gap-4">
        <span className="font-light text-sm !text-stone-light">
          {subheader}
        </span>
        <h1 className="mb-8 lg:!text-3xl/12 2xl:!text-5xl/14 !font-bold tracking-wide !text-stone-light">
          {headline}
        </h1>
        <p className="2xl:text-base/8 text-center lg:text-start !text-stone-light lg:max-w-3/5 2xl:max-w-full">
          {intro}
        </p>
        <ContactBtn className="mx-auto lg:mx-0 mt-8 hover:!bg-sage-brown" />
      </div>
      <div className="flex-2 grid grid-cols-1 lg:grid-cols-2 gap-16 mt-4">
        {bullets.map((bullet, index) => {
          return (
            <div key={index} className="flex flex-col gap-4 ">
              <div className="flex gap-4 lg:flex-col">
                {bullet.icon}
                <h2 className="!text-stone-light !font-semibold">
                  {bullet.header}
                </h2>
              </div>
              <p className="lg:text-base/8 !text-stone-light !font-semibold">
                {bullet.text}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
