"use client";

import Image from "next/image";

type Props = {
  ornamentSrc?: string; // small flourish svg/png
};

export default function DirectionsSection({
  ornamentSrc = '/image/wedding/weddingFrame.svg', // put your icon path here
}: Props) {
  return (
    <main className="relative min-h-screen w-full overflow-hidden text-[#f3e7df] px-6 py-14">


      <div className="relative mx-auto flex min-h-[calc(100vh-7rem)] max-w-[520px] flex-col items-center justify-center text-center">
        {/* Title */}
        <h1 className="font-[family-name:var(--font-monsieur)] text-[clamp(40px,6vw,58px)] text-[#f3e7df]">
          Directions
        </h1>

        {/* Ornament */}
        <div className="mt-4 opacity-85">
          <Image src={ornamentSrc} alt="Ornament" width={90} height={30} />
        </div>

        {/* Section: By Car */}
        <div className="mt-10">
          <div className="text-[10px] tracking-[0.45em] uppercase text-[#d7bfb5]">
            By Car
          </div>
          <p className="mt-4 text-sm leading-7 text-[#f3e7df]/85">
            Follow signs to{" "}
            <span className="text-[#f3e7df]">Jumeirah Bay Island</span>. Parking
            is available at the entrance.
            <br />
            <span className="opacity-90">Please allow extra time for arrival.</span>
          </p>
        </div>

        {/* Section: By Taxi */}
        <div className="mt-10">
          <div className="text-[10px] tracking-[0.45em] uppercase text-[#d7bfb5]">
            By Taxi
          </div>
          <p className="mt-4 text-sm leading-7 text-[#f3e7df]/85">
            Ask your driver for{" "}
            <span className="text-[#f3e7df]">Bvlgari Resort Dubai</span>, Jumeirah
            Bay Island.
            <br />
            Drop-off is available at the main entrance.
          </p>

          <p className="mt-5 text-[12px] leading-7 text-[#f3e7df]/75 italic">
            For help on the day, please contact us at{" "}
            <span className="not-italic text-[#f3e7df]">+971 50 123 9875</span>.
          </p>
        </div>

      
      </div>
    </main>
  );
}
