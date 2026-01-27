import Image from "next/image";
import { weddingImages } from "@/Constant/UIDatas";

export default function WhiteTextBubble({
  title = "Thu and Baktykan",
  subtitle = "INVITE YOU TO CELEBRATE",
  dateLine = "15 | 08 | 2026 • DUBAI, UAE",
  className = "",
}: {
  title?: string;
  subtitle?: string;
  dateLine?: string;
  className?: string;
}) {
  return (
    <section className={`relative w-full h-[50svh] overflow-hidden flex items-center justify-center ${className}`}>
      
      {/* 🖼 Background Image */}
      <div className="absolute inset-0 animate-slow-pan will-change-transform">
        <Image
          src={weddingImages.couple}
          alt="Wedding background"
          fill
          priority
          className="object-cover"
        />
      </div>

      {/* 💌 Bubble Content */}
      <div className="relative z-10 origin-center scale-[0.7] lg:scale-55">
        <div className="relative w-[min(92vw,560px)]">
          <div
            className="
              relative w-full
              rounded-[clamp(28px,5vw,42px)]
              bg-white border border-black/30
              px-[clamp(18px,4vw,56px)]
              py-[clamp(18px,4vw,40px)]
              text-center
              shadow-[0_18px_40px_rgba(0,0,0,0.45)]
              overflow-visible
            "
          >
            {/* Decorative Shapes (must stay absolute) */}
            <div className="absolute inset-0 z-0 pointer-events-none">
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-[clamp(180px,50vw,280px)] rounded-[clamp(28px,5vw,42px)] bg-white" />
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[clamp(240px,62vw,360px)] h-[clamp(240px,62vw,360px)] rounded-full bg-white" />
            </div>

            {/* Text */}
            <div className="relative z-10">
              <div className="font-serif italic text-[clamp(10px,2.5vw,12px)] tracking-wide text-black/70">
                {subtitle}
              </div>

              <div className="mt-2 font-[family-name:var(--font-monsieur)] text-[clamp(28px,6.5vw,48px)] leading-[1.45] text-black/80 whitespace-nowrap max-w-full overflow-hidden text-ellipsis">
                {title}
              </div>

              <div className="mt-3 text-[clamp(10px,2.4vw,12px)] tracking-[0.25em] text-black/60">
                {dateLine}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
