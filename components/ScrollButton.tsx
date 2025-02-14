'use client'
import { useState, useEffect } from "react";
import { IoIosArrowUp } from "react-icons/io";

export default function ScrollButton() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    showButton && (
      <button
        onClick={scrollToTop}
        className="fixed bottom-6 left-6 p-3 bg-zinc-800/90 text-white rounded-full shadow-lg transition-all hover:bg-zinc-700/95"
      >
       <IoIosArrowUp size={24} />
      </button>
    )
  );
}
