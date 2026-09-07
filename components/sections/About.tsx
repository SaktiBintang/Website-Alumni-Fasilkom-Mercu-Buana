"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Sparkles,
  UsersRound,
  ShieldCheck,
  HeartHandshake,
  CheckCircle2,
  Compass,
  Target,
  BookOpen,
} from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { aboutData } from "@/lib/data";

const valueIcons: Record<string, React.ReactNode> = {
  Sparkles: <Sparkles className="w-6 h-6" />,
  UsersRound: <UsersRound className="w-6 h-6" />,
  ShieldCheck: <ShieldCheck className="w-6 h-6" />,
  HeartHandshake: <HeartHandshake className="w-6 h-6" />,
};

export function About() {
  return (
    <section id="tentang-kami" className="py-24 sm:py-32 relative overflow-hidden bg-white">
      {/* Background radial accent */}
      <div className="absolute top-1/2 -right-40 w-96 h-96 bg-blue-50 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="Tentang Organisasi"
          badgeIcon={<Compass className="w-4 h-4" />}
          title="Mewadahi Talenta Komputer,"
          titleHighlight="Mengabdi untuk Negeri"
          description={aboutData.description}
          align="center"
        />

        {/* Vision & Mission Side-by-Side Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">
          {/* Left Column: Image & Campus highlight (5 cols) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-xl border-2 border-slate-100 aspect-[4/5] bg-slate-900">
              <Image
                src="https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&auto=format&fit=crop&q=80"
                alt="Gedung Kampus dan Lab Komputer Universitas Mercu Buana"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 40vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-950/80 via-blue-950/20 to-transparent" />

              <div className="absolute bottom-6 left-6 right-6 p-5 rounded-2xl bg-white/95 backdrop-blur-md shadow-lg border border-white/60">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center font-bold font-heading">
                    UMB
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900 font-heading">
                      Fakultas Ilmu Komputer
                    </h4>
                    <p className="text-xs text-slate-600 leading-snug">
                      Program Studi Teknik Informatika, Sistem Informasi & Magister Sains Data
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Visi & Misi (7 cols) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7 space-y-8"
          >
            {/* Visi Card */}
            <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-br from-blue-50/80 to-sky-50/60 border border-blue-100/80 shadow-sm relative overflow-hidden">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 rounded-xl bg-blue-600 text-white">
                  <Target className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold font-heading text-slate-900">
                  Visi Perkumpulan
                </h3>
              </div>
              <p className="text-slate-700 leading-relaxed text-sm sm:text-base font-medium">
                &ldquo;{aboutData.vision}&rdquo;
              </p>
            </div>

            {/* Misi List */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-xl bg-blue-100 text-blue-800">
                  <BookOpen className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold font-heading text-slate-900">
                  Misi Utama
                </h3>
              </div>

              <div className="grid grid-cols-1 gap-3.5 pt-2">
                {aboutData.missions.map((mission, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: idx * 0.1 }}
                    className="flex items-start gap-3.5 p-3.5 rounded-2xl bg-slate-50 border border-slate-100 hover:bg-blue-50/50 hover:border-blue-200 transition-colors"
                  >
                    <div className="mt-0.5 w-5 h-5 rounded-full bg-blue-600 text-white flex items-center justify-center text-xs font-bold shrink-0">
                      {idx + 1}
                    </div>
                    <p className="text-sm text-slate-700 font-medium leading-normal">
                      {mission}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Core Values 4-Card Grid */}
        <div className="pt-8 border-t border-slate-100">
          <div className="text-center max-w-xl mx-auto mb-10">
            <h3 className="text-2xl font-bold font-heading text-slate-900">
              Nilai Inti Organisasi
            </h3>
            <p className="text-slate-600 text-sm mt-1">
              Prinsip yang memandu setiap langkah dan kolaborasi ikatan alumni.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {aboutData.values.map((val, idx) => (
              <Card
                key={val.title}
                variant="default"
                hoverEffect
                className="bg-white border-slate-200/80 p-6 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-4 border border-blue-100">
                    {valueIcons[val.icon] || <Sparkles className="w-6 h-6" />}
                  </div>
                  <h4 className="text-lg font-bold font-heading text-slate-900 mb-2">
                    {val.title}
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {val.desc}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
