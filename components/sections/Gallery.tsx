"use client";

import React, { useState } from "react";
import Image from "next/image";
import * as Dialog from "@radix-ui/react-dialog";
import { motion, AnimatePresence } from "framer-motion";
import { Image as ImageIcon, ZoomIn, X, Calendar, Tag } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { galleryData, GalleryItem } from "@/lib/data";

export function Gallery() {
  const [selectedPhoto, setSelectedPhoto] = useState<GalleryItem | null>(null);

  return (
    <section id="galeri" className="py-24 sm:py-32 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="Dokumentasi & Galeri"
          badgeIcon={<ImageIcon className="w-4 h-4" />}
          title="Momen & Jejak"
          titleHighlight="Kebersamaan Alumni"
          description="Rangkuman dokumentasi visual pertemuan alumni, workshop teknologi, bakti sosial, dan momen berharga lainnya."
          align="center"
        />

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryData.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              onClick={() => setSelectedPhoto(item)}
              className="group relative rounded-3xl overflow-hidden shadow-soft hover:shadow-soft-xl cursor-pointer bg-slate-900 aspect-[4/3] border border-slate-200/80"
            >
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover group-hover:scale-108 transition-transform duration-500"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />

              {/* Hover Zoom Icon button in center */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="w-12 h-12 rounded-full bg-white/30 backdrop-blur-md flex items-center justify-center text-white shadow-lg transform group-hover:scale-110 transition-transform">
                  <ZoomIn className="w-6 h-6" />
                </div>
              </div>

              {/* Bottom Info Overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-5 text-white transform group-hover:-translate-y-1 transition-transform">
                <div className="flex items-center gap-2 mb-1.5">
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-blue-600/90 text-white backdrop-blur-sm">
                    {item.category}
                  </span>
                  <span className="text-[11px] text-slate-300 flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {item.date}
                  </span>
                </div>
                <h4 className="font-heading font-bold text-sm leading-snug line-clamp-1">
                  {item.title}
                </h4>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox Dialog with Radix UI */}
      <Dialog.Root open={!!selectedPhoto} onOpenChange={(open) => !open && setSelectedPhoto(null)}>
        <AnimatePresence>
          {selectedPhoto && (
            <Dialog.Portal forceMount>
              <Dialog.Overlay asChild>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="fixed inset-0 bg-slate-950/85 backdrop-blur-md z-50 flex items-center justify-center p-4 sm:p-8"
                >
                  <Dialog.Content asChild>
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      transition={{ duration: 0.25, ease: "easeOut" }}
                      className="relative w-full max-w-4xl bg-slate-900 rounded-3xl overflow-hidden shadow-2xl border border-white/10"
                      onClick={(e) => e.stopPropagation()}
                    >
                      {/* Close button */}
                      <Dialog.Close asChild>
                        <button
                          type="button"
                          aria-label="Tutup lightbox"
                          className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-slate-950/70 hover:bg-slate-950 text-white backdrop-blur-md transition-colors"
                        >
                          <X className="w-5 h-5" />
                        </button>
                      </Dialog.Close>

                      {/* Image Viewer */}
                      <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full bg-black">
                        <Image
                          src={selectedPhoto.image}
                          alt={selectedPhoto.title}
                          fill
                          className="object-contain"
                          sizes="(max-width: 1200px) 100vw, 1000px"
                        />
                      </div>

                      {/* Caption & Metadata */}
                      <div className="p-6 bg-slate-950 text-white border-t border-white/10">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="px-3 py-1 rounded-full text-xs font-semibold bg-blue-600 text-white">
                            {selectedPhoto.category}
                          </span>
                          <span className="text-xs text-slate-400">
                            {selectedPhoto.date}
                          </span>
                        </div>
                        <Dialog.Title className="text-lg sm:text-xl font-bold font-heading">
                          {selectedPhoto.title}
                        </Dialog.Title>
                        <p className="text-sm text-slate-300 mt-2 leading-relaxed">
                          {selectedPhoto.description}
                        </p>
                      </div>
                    </motion.div>
                  </Dialog.Content>
                </motion.div>
              </Dialog.Overlay>
            </Dialog.Portal>
          )}
        </AnimatePresence>
      </Dialog.Root>
    </section>
  );
}
