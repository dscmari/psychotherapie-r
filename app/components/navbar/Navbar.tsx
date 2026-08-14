"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import DesktopNavbar from "./desktop/DesktopNavbar";
import ContactBtn from "../btns/ContactBtn";
import { div } from "motion/react-client";
import { ChevronDown } from "lucide-react";

type Props = {
  className?: string;
};

export default function Navbar({ className }: Props) {
  const [showMenu, setShowMenu] = useState(false);
  const [isSelected, setIsSelected] = useState(false);

  const toggleMenu = () => {
    toggleX();
    setShowMenu(!showMenu);
  };

  const toggleX = () => {
    const burgerMenu = document.getElementById("burger-menu");
    const spans = burgerMenu?.getElementsByTagName("span");

    if (spans) {
      Array.from(spans).forEach((span) => {
        span.classList.toggle("open");
      });
    }
  };

  return (
    <div className={`${className}`}>
      {/* mobile & tablet */}
      <div className="xl:hidden w-full p-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="font-semibold font-lora text-xl sm:hidden">
            Psychotherapie Röhl
          </Link>
          <Link
            href="/"
            className="hidden sm:block font-semibold font-lora text-xl"
          >
            Psychotherapie Praxis Anne <br /> Julia Röhl
          </Link>
          <div className="burgermenu" id="burger-menu" onClick={toggleMenu}>
            <a className="top"></a>
            <a className="middle"></a>
            <a className="bottom"></a>
          </div>
        </div>
        {showMenu ? (
          <div>
            <div
              className={`flex items-center gap-4 pt-12 ${
                isSelected
                  ? "border-t border-slate-200"
                  : "border-b-2 border-slate-200"
              }`}
              onClick={() => setIsSelected((prev) => !prev)}
            >
              <span className="font-semibold pb-2">
                Behandlungsschwerpunkte
              </span>
              <ChevronDown
                className={`transition-transform shrink-0 text-custom-blue ${
                  isSelected ? "scale-y-[-1]" : ""
                }`}
              />
            </div>

            <motion.div
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ ease: "easeOut", duration: 1 }}
              onClick={toggleMenu}
            >
              <AnimatePresence>
                {isSelected && (
                  <motion.ol
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className={`pl-4 pb-8 flex flex-col gap-4  ${
                      isSelected ? "" : ""
                    }`}
                  >
                    <div className="flex flex-col gap-4 mr-8 mt-4 font-semibold">
                      <div
                        className="pt-4 pb-1 border-b-2 border-slate-200 w-full flex justify-start"
                        onClick={() => setShowMenu((prev) => !prev)}
                      >
                        <Link href="/#/">Verhaltenstherapie</Link>
                      </div>
                      <div
                        className="pb-1 border-b-2 border-slate-200"
                        onClick={() => setShowMenu((prev) => !prev)}
                      >
                        <Link href="/#/">Traumatherapie</Link>
                      </div>
                      <div
                        className="pb-1 border-b-2 border-slate-200"
                        onClick={() => setShowMenu((prev) => !prev)}
                      >
                        <Link href="/besser-schlafen/">Psychoonkologie</Link>
                      </div>
                    </div>
                  </motion.ol>
                )}
              </AnimatePresence>
              <div className="flex flex-col items-start  gap-4 pb-12 font-semibold text-custom-blue">
                <div className="pt-4 pb-1 border-b-2 border-slate-200 w-full flex justify-start">
                  <Link href={"/#/"} className="text-right">
                    Ausbildung & Qualifikation
                  </Link>
                </div>
                <div className="pb-1 border-b-2 border-slate-200 w-full flex justify-start">
                  <Link href={"/#/"} className="text-right">
                    Ablauf und Kosten
                  </Link>
                </div>
                <div className="pb-1 border-b-2 border-slate-200 w-full flex justify-start">
                  <Link href={"/ueber-mich/"} className="text-right">
                    Blog
                  </Link>
                </div>

                <ContactBtn className="mx-auto" />
              </div>
            </motion.div>
          </div>
        ) : null}
      </div>
      {/* Desktop */}
      <div className="hidden xl:block w-full">
        <DesktopNavbar />
      </div>
    </div>
  );
}
