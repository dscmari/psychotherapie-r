import { PortableText, type SanityDocument } from "next-sanity";
import {
  createImageUrlBuilder,
  type SanityImageSource,
} from "@sanity/image-url";
import Link from "next/link";
import { Metadata } from "next";
import Image from "next/image";
import { ArrowLeft } from "lucide-react";
import { notFound } from "next/navigation";
import { client } from "@/src/sanity/client";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug?: string[] }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const slugPath = slug ? slug.join("/") : "";

  const post = await client.fetch<SanityDocument>(
    POST_QUERY,
    { slug: slugPath },
    options,
  );

  if (!post) {
    return { title: "Post nicht gefunden" };
  }

  return {
    title: post.seoTitle,
  };
}

const POST_QUERY = `*[_type == "post" && slug.current == $slug][0]`;

const { projectId, dataset } = client.config();
const urlFor = (source: SanityImageSource) =>
  projectId && dataset
    ? createImageUrlBuilder({ projectId, dataset }).image(source)
    : null;

const options = { next: { revalidate: 30 } };

export default async function PostPage({
  params,
}: {
  params: Promise<{ slug?: string[] }>; // 1. Typ angepasst
}) {
  const { slug } = await params;
  const slugPath = slug ? slug.join("/") : ""; // 2. Slug wie in generateMetadata zu String zusammenfügen!

  // System-Dateien wie Favicon abfangen
  if (slugPath === "favicon.ico") {
    notFound();
  }

  const post = await client.fetch<SanityDocument>(
    POST_QUERY,
    { slug: slugPath }, // 3. Jetzt schicken wir den korrekten String an Sanity
    options,
  );

  // 4. Falls kein Post existiert, sauber auf 404 leiten
  if (!post) {
    notFound();
  }

  function getImageUrl(image: any, width: number, height: number) {
    if (!image) return null;
    let builder = urlFor(image)?.width(width).auto("format").quality(90);
    if (builder) {
      builder = builder.height(height).fit("max");
      return builder.url();
    } else return null;
  }

  const postImageUrl = getImageUrl(post.image, 800, 500);
  const postImageUrl_2 = getImageUrl(post.image_2, 800, 500);
  const postImageUrl_3 = getImageUrl(post.image_3, 800, 500);
  const postImageUrl_4 = getImageUrl(post.image_4, 800, 500);
  const postImageUrl_5 = getImageUrl(post.image_5, 800, 500);

  return (
    <main className="sanity-container">
      <Link
        href="/blog/"
        className="hidden lg:block mt-4 px-4  md:mt-8 md:px-8 lg:px-16 lg:px-32 font-light text-sm dark:text-custom-white"
      >
        <ArrowLeft className="size-10 text-neutral-500" />
      </Link>
      <div className="flex flex-col items-center max-w-4xl mx-4 lg:mx-auto">
        {postImageUrl && (
          <Image
            src={postImageUrl}
            alt={post.title}
            width={800}
            height={500}
            className="rounded-xl mt-16 "
          />
        )}
        <h1 className="mt-4 lg:mt-8 text-center">{post.title}</h1>
        <p className="text-sm font-light text-center">
          {new Date(post.publishedAt).toLocaleDateString("de-DE", {
            day: "2-digit",
            month: "2-digit",
            year: "numeric",
          }) || "Datum unbekannt"}
        </p>
        <div className="mt-4 lg:mt-8 lg:px-16 sanity-text">
          {Array.isArray(post.body) && <PortableText value={post.body} />}
        </div>
        {postImageUrl_2 && (
          <Image
            src={postImageUrl_2}
            alt={post.title}
            width={800}
            height={500}
            className=" rounded-xl mt-16 "
          />
        )}
        <div className="mt-4 lg:mt-8 lg:px-16 sanity-text">
          {Array.isArray(post.body_2) && <PortableText value={post.body_2} />}
        </div>
        {postImageUrl_3 && (
          <Image
            src={postImageUrl_3}
            alt={post.title}
            width={600}
            height={400}
            className=" rounded-xl mt-16 "
          />
        )}
        <div className="mt-4 lg:mt-8 lg:px-16 sanity-text">
          {Array.isArray(post.body_3) && <PortableText value={post.body_3} />}
        </div>
        {postImageUrl_4 && (
          <Image
            src={postImageUrl_4}
            alt={post.title}
            width={600}
            height={400}
            className=" rounded-xl mt-16 "
          />
        )}
        <div className="mt-4 lg:mt-8 lg:px-16 sanity-text">
          {Array.isArray(post.body_4) && <PortableText value={post.body_4} />}
        </div>
        {postImageUrl_5 && (
          <Image
            src={postImageUrl_5}
            alt={post.title}
            width={600}
            height={400}
            className=" rounded-xl mt-16 "
          />
        )}
        <div className="mt-4 lg:mt-8 lg:px-16 sanity-text">
          {Array.isArray(post.body_5) && <PortableText value={post.body_5} />}
        </div>
      </div>
    </main>
  );
}
