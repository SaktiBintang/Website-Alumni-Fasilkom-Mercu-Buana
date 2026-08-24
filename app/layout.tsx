import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const poppins = Poppins({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Fasilkom Techno MercuBuana | Ikatan Alumni Fasilkom Universitas Mercu Buana",
  description:
    "Website resmi perkumpulan alumni Fakultas Ilmu Komputer (Fasilkom) Universitas Mercu Buana. Menghubungkan ribuan talenta teknologi, memperkuat sinergi karir, riset inovasi, dan kontribusi nyata untuk almamater.",
  keywords: [
    "Alumni Fasilkom Mercu Buana",
    "Fasilkom Techno MercuBuana",
    "Ikatan Alumni UMB",
    "Teknik Informatika Mercu Buana",
    "Sistem Informasi Mercu Buana",
    "Alumni Komputer UMB",
    "Komunitas IT Indonesia",
  ],
  authors: [{ name: "Ikatan Alumni Fasilkom Universitas Mercu Buana" }],
  openGraph: {
    title: "Fasilkom Techno MercuBuana | Ikatan Alumni Fasilkom Universitas Mercu Buana",
    description:
      "Wadah silaturahmi, kolaborasi profesional, dan sinergi ribuan alumni Fakultas Ilmu Komputer Universitas Mercu Buana.",
    url: "https://fasilkom-techno.mercubuana.ac.id",
    siteName: "Fasilkom Techno MercuBuana",
    locale: "id_ID",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className={`${inter.variable} ${poppins.variable} scroll-smooth`}>
      <body className="min-h-screen flex flex-col bg-slate-50 text-slate-900 font-sans antialiased overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
