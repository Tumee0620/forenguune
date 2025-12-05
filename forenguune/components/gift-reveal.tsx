"use client";

import { useState, useEffect, useRef } from "react";
import { Heart, Sparkles } from "lucide-react";
import { Song } from "./song";
import { Button } from "./ui/button";

const poem = [
  "Нарны туяа шиг дулаахан инээмсэглэлтэй,",
  "Намрын салхи шиг намуухан зан ааштай .",
  "Харцаараа хүнийг аргадан тайтгаруулж,",
  "Хүмүүний зүрхэнд гэрэл гэгээ түгээдэг нэгэн.",
  "",
  "Эелдэг байдлынх нь өнгө зөөлөн бороонд шингэж,",
  "Энхрий инээднийх нь чимээ сэтгэлд ая тоглодог.",
  "Гарых нь хөдөлгөөн хүртэл намуухан шүлэг мэт,",
  "Гэгээ тээж алхах нь хүртэл уянгыг бүтээнэ.",
  "",
  "Арслан, бар мэт бардам ч дотроо зөөлөн ,",
  "Аянга шиг хүчтэй ч салхи шиг уян.",
  "Аадар шиг ааштай ч шүүдэр шиг сэтгэлтэй,",
  "Аашных нь дөлгөөн, сэтгэлийнх нь уужимд оршидог шүү",
];
interface GiftBoxProps {
  onOpen: () => void;
  isOpening: boolean;
}

export default function GiftReveal({ onOpen, isOpening }: GiftBoxProps) {
  const [visibleLines, setVisibleLines] = useState(0);
  const [showHeart, setShowHeart] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setVisibleLines((prev) => {
        if (prev >= poem.length) {
          clearInterval(timer);
          setTimeout(() => setShowHeart(true), 500);
          return prev;
        }
        return prev + 1;
      });
    }, 400);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="animate-reveal w-full max-w-2xl mx-auto px-4">
      {/* Floating sparkles */}
      <div className="fixed inset-0 pointer-events-none z-40">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="absolute animate-snow text-primary"
            style={{
              left: `${Math.random() * 100}%`,
              top: "-20px",
              animationDuration: `${Math.random() * 4 + 3}s`,
              animationDelay: `${Math.random() * 3}s`,
              opacity: 0.6,
            }}
          >
            <Sparkles className="w-4 h-4" />
          </div>
        ))}
      </div>

      {/* Title */}
      <div className="text-center mb-12">
        <h2
          className="text-5xl md:text-6xl text-primary mb-4 animate-glow-pulse"
          style={{ fontFamily: "var(--font-script), cursive" }}
        >
          For You
        </h2>
        <div className="flex items-center justify-center gap-4">
          <div className="h-px w-16 bg-gradient-to-r from-transparent to-primary/50" />
          <Sparkles className="w-5 h-5 text-primary animate-twinkle" />
          <div className="h-px w-16 bg-gradient-to-l from-transparent to-primary/50" />
        </div>
      </div>

      {/* Poem Container */}
      <div className="relative">
        {/* Glow background */}
        <div className="absolute inset-0 -m-8 bg-primary/5 rounded-3xl blur-2xl" />

        <div className="relative bg-card/50 backdrop-blur-sm border border-primary/20 rounded-2xl p-8 md:p-12 shadow-2xl shadow-primary/10">
          {/* Decorative corners */}
          <div className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-primary/40 rounded-tl-lg" />
          <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-primary/40 rounded-tr-lg" />
          <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-primary/40 rounded-bl-lg" />
          <div className="absolute bottom-4 right-4 w-8 h-8 border-b-2 border-r-2 border-primary/40 rounded-br-lg" />

          {/* Poem lines */}
          <div className="space-y-3 text-center">
            {poem.map((line, index) => (
              <p
                key={index}
                className={`text-lg md:text-xl font-light tracking-wide transition-all duration-700 ${
                  index < visibleLines
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-4"
                } ${line === "" ? "h-4" : ""}`}
                style={{
                  color: line === "" ? "transparent" : "var(--foreground)",
                  fontFamily: "var(--font-sans)",
                  textShadow:
                    index < visibleLines
                      ? "0 0 20px rgba(255, 215, 0, 0.1)"
                      : "none",
                }}
              >
                {line || "\u00A0"}
              </p>
            ))}
          </div>

          {/* Heart animation at the end */}
          {showHeart && (
            <div className="flex justify-center mt-10 animate-float-up">
              <div className="relative">
                <Heart
                  className="w-12 h-12 text-secondary fill-secondary animate-pulse"
                  style={{
                    filter: "drop-shadow(0 0 10px rgba(220, 38, 38, 0.5))",
                  }}
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-primary animate-twinkle" />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="absolute bottom-1 right-1">
        <Song />
      </div>
      {/* Signature */}
      <div className="text-center mt-10">
        <p
          className="text-2xl text-primary/80"
          style={{ fontFamily: "var(--font-script), cursive" }}
        >
          Your Secret Santa
        </p>
      </div>
    </div>
  );
}
