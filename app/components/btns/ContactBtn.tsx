"use client";
import Link from "next/link";

type Props = {
  className?: string;
  content?: string;
};

export default function ContactBtn({ className, content }: Props) {
  return (
    <Link
      href={"#"}
      className={`bg-sage !text-stone-50 px-4 py-2  font-semibold tracking-tight rounded-xl whitespace-nowrap hover:shadow-xl ${className}`}
    >
      {content ? content : "Termin anfragen"}
    </Link>
  );
}
