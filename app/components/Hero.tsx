import Image from "next/image";
import ContactBtn from "./btns/ContactBtn";
import TopicBtn from "./btns/TopicBtn";
import { slugify } from "../utils/slugifier";

type Props = {
  className?: string;
  title: string;
  subtitle: string;
  text_1: string | React.ReactNode;
  text_2?: string | React.ReactNode;
  btn: {text: string, className?:string}
  imgPath: string;
};

export default function Hero({
  title,
  subtitle,
  text_1,
  text_2,
  btn,
  imgPath,
}: Props) {
  return (
    <div className="flex flex-col gap-4 lg:gap-8 xl:gap-16 2xl:gap-32 lg:flex-row-reverse lg:items-start xl:items-center lg:px-16 xl:px-32 lg:pt-32">
      <div className="lg:flex-1 lg:flex flex-col">
        <div className="relative lg:w-[400px] xl:w-auto">
          <Image
            src={imgPath}
            alt="Portrait von Psychotherapeutin Anne Julia Röhl"
            width={600}
            height={400}
            className="lg:rounded-xl w-full lg:w-[400px] lg:h-auto xl:w-auto"
            loading="eager"
          />
          <div className="absolute bottom-2 left-2 px-4 pt-1 text-sm/4 flex flex-col">
            <span className="!text-stone-light">Anne Julia Röhl</span>
            <span className="!text-stone-light">Psychotherapeutin</span>
          </div>
        </div>

        <p className="hidden lg:block xl:hidden mt-4">{text_2}</p>
      </div>
      <div className="px-4 sm:px-8 md:px-16 lg:px-0 lg:flex-1">
        <h1 className="xl:!text-4xl/12 font-bold !text-sage-brown mt-4 lg:mt-0">
          {title}
        </h1>
        <h2>{subtitle}</h2>
        <p>{text_1}</p>
        <p className="lg:hidden xl:block mt-4">{text_2}</p>
        <div className="flex flex-col items-center gap-4 lg:flex-row mt-8">
          <ContactBtn className="w-full lg:w-44 mx-4 lg:mx-0 " />
          <TopicBtn text={`${btn.text}`} path={`/${slugify(btn.text)}`} className={`${btn.className}`} />
        </div>
      </div>
    </div>
  );
}
