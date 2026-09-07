"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowRight,
  UserPlus,
  Sparkles,
  Award,
  Users2,
  TrendingUp,
  ShieldCheck,
  CheckCircle,
} from "lucide-react";
import { Button } from "@/components/ui/Button";

interface HeroProps {
  onOpenJoinModal: () => void;
}

export function Hero({ onOpenJoinModal }: HeroProps) {
  // Stagger variants for entrance
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
    },
  };

  return (
    <section
      id="beranda"
      className="relative min-h-[92vh] pt-32 pb-20 sm:pt-40 sm:pb-28 flex items-center overflow-hidden bg-gradient-to-b from-blue-50/60 via-slate-50 to-white"
    >
      {/* Background Decorative Glow Elements */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-gradient-to-tr from-blue-400/15 to-sky-300/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -top-24 right-10 w-80 h-80 bg-blue-600/10 rounded-full blur-2xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headlines & CTA (7 cols) */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-7 space-y-6 text-center lg:text-left"
          >

            {/* Main Headline */}
            <motion.h1
              variants={itemVariants}
              className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-heading text-slate-950 tracking-tight leading-[1.2]"
            >
              Merajut Sinergi,{" "}
              <span className="gradient-text-blue block sm:inline">
                Menggerakkan Inovasi
              </span>{" "}
              Teknologi Masa Depan.
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              variants={itemVariants}
              className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed text-balance"
            >
              Selamat datang di portal resmi <strong>Ikatan Keluarga Alumni Fakultas Ilmu Komputer Universitas Mercu Buana</strong>. Wadah terintegrasi untuk ribuan alumni Teknik Informatika, Sistem Informasi & Magister Sains Data dalam membangun jejaring karir global, riset teknologi, dan kontribusi nyata untuk almamater.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
            >
              <Button
                variant="gradient"
                size="lg"
                icon={<UserPlus className="w-5 h-5" />}
                onClick={onOpenJoinModal}
                className="w-full sm:w-auto shadow-blue-600/30"
              >
                Daftar Alumni
              </Button>
              <a href="#tentang-kami" className="w-full sm:w-auto">
                <Button
                  variant="white"
                  size="lg"
                  icon={<ArrowRight className="w-5 h-5" />}
                  className="w-full sm:w-auto text-slate-800"
                >
                  Pelajari Lebih Lanjut
                </Button>
              </a>
            </motion.div>

            {/* Trust Highlights Strip */}
            <motion.div
              variants={itemVariants}
              className="pt-6 border-t border-slate-200/70 grid grid-cols-3 gap-4 text-left"
            >
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-blue-100/70 text-blue-700 flex items-center justify-center shrink-0">
                  <Award className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-900">Akreditasi Unggul</p>
                  <p className="text-[11px] text-slate-500">Standar BAN-PT / LAM INFOKOM</p>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-sky-100/70 text-sky-700 flex items-center justify-center shrink-0">
                  <TrendingUp className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-900">92% Serapan Kerja</p>
                  <p className="text-[11px] text-slate-500">Dalam 3 Bulan Kelulusan</p>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-lg bg-indigo-100/70 text-indigo-700 flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs font-bold text-slate-900">Tracer Terverifikasi</p>
                  <p className="text-[11px] text-slate-500">Database Resmi Kampus</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column: Visual Showcase with Floating Badges (5 cols) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 relative"
          >
            {/* Background Blob behind card */}
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-600 to-sky-400 rounded-3xl transform rotate-2 scale-100 opacity-20 filter blur-xl" />

            {/* Main Visual Card */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-slate-900 aspect-[4/3] sm:aspect-[16/11]">
              <Image
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1000&auto=format&fit=crop&q=80"
                alt="Alumni Fasilkom Universitas Mercu Buana berkolaborasi"
                fill
                priority
                className="object-cover transition-transform duration-700 hover:scale-105"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />

              {/* Caption Overlay */}
              <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-slate-950/75 backdrop-blur-md border border-white/10 text-white">
                <div className="flex items-center gap-2 mb-1">
                  <span className="px-2 py-0.5 rounded-md bg-blue-600 text-[10px] font-semibold uppercase tracking-wider">
                    Komunitas Aktif
                  </span>
                  <span className="text-[11px] text-slate-300">Meruya & Menteng Campus</span>
                </div>
                <p className="text-xs sm:text-sm font-medium text-slate-200">
                  Kolaborasi lintas angkatan untuk kemajuan ekosistem teknologi Indonesia.
                </p>
              </div>
            </div>

            {/* Floating Badge 1: Top Left */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-6 -left-6 bg-white/95 backdrop-blur-md p-3.5 rounded-2xl shadow-xl border border-blue-100 hidden sm:flex items-center gap-3"
            >
              <div className="w-11 h-11 rounded-xl bg-blue-600 text-white flex items-center justify-center shadow-md shadow-blue-500/30">
                <Users2 className="w-6 h-6" />
              </div>
              <div>
                <p className="text-sm font-extrabold text-slate-900 font-heading">5.850+</p>
                <p className="text-[11px] text-slate-500 font-medium">Alumni Terhubung</p>
              </div>
            </motion.div>

            {/* Floating Badge 2: Bottom Right */}
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
              className="absolute -bottom-6 -right-6 bg-white/95 backdrop-blur-md p-3.5 rounded-2xl shadow-xl border border-blue-100 hidden sm:flex items-center gap-3"
            >
              <div className="w-11 h-11 rounded-xl bg-emerald-600 text-white flex items-center justify-center shadow-md shadow-emerald-500/30">
                <CheckCircle className="w-6 h-6" />
              </div>
              <div>
                <p className="text-sm font-extrabold text-slate-900 font-heading">190+ Mitra</p>
                <p className="text-[11px] text-slate-500 font-medium">Industri & Tech Unicorn</p>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
