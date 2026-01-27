"use client";

import DetailsStickerSection from "@/components/Wedding/Components/FromDetailsPage/DetailsStickerSection";
import LaceInviteSection from "@/components/Wedding/Components/FromMainPage/LaceInvite";
import RsvpSection from "@/components/Wedding/Components/FromMainPage/RsvpSection";
import StorySection from "@/components/Wedding/Components/FromMainPage/Story";
import WhiteTextBubble from "@/components/Wedding/Components/FromMainPage/WhiteTextBubble";
import {  weddingImages } from "@/Constant/UIDatas";
import Image from "next/image";
import { useRouter } from "next/navigation";

type Section = {
  id: string;
  bgSrc: string; // background image
  stickerTitle: string; // big script title
  stickerSubtitle?: string; // small text like "CLICK HERE"
  onClickPath?: string; // route when sticker is clicked
  decorations?: "polaroids" | "rsvpEnvelope" | "lacePhoto";
};

const SECTIONS: Section[] = [
  {
    id: "details",
    bgSrc: "/invite/bg-1.jpg",
    stickerTitle: "The Details",
    stickerSubtitle: "CLICK HERE",
    onClickPath: "/details",
    decorations: "polaroids",
  },
  {
    id: "rsvp",
    bgSrc: "/invite/bg-2.jpg",
    stickerTitle: "Kindly RSVP",
    stickerSubtitle: "CLICK HERE",
    onClickPath: "/rsvp",
    decorations: "rsvpEnvelope",
  },
  {
    id: "story",
    bgSrc: "/invite/bg-3.jpg",
    stickerTitle: "Our Story",
    stickerSubtitle: "CLICK HERE",
    onClickPath: "/story",
    decorations: "lacePhoto",
  },
];

function StickerButton(props: {
  title: string;
  subtitle?: string;
  onClick?: () => void;
}) {
  const { title, subtitle, onClick } = props;

  return (
    <button
      type="button"
      onClick={onClick}
      className="group relative"
      aria-label={title}
    >
      <div
        className={[
          "w-[280px] sm:w-[340px]",
          "rounded-[42px]",
          "bg-[#f7f4ef]",
          "shadow-[0_18px_40px_rgba(0,0,0,0.45)]",
          "px-8 py-10",
          "transition-transform duration-300 ease-out",
          "group-hover:scale-[1.02] group-active:scale-[0.99]",
        ].join(" ")}
        style={{
          boxShadow:
            "0 18px 40px rgba(0,0,0,0.45), 0 0 0 10px rgba(255,255,255,0.08)",
        }}
      >
        <div className="text-center">
          <div className="font-[cursive] text-4xl sm:text-5xl text-[#2a1a14] leading-tight">
            {title}
          </div>
          {subtitle ? (
            <div className="mt-3 text-xs tracking-[0.35em] uppercase text-[#2a1a14]/70">
              {subtitle}
            </div>
          ) : null}
        </div>
      </div>
    </button>
  );
}

function Polaroids() {
  return (
    <div className="pointer-events-none absolute inset-0">
      <div className="absolute left-1/2 top-[54%] -translate-x-1/2 -translate-y-1/2 w-[360px] sm:w-[460px]">
        <div className="absolute -left-4 top-0 rotate-[-8deg]">
          <div className="bg-white p-3 pb-10 shadow-[0_14px_35px_rgba(0,0,0,0.35)]">
            <Image
              src="/invite/photo-1.jpg"
              alt="Polaroid 1"
              width={220}
              height={180}
              className="h-[160px] w-[220px] object-cover"
            />
          </div>
        </div>

        <div className="absolute right-0 top-12 rotate-[10deg]">
          <div className="bg-white p-3 pb-10 shadow-[0_14px_35px_rgba(0,0,0,0.35)]">
            <Image
              src="/invite/photo-2.jpg"
              alt="Polaroid 2"
              width={220}
              height={180}
              className="h-[160px] w-[220px] object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function RSVPEnvelope() {
  return (
    <div className="pointer-events-none absolute inset-0">
      <div className="absolute left-1/2 top-[62%] -translate-x-1/2 -translate-y-1/2 rotate-[-10deg]">
        <Image
          src={"/envelope.png"}
          alt="Envelope"
          width={520}
          height={360}
          className="drop-shadow-[0_20px_45px_rgba(0,0,0,0.45)] w-[320px] sm:w-[420px] h-auto"
        />
      </div>
    </div>
  );
}

function LacePhoto() {
  return (
    <div className="pointer-events-none absolute inset-0">
      <div className="absolute left-1/2 top-[70%] -translate-x-1/2 -translate-y-1/2 rotate-[-6deg]">
        <div className="rounded-[28px] bg-white/95 p-4 shadow-[0_20px_45px_rgba(0,0,0,0.45)]">
          <div
            className="rounded-[22px] p-3"
            style={{
              border: "8px solid rgba(0,0,0,0.1)",
              outline: "2px solid rgba(0,0,0,0.08)",
              outlineOffset: "6px",
            }}
          >
            <Image
              src="/invite/photo-3.jpg"
              alt="Framed photo"
              width={520}
              height={420}
              className="h-[240px] w-[280px] sm:h-[280px] sm:w-[340px] object-cover rounded-[14px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default function InviteScrollPage() {
  const router = useRouter();

  return (
    <main className="min-h-screen bg-black">
      {/* ✅ FIRST SECTION: Bubble intro */}
      <section className="relative h-[50svh] w-full overflow-hidden">

        {/* ✅ bubble on TOP */}
          <WhiteTextBubble className="min-h-[50svh]"/>

      </section>

       <section className="relative min-h-[100svh] w-full overflow-hidden">
           <LaceInviteSection
            photoSrc={weddingImages.couple2}
            frameSrc={weddingImages.frame}
            dateLine="15 | 08 | 2026 • DUBAI, UAE"
          />
      </section>

      <section className="relative min-h-[100svh] w-full overflow-hidden">
           <RsvpSection
             bgSrc={weddingImages.hall3}
             cardSrc={weddingImages.envelop}
           />
      </section>

      <section className="relative min-h-[100svh] w-full overflow-hidden">
           <DetailsStickerSection/>
      </section>

      <section className="relative min-h-[100svh] w-full overflow-hidden">
           <StorySection/>
      </section>
   

    
    </main>
  );
}
