"use client";

import React, { useState } from "react";
import Image from "next/image";
import * as Tabs from "@radix-ui/react-tabs";
import { motion, AnimatePresence } from "framer-motion";
import {
  Users,
  Briefcase,
  Building,
  GraduationCap,
  Quote,
  Linkedin,
  Search,
  ExternalLink,
} from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { alumniData, Alumni } from "@/lib/data";

export function AlumniDirectory() {
  const [activePeriod, setActivePeriod] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const filteredAlumni = alumniData.filter((item) => {
    const matchesPeriod =
      activePeriod === "all" ? true : item.period === activePeriod;
    const matchesQuery =
      searchQuery === ""
        ? true
        : item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          item.role.toLowerCase().includes(searchQuery.toLowerCase()) ||
          item.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
          item.program.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesPeriod && matchesQuery;
  });

  return (
    <section id="direktori" className="py-24 sm:py-32 bg-slate-50 relative overflow-hidden">
      {/* Background Decorative patterns */}
      <div className="absolute -top-32 left-1/3 w-96 h-96 bg-blue-100/40 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="Direktori & Kisah Sukses"
          badgeIcon={<Users className="w-4 h-4" />}
          title="Jejaring Alumni"
          titleHighlight="Berdaya Saing Global"
          description="Temukan inspirasi karir, jejak langkah profesional, dan testimoni alumni Fasilkom Mercu Buana di berbagai sektor teknologi terkemuka."
          align="center"
        />

        {/* Radix Tabs Component for Filtering */}
        <Tabs.Root
          value={activePeriod}
          onValueChange={setActivePeriod}
          className="w-full flex flex-col items-center mb-12"
        >
          <div className="flex flex-col sm:flex-row items-center justify-between w-full gap-4 max-w-4xl mb-8">
            {/* Tabs List */}
            <Tabs.List
              aria-label="Filter angkatan alumni"
              className="flex items-center gap-1.5 p-1.5 bg-white border border-slate-200/80 rounded-2xl shadow-sm overflow-x-auto max-w-full"
            >
              <Tabs.Trigger
                value="all"
                className="px-4 py-2 text-xs sm:text-sm font-semibold rounded-xl transition-all data-[state=active]:bg-blue-600 data-[state=active]:text-white data-[state=active]:shadow-md data-[state=inactive]:text-slate-600 data-[state=inactive]:hover:bg-slate-50"
              >
                Semua Angkatan
              </Tabs.Trigger>
              <Tabs.Trigger
                value="2015-2018"
                className="px-4 py-2 text-xs sm:text-sm font-semibold rounded-xl transition-all data-[state=active]:bg-blue-600 data-[state=active]:text-white data-[state=active]:shadow-md data-[state=inactive]:text-slate-600 data-[state=inactive]:hover:bg-slate-50"
              >
                2015 - 2018
              </Tabs.Trigger>
              <Tabs.Trigger
                value="2019-2021"
                className="px-4 py-2 text-xs sm:text-sm font-semibold rounded-xl transition-all data-[state=active]:bg-blue-600 data-[state=active]:text-white data-[state=active]:shadow-md data-[state=inactive]:text-slate-600 data-[state=inactive]:hover:bg-slate-50"
              >
                2019 - 2021
              </Tabs.Trigger>
              <Tabs.Trigger
                value="2022-2025"
                className="px-4 py-2 text-xs sm:text-sm font-semibold rounded-xl transition-all data-[state=active]:bg-blue-600 data-[state=active]:text-white data-[state=active]:shadow-md data-[state=inactive]:text-slate-600 data-[state=inactive]:hover:bg-slate-50"
              >
                2022 - 2025
              </Tabs.Trigger>
            </Tabs.List>

            {/* Quick Search Input */}
            <div className="relative w-full sm:w-72">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Cari nama, role, kantor..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 text-xs sm:text-sm bg-white border border-slate-200/80 rounded-2xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              />
            </div>
          </div>

          {/* Cards Grid */}
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 w-full"
          >
            <AnimatePresence mode="popLayout">
              {filteredAlumni.map((alumni) => (
                <motion.div
                  key={alumni.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                >
                  <Card
                    variant="default"
                    hoverEffect
                    className="h-full flex flex-col justify-between p-6 bg-white border-slate-200/80 shadow-soft group"
                  >
                    <div>
                      {/* Top Header with Avatar & Badge */}
                      <div className="flex items-center gap-4 mb-4">
                        <div className="relative w-14 h-14 rounded-full overflow-hidden border-2 border-blue-500 shadow-md shrink-0">
                          <Image
                            src={alumni.avatar}
                            alt={`Foto ${alumni.name}`}
                            fill
                            className="object-cover group-hover:scale-110 transition-transform duration-300"
                            sizes="56px"
                          />
                        </div>
                        <div>
                          <h4 className="font-heading font-bold text-sm text-slate-900 leading-snug">
                            {alumni.name}
                          </h4>
                          <span className="inline-block mt-0.5 px-2 py-0.5 rounded-md bg-blue-50 text-blue-700 text-[10px] font-semibold">
                            Lulus {alumni.gradYear} &bull; {alumni.program === "Teknik Informatika" ? "TI" : "SI"}
                          </span>
                        </div>
                      </div>

                      {/* Job & Company */}
                      <div className="space-y-1 mb-4 pb-4 border-b border-slate-100 text-xs">
                        <p className="font-semibold text-slate-800 flex items-center gap-1.5">
                          <Briefcase className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                          <span>{alumni.role}</span>
                        </p>
                        <p className="text-slate-600 flex items-center gap-1.5">
                          <Building className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                          <span>{alumni.company}</span>
                        </p>
                      </div>

                      {/* Quote */}
                      <div className="relative pl-3 border-l-2 border-blue-200 my-2">
                        <Quote className="w-3.5 h-3.5 text-blue-400 mb-1 opacity-60" />
                        <p className="text-xs text-slate-600 italic leading-relaxed">
                          &ldquo;{alumni.quote}&rdquo;
                        </p>
                      </div>
                    </div>

                    {/* Footer LinkedIn */}
                    {alumni.linkedIn && (
                      <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between">
                        <span className="text-[11px] font-medium text-slate-400">
                          Profil Profesional
                        </span>
                        <a
                          href={alumni.linkedIn}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`LinkedIn ${alumni.name}`}
                          className="inline-flex items-center gap-1 text-xs font-semibold text-blue-600 hover:text-blue-800 transition-colors"
                        >
                          <Linkedin className="w-3.5 h-3.5" />
                          <span>Koneksi</span>
                        </a>
                      </div>
                    )}
                  </Card>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {filteredAlumni.length === 0 && (
            <div className="text-center py-12 bg-white rounded-3xl border border-slate-200 p-8 w-full max-w-md">
              <p className="text-slate-500 text-sm">Tidak ada alumni yang sesuai dengan pencarian Anda.</p>
            </div>
          )}
        </Tabs.Root>
      </div>
    </section>
  );
}
