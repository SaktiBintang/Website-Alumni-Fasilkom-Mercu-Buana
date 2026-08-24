# Fasilkom Techno MercuBuana 🎓💻

**Portal Resmi Ikatan Alumni Fakultas Ilmu Komputer (Fasilkom) Universitas Mercu Buana**

Sebuah platform web modern, interaktif, dan responsif untuk mempererat jejaring silaturahmi, kolaborasi profesional, program bimbingan karir, serta kontribusi nyata bagi lebih dari 5.800 alumni program studi **Teknik Informatika (S1)** dan **Sistem Informasi (S1)** Universitas Mercu Buana.

---

## 🌟 Fitur Utama

- **🎨 Desain Modern & Clean**: Nuansa gradasi biru khas Mercu Buana (`blue-900`, `blue-700`, `blue-500`, `blue-50`) dipadukan dengan aksen putih dan tipografi elegan Google Fonts (**Poppins** & **Inter**).
- **✨ Micro-Animations Kaya**: Animasi staggered entrance, floating badge chips, interactive hover lift, serta number counter otomatis saat viewport terlihat.
- **🧭 Dynamic Sticky Navbar**: Header transparan saat di hero section lalu bertransisi menjadi solid white dengan efek glassmorphism blur dan bayangan saat discroll. Dilengkapi drawer navigasi mobile ramah sentuhan.
- **📊 Statistik Alumni Interaktif**: Visualisasi data real-time untuk total alumni terdata, jumlah generasi angkatan, sebaran kota/mancanegara, dan mitra industri teknologi.
- **👥 Direktori Alumni Berfilter**: Pencarian direktori alumni lengkap dengan filter periode angkatan (*2015-2018, 2019-2021, 2022-2025*) berbasis Radix UI Tabs dan pencarian nama/profesi secara instan.
- **📰 Berita & Agenda Acara**: Kartu publikasi kegiatan, reuni, dan workshop dengan modal popup detail menggunakan Radix UI Dialog.
- **🖼️ Galeri Dokumentasi**: Masonry grid foto kegiatan alumni dengan fitur Lightbox zoom viewer.
- **❓ FAQ Interaktif**: Tanya jawab seputar keanggotaan, tracer study, beasiswa dana abadi, dan legalisir digital menggunakan Radix UI Accordion.
- **📝 Formulir Pendaftaran Terpadu**: Modal registrasi keanggotaan alumni terverifikasi dengan validasi data dan konfirmasi interaktif.

---

## 🛠️ Tech Stack

- **Framework**: [Next.js 14+ (App Router)](https://nextjs.org/)
- **Bahasa**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animasi**: [Framer Motion](https://www.framer.com/motion/)
- **Komponen Accessible**: [Radix UI](https://www.radix-ui.com/) (`@radix-ui/react-dialog`, `@radix-ui/react-tabs`, `@radix-ui/react-accordion`, `@radix-ui/react-dropdown-menu`, `@radix-ui/react-navigation-menu`)
- **Icon Set**: [Lucide React](https://lucide.dev/)
- **Utility**: `clsx`, `tailwind-merge`

---

## 📁 Struktur Folder

```bash
fasilkom-techno-mercubuana/
├── app/
│   ├── globals.css                # Style global, utility glassmorphism, gradient, custom scrollbar
│   ├── layout.tsx                 # Root layout, Google Fonts (Poppins & Inter), SEO Metadata
│   └── page.tsx                   # Landing page utama mengintegrasikan seluruh section
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx             # Sticky navbar & mobile Radix Dialog drawer
│   │   └── Footer.tsx             # Footer dengan newsletter, kontak sekretariat & sosial media
│   ├── sections/
│   │   ├── Hero.tsx               # Hero banner animasi & floating badges
│   │   ├── Stats.tsx              # Counter angka statistik alumni (useInView)
│   │   ├── About.tsx              # Visi, misi, prodi TI/SI, dan 4 nilai inti
│   │   ├── AlumniDirectory.tsx    # Direktori alumni + filter tab angkatan & search
│   │   ├── NewsEvents.tsx         # Berita & acara + filter tab & popup detail
│   │   ├── Gallery.tsx            # Galeri dokumentasi + Lightbox popup
│   │   ├── FAQ.tsx                # Accordion pertanyaan umum
│   │   └── CTA.tsx                # Banner ajakan bergabung
│   └── ui/
│       ├── Button.tsx             # Tombol reusable dengan animasi Framer Motion
│       ├── Card.tsx               # Card container dengan hover effect & glassmorphism
│       ├── SectionHeading.tsx     # Header section dengan pill badge & gradient title
│       └── JoinModal.tsx          # Dialog modal formulir pendaftaran alumni
├── lib/
│   ├── data.ts                    # Structured dummy data (alumni, berita, stats, FAQ, galeri)
│   └── utils.ts                   # Utility helper cn()
├── next.config.mjs                # Konfigurasi remotePatterns image
├── tailwind.config.ts             # Custom tema warna Mercu Buana, animasi, dan shadow
└── package.json                   # Dependensi project
```

---

## 🚀 Panduan Memulai (Getting Started)

### Prasyarat
- [Node.js](https://nodejs.org/) versi 18.x atau yang lebih baru
- `npm` atau `yarn` atau `pnpm`

### 1. Klon Repositori
```bash
git clone https://github.com/SaktiBintang/Website-Alumni-Fasilkom-Mercu-Buana.git
cd Website-Alumni-Fasilkom-Mercu-Buana
```

### 2. Instal Dependensi
```bash
npm install
```

### 3. Jalankan Development Server
```bash
npm run dev
```

Buka peramban Anda di alamat [http://localhost:3000](http://localhost:3000).

### 4. Build untuk Production
```bash
npm run build
npm run start
```

---

## 🏛️ Tentang Fakultas Ilmu Komputer Universitas Mercu Buana

- **Program Studi**: Teknik Informatika (S1) & Sistem Informasi (S1)
- **Akreditasi**: Unggul (BAN-PT / LAM INFOKOM)
- **Alamat Sekretariat**: Gedung Tower Lt. 2, Kampus Meruya, Jl. Meruya Selatan No. 1, Kembangan, Jakarta Barat 11650
- **Email**: [alumni@mercubuana.ac.id](mailto:alumni@mercubuana.ac.id)

---

## 📄 Lisensi & Hak Cipta

&copy; 2026 **Fasilkom Techno MercuBuana**. Seluruh hak cipta dilindungi undang-undang.
Dikelola oleh Ikatan Alumni Fasilkom Universitas Mercu Buana.
