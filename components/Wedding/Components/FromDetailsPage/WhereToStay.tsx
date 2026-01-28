"use client";

import Image from "next/image";

type Hotel = {
  iconSrc?: string;
  name: string;
  lines: string[];
  phone?: string;
  buttonLabel: string;
  buttonHref: string;
};

type Props = {
  hotelIconSrc?: string; // small hotel/building icon
};

export default function WhereToStaySection({
  hotelIconSrc = '/image/wedding/weddingFrame.svg', // set this in your UIDatas
}: Props) {
  const hotels: Hotel[] = [
    {
      iconSrc: hotelIconSrc,
      name: "Mandarin Blue Rose",
      lines: ["Jumeirah Bay Island", "Dubai, UAE"],
      phone: "+971 4 123 4567",
      buttonLabel: "Visit Website",
      buttonHref: "https://example.com",
    },
    {
      iconSrc: hotelIconSrc,
      name: "Hotel Road Island",
      lines: ["Jumeirah Bay Island", "Dubai, UAE"],
      phone: "+971 4 987 6543",
      buttonLabel: "Visit Website",
      buttonHref: "https://example.com",
    },
  ];

  return (
    <main className="relative min-h-screen w-full overflow-hidden text-[#f3e7df] px-6 py-14">

      <div className="relative mx-auto flex min-h-[calc(100vh-7rem)] max-w-[560px] flex-col items-center justify-center text-center">
        <h1 className="font-[family-name:var(--font-monsieur)] text-[clamp(40px,6vw,58px)] text-[#f3e7df]">
          Where To Stay
        </h1>

        <p className="mt-5 max-w-[520px] text-sm leading-7 text-[#f3e7df]/80">
          We have reserved a limited number of rooms at the hotels below. Please
          mention our wedding when booking to receive the preferred rate.
        </p>

        <div className="mt-10 w-full space-y-10">
          {hotels.map((h) => (
            <HotelBlock key={h.name} hotel={h} />
          ))}
        </div>
      </div>
    </main>
  );
}

function HotelBlock({ hotel }: { hotel: Hotel }) {
  return (
    <div className="mx-auto w-full max-w-[520px]">
      {/* icon */}
      {hotel.iconSrc ? (
        <div className="flex justify-center opacity-90">
          <Image src={hotel.iconSrc} alt="" width={54} height={54} />
        </div>
      ) : (
        <div className="mx-auto h-10 w-10 opacity-90">
          <HotelIconSvg />
        </div>
      )}

      <div className="mt-4 text-[11px] tracking-[0.35em] uppercase text-[#d7bfb5]">
        {hotel.name}
      </div>

      <div className="mt-4 text-sm leading-7 text-[#f3e7df]/85">
        {hotel.lines.map((line, i) => (
          <div key={i}>{line}</div>
        ))}
        {hotel.phone ? <div className="mt-2">{hotel.phone}</div> : null}
      </div>

      <a
        href={hotel.buttonHref}
        target="_blank"
        rel="noreferrer"
        className="inline-block mt-7 border border-[#e8d8cf] px-8 py-3 text-[11px] tracking-[0.35em] uppercase text-[#f3e7df] hover:bg-[#e8d8cf] hover:text-[#2b140e] transition-all duration-300"
      >
        {hotel.buttonLabel}
      </a>
    </div>
  );
}

function HotelIconSvg() {
  return (
    <svg viewBox="0 0 48 48" className="h-full w-full text-[#f3e7df]">
      <path
        d="M14 40V16a4 4 0 0 1 4-4h12a4 4 0 0 1 4 4v24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M20 22h2M20 28h2M20 34h2M26 22h2M26 28h2M26 34h2"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M18 40h20"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}
