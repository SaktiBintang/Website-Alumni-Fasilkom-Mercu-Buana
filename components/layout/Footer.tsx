"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  GraduationCap,
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle2,
  Linkedin,
  Instagram,
  Youtube,
  Github,
  Twitter,
  ArrowUp,
  Heart,
} from "lucide-react";
import { Button } from "@/components/ui/Button";

export function Footer() {
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (newsletterEmail) {
      setSubscribed(true);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer id="kontak" className="bg-slate-950 text-slate-300 relative overflow-hidden border-t border-slate-800">
      {/* Decorative gradient blur background circles */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 mb-12">
          {/* Col 1: Brand Info (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <Link href="#beranda" className="flex items-center gap-3 group inline-flex">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 to-sky-500 text-white flex items-center justify-center shadow-lg shadow-blue-500/20 shrink-0">
                <GraduationCap className="w-6 h-6 transform group-hover:rotate-12 transition-transform" />
              </div>
              <div>
                <span className="font-heading font-bold text-base text-white block leading-tight">
                  Ikatan Keluarga Alumni <span className="text-sky-400">Fakultas Ilmu Komputer</span>
                </span>
                <span className="text-xs text-slate-400 font-medium tracking-wide uppercase block mt-1">
                  Universitas Mercu Buana
                </span>
              </div>
            </Link>

            <p className="text-sm text-slate-400 leading-relaxed pr-4">
              Wadah perkumpulan resmi alumni Fakultas Ilmu Komputer Universitas Mercu Buana. Menghubungkan lulusan Teknik Informatika, Sistem Informasi & Magister Sains Data untuk kolaborasi karir, riset inovasi, dan kemajuan almamater.
            </p>

            {/* Social Icons */}
            <div className="pt-2 flex items-center gap-3">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Fasilkom UMB"
                className="w-9 h-9 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:bg-blue-600 hover:border-blue-500 transition-all duration-200"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram Fasilkom UMB"
                className="w-9 h-9 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:bg-gradient-to-tr hover:from-amber-600 hover:via-rose-600 hover:to-purple-600 hover:border-transparent transition-all duration-200"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Fasilkom UMB"
                className="w-9 h-9 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:bg-slate-800 hover:border-slate-700 transition-all duration-200"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube Fasilkom UMB"
                className="w-9 h-9 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:bg-red-600 hover:border-red-500 transition-all duration-200"
              >
                <Youtube className="w-4 h-4" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter / X Fasilkom UMB"
                className="w-9 h-9 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:bg-sky-500 hover:border-sky-400 transition-all duration-200"
              >
                <Twitter className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <h4 className="font-heading font-semibold text-white text-sm uppercase tracking-wider">
              Navigasi
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a href="#beranda" className="text-slate-400 hover:text-sky-400 transition-colors">
                  Beranda
                </a>
              </li>
              <li>
                <a href="#tentang-kami" className="text-slate-400 hover:text-sky-400 transition-colors">
                  Tentang Kami
                </a>
              </li>
              <li>
                <a href="#direktori" className="text-slate-400 hover:text-sky-400 transition-colors">
                  Direktori Alumni
                </a>
              </li>
              <li>
                <a href="#berita-acara" className="text-slate-400 hover:text-sky-400 transition-colors">
                  Berita & Acara
                </a>
              </li>
              <li>
                <a href="#galeri" className="text-slate-400 hover:text-sky-400 transition-colors">
                  Galeri Foto
                </a>
              </li>
              <li>
                <a href="#faq" className="text-slate-400 hover:text-sky-400 transition-colors">
                  Tanya Jawab (FAQ)
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Contact Info (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-heading font-semibold text-white text-sm uppercase tracking-wider">
              Sekretariat IKA
            </h4>
            <ul className="space-y-3 text-sm text-slate-400">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-sky-400 shrink-0 mt-0.5" />
                <span>
                  Gedung Tower Lantai 2, Fakultas Ilmu Komputer, Universitas Mercu Buana, Jl. Meruya Selatan No. 1, Kembangan, Jakarta Barat 11650
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-sky-400 shrink-0" />
                <a
                  href="mailto:alumni@mercubuana.ac.id"
                  className="hover:text-white transition-colors"
                >
                  alumni@mercubuana.ac.id
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-sky-400 shrink-0" />
                <a href="tel:+62215840816" className="hover:text-white transition-colors">
                  +62 21 5840816 (Ext. 2400)
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Newsletter (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-heading font-semibold text-white text-sm uppercase tracking-wider">
              Newsletter Alumni
            </h4>
            <p className="text-sm text-slate-400">
              Dapatkan update info karir, agenda reuni, dan rilis teknologi terbaru langsung di inbox Anda.
            </p>

            {subscribed ? (
              <div className="p-3.5 bg-blue-950/80 border border-blue-800/80 rounded-xl text-xs text-sky-300 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0" />
                <span>Terima kasih! Anda telah terdaftar dalam buletin berkala kami.</span>
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="space-y-2.5">
                <div className="relative">
                  <input
                    type="email"
                    required
                    placeholder="Masukkan email Anda..."
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    className="w-full px-3.5 py-2.5 text-xs sm:text-sm bg-slate-900 border border-slate-800 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent transition-all"
                  />
                </div>
                <Button
                  type="submit"
                  variant="gradient"
                  size="sm"
                  className="w-full justify-center"
                  icon={<Send className="w-3.5 h-3.5" />}
                >
                  Langganan Buletin
                </Button>
              </form>
            )}
          </div>
        </div>

        {/* Bottom copyright bar */}
        <div className="pt-8 mt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div className="flex items-center gap-1.5 text-center sm:text-left">
            <span>Dikelola oleh Fasilkom Techno Squad</span>
          </div>

          <div className="flex items-center gap-6">
            <button
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 text-slate-400 hover:text-sky-400 transition-colors"
            >
              <span>Kembali ke Atas</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
