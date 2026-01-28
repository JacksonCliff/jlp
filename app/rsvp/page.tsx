"use client";

import Link from "next/link";
import Image from "next/image";

export default function RsvpLanding() {
  return (
    <main className="relative min-h-screen flex items-center justify-center bg-[#2b140e] text-[#f5e9e2] px-6">
      {/* Soft vignette */}
      <div
        className="pointer-events-none absolute inset-0 opacity-70"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(255,255,255,0.04) 0%, rgba(0,0,0,0.6) 70%, rgba(0,0,0,0.9) 100%)",
        }}
      />

      <div className="relative text-center max-w-[420px]">
        {/* Title */}
        <h1 className="font-[family-name:var(--font-monsieur)] text-[clamp(42px,6vw,64px)] text-[#e8d8cf]">
          RSVP
        </h1>

        {/* Decorative Divider */}
        <div className="flex justify-center my-4 opacity-80">
          <Image
            src='/image/wedding/weddingFrame.svg'  // small flourish svg
            alt="Ornament"
            width={90}
            height={24}
          />
        </div>

        {/* Message */}
        <p className="text-sm leading-relaxed text-[#d8c2b8]">
          Kindly respond by <span className="text-[#f0e0d6]">August 20, 2026</span><br />
          We look forward to celebrating with you.
        </p>

        {/* Date */}
        <p className="mt-6 text-[11px] tracking-[0.35em] text-[#c9b2a8] uppercase">
          Please reply by 21 August 2026
        </p>

        {/* Button */}
        <Link
          href="/rsvp/form"
          className="inline-block mt-8 border border-[#e8d8cf] px-8 py-3 text-[12px] tracking-[0.35em] uppercase hover:bg-[#e8d8cf] hover:text-[#2b140e] transition-all duration-300"
        >
          Please Reply Now
        </Link>

        {/* Back link */}
        <div className="mt-16 text-[10px] tracking-[0.4em] opacity-60 hover:opacity-100">
          <Link href="/">← Go Back</Link>
        </div>
      </div>
    </main>
  );
}
