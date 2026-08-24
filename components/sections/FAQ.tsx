"use client";

import React from "react";
import * as Accordion from "@radix-ui/react-accordion";
import { motion } from "framer-motion";
import { HelpCircle, ChevronDown, MessageSquare } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { faqData } from "@/lib/data";

export function FAQ() {
  return (
    <section id="faq" className="py-24 sm:py-32 bg-white relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="Tanya Jawab"
          badgeIcon={<HelpCircle className="w-4 h-4" />}
          title="Pertanyaan yang Sering"
          titleHighlight="Diajukan Alumni"
          description="Temukan jawaban cepat seputar keanggotaan, legalisir online, program beasiswa, dan kolaborasi karir di Fasilkom Techno MercuBuana."
          align="center"
        />

        {/* Radix UI Accordion */}
        <Accordion.Root
          type="single"
          collapsible
          className="space-y-4 w-full"
        >
          {faqData.map((faq, idx) => (
            <motion.div
              key={faq.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: idx * 0.07 }}
            >
              <Accordion.Item
                value={faq.id}
                className="group border border-slate-200/90 rounded-2xl overflow-hidden bg-slate-50/50 data-[state=open]:bg-white data-[state=open]:border-blue-300 data-[state=open]:shadow-soft transition-all duration-200"
              >
                <Accordion.Header className="flex">
                  <Accordion.Trigger className="flex flex-1 items-center justify-between p-5 sm:p-6 text-left font-heading font-semibold text-sm sm:text-base text-slate-900 group-hover:text-blue-600 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500">
                    <span className="pr-4">{faq.question}</span>
                    <ChevronDown className="w-5 h-5 text-slate-400 group-hover:text-blue-600 shrink-0 transform transition-transform duration-300 group-data-[state=open]:rotate-180" />
                  </Accordion.Trigger>
                </Accordion.Header>

                <Accordion.Content className="overflow-hidden text-xs sm:text-sm text-slate-600 leading-relaxed px-5 sm:px-6 pb-5 sm:pb-6 pt-0 data-[state=open]:animate-accordion-down data-[state=closed]:animate-accordion-up">
                  <div className="pt-2 border-t border-slate-100/80">
                    {faq.answer}
                  </div>
                </Accordion.Content>
              </Accordion.Item>
            </motion.div>
          ))}
        </Accordion.Root>

        {/* Still have questions banner */}
        <div className="mt-12 p-6 rounded-3xl bg-blue-50/70 border border-blue-100 text-center flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 text-left">
            <div className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center shrink-0">
              <MessageSquare className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-heading font-bold text-sm text-slate-900">
                Punya pertanyaan lain yang belum terjawab?
              </h4>
              <p className="text-xs text-slate-600">
                Hubungi narahubung resmi IKA Fasilkom UMB via WhatsApp atau Email.
              </p>
            </div>
          </div>

          <a
            href="mailto:alumni@mercubuana.ac.id"
            className="px-5 py-2.5 rounded-xl bg-white border border-blue-200 text-blue-700 text-xs sm:text-sm font-semibold hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all shadow-sm shrink-0"
          >
            Hubungi Narahubung
          </a>
        </div>
      </div>
    </section>
  );
}
