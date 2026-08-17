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
      <div className="lg:hidden w-full p-4 md:px-8">
        <div className="flex justify-between items-center">
          {/* <Link href="/" className="font-semibold font-lora text-xl sm:hidden">
            Psychotherapie Röhl
          </Link> */}
          <Link
            href="/"
            className=" font-semibold font-lora text-xl"
          >
            Psychotherapie Praxis  <br />Anne Julia Röhl
          </Link>
          <div
            className={`burgermenu ${showMenu ? "open" : ""}`}
            id="burger-menu"
            onClick={toggleMenu}
            aria-label="Menü öffnen"
          >
            <svg
              className="text-sage-brown"
              viewBox="0 0 40 30"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                className="top"
                width="40"
                height="3"
                rx="1.5"
                fill="currentColor"
              />
              <rect
                className="middle"
                y="10"
                width="40"
                height="3"
                rx="1.5"
                fill="currentColor"
              />
              <rect
                className="bottom"
                y="20"
                width="40"
                height="3"
                rx="1.5"
                fill="currentColor"
              />
            </svg>
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
                    <div className="flex flex-col gap-4 mr-8 font-semibold">
                      <div
                        className="pt-4 pb-1 border-b-2 border-slate-200 w-full flex justify-start"
                        onClick={() => setShowMenu((prev) => !prev)}
                      >
                        <Link href="/verhaltenstherapie/">Verhaltenstherapie</Link>
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
                <div className="pb-1 border-b-2 border-slate-200 w-full flex justify-start">
                  <Link href={"/#/"} className="text-right">
                    Psychotherapy 🇬🇧
                  </Link>
                </div>

                <ContactBtn className="mx-auto" />
              </div>
            </motion.div>
          </div>
        ) : null}
      </div>
      {/* Desktop */}
      <div className="hidden lg:block w-full">
        <DesktopNavbar />
      </div>
    </div>
  );
}
