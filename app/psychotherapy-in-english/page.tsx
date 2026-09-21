import React from "react";
import ContactBtn from "../components/btns/ContactBtn";
import TopicBtn from "../components/btns/TopicBtn";
import FourBoxLayout from "../components/FourBoxLayout";
import { psyInEnglishFourBoxContent } from "../data/fourBoxData";

export default function page() {
  return (
    <div>
      <section className="px-4 md: lg:px-32 lg:pt-32 dark:py-8 dark:md:py-16 dark:lg:py-32">
        <div className="px-4 sm:px-8 md:px-16 lg:px-0 lg:flex-1 max-w-4xl">
          <h1 className="lg:!text-5xl font-bold !text-sage-brown dark:!text-stone-light mt-4 lg:mt-0">
            Psychotherapy in English in Munich
          </h1>
          <h2>
            Compassionate Psychological Support in English for Internationals
            and Locals in Munich
          </h2>
          <p>
            Psychological support can be especially important when life becomes
            overwhelming, when difficult experiences continue to affect everyday
            life, or when a serious illness brings emotional challenges that are
            difficult to navigate alone.
          </p>
          <p className="mt-4">
            In my private practice in Munich, I offer psychotherapy sessions in
            English as well as German, providing a confidential and supportive
            space for international patients, English-speaking residents, and
            anyone who feels more comfortable expressing their thoughts and
            emotions in English.
          </p>
          <div className="flex flex-col items-center gap-4 lg:flex-row mt-8">
            <ContactBtn className="w-full lg:w-44 mx-4 lg:mx-0 " />
            <TopicBtn
              text="Ablauf & Kosten"
              className="lg:!w-60"
              path={"/ablauf-und-kosten/"}
            />
            ,0000
          </div>
        </div>
      </section>
      <section className="px-4 md:px-16 lg:px-32 pt-24 lg:pt-48 flex flex-col items-center">
        <h1>My therapeutic focus</h1>
        <FourBoxLayout boxes={psyInEnglishFourBoxContent} className="mt-12" />
      </section>
    </div>
  );
}
