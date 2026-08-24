"use client";

import React, { useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { motion, AnimatePresence } from "framer-motion";
import { X, CheckCircle2, UserPlus, Sparkles, Send } from "lucide-react";
import { Button } from "./Button";

interface JoinModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function JoinModal({ open, onOpenChange }: JoinModalProps) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    nim: "",
    studyProgram: "Teknik Informatika",
    gradYear: "2024",
    currentRole: "",
    company: "",
    email: "",
    phone: "",
    linkedIn: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    onOpenChange(false);
    setFormData({
      fullName: "",
      nim: "",
      studyProgram: "Teknik Informatika",
      gradYear: "2024",
      currentRole: "",
      company: "",
      email: "",
      phone: "",
      linkedIn: "",
    });
  };

  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <AnimatePresence>
        {open && (
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
                  initial={{ opacity: 0, scale: 0.95, y: 15 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95, y: 15 }}
                  transition={{ duration: 0.25, ease: "easeOut" }}
                  className="w-full max-w-xl bg-white rounded-3xl shadow-2xl border border-slate-100 overflow-hidden relative"
                >
                  {/* Header bar with gradient */}
                  <div className="bg-gradient-to-r from-blue-900 via-blue-700 to-sky-600 px-6 py-6 text-white relative">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-white/15 rounded-xl backdrop-blur-md">
                          <UserPlus className="w-5 h-5 text-blue-200" />
                        </div>
                        <div>
                          <Dialog.Title className="text-xl font-bold font-heading text-white">
                            Pendaftaran Alumni Fasilkom
                          </Dialog.Title>
                          <Dialog.Description className="text-xs text-blue-100/90 mt-0.5">
                            Fakultas Ilmu Komputer Universitas Mercu Buana
                          </Dialog.Description>
                        </div>
                      </div>

                      <Dialog.Close asChild>
                        <button
                          type="button"
                          aria-label="Tutup form pendaftaran"
                          className="p-2 rounded-full text-white/80 hover:text-white hover:bg-white/20 transition-colors"
                        >
                          <X className="w-5 h-5" />
                        </button>
                      </Dialog.Close>
                    </div>
                  </div>

                  {/* Body content */}
                  <div className="p-6 sm:p-8 max-h-[75vh] overflow-y-auto">
                    {submitted ? (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="text-center py-8 px-4"
                      >
                        <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 border-2 border-blue-100">
                          <CheckCircle2 className="w-9 h-9" />
                        </div>
                        <h3 className="text-2xl font-bold font-heading text-slate-900">
                          Pendaftaran Berhasil Terkirim!
                        </h3>
                        <p className="text-slate-600 text-sm mt-2 max-w-md mx-auto leading-relaxed">
                          Terima kasih <strong className="text-slate-900">{formData.fullName}</strong>. Data Anda telah kami terima untuk diverifikasi ke sistem Tracer & Direktori Alumni Fasilkom UMB.
                        </p>
                        <div className="mt-8 flex justify-center">
                          <Button variant="primary" onClick={handleReset}>
                            Selesai & Tutup
                          </Button>
                        </div>
                      </motion.div>
                    ) : (
                      <form onSubmit={handleSubmit} className="space-y-4">
                        <p className="text-xs text-slate-500 mb-2">
                          Lengkapi formulir di bawah ini untuk terhubung dengan direktori alumni dan program kemitraan resmi.
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-xs font-semibold text-slate-700 mb-1">
                              Nama Lengkap & Gelar *
                            </label>
                            <input
                              type="text"
                              required
                              placeholder="misal: Budi Santoso, S.Kom."
                              value={formData.fullName}
                              onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                              className="w-full px-3.5 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                            />
                          </div>

                          <div>
                            <label className="block text-xs font-semibold text-slate-700 mb-1">
                              NIM (Nomor Induk Mahasiswa) *
                            </label>
                            <input
                              type="text"
                              required
                              placeholder="misal: 41518110001"
                              value={formData.nim}
                              onChange={(e) => setFormData({ ...formData, nim: e.target.value })}
                              className="w-full px-3.5 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                            />
                          </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-xs font-semibold text-slate-700 mb-1">
                              Program Studi *
                            </label>
                            <select
                              value={formData.studyProgram}
                              onChange={(e) => setFormData({ ...formData, studyProgram: e.target.value })}
                              className="w-full px-3.5 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                            >
                              <option value="Teknik Informatika">Teknik Informatika (S1)</option>
                              <option value="Sistem Informasi">Sistem Informasi (S1)</option>
                              <option value="Magister Ilmu Komputer">Magister Ilmu Komputer (S2)</option>
                            </select>
                          </div>

                          <div>
                            <label className="block text-xs font-semibold text-slate-700 mb-1">
                              Tahun Kelulusan *
                            </label>
                            <input
                              type="number"
                              min="1995"
                              max="2026"
                              required
                              placeholder="2023"
                              value={formData.gradYear}
                              onChange={(e) => setFormData({ ...formData, gradYear: e.target.value })}
                              className="w-full px-3.5 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                            />
                          </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-xs font-semibold text-slate-700 mb-1">
                              Profesi / Jabatan Terkini
                            </label>
                            <input
                              type="text"
                              placeholder="misal: Software Engineer / CTO"
                              value={formData.currentRole}
                              onChange={(e) => setFormData({ ...formData, currentRole: e.target.value })}
                              className="w-full px-3.5 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                            />
                          </div>

                          <div>
                            <label className="block text-xs font-semibold text-slate-700 mb-1">
                              Perusahaan / Institusi
                            </label>
                            <input
                              type="text"
                              placeholder="misal: PT Teknologi Bersama / Freelance"
                              value={formData.company}
                              onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                              className="w-full px-3.5 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                            />
                          </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-xs font-semibold text-slate-700 mb-1">
                              Email Aktif *
                            </label>
                            <input
                              type="email"
                              required
                              placeholder="alumni@mercubuana.ac.id"
                              value={formData.email}
                              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                              className="w-full px-3.5 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                            />
                          </div>

                          <div>
                            <label className="block text-xs font-semibold text-slate-700 mb-1">
                              Nomor WhatsApp *
                            </label>
                            <input
                              type="tel"
                              required
                              placeholder="081234567890"
                              value={formData.phone}
                              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                              className="w-full px-3.5 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                            />
                          </div>
                        </div>

                        <div>
                          <label className="block text-xs font-semibold text-slate-700 mb-1">
                            Link Profil LinkedIn
                          </label>
                          <input
                            type="url"
                            placeholder="https://linkedin.com/in/username"
                            value={formData.linkedIn}
                            onChange={(e) => setFormData({ ...formData, linkedIn: e.target.value })}
                            className="w-full px-3.5 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                          />
                        </div>

                        <div className="pt-4 flex items-center justify-end gap-3 border-t border-slate-100 mt-6">
                          <Button
                            type="button"
                            variant="ghost"
                            size="md"
                            onClick={() => onOpenChange(false)}
                          >
                            Batal
                          </Button>
                          <Button
                            type="submit"
                            variant="primary"
                            size="md"
                            icon={<Send className="w-4 h-4" />}
                          >
                            Kirim Pendaftaran
                          </Button>
                        </div>
                      </form>
                    )}
                  </div>
                </motion.div>
              </Dialog.Content>
            </div>
          </Dialog.Portal>
        )}
      </AnimatePresence>
    </Dialog.Root>
  );
}
