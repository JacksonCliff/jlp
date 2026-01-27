"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";

type Props = {
  bgSrc?: string;
  cardSrc?: string;
  topText?: string;
  topText2?: string;
  bottomText?: string;
};

export default function RsvpSection({
  bgSrc = "/invite/rsvp-bg.jpg",
  cardSrc = "/invite/rsvp-card.png",
  topText = "Kindly",
  topText2 = "Rsvp",
  bottomText = "CLICK HERE",
}: Props) {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const router = useRouter();


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
        <div className="relative aspect-[4/3] overflow-hidden rounded-[24px]">
          <Image
            src={cardSrc}
            alt="RSVP card"
            fill
            className="object-cover"
            priority
          />

          {/* Text over the picture */}
          <div className="absolute inset-0 flex flex-col items-center justify-between text-center px-6 py-14">
            <div className="font-[family-name:var(--font-monsieur)] text-[clamp(28px,5vw,44px)] text-black drop-shadow-md leading-[1.2]">
              {topText}
              <br />
              {topText2}
            </div>

            <div className="tracking-[0.35em] text-[clamp(5px,1vw,10px)] font-semibold text-black mb-5">
              {bottomText}
            </div>
          </div>

          {/* Full clickable overlay */}
          <button
            type="button"
            onClick={() => router.push("/rsvp")}
            aria-label="Open RSVP"
            className="absolute inset-0 z-10 cursor-pointer"
          />
        </div>
        </div>
      </div>
    </section>
  );
}
