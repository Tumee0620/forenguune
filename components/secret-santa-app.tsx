"use client";

import { useState } from "react";
import Snowfall from "./snowfall";
import GiftBox from "./gift-box";
import GiftReveal from "./gift-reveal";
import Sparkles from "./sparkles";

export default function SecretSantaApp() {
  const [isOpened, setIsOpened] = useState(false);
  const [isOpening, setIsOpening] = useState(false);

  const handleOpen = () => {
    setIsOpening(true);
    setTimeout(() => {
      setIsOpened(true);
      setIsOpening(false);
    }, 800);
  };

  return (
    <main className="min-h-screen relative overflow-hidden bg-background">
      {/* Dark gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-card/50 to-background" />

      {/* Radial glow effect */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent" />

      <Snowfall />
      <Sparkles />

      <div className="container mx-auto px-4 py-8 relative z-10">
        {/* Header */}
        <header className="text-center mb-12 pt-8">
          <div className="inline-block">
            <span className="text-sm uppercase tracking-[0.3em] text-primary/80 mb-4 block font-light">
              A Special heart voice for you
            </span>
            <h1
              className="text-6xl md:text-8xl text-primary mb-6 animate-glow-pulse"
              style={{ fontFamily: "var(--font-script), cursive" }}
            >
              Enguunee
            </h1>
            <div className="flex items-center justify-center gap-6">
              <div className="h-px w-20 bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
              <div className="w-2 h-2 bg-primary rounded-full animate-twinkle" />
              <div className="h-px w-20 bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
            </div>
          </div>
        </header>

        {/* Main Gift Area */}
        <section className="flex flex-col items-center justify-center min-h-[60vh]">
          {!isOpened ? (
            <GiftBox onOpen={handleOpen} isOpening={isOpening} />
          ) : (
            <GiftReveal onOpen={handleOpen} isOpening={isOpening} />
          )}
        </section>

        {/* Footer */}
        <footer className="text-center py-12 mt-8">
          <p className="text-muted-foreground/60 text-sm font-light tracking-wide">
            Made for Enguunee
          </p>
        </footer>
      </div>
    </main>
  );
}
