import Image from "next/image";
import Link from "next/link";
import ContactBtn from "../components/btns/ContactBtn";
import TopicBtn from "../components/btns/TopicBtn";
import FourBoxLayout from "../components/FourBoxLayout";
import { psyInEnglishFourBoxContent } from "../data/fourBoxData";
import { faqsEnglishPsychotherapy } from "../data/faqs";
import Accordeon from "../components/Accordeon";

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
          </div>
        </div>
      </section>
      <section className="px-4 md:px-16 lg:px-32 pt-24 lg:pt-48 flex flex-col items-center">
        <h1>My therapeutic focus</h1>
        <FourBoxLayout boxes={psyInEnglishFourBoxContent} className="mt-12" />
      </section>
      <section className="sm:px-16 xl:px-32 py-24 lg:py-48">
        <div className="flex flex-col xl:flex-row xl:items-center gap-8 xl:gap-24">
          <div className="px-4 sm:px-0 flex-1 max-w-3xl">
            <h1>Support for English-speaking patients in Munich</h1>
            <div className="flex flex-col gap-4">
              <p>
                Munich is home to a large and diverse international community.
                Moving to a new country, building a life away from home, or
                navigating the German healthcare system can present additional
                emotional challenges. For some people, speaking with a therapist
                in their first or preferred language can make it easier to talk
                openly about personal experiences.
              </p>
              <p>
                I offer psychotherapy in English for international
                professionals, expatriates, students and other English-speaking
                adults living in Munich and the surrounding area. You do not
                need to speak German to seek therapy in my practice.
              </p>
              <p>
                The therapeutic process is individually tailored to your needs,
                personal history, and current situation. Whether you are seeking
                support following a traumatic experience, dealing with the
                psychological impact of a physical illness, or going through a
                difficult period in your life, therapy can offer a protected
                space to reflect, understand, and work towards meaningful
                change.
              </p>
            </div>
          </div>
          <div className="flex-1 mx-auto">
            <Image
              src={"/images/G-F5_squooshed.jpg"}
              width={800}
              height={400}
              alt="Bild der Psychotherapiepraxis von Psychotherapeutin Anne Julia Röhl"
              className="sm:rounded-xl"
            />
          </div>
        </div>
        <div className="px-4 sm:px-0 pt-16 xl:pt-32 max-w-3xl flex flex-col items-center mx-auto">
          <div className="flex flex-col gap-4 items-center text-center">
            <p className="font-semibold">
              Appointments in English are available by arrangement in my private
              practice in Munich. Therapy sessions at my private practice are
              not covered by statutory health insurance in Germany.
            </p>
            <p>I look forward to hearing from you.</p>
            <div className="flex flex-col items-center gap-4 lg:flex-row mt-8">
              <ContactBtn
                className="w-full lg:!w-60 mx-4 lg:mx-0"
                content="Request an appointment"
              />
              <TopicBtn
                text={"Education & Qualifications"}
                path={`/ausbildung-und-qualifikation/`}
                className="lg:w-60"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="pt-24 lg:pt-48 px-4 md:px-16 lg:px-32 ">
        <h1 className="text-center">
          Frequently asked questions about psychotherapy
        </h1>
        <Accordeon faqs={faqsEnglishPsychotherapy} className="mt-8 lg:mt-16" />
      </section>
    </div>
  );
}
