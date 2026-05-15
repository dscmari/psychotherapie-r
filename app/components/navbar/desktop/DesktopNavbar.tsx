"use client";
import Image from "next/image";
import Link from "next/link";
import ContactBtn from "../../btns/ContactBtn";
import { House, Mail, Phone } from "lucide-react";
import { ShiftingDropDown } from "./ShiftingDropDown";

type Props = {
  className?: string;
};

export default function DesktopNavbar({ className }: Props) {
  return (
    <div className={`relative z-100 mx-auto pb-4 px-16 ${className}`}>
      <div className="flex justify-end gap-8 font-light p-4 text-sm ">
          <div className="flex items-center gap-2 ">
          <House className="shrink-0 size-4" />
          <span>Nußbaumstraße 14, 80336 München</span>
        </div>
        <div className="flex items-center gap-2 ">
          <Phone className="shrink-0 size-4" />
          <span>+49 1234 123456</span>
        </div>
        <div className="flex items-center gap-2">
          <Mail className="shrink-0 size-4" />
          <span>info@musterfrau.de</span>
        </div>
      </div>
      <div className="flex items-center gap-16 mt-4">
        <Link className="font-semibold !font-lora text-xl" href={"/"}>Psychotherapie Praxis Anne Julia Röhl</Link>
        <ShiftingDropDown />
        <div className="flex items-center gap-8">
          <ContactBtn />
        </div>
      </div>
    </div>
  );
}
