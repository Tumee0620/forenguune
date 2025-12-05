"use client";

import { Sparkles } from "lucide-react";
import { Button } from "./ui/button";

interface GiftBoxProps {
  onOpen: () => void;
  isOpening: boolean;
}

export default function GiftBox({ onOpen, isOpening }: GiftBoxProps) {
  return (
    <div className={`relative ${isOpening ? "animate-unwrap" : ""}`}>
      {/* Glow ring behind the gift */}
      <div className="absolute inset-0 -m-8 bg-primary/20 rounded-full blur-3xl animate-pulse" />

      {/* Sparkles around the gift */}
      {[...Array(6)].map((_, i) => (
        <div
          key={i}
          className="absolute text-primary animate-twinkle"
          style={{
            top: `${Math.sin((i / 6) * Math.PI * 2) * 120 + 50}%`,
            left: `${Math.cos((i / 6) * Math.PI * 2) * 120 + 50}%`,
            animationDelay: `${i * 0.3}s`,
            transform: "translate(-50%, -50%)",
          }}
        >
          <Sparkles className="w-5 h-5" />
        </div>
      ))}

      {/* Gift Box */}
      <div className="relative group cursor-pointer" onClick={onOpen}>
        <div className="w-56 h-56 md:w-72 md:h-72 relative animate-float rounded-2xl overflow-hidden">
          {/* Box Base - Dark with gold accent */}
          <div className="absolute inset-0 bg-linear-to-br from-card via-muted to-card rounded-2xl border border-primary/30" />

          {/* Shimmer effect */}
          <div
            className="absolute inset-0 bg-linear-to-r from-transparent via-primary/10 to-transparent animate-shimmer"
            style={{ backgroundSize: "200% 100%" }}
          />

          {/* Horizontal Ribbon */}
          <div className="absolute top-1/2 left-0 right-0 h-6 bg-linear-to-r from-primary/80 via-primary to-primary/80 transform -translate-y-1/2 shadow-lg shadow-primary/30" />

          {/* Vertical Ribbon */}
          <div className="absolute top-0 bottom-0 left-1/2 w-6 bg-linear-to-b from-primary/80 via-primary to-primary/80 transform -translate-x-1/2 shadow-lg shadow-primary/30" />

          {/* Bow */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
            <div className="relative">
              {/* Bow loops */}
              <div className="absolute -left-10 -top-5 w-10 h-8 bg-linear-to-br from-primary to-primary/70 rounded-full transform -rotate-45 animate-ribbon shadow-lg shadow-primary/40" />
              <div
                className="absolute -right-10 -top-5 w-10 h-8 bg-linear-to-bl from-primary to-primary/70 rounded-full transform rotate-45 animate-ribbon shadow-lg shadow-primary/40"
                style={{ animationDelay: "0.2s" }}
              />
              {/* Bow center */}
              <div className="w-7 h-7 bg-linear-to-br from-primary to-accent rounded-full shadow-lg shadow-primary/50 flex items-center justify-center">
                <div className="w-3 h-3 bg-primary-foreground/20 rounded-full" />
              </div>
              {/* Bow tails */}
              <div className="absolute -bottom-7 -left-2 w-3 h-10 bg-linear-to-b from-primary to-primary/60 transform -rotate-12 rounded-b-full" />
              <div className="absolute -bottom-7 -right-2 w-3 h-10 bg-linear-to-b from-primary to-primary/60 transform rotate-12 rounded-b-full" />
            </div>
          </div>

          {/* Corner shine effect */}
          <div className="absolute top-3 left-3 w-12 h-12 bg-primary/10 rounded-full blur-xl" />
        </div>

        {/* Click prompt */}
        <div className="absolute -bottom-20 left-1/2 transform -translate-x-1/2 whitespace-nowrap">
          <Button
            onClick={onOpen}
            className="bg-linear-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-primary-foreground px-10 py-6 text-lg rounded-full shadow-xl shadow-primary/30 hover:shadow-2xl hover:shadow-primary/40 transition-all duration-300 hover:scale-105 border border-primary/50"
          >
            <Sparkles className="w-5 h-5 mr-2" />
            Намайг дар
          </Button>
        </div>
      </div>
    </div>
  );
}
