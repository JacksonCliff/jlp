"use client";

import { weddingImages } from "@/Constant/UIDatas";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

type Props = {
  bgSrc?: string;
  cardSrc?: string;
  iconSrc?: string;
  topText?: string;
  topText2?: string;
  bottomText?: string;
};

export default function StorySection({
  bgSrc = weddingImages.hall2,
  cardSrc = weddingImages.story3,
  iconSrc = weddingImages.story4,
  topText = "Our",
  topText2 = "Story",
  bottomText = "CLICK HERE",
}: Props) {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.4 } // triggers when 40% is visible
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full overflow-hidden py-20 sm:py-28"
    >
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div
          className={`absolute inset-0 will-change-transform ${
            isVisible ? "animate-slow-pan" : ""
          }`}
        >
          <Image
            src={bgSrc}
            alt="RSVP background"
            fill
            priority
            className="object-cover"
          />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-[1000px] px-6 flex justify-center">
        <div className="relative w-[min(540px,92vw)]">
          <div className="relative aspect-[3/3] overflow-hidden rounded-[24px]">
            <Image
              src={cardSrc}
              alt="RSVP card"
              fill
              className="object-cover"
            />

            {/* Text over the picture */}
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 py-4">
              <div className="font-[family-name:var(--font-monsieur)] text-[clamp(28px,5vw,44px)] text-black drop-shadow-md leading-[1.2]">
                {topText}
                <br />
                {topText2}
              </div>
            <div className="my-3 w-[100px] sm:w-[100px] opacity-80">
                <Image
                    src={iconSrc}
                    alt="Divider icon"
                    width={100}
                    height={100}
                    className="object-contain"
                />
                </div>
              <div className="tracking-[0.35em] text-[clamp(5px,1vw,10px)] font-semibold text-black">
                {bottomText}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
