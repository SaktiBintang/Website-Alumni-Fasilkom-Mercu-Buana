"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  X,
  GraduationCap,
  Sparkles,
  ChevronRight,
  UserPlus,
  Phone,
  Mail,
  ExternalLink,
} from "lucide-react";
import * as Dialog from "@radix-ui/react-dialog";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

interface NavbarProps {
  onOpenJoinModal: () => void;
}

const navLinks = [
  { name: "Beranda", href: "#beranda" },
  { name: "Tentang Kami", href: "#tentang-kami" },
  { name: "Direktori", href: "#direktori" },
  { name: "Berita & Acara", href: "#berita-acara" },
  { name: "Galeri", href: "#galeri" },
  { name: "FAQ", href: "#faq" },
  { name: "Kontak", href: "#kontak" },
];

export function Navbar({ onOpenJoinModal }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("beranda");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Determine active section based on scroll
      const sections = navLinks.map((l) => l.href.replace("#", ""));
      const scrollPos = window.scrollY + 100;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-40 transition-all duration-300",
          scrolled
            ? "glass-nav py-3.5 shadow-soft border-b border-slate-200/60"
            : "bg-transparent py-5"
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo */}
          <Link
            href="#beranda"
            className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded-xl"
          >
            <div
              className={cn(
                "w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 shadow-md",
                scrolled
                  ? "bg-gradient-to-tr from-blue-700 to-sky-500 text-white"
                  : "bg-white text-blue-700 shadow-blue-900/20"
              )}
            >
              <GraduationCap className="w-6 h-6 transform group-hover:rotate-12 transition-transform duration-300" />
            </div>
            <div className="flex flex-col">
              <span
                className={cn(
                  "font-heading font-extrabold text-base sm:text-lg leading-tight tracking-tight transition-colors duration-300",
                  scrolled ? "text-slate-900" : "text-slate-900 drop-shadow-sm"
                )}
              >
                Fasilkom <span className="text-blue-600">Techno</span>
              </span>
              <span
                className={cn(
                  "text-[10px] sm:text-xs font-medium tracking-wide uppercase transition-colors duration-300",
                  scrolled ? "text-slate-500" : "text-slate-600"
                )}
              >
                Mercu Buana
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace("#", "");
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={cn(
                    "px-3.5 py-2 text-sm font-medium rounded-xl transition-all duration-200 relative",
                    isActive
                      ? "text-blue-600 font-semibold bg-blue-50/80"
                      : scrolled
                      ? "text-slate-600 hover:text-blue-600 hover:bg-slate-50"
                      : "text-slate-700 hover:text-blue-700 hover:bg-white/60"
                  )}
                >
                  {link.name}
                  {isActive && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      className="absolute bottom-0 left-3 right-3 h-0.5 bg-blue-600 rounded-full"
                      transition={{ type: "spring", stiffness: 350, damping: 30 }}
                    />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Right Action CTA Button */}
          <div className="hidden sm:flex items-center gap-3">
            <Button
              variant="primary"
              size="md"
              icon={<UserPlus className="w-4 h-4" />}
              onClick={onOpenJoinModal}
              className="shadow-blue-500/25"
            >
              Gabung Sekarang
            </Button>
          </div>

          {/* Mobile Menu Trigger button */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Buka menu navigasi"
              className={cn(
                "p-2.5 rounded-xl border transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500",
                scrolled
                  ? "bg-white text-slate-700 border-slate-200 hover:bg-slate-50"
                  : "bg-white/80 text-slate-800 border-slate-200/80 backdrop-blur-md hover:bg-white"
              )}
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Navigation with Radix Dialog */}
      <Dialog.Root open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
        <AnimatePresence>
          {mobileMenuOpen && (
            <Dialog.Portal forceMount>
              <Dialog.Overlay asChild>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="fixed inset-0 bg-slate-950/60 backdrop-blur-sm z-50 lg:hidden"
                />
              </Dialog.Overlay>

              <Dialog.Content asChild>
                <motion.div
                  initial={{ x: "100%" }}
                  animate={{ x: 0 }}
                  exit={{ x: "100%" }}
                  transition={{ type: "spring", damping: 30, stiffness: 300 }}
                  className="fixed top-0 right-0 bottom-0 w-[85%] max-w-sm bg-white z-50 shadow-2xl p-6 flex flex-col justify-between overflow-y-auto"
                >
                  <div>
                    {/* Mobile Menu Header */}
                    <div className="flex items-center justify-between pb-6 border-b border-slate-100">
                      <div className="flex items-center gap-2.5">
                        <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-blue-700 to-sky-500 text-white flex items-center justify-center shadow-md">
                          <GraduationCap className="w-5 h-5" />
                        </div>
                        <div className="flex flex-col">
                          <span className="font-heading font-bold text-sm text-slate-900">
                            Fasilkom <span className="text-blue-600">Techno</span>
                          </span>
                          <span className="text-[10px] text-slate-500 uppercase tracking-wide">
                            Mercu Buana
                          </span>
                        </div>
                      </div>

                      <Dialog.Close asChild>
                        <button
                          type="button"
                          aria-label="Tutup menu"
                          className="p-2 rounded-xl text-slate-500 hover:text-slate-800 hover:bg-slate-100 transition-colors"
                        >
                          <X className="w-5 h-5" />
                        </button>
                      </Dialog.Close>
                    </div>

                    {/* Navigation list */}
                    <nav className="mt-6 flex flex-col gap-1.5">
                      {navLinks.map((link) => (
                        <a
                          key={link.name}
                          href={link.href}
                          onClick={() => setMobileMenuOpen(false)}
                          className={cn(
                            "flex items-center justify-between px-4 py-3 rounded-xl text-sm font-medium transition-all",
                            activeSection === link.href.replace("#", "")
                              ? "bg-blue-50 text-blue-700 font-semibold"
                              : "text-slate-700 hover:bg-slate-50 hover:text-blue-600"
                          )}
                        >
                          <span>{link.name}</span>
                          <ChevronRight className="w-4 h-4 text-slate-400" />
                        </a>
                      ))}
                    </nav>
                  </div>

                  {/* Mobile Drawer Bottom Actions */}
                  <div className="pt-6 border-t border-slate-100 space-y-4">
                    <Button
                      variant="primary"
                      size="lg"
                      className="w-full justify-center"
                      icon={<UserPlus className="w-5 h-5" />}
                      onClick={() => {
                        setMobileMenuOpen(false);
                        onOpenJoinModal();
                      }}
                    >
                      Gabung Sekarang
                    </Button>

                    <div className="p-3.5 bg-slate-50 rounded-2xl border border-slate-100 text-xs text-slate-600 space-y-1.5">
                      <p className="font-semibold text-slate-800">Sekretariat IKA Fasilkom UMB</p>
                      <p>Gedung Tower Lt. 2, Kampus Meruya</p>
                      <p className="text-blue-600 font-medium">alumni@mercubuana.ac.id</p>
                    </div>
                  </div>
                </motion.div>
              </Dialog.Content>
            </Dialog.Portal>
          )}
        </AnimatePresence>
      </Dialog.Root>
    </>
  );
}
