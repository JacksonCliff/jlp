"use client";

import Image from "next/image";

type Props = {
  photoSrc?: string;     // your couple image
  frameSrc?: string;     // your lace/floral SVG (transparent center)
  title?: string;        // "WE'RE GETTING MARRIED"
  dateLine?: string;     // "SEPTEMBER 15, 2026"
  body?: string;         // paragraph
  names?: string;        // "Arabella & James"
};

export default function LaceInviteSection({
  photoSrc = "/images/couple-landscape.jpg",
  frameSrc = "/floral-frame.svg", // <-- use your svg here
  title = "WE’RE GETTING MARRIED",
  dateLine = "SEPTEMBER 15, 2026",
  body = "Together with their families, they joyfully invite you to celebrate their wedding. Join us for an unforgettable day of love, laughter, and happily ever after.",
  names = "Thu & Baktykan",
}: Props) {
  return (
    <section className="relative w-full bg-[#2b140e]">
      
      {/* vignette */}
      <div
        className="pointer-events-none absolute inset-0 opacity-80"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(255,255,255,0.05) 0%, rgba(0,0,0,0.70) 70%, rgba(0,0,0,0.92) 100%)",
        }}
      />
      <div className="relative mx-auto w-full">
        {/* Card */}
        <div className="relative mx-auto px-6 py-10 sm:px-10 sm:py-14">
          {/* Photo + Frames */}
            <div className="mx-auto w-full max-w-[300px] py-14">
                <div className="relative aspect-square">
                    {/* OUTER frame (SVG) */}
                    <img
                        src={frameSrc}
                        alt="Frame"
                        className="pointer-events-none absolute inset-0 h-full w-full scale-[1.18]"
                    />

                    {/* INNER frame (white border) + photo */}
                    <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-[86%] h-[86%] border-[20px] border-white/90 bg-white">
                        <div className="relative h-full w-full">
                        <Image
                            src={photoSrc}
                            alt="Couple"
                            fill
                            className="object-cover"
                            priority
                        />

                        {/* optional inner soft glow */}
                        <div className="absolute inset-0 pointer-events-none shadow-[inset_0_0_0_1px_rgba(255,255,255,0.08)]" />
                        </div>
                    </div>
                    </div>
                </div>
            </div>

          {/* Text */}
          <div className="mx-auto mt-8 max-w-[620px] text-center text-white">
            <div className="text-[11px] sm:text-xs tracking-[0.35em] text-white/80">
              {title}
            </div>

            <div className="mt-3 text-[11px] sm:text-xs tracking-[0.30em] text-white/65">
              {dateLine}
            </div>

            <p className="mx-auto mt-5 text-[13px] sm:text-[14px] leading-6 sm:leading-7 text-white/70">
              {body}
            </p>

            {/* divider */}
            <div className="mx-auto mt-7 h-px w-24 bg-white/20" />

            <div className="mt-6 text-3xl sm:text-5xl text-white/90 font-[family-name:var(--font-monsieur)]">
              {names}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
