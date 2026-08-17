"use client";
import Image from "next/image";
import Link from "next/link";
import ContactBtn from "../../btns/ContactBtn";
import { House, Mail, Phone } from "lucide-react";
import { ShiftingDropDown } from "./ShiftingDropDown";
import { usePathname } from "next/navigation";

type Props = {
  className?: string;
};

export default function DesktopNavbar({ className }: Props) {
  const pathname = usePathname()
  return (
    <div className={`relative z-100 mx-auto pb-4 px-4 xl:px-16 ${className}`}>
      <div className="flex justify-between font-light py-4 text-sm ">
        <div className="flex flex-col">
          <p>Privatpraxis für Psychotherapie Anne Julia Röhl</p>
          <p>Psychologische Psychotherapeutin & Psychoonkologin</p>
        </div>
        <div className="flex items-center gap-4">
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
      </div>
      <div className="flex items-start justify-between gap-16 mt-4 ">
        <Link className="font-semibold !font-lora text-xl 2xl:self-center" href={"/"}>
          Psychotherapie <br /> Anne Julia Röhl
        </Link>
        {/* <ShiftingDropDown /> */}
        <div className="flex flex-col gap-2 !font-lora">
          <div className="flex gap-8 xl:gap-16">
            <Link className={`nav-link ${pathname === "/verhaltenstherapie" ? "active" : ""}`} href={"/verhaltenstherapie/"} >
              Verhaltenstherapie
            </Link>
            <Link className="nav-link" href={"#"}>
              Traumatherapie
            </Link>
            <Link className="nav-link" href={"#"}>
              Psychoonkologie
            </Link>

            <Link className="nav-link lg:hidden 2xl:inline-block" href={"#"}>
            
              Ausbildung & Qualifikation
            </Link>
               <Link className="nav-link hidden lg:inline-block 2xl:hidden" href={"#"}>
            
              Qualifikation
            </Link>
          </div>
          <div className="flex gap-8 xl:gap-16">
            <Link className="nav-link" href={"#"}>
              Online Psychotherapie
            </Link>
            <Link className="nav-link" href={"#"}>
              Psychotherapy 🇬🇧
            </Link>
            <Link className="nav-link" href={"#"}>
              Ablauf & Kosten
            </Link>
            <Link className="nav-link" href={"#"}>
              Blog
            </Link>
          </div>
        </div>
        <div className="flex items-center gap-8">
          <ContactBtn />
        </div>
      </div>
    </div>
  );
}
