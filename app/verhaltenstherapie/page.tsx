import React from "react";
import Hero from "../components/Hero";
import { verhaltenstherapieHero } from "../data/hero";
import Features from "../components/Features";
import { verhaltenstherapieFeatures } from "../data/features";

export default function page() {
  const { title, subtitle, text_1, text_2, btn, imgPath } = verhaltenstherapieHero;
  const {headline, subheader, intro, bullets } = verhaltenstherapieFeatures
  return (
    <div>
      <Hero
        title={title}
        subtitle={subtitle}
        text_1={text_1}
        text_2={text_2}
        btn={btn}
        imgPath={imgPath}
      />
      <Features data={verhaltenstherapieFeatures} className="px-4 py-24 md:px-16 lg:p-32 mt-24 lg:mt-32 2xl:mt-48"/>
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
