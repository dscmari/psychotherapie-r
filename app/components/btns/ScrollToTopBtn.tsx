'use client'
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import scrollToTop from "@/app/utils/scrollToTop";
import { ArrowUp } from "lucide-react";


export default function ScrollToTopBtn() {
  const [isVisible, setIsVisible] = useState(false);
  const routePath = usePathname();

  const handleScroll = () => {
    if (window.scrollY > 100) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    scrollToTop();
  }, [routePath]);

  return (
    <>
      {isVisible && (
        <button
          className="hidden md:block fixed bottom-10 bg-stone right-10 opacity-50 rounded-4xl p-2 cursor-pointer"
          onClick={scrollToTop}
        >
          <ArrowUp className="text-stone-light" size={24} />
        </button>
      )}
    </>
  );
}
