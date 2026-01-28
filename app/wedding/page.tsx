"use client";

import DetailsStickerSection from "@/components/Wedding/Components/FromDetailsPage/DetailsStickerSection";
import LaceInviteSection from "@/components/Wedding/Components/FromMainPage/LaceInvite";
import RsvpSection from "@/components/Wedding/Components/FromMainPage/RsvpSection";
import StorySection from "@/components/Wedding/Components/FromMainPage/Story";
import WhiteTextBubble from "@/components/Wedding/Components/FromMainPage/WhiteTextBubble";



export default function InviteScrollPage() {

  return (
    <main className="min-h-screen bg-black">
      {/* ✅ FIRST SECTION: Bubble intro */}
      <section className="relative h-[50svh] w-full overflow-hidden">

        {/* ✅ bubble on TOP */}
          <WhiteTextBubble className="min-h-[50svh]"/>

      </section>

       <section className="relative min-h-[100svh] w-full overflow-hidden">
           <LaceInviteSection
            photoSrc='/image/wedding/coupleBg2.jpg'
            frameSrc='/image/wedding/weddingFrame.svg'
            dateLine="15 | 08 | 2026 • DUBAI, UAE"
          />
      </section>

      <section className="relative min-h-[100svh] w-full overflow-hidden">
           <RsvpSection
             bgSrc='/image/wedding/hall3.jpg'
             cardSrc='/image/wedding/envelop.png'
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
