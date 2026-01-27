"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { weddingImages } from "@/Constant/UIDatas";
import TimelineSection from "@/components/Wedding/Components/FromDetailsPage/TimeLine";
import DirectionsSection from "@/components/Wedding/Components/FromDetailsPage/Direction";
import WhereToStaySection from "@/components/Wedding/Components/FromDetailsPage/WhereToStay";
import OtherDetailsSection from "@/components/Wedding/Components/FromDetailsPage/OtherDetails";

type Props = {
  titleBgSrc?: string; // image behind "The Details"
};

export default function DetailsPage({
  titleBgSrc = weddingImages.hall2, // swap to your image
}: Props) {
  const pageRef = useRef<HTMLElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setIsVisible(true),
      { threshold: 0.25 }
    );
    if (pageRef.current) observer.observe(pageRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <main
      ref={pageRef}
      className="relative min-h-screen w-full overflow-hidden bg-[#2b140e] text-[#f3e7df] px-6"
    >
      {/* vignette */}
      <div
        className="pointer-events-none absolute inset-0 opacity-80"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(255,255,255,0.05) 0%, rgba(0,0,0,0.70) 70%, rgba(0,0,0,0.92) 100%)",
        }}
      />

      <div className="relative mx-auto flex min-h-[calc(100vh-7rem)] max-w-[520px] flex-col items-center justify-center text-center">
        {/* Full-width title photo panel */}
        <div className="relative w-screen overflow-hidden">
        <div className={`relative h-[220px] sm:h-[260px] ${isVisible ? "animate-slow-pan" : ""}`}>
            <Image
            src={titleBgSrc}
            alt="Details background"
            fill
            priority
            className="object-cover"
            />
            {/* dark overlay for readability */}
            <div className="absolute inset-0 bg-black/40" />
        </div>

        {/* Title centered over the image */}
        <div className="absolute inset-0 flex items-center justify-center px-6">
            <h1 className="font-[family-name:var(--font-monsieur)] text-[clamp(40px,6vw,58px)] text-[#f3e7df] drop-shadow-[0_8px_18px_rgba(0,0,0,0.7)]">
            The Details
            </h1>
        </div>
        </div>


        {/* Body */}
        <div className="mt-10 w-full">
          <div className="font-[family-name:var(--font-monsieur)] text-[clamp(28px,4.6vw,40px)] text-[#e9d6cd] leading-[1.05]">
            Date and
            <br />
            Location
          </div>

          <div className="mt-6 text-[11px] tracking-[0.35em] uppercase text-[#d7bfb5]">
            Date
          </div>
          <div className="mt-2 text-sm text-[#f3e7df]/90">
            April 23, 2026
          </div>

          <div className="mt-6 text-[11px] tracking-[0.35em] uppercase text-[#d7bfb5]">
            Location
          </div>
          <div className="mt-2 text-sm leading-6 text-[#f3e7df]/90">
            Bvlgari Resort Dubai
            <br />
            Jumeira Bay Island, Dubai, UAE
          </div>

          <div className="mt-8 h-px w-24 mx-auto bg-white/15" />

          <div className="mt-8 text-[11px] tracking-[0.35em] uppercase text-[#d7bfb5]">
            Reception
          </div>
          <div className="mt-2 text-sm leading-6 text-[#f3e7df]/90">
            6:30 PM — Dinner & Celebration
            <br />
            Dress code: Black Tie
          </div>

          {/* Back */}

          <TimelineSection/>  

          <DirectionsSection/>

          <WhereToStaySection/>

          <OtherDetailsSection/>

          <div className="mb-14 text-[10px] tracking-[0.4em] uppercase text-white/60 hover:text-white/90 transition">
            <Link href="/wedding">← Go Back</Link>
          </div>
        </div>
      </div>
    </main>
  );
}
