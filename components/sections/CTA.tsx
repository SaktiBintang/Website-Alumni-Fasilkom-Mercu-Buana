"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  UserPlus,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Briefcase,
  GraduationCap,
  Network,
} from "lucide-react";
import { Button } from "@/components/ui/Button";

interface CTAProps {
  onOpenJoinModal: () => void;
}

export function CTA({ onOpenJoinModal }: CTAProps) {
  return (
    <section className="py-20 relative overflow-hidden bg-slate-900">
      {/* Background Gradient & Glow Effects */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-950 via-blue-900 to-sky-950 opacity-95" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-blue-500/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="p-8 sm:p-14 lg:p-16 rounded-3xl bg-gradient-to-br from-white/10 to-white/5 border border-white/15 backdrop-blur-xl shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left: Text & CTA (7 cols) */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-200 text-xs font-semibold">
                <Sparkles className="w-3.5 h-3.5 text-blue-300" />
                <span>Mari Terhubung Bersama</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-white tracking-tight leading-tight">
                Siap Menjadi Bagian dari Kemajuan{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-blue-200">
                  Fasilkom Mercu Buana?
                </span>
              </h2>

              <p className="text-sm sm:text-base text-blue-100/80 leading-relaxed max-w-xl mx-auto lg:mx-0">
                Daftarkan diri Anda hari ini dan nikmati kemudahan akses jejaring alumni, peluang karir prioritas di industri teknologi, serta wadah kolaborasi inovasi digital.
              </p>

              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <Button
                  variant="white"
                  size="lg"
                  icon={<UserPlus className="w-5 h-5 text-blue-700" />}
                  onClick={onOpenJoinModal}
                  className="w-full sm:w-auto text-blue-900 font-bold shadow-xl hover:bg-blue-50"
                >
                  Gabung Sekarang
                </Button>
                <a href="#direktori" className="w-full sm:w-auto">
                  <Button
                    variant="outline"
                    size="lg"
                    icon={<ArrowRight className="w-5 h-5" />}
                    className="w-full sm:w-auto border-white/40 text-white hover:bg-white/15 hover:border-white"
                  >
                    Eksplor Direktori
                  </Button>
                </a>
              </div>
            </div>

            {/* Right: 4 Benefit mini cards (5 cols) */}
            <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md">
                <Network className="w-6 h-6 text-sky-400 mb-2" />
                <h4 className="text-sm font-bold font-heading text-white mb-1">
                  Jejaring Karir Global
                </h4>
                <p className="text-xs text-blue-100/70 leading-relaxed">
                  Koneksi langsung ke alumni yang berkarir di Big Tech, Unicorn, dan BUMN.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md">
                <Briefcase className="w-6 h-6 text-sky-400 mb-2" />
                <h4 className="text-sm font-bold font-heading text-white mb-1">
                  Info Lowongan Kerja
                </h4>
                <p className="text-xs text-blue-100/70 leading-relaxed">
                  Akses prioritas lowongan kerja dan magang dari ekosistem mitra alumni.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md">
                <GraduationCap className="w-6 h-6 text-sky-400 mb-2" />
                <h4 className="text-sm font-bold font-heading text-white mb-1">
                  Workshop & Bootcamp
                </h4>
                <p className="text-xs text-blue-100/70 leading-relaxed">
                  Diskon dan tiket gratis untuk program sertifikasi serta tech talk berkala.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md">
                <ShieldCheck className="w-6 h-6 text-sky-400 mb-2" />
                <h4 className="text-sm font-bold font-heading text-white mb-1">
                  Legalisir Online Cepat
                </h4>
                <p className="text-xs text-blue-100/70 leading-relaxed">
                  Layanan terpadu verifikasi dokumen akademik & rekomendasi beasiswa.
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
