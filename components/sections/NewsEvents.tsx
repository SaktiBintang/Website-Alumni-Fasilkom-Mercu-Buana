"use client";

import React, { useState } from "react";
import Image from "next/image";
import * as Tabs from "@radix-ui/react-tabs";
import * as Dialog from "@radix-ui/react-dialog";
import { motion, AnimatePresence } from "framer-motion";
import {
  Newspaper,
  Calendar,
  Clock,
  MapPin,
  Tag,
  ArrowRight,
  X,
  Share2,
  CheckCircle2,
  Sparkles,
} from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { newsEventsData, NewsEvent } from "@/lib/data";

export function NewsEvents() {
  const [activeTab, setActiveTab] = useState<string>("all");
  const [selectedItem, setSelectedItem] = useState<NewsEvent | null>(null);

  const filteredItems = newsEventsData.filter((item) => {
    if (activeTab === "all") return true;
    return item.type === activeTab;
  });

  return (
    <section id="berita-acara" className="py-24 sm:py-32 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="Kabar & Aktivitas Terkini"
          badgeIcon={<Newspaper className="w-4 h-4" />}
          title="Berita & Agenda"
          titleHighlight="Komunitas Alumni"
          description="Ikuti perkembangan riset, pencapaian prestasi alumni, dan agenda pertemuan penting di lingkungan Fasilkom Universitas Mercu Buana."
          align="center"
        />

        {/* Filter Tabs using Radix UI */}
        <Tabs.Root
          value={activeTab}
          onValueChange={setActiveTab}
          className="w-full flex flex-col items-center mb-12"
        >
          <Tabs.List
            aria-label="Filter kategori berita dan acara"
            className="flex items-center gap-1.5 p-1.5 bg-slate-100/80 border border-slate-200/80 rounded-2xl mb-8"
          >
            <Tabs.Trigger
              value="all"
              className="px-5 py-2 text-xs sm:text-sm font-semibold rounded-xl transition-all data-[state=active]:bg-white data-[state=active]:text-blue-700 data-[state=active]:shadow-sm data-[state=inactive]:text-slate-600 data-[state=inactive]:hover:bg-slate-200/50"
            >
              Semua Publikasi
            </Tabs.Trigger>
            <Tabs.Trigger
              value="berita"
              className="px-5 py-2 text-xs sm:text-sm font-semibold rounded-xl transition-all data-[state=active]:bg-white data-[state=active]:text-blue-700 data-[state=active]:shadow-sm data-[state=inactive]:text-slate-600 data-[state=inactive]:hover:bg-slate-200/50"
            >
              Kabar Berita
            </Tabs.Trigger>
            <Tabs.Trigger
              value="acara"
              className="px-5 py-2 text-xs sm:text-sm font-semibold rounded-xl transition-all data-[state=active]:bg-white data-[state=active]:text-blue-700 data-[state=active]:shadow-sm data-[state=inactive]:text-slate-600 data-[state=inactive]:hover:bg-slate-200/50"
            >
              Agenda Acara
            </Tabs.Trigger>
          </Tabs.List>

          {/* Cards Grid */}
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full"
          >
            <AnimatePresence mode="popLayout">
              {filteredItems.map((item) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                >
                  <div
                    onClick={() => setSelectedItem(item)}
                    className="cursor-pointer group h-full flex flex-col justify-between bg-white rounded-3xl overflow-hidden border border-slate-200/80 shadow-soft hover:shadow-soft-xl hover:border-blue-300/80 transition-all duration-300 transform hover:-translate-y-1.5"
                  >
                    <div>
                      {/* Image Thumbnail */}
                      <div className="relative aspect-[16/10] overflow-hidden bg-slate-900">
                        <Image
                          src={item.image}
                          alt={item.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-500"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                        <div className="absolute top-3.5 left-3.5 flex items-center gap-2">
                          <span
                            className={`px-3 py-1 rounded-full text-xs font-bold text-white shadow-md backdrop-blur-md ${
                              item.type === "acara"
                                ? "bg-gradient-to-r from-blue-600 to-sky-500"
                                : "bg-gradient-to-r from-slate-900 to-slate-800"
                            }`}
                          >
                            {item.type === "acara" ? "Agenda Acara" : "Berita"}
                          </span>
                          <span className="px-2.5 py-1 rounded-full text-[11px] font-medium bg-white/90 text-slate-800 shadow-sm backdrop-blur-md">
                            {item.category}
                          </span>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="p-6">
                        <div className="flex items-center gap-2 text-xs text-slate-500 mb-2.5 font-medium">
                          <Calendar className="w-3.5 h-3.5 text-blue-600" />
                          <span>{item.date}</span>
                          {item.location && (
                            <>
                              <span>&bull;</span>
                              <span className="truncate max-w-[130px]">{item.location}</span>
                            </>
                          )}
                        </div>

                        <h3 className="font-heading font-bold text-base sm:text-lg text-slate-900 leading-snug group-hover:text-blue-600 transition-colors line-clamp-2 mb-3">
                          {item.title}
                        </h3>

                        <p className="text-xs sm:text-sm text-slate-600 leading-relaxed line-clamp-3">
                          {item.summary}
                        </p>
                      </div>
                    </div>

                    {/* Card Footer Button */}
                    <div className="px-6 pb-6 pt-2 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-blue-600 group-hover:text-blue-700">
                      <span>Baca Selengkapnya</span>
                      <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1.5 transition-transform" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </Tabs.Root>
      </div>

      {/* Radix Dialog for News & Event Details */}
      <Dialog.Root open={!!selectedItem} onOpenChange={(open) => !open && setSelectedItem(null)}>
        <AnimatePresence>
          {selectedItem && (
            <Dialog.Portal forceMount>
              <Dialog.Overlay asChild>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="fixed inset-0 bg-slate-950/60 backdrop-blur-sm z-50"
                />
              </Dialog.Overlay>

              <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
                <Dialog.Content asChild>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95, y: 20 }}
                    transition={{ duration: 0.25, ease: "easeOut" }}
                    className="w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-slate-100 overflow-hidden relative max-h-[85vh] flex flex-col"
                  >
                    {/* Modal Banner Image */}
                    <div className="relative aspect-[16/8] sm:aspect-[16/7] w-full bg-slate-900 shrink-0">
                      <Image
                        src={selectedItem.image}
                        alt={selectedItem.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 700px"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />

                      <Dialog.Close asChild>
                        <button
                          type="button"
                          aria-label="Tutup detail modal"
                          className="absolute top-4 right-4 p-2 rounded-full bg-slate-950/60 hover:bg-slate-950/90 text-white backdrop-blur-md transition-colors"
                        >
                          <X className="w-5 h-5" />
                        </button>
                      </Dialog.Close>

                      <div className="absolute bottom-4 left-6 right-6">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold uppercase tracking-wider bg-blue-600 text-white">
                            {selectedItem.category}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Scrollable Content Body */}
                    <div className="p-6 sm:p-8 overflow-y-auto space-y-5">
                      <div>
                        <Dialog.Title className="text-xl sm:text-2xl font-bold font-heading text-slate-900 leading-snug">
                          {selectedItem.title}
                        </Dialog.Title>

                        <div className="mt-3 flex flex-wrap items-center gap-y-2 gap-x-4 text-xs text-slate-500 font-medium pb-4 border-b border-slate-100">
                          <span className="flex items-center gap-1.5 text-blue-700 font-semibold">
                            <Calendar className="w-3.5 h-3.5" />
                            {selectedItem.date}
                          </span>
                          {selectedItem.time && (
                            <span className="flex items-center gap-1.5">
                              <Clock className="w-3.5 h-3.5 text-slate-400" />
                              {selectedItem.time}
                            </span>
                          )}
                          {selectedItem.location && (
                            <span className="flex items-center gap-1.5">
                              <MapPin className="w-3.5 h-3.5 text-slate-400" />
                              {selectedItem.location}
                            </span>
                          )}
                        </div>
                      </div>

                      {/* Highlights box if available */}
                      {selectedItem.highlights && selectedItem.highlights.length > 0 && (
                        <div className="p-4 rounded-2xl bg-blue-50/80 border border-blue-100">
                          <h4 className="text-xs font-bold text-blue-900 uppercase tracking-wider mb-2 flex items-center gap-1.5">
                            <Sparkles className="w-3.5 h-3.5 text-blue-600" />
                            Poin Utama Agenda
                          </h4>
                          <ul className="space-y-1.5 text-xs text-slate-700">
                            {selectedItem.highlights.map((h, i) => (
                              <li key={i} className="flex items-center gap-2">
                                <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                                <span>{h}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {/* Full Story Paragraphs */}
                      <div className="space-y-3 text-sm text-slate-700 leading-relaxed">
                        {selectedItem.content.map((p, i) => (
                          <p key={i}>{p}</p>
                        ))}
                      </div>

                      {/* Modal Footer actions */}
                      <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                        <span className="text-xs text-slate-400">
                          Dipublikasikan oleh: {selectedItem.author || "Redaksi IKA Fasilkom UMB"}
                        </span>
                        <Dialog.Close asChild>
                          <Button variant="primary" size="sm">
                            Tutup
                          </Button>
                        </Dialog.Close>
                      </div>
                    </div>
                  </motion.div>
                </Dialog.Content>
              </div>
            </Dialog.Portal>
          )}
        </AnimatePresence>
      </Dialog.Root>
    </section>
  );
}
