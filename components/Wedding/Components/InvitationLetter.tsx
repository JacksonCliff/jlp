"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Home() {
  const router = useRouter();
  const [leaving, setLeaving] = useState(false);

  // Title animation: hidden on first paint, then rises up + fades in
  const [showTitle, setShowTitle] = useState(false);

  useEffect(() => {
    // Small delay so it starts invisible, then animates in
    const t = window.setTimeout(() => setShowTitle(true), 150);
    return () => window.clearTimeout(t);
  }, []);

  const handleClick = () => {
    if (leaving) return;
    setLeaving(true);

    window.setTimeout(() => {
      router.push("/wedding");
    }, 450);
  };

  return (
    <main className="min-h-screen bg-[#2b140e] flex flex-col items-center justify-center px-6">
      {/* vignette */}
      <div
        className="pointer-events-none absolute inset-0 opacity-80"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(255,255,255,0.05) 0%, rgba(0,0,0,0.70) 70%, rgba(0,0,0,0.92) 100%)",
        }}
      />
      {/* Envelope + animated title live in the same relative container */}
      <div className="relative flex flex-col items-center">
        {/* Title: starts invisible "inside" envelope, then rises up and appears */}
        <h1
          className={[
            "absolute left-1/2 -translate-x-1/2 text-white text-center pointer-events-none",
            "transition-all ease-out",
            "duration-[900ms]",
            // when leaving, hide it too
            leaving ? "opacity-0" : "",
            showTitle
              ? "opacity-100 -translate-y-44"
              : "opacity-0 -translate-y-10",
          ].join(" ")}
          // Position baseline: roughly where the envelope "opening" is
          style={{ top: "40%" }}
        >
          <span className="block text-xs tracking-[0.35em] uppercase opacity-80">
            You are invited to
          </span>
          <span className="block mt-4 text-3xl md:text-4xl lg:text-5xl whitespace-nowrap font-[family-name:var(--font-monsieur)]">
            Thu &amp; Baktykan
          </span>


        </h1>

        {/* Envelope PNG */}
        <button
          type="button"
          onClick={handleClick}
          className="relative select-none"
          aria-label="Open invitation"
        >
          <div
            className={[
              "transition-all duration-500 ease-out",
              "hover:scale-[1.03] active:scale-[0.99]",
              leaving ? "opacity-0 scale-[1.08] translate-y-2" : "opacity-100",
            ].join(" ")}
          >
            <Image
              src="/image/Wedding/envelop.png"
              alt="Envelope"
              width={370}
              height={210}
              priority
              className="drop-shadow-[0_18px_35px_rgba(0,0,0,0.45)]"
            />
          </div>
        </button>

          <p
          className={[
            "text-white text-sm -mt-7 uppercase", // pulls it UP
            "transition-all ease-out duration-[900ms]",
            leaving ? "opacity-0" : "",
            showTitle
              ? "opacity-100 -translate-y-2"
              : "opacity-0 translate-y-3",
          ].join(" ")}
        >
          Click Envelop to open
        </p>

      </div>
    </main>
  );
}
