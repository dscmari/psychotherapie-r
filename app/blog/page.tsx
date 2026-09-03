import { type SanityDocument } from "next-sanity";
import Link from "next/link";
import Image from "next/image";
import { Metadata } from "next";
import { SquareArrowOutUpRight } from "lucide-react";
import { client } from "@/src/sanity/client";

export const metadata: Metadata = {
  title: "Videos, Podcast, Ratgeber rund um SEO, GEO & Ads",
};

const POSTS_QUERY = `*[
  _type == "post"
  && defined(slug.current)
]|order(publishedAt desc){
  _id, 
  title, 
  slug, 
  publishedAt,
  body,
  "imageUrl": image.asset->url,
  "excerpt": array::join(body[0].children[].text, "")
}`;
const options = { next: { revalidate: 30 } };

export default async function Blog() {
  const posts = await client.fetch<SanityDocument[]>(POSTS_QUERY, {}, options);

  return (
    <div className="">
      <div className="pt-12 lg:px-32 px-4 lg:pt-32 lg:pb-16 xl:max-w-3/4 2xl:max-w-2/3">
        <h1 className="text-center md:px-32 lg:px-0 lg:text-start 2xl:!text-5xl/14">
          Titel für Übersicht Blogartikel einfügen
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque
          nulla vero soluta architecto nesciunt eaque nostrum ducimus fugiat
          enim. Ea voluptates asperiores pariatur totam est, error porro quidem
          iusto distinctio?
        </p>
      </div>
      <div className="grid lg:grid-cols-2 gap-24 lg:gap-12 m-8 mt-24 lg:m-32">
        {posts.map((post) => (
          <div key={post._id} className="bg-custom-white dark rounded-xl">
            <Image
              src={post.imageUrl}
              alt={post.title}
              width={1200}
              height={800}
              className=""
            />
            <div className="mx-4 my-2 flex flex-col items-start">
              <Link
                href={`/${post.slug.current}`}
                className="gap-2 pt-4  underline font-semibold text-lg"
                target="_blank"
              >
                {post.title}
              </Link>
              <p className="text-sm font-light">
                {post.excerpt?.substring(0, 140)}...
              </p>
              <Link
                href={`/${post.slug.current}`}
                className="flex gap-2 pt-4 items-center text-sm font-semibold"
                target="_blank"
              >
                Zum Post
                <SquareArrowOutUpRight className="shrink-0" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
