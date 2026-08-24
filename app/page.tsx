"use client";

import React, { useState } from "react";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { Stats } from "@/components/sections/Stats";
import { About } from "@/components/sections/About";
import { AlumniDirectory } from "@/components/sections/AlumniDirectory";
import { NewsEvents } from "@/components/sections/NewsEvents";
import { Gallery } from "@/components/sections/Gallery";
import { FAQ } from "@/components/sections/FAQ";
import { CTA } from "@/components/sections/CTA";
import { JoinModal } from "@/components/ui/JoinModal";

export default function Home() {
  const [joinModalOpen, setJoinModalOpen] = useState(false);

  const handleOpenJoinModal = () => {
    setJoinModalOpen(true);
  };

  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      {/* Dynamic Navbar */}
      <Navbar onOpenJoinModal={handleOpenJoinModal} />

      {/* Main Single Page Sections */}
      <main className="flex-grow">
        <Hero onOpenJoinModal={handleOpenJoinModal} />
        <Stats />
        <About />
        <AlumniDirectory />
        <NewsEvents />
        <Gallery />
        <FAQ />
        <CTA onOpenJoinModal={handleOpenJoinModal} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Reusable Join / Registration Modal with Radix Dialog */}
      <JoinModal
        open={joinModalOpen}
        onOpenChange={setJoinModalOpen}
      />
    </div>
  );
}
