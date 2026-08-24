# Prompt untuk Cursor AI — Website Fasilkom Techno MercuBuana

Copy-paste seluruh isi di bawah ini ke Cursor AI (Composer/Chat mode) di dalam project Next.js kosong.

---

## PROMPT

Saya ingin membuat website resmi untuk perkumpulan alumni Fakultas Ilmu Komputer (Fasilkom) Universitas Mercu Buana, bernama **"Fasilkom Techno MercuBuana"**. Website ini terinspirasi dari kagama.com (situs alumni UGM) tetapi dengan layout yang lebih flexible, modern, dan banyak micro-animation.

### Tech Stack
- **Next.js 14+** dengan App Router dan TypeScript
- **Tailwind CSS** untuk styling
- **Radix UI** (`@radix-ui/react-*`) untuk komponen accessible: Dialog, DropdownMenu, Tabs, Accordion, NavigationMenu
- **Framer Motion** untuk semua animasi (page transition, scroll reveal, hover effect, stagger animation)
- **lucide-react** untuk icon set
- Gunakan gambar placeholder dari `https://picsum.photos/` atau `https://source.unsplash.com/` (dengan seed/id konsisten supaya tidak berubah tiap reload), nanti akan saya ganti manual dengan foto asli

### Design System
- **Warna utama:** biru (gunakan gradasi, contoh: `blue-900`, `blue-700`, `blue-500`, `blue-50`) dan putih sebagai warna dominan
- **Aksen:** boleh tambahkan 1 warna aksen netral (misal `slate` atau `sky`) untuk variasi, tapi biru-putih tetap dominan
- Font modern & clean: gunakan `next/font` dengan Google Font seperti **Poppins** (heading) dan **Inter** (body)
- Rounded corners konsisten (`rounded-xl`/`rounded-2xl`), shadow lembut, banyak whitespace
- Fully responsive (mobile-first)

### Struktur Halaman (Landing Page utama, satu halaman panjang / single page dengan section id untuk anchor navigasi)

1. **Navbar**
   - Sticky di atas, transparan saat di hero lalu berubah solid putih dengan shadow saat discroll (pakai Framer Motion + scroll listener)
   - Logo teks "Fasilkom Techno MercuBuana"
   - Menu: Beranda, Tentang Kami, Direktori Alumni, Berita & Acara, Galeri, Kontak
   - Tombol CTA "Gabung Sekarang" di kanan
   - Versi mobile: gunakan Radix `DropdownMenu` atau `Dialog` sebagai hamburger menu dengan animasi slide-in

2. **Hero Section**
   - Headline besar, subheadline, dua tombol CTA ("Daftar Alumni" & "Pelajari Lebih Lanjut")
   - Gambar/ilustrasi placeholder di sisi kanan
   - Animasi entrance (fade + slide up, staggered) saat page load

3. **Statistik Alumni**
   - 4 kartu angka: Total Alumni, Jumlah Angkatan, Tersebar di Kota, Mitra Perusahaan
   - Animasi counter number saat section masuk viewport (`useInView` dari Framer Motion)

4. **Tentang Kami**
   - Visi & misi perkumpulan, gambar placeholder di satu sisi, teks di sisi lain
   - Scroll reveal animation

5. **Direktori / Testimoni Alumni**
   - Grid card alumni (foto placeholder bulat, nama, angkatan, profesi, perusahaan, quote singkat)
   - Bisa difilter per angkatan menggunakan Radix `Tabs`
   - Hover animation pada card (scale + shadow)

6. **Berita & Acara**
   - Grid card berita/acara (gambar, tanggal, judul, ringkasan, tag kategori)
   - Filter kategori pakai Radix `Tabs`
   - Klik card membuka detail di Radix `Dialog` (modal)

7. **Galeri**
   - Grid foto masonry/gallery placeholder
   - Klik foto membuka lightbox pakai Radix `Dialog` dengan animasi zoom

8. **FAQ**
   - Gunakan Radix `Accordion` untuk pertanyaan umum seputar keanggotaan alumni

9. **CTA Banner "Gabung Sekarang"**
   - Section full-width dengan background gradient biru, ajakan bergabung, tombol besar

10. **Footer**
    - Logo & deskripsi singkat organisasi
    - Kolom Navigasi, Kolom Kontak (alamat, email, telepon), Kolom Sosial Media (icon lucide-react)
    - Form newsletter kecil (input email + tombol subscribe)
    - Copyright bar di paling bawah

### Struktur Folder yang Diharapkan
```
app/
  layout.tsx
  page.tsx
  globals.css
components/
  layout/
    Navbar.tsx
    Footer.tsx
    MobileMenu.tsx
  sections/
    Hero.tsx
    Stats.tsx
    About.tsx
    AlumniDirectory.tsx
    NewsEvents.tsx
    Gallery.tsx
    FAQ.tsx
    CTA.tsx
  ui/
    Button.tsx
    Card.tsx
    SectionHeading.tsx
lib/
  data.ts        // dummy data alumni, berita, statistik
  utils.ts
```

### Ketentuan Tambahan
- Semua data (alumni, berita, statistik, FAQ) taruh sebagai dummy array di `lib/data.ts` supaya mudah diganti nanti
- Tambahkan `metadata` SEO di `app/layout.tsx` (title: "Fasilkom Techno MercuBuana | Ikatan Alumni Fasilkom Universitas Mercu Buana", description relevan)
- Pastikan aksesibilitas dasar terpenuhi (alt text pada gambar, aria-label pada tombol icon)
- Gunakan `next/image` untuk semua gambar
- Buat komponen reusable dan clean code, hindari duplikasi
- Tambahkan smooth scroll untuk anchor navigasi navbar (`scroll-smooth` di html/section id)

Tolong scaffold seluruh project ini step by step: mulai dari setup Tailwind config (custom warna biru), install dependencies, lalu buat komponen satu per satu sesuai struktur folder di atas.

---

## Cara pakai
1. Buat project baru: `npx create-next-app@latest fasilkom-techno-mercubuana --typescript --tailwind --app`
2. Install dependencies tambahan:
   ```
   npm install framer-motion lucide-react @radix-ui/react-dialog @radix-ui/react-dropdown-menu @radix-ui/react-tabs @radix-ui/react-accordion @radix-ui/react-navigation-menu
   ```
3. Buka folder project di Cursor, lalu paste prompt di atas ke Composer (Cmd/Ctrl + I)
4. Setelah scaffold jadi, minta Cursor generate section satu-satu kalau responsnya terlalu panjang untuk sekali jalan (misal: "sekarang buatkan Navbar.tsx dulu sesuai spesifikasi di atas")
