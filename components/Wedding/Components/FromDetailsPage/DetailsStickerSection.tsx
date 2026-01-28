"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

type Props = {
  bgSrc?: string;            // section background image
  ringSvgSrc?: string;       // round ring svg behind (transparent center ok)
  petalSrc?: string;         // white petal/flower blob (PNG or SVG)
  photo1Src?: string;        // top photo frame
  photo2Src?: string;        // bottom photo frame

  title?: string;            // "The Details"
  cta?: string;              // "CLICK HERE"
};

export default function DetailsStickerSection({
  ringSvgSrc = '/image/wedding/oval.svg',
  petalSrc = '/image/wedding/floral3.svg',
  photo1Src = '/image/wedding/hall.jpg',
  photo2Src = '/image/wedding/hall2.jpg',
  title = "The Details",
  cta = "CLICK HERE",
}: Props) {
  const router = useRouter();

  return (
    <section className="relative w-full overflow-hidden py-20 sm:py-28 bg-[#2b140e]">
      {/* vignette */}
      <div
        className="pointer-events-none absolute inset-0 opacity-80"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(255,255,255,0.05) 0%, rgba(0,0,0,0.70) 70%, rgba(0,0,0,0.92) 100%)",
        }}
      />
      {/* Sticker Stack */}
      <div className="relative z-10 mx-auto w-full max-w-[1100px] px-6">
        <div className="mx-auto flex justify-center">
          <div className="relative w-[min(520px,92vw)] aspect-square">
            {/* 1) Ring SVG behind */}
            <img
              src={ringSvgSrc}
              alt="Ring"
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[92%] h-[92%] opacity-90"
            />

            {/* 2) Photo frames (stick out right) */}
            <div className="absolute right-[-2%] top-[20%] w-[42%] rotate-[-12deg] z-[2]">
              <PhotoFrame src={photo1Src} />
            </div>

            <div className="absolute right-[-2%] top-[45%] w-[44%] rotate-[20deg] z-[1]">
              <PhotoFrame src={photo2Src} />
            </div>

           {/* 3) Petal blob on top (covers everything) */}
            <button 
                type="button"
                onClick={() => router.push("details")}
                className="absolute inset-0 z-[5] cursor-pointer flex items-center justify-center"
                aria-label="Open details"
            >
            {/* Petal image wrapper controls size + rotation */}
            <div className="relative w-[80%] h-[80%]">
                <Image
                src={petalSrc}
                alt="Petal sticker"
                fill
                className="object-contain"
                priority
                />

                {/* Text stays centered relative to petal */}
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-10 top-[-6%]">
                {/* counter-rotate text so it stays straight */}
                <div className="font-[family-name:var(--font-monsieur)] text-[clamp(28px,5vw,44px)] text-black/80 leading-[1.1]">
                    {title}
                </div>

                <div className=" text-[10px] sm:text-[11px] tracking-[0.35em] font-semibold text-black/65">
                    {cta}
                </div>
                </div>
            </div>
            </button>

          </div>
        </div>
      </div>
    </section>
  );
}

function PhotoFrame({ src }: { src: string }) {
  return (
    <div className="relative aspect-[4/3] bg-white shadow-[0_18px_45px_rgba(0,0,0,0.45)]">
      {/* “polaroid” border */}
      <div className="absolute inset-0 ring-1 ring-black/10" />
      <div className="absolute left-[8%] top-[8%] right-[8%] bottom-[14%] overflow-hidden bg-neutral-200">
        <Image src={src} alt="Photo" fill className="object-cover" />
      </div>
      {/* thicker bottom lip like a polaroid */}
      <div className="absolute left-0 right-0 bottom-0 h-[26%] rounded-b-[12px] bg-white" />
    </div>
  );
}
