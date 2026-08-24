export interface Alumni {
  id: string;
  name: string;
  gradYear: number;
  period: "2015-2018" | "2019-2021" | "2022-2025";
  program: "Teknik Informatika" | "Sistem Informasi";
  role: string;
  company: string;
  avatar: string;
  quote: string;
  linkedIn?: string;
  featured?: boolean;
}

export interface NewsEvent {
  id: string;
  type: "berita" | "acara";
  title: string;
  date: string;
  time?: string;
  location?: string;
  author?: string;
  category: string;
  image: string;
  summary: string;
  content: string[];
  highlights?: string[];
  registrationUrl?: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: "Reuni" | "Seminar & Workshop" | "Sosial & Kemitraan" | "Prestasi";
  date: string;
  image: string;
  description: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category?: string;
}

export interface StatItem {
  id: string;
  value: number;
  suffix: string;
  label: string;
  description: string;
  iconName: string;
}

// 1. STATISTIK ALUMNI
export const statsData: StatItem[] = [
  {
    id: "alumni-total",
    value: 5850,
    suffix: "+",
    label: "Total Alumni Terdata",
    description: "Lulusan Teknik Informatika & Sistem Informasi",
    iconName: "Users",
  },
  {
    id: "angkatan-total",
    value: 30,
    suffix: "+",
    label: "Generasi Angkatan",
    description: "Dari era awal hingga lulusan terkini 2025",
    iconName: "GraduationCap",
  },
  {
    id: "kota-total",
    value: 52,
    suffix: "+",
    label: "Kota & Mancanegara",
    description: "Tersebar di Indonesia, Singapura, Jepang, dll.",
    iconName: "Globe2",
  },
  {
    id: "mitra-total",
    value: 190,
    suffix: "+",
    label: "Mitra Perusahaan & Startup",
    description: "Kolaborasi karir, riset, dan rekrutmen talenta",
    iconName: "Building2",
  },
];

// 2. DIREKTORI ALUMNI
export const alumniData: Alumni[] = [
  {
    id: "alm-1",
    name: "Rizky Ramadhan, S.Kom.",
    gradYear: 2016,
    period: "2015-2018",
    program: "Teknik Informatika",
    role: "Senior Cloud Architect",
    company: "Amazon Web Services (AWS)",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&auto=format&fit=crop&q=80",
    quote: "Fasilkom Mercu Buana membekali fondasi algoritma dan problem solving yang kokoh untuk bersaing di level teknologi global.",
    linkedIn: "https://linkedin.com",
    featured: true,
  },
  {
    id: "alm-2",
    name: "Anindya Putri, S.Kom., M.Kom.",
    gradYear: 2018,
    period: "2015-2018",
    program: "Sistem Informasi",
    role: "Head of Product Strategy",
    company: "Tokopedia",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&auto=format&fit=crop&q=80",
    quote: "Jejaring alumni Fasilkom luar biasa suportif. Banyak kesempatan kolaborasi karir dan mentorship lintas generasi.",
    linkedIn: "https://linkedin.com",
    featured: true,
  },
  {
    id: "alm-3",
    name: "Farhan Mahendra, S.Kom.",
    gradYear: 2020,
    period: "2019-2021",
    program: "Teknik Informatika",
    role: "Staff AI Engineer",
    company: "GoTo Financial",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&auto=format&fit=crop&q=80",
    quote: "Kultur riset praktis di laboratorium Fasilkom mendorong saya berani bereksplorasi di ranah Machine Learning dan AI.",
    linkedIn: "https://linkedin.com",
    featured: true,
  },
  {
    id: "alm-4",
    name: "Clara Salsabila, S.Kom.",
    gradYear: 2021,
    period: "2019-2021",
    program: "Sistem Informasi",
    role: "Lead Cybersecurity Specialist",
    company: "Bank Mandiri (Persero) Tbk",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&auto=format&fit=crop&q=80",
    quote: "Pendidikan keamanan data dan tata kelola IT di Mercu Buana sangat relevan dengan standar industri perbankan modern.",
    linkedIn: "https://linkedin.com",
  },
  {
    id: "alm-5",
    name: "Dimas Aditya Pratama, S.Kom.",
    gradYear: 2023,
    period: "2022-2025",
    program: "Teknik Informatika",
    role: "Co-Founder & CTO",
    company: "KreatifTech Studio",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&auto=format&fit=crop&q=80",
    quote: "Komunitas alumni menjadi inkubator pertama saat saya merintis startup digital bersama rekan-rekan seangkatan.",
    linkedIn: "https://linkedin.com",
    featured: true,
  },
  {
    id: "alm-6",
    name: "Nadia Safitri, S.Kom.",
    gradYear: 2024,
    period: "2022-2025",
    program: "Sistem Informasi",
    role: "Enterprise Data Analyst",
    company: "Shopee International",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&auto=format&fit=crop&q=80",
    quote: "Program tracer study dan bimbingan karir ikatan alumni sangat membantu proses transisi dari kampus ke dunia kerja.",
    linkedIn: "https://linkedin.com",
  },
  {
    id: "alm-7",
    name: "Bagus Hendrawan, S.Kom.",
    gradYear: 2017,
    period: "2015-2018",
    program: "Teknik Informatika",
    role: "DevOps Tech Lead",
    company: "Traveloka",
    avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&auto=format&fit=crop&q=80",
    quote: "Ikatan alumni Fasilkom adalah rumah bersama untuk berbagi ilmu teknis terkini, mentoring junior, dan kolaborasi.",
    linkedIn: "https://linkedin.com",
  },
  {
    id: "alm-8",
    name: "Tania Aurelia, S.Kom.",
    gradYear: 2022,
    period: "2022-2025",
    program: "Teknik Informatika",
    role: "Mobile Solutions Engineer",
    company: "Grab Indonesia",
    avatar: "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?w=400&auto=format&fit=crop&q=80",
    quote: "Bangga menjadi bagian dari keluarga besar Fasilkom Mercu Buana yang adaptif terhadap percepatan revolusi digital.",
    linkedIn: "https://linkedin.com",
  },
];

// 3. BERITA & ACARA
export const newsEventsData: NewsEvent[] = [
  {
    id: "ne-1",
    type: "acara",
    category: "Reuni & Gathering",
    title: "Grand Gathering & Reuni Akbar 2026: Sinergi Alumni untuk Indonesia Emas",
    date: "18 Oktober 2026",
    time: "08.30 - 16.00 WIB",
    location: "Auditorium Rektorat Lt. 3, Kampus Meruya Mercu Buana",
    author: "Panitia Reuni Akbar",
    image: "https://images.unsplash.com/photo-1511578314322-379afb476865?w=800&auto=format&fit=crop&q=80",
    summary: "Temu kangen seluruh angkatan Fasilkom dari tahun 1995 hingga 2025 dengan agenda peluncuran Tech Endowment Fund dan Job Fair.",
    content: [
      "Acara Reuni Akbar tahun ini mengusung tema 'Sinergi Alumni Fasilkom Menyambut Kemandirian Teknologi Nasional'.",
      "Rangkaian acara meliputi Keynote Speech oleh Menteri Komdigi RI, Peluncuran Beasiswa Dana Abadi Alumni, Networking Gala Lunch, dan Pameran Karya Startup Binaan Alumni Fasilkom.",
      "Registrasi terbuka untuk seluruh alumni dari program studi Teknik Informatika dan Sistem Informasi.",
    ],
    highlights: [
      "Peluncuran Dana Abadi Beasiswa Mahasiswa Fasilkom",
      "Expo 25+ Startup Alumni",
      "Networking Lounge antar Angkatan",
      "Doorprize Gadget & Tech Bundle",
    ],
  },
  {
    id: "ne-2",
    type: "berita",
    category: "Prestasi & Riset",
    title: "Alumni Fasilkom UMB Raih Penghargaan Innovation Award di Google Cloud Summit Asia Pasifik",
    date: "12 Agustus 2026",
    author: "Biro Humas Alumni",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&auto=format&fit=crop&q=80",
    summary: "Tim inovasi yang dipimpin oleh alumni Teknik Informatika angkatan 2017 dinobatkan sebagai Top Solution Provider bidang Green Computing.",
    content: [
      "Prestasi membanggakan kembali diukir oleh civitas alumni Fakultas Ilmu Komputer Universitas Mercu Buana.",
      "Solusi arsitektur server ramah lingkungan berbasis AI yang dikembangkan mampu menghemat konsumsi energi server hingga 34%.",
      "Ketua IKA Fasilkom menyampaikan apresiasi mendalam dan berharap karya ini dapat diimplementasikan lebih luas di industri nasional.",
    ],
    highlights: [
      "Penghematan daya server 34%",
      "Dipresentasikan di hadapan 2.000+ delegasi internasional",
      "Dukungan inkubasi lanjutan dari mitra ekosistem",
    ],
  },
  {
    id: "ne-3",
    type: "acara",
    category: "Workshop & Karir",
    title: "Tech Career Bootcamp & Masterclass: Mastering Generative AI in Production",
    date: "05 September 2026",
    time: "13.00 - 17.30 WIB",
    location: "Live via Zoom & Hybrid di Lab Komputer Kampus Meruya",
    author: "Divisi Pengembangan Profesi IKA",
    image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&auto=format&fit=crop&q=80",
    summary: "Workshop intensif bedah implementasi LLM, RAG, dan Vector Database langsung dari Tech Leads perusahaan unicorn.",
    content: [
      "Tingkatkan kapabilitas rekayasa perangkat lunak modern Anda dalam bootcamp eksklusif kolaborasi Ikatan Alumni Fasilkom dan pakar industri.",
      "Materi dirancang hands-on mencakup Fine-Tuning LLM, Vector Embeddings, Guardrails AI, dan Cost Optimization.",
      "Gratis sertifikat dan akses rekaman video untuk seluruh anggota terverifikasi Fasilkom Techno MercuBuana.",
    ],
    highlights: [
      "Instruktur Senior ML Engineer Unicorn",
      "Hands-on Code Repository & Cloud Credits",
      "E-Certificate Terverifikasi",
    ],
  },
  {
    id: "ne-4",
    type: "berita",
    category: "Kolaborasi Kampus",
    title: "Program Magang Industri Bersama 30+ Tech Company Milik Alumni Resmi Dibuka",
    date: "28 Juli 2026",
    author: "Pusat Karir & Hubungan Alumni",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&auto=format&fit=crop&q=80",
    summary: "IKA Fasilkom memfasilitasi program magang bersertifikat bagi mahasiswa tingkat akhir langsung di perusahaan yang dipimpin para alumni.",
    content: [
      "Menjawab kebutuhan integrasi kurikulum kampus dengan standar kompetensi industri, IKA Fasilkom merilis portal magang terintegrasi.",
      "Tersedia kuota magang untuk posisi Frontend/Backend Developer, UI/UX Designer, QA Automation, Data Analyst, dan Security Auditor.",
    ],
    highlights: [
      "120+ Kuota Magang Terbuka",
      "Mentorship 1-on-1 bersama Alumni Senior",
      "Peluang Konversi Karyawan Tetap",
    ],
  },
  {
    id: "ne-5",
    type: "acara",
    category: "Olahraga & Komunitas",
    title: "Fasilkom Techno Cup: Turnamen Esports & Badminton Antar Lintas Angkatan",
    date: "24 Oktober 2026",
    time: "09.00 - 18.00 WIB",
    location: "Sport Hall Kampus Meruya & Discord IKA UMB",
    author: "Divisi Minat & Bakat",
    image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800&auto=format&fit=crop&q=80",
    summary: "Ajang silaturahmi penuh sportivitas dalam turnamen Mobile Legends, Valorant, dan Ganda Putra/Putri Badminton.",
    content: [
      "Tidak hanya aktif di bidang akademik dan teknologi, perkumpulan alumni juga mewadahi hobi dan keakraban lewat ajang olahraga tahunan.",
      "Total hadiah jutaan rupiah plus piala bergilir Dekan Fasilkom Cup.",
    ],
    highlights: [
      "Turnamen MLBB & Valorant",
      "Badminton Doubles League",
      "Piala Bergilir Dekan Fasilkom",
    ],
  },
  {
    id: "ne-6",
    type: "berita",
    category: "Sosial & Kemitraan",
    title: "Bakti Sosial Digital: Edukasi Literasi Keamanan Siber untuk 500 Siswa SMA/SMK",
    date: "15 Juni 2026",
    author: "Divisi Pengabdian Masyarakat",
    image: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&auto=format&fit=crop&q=80",
    summary: "Relawan alumni Fasilkom memberikan sosialisasi perlindungan data pribadi dan pencegahan judi online / phising di sekolah mitra.",
    content: [
      "Sebagai wujud Tri Dharma Perguruan Tinggi, alumni Fasilkom terjun ke sekolah-sekolah di wilayah Jabodetabek untuk mengedukasi generasi muda.",
      "Materi disajikan secara interaktif mengenai bahaya kejahatan siber modern dan tips mengamankan akun digital.",
    ],
    highlights: [
      "12 Sekolah Mitra di DKI & Banten",
      "Pelatihan Praktis Anti-Phising",
      "Donasi Buku Pemrograman Pemula",
    ],
  },
];

// 4. GALERI FOTO KEGIATAN
export const galleryData: GalleryItem[] = [
  {
    id: "gal-1",
    title: "Reuni Akbar & Tech Summit di Kampus Meruya",
    category: "Reuni",
    date: "November 2025",
    image: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=800&auto=format&fit=crop&q=80",
    description: "Pertemuan hangat lintas angkatan alumni Teknik Informatika & Sistem Informasi UMB.",
  },
  {
    id: "gal-2",
    title: "Workshop AI & Cloud Architecture",
    category: "Seminar & Workshop",
    date: "Februari 2026",
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&auto=format&fit=crop&q=80",
    description: "Sesi hands-on implementasi Kubernetes dan Microservices bagi alumni muda.",
  },
  {
    id: "gal-3",
    title: "Penandatanganan MoU Riset Industri",
    category: "Sosial & Kemitraan",
    date: "Januari 2026",
    image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800&auto=format&fit=crop&q=80",
    description: "Kolaborasi riset kecerdasan buatan antara Fakultas Ilmu Komputer dan Startup Alumni.",
  },
  {
    id: "gal-4",
    title: "Penyerahan Beasiswa Dana Abadi Alumni",
    category: "Prestasi",
    date: "Desember 2025",
    image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=800&auto=format&fit=crop&q=80",
    description: "Dukungan biaya kuliah dan laptop untuk 15 mahasiswa berprestasi dan kurang mampu.",
  },
  {
    id: "gal-5",
    title: "Fasilkom Hackathon Mentoring Day",
    category: "Seminar & Workshop",
    date: "Maret 2026",
    image: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=800&auto=format&fit=crop&q=80",
    description: "Alumni senior menjadi juri dan mentor dalam kompetisi ide produk digital mahasiswa.",
  },
  {
    id: "gal-6",
    title: "Bakti Sosial Digital & Pengabdian Masyarakat",
    category: "Sosial & Kemitraan",
    date: "April 2026",
    image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&auto=format&fit=crop&q=80",
    description: "Pelatihan literasi coding untuk anak-anak panti asuhan di Jakarta Barat.",
  },
];

// 5. FAQ SEPUTAR ALUMNI
export const faqData: FAQItem[] = [
  {
    id: "faq-1",
    question: "Siapa saja yang berhak menjadi anggota Fasilkom Techno MercuBuana?",
    answer: "Seluruh lulusan program sarjana (S1), magister (S2), maupun diploma dari Fakultas Ilmu Komputer (Fasilkom) Universitas Mercu Buana, baik program studi Teknik Informatika maupun Sistem Informasi, otomatis menjadi bagian dari keluarga besar ikatan alumni.",
  },
  {
    id: "faq-2",
    question: "Bagaimana cara mendaftar dan memverifikasi data keanggotaan alumni?",
    answer: "Anda dapat menekan tombol 'Gabung Sekarang' atau 'Daftar Alumni' di website ini. Cukup isi formulir singkat yang memuat NIM, nama lengkap, tahun kelulusan, kontak aktif, dan tautan profil LinkedIn. Tim kami akan memverifikasi data Anda dalam waktu 1x24 jam.",
  },
  {
    id: "faq-3",
    question: "Apa saja manfaat bergabung dengan ikatan alumni ini?",
    answer: "Anggota akan mendapatkan akses eksklusif ke direktori jejaring karir alumni, informasi lowongan kerja prioritas dari perusahaan mitra/alumni, tiket gratis/diskon workshop & webinar teknologi, program mentorship 1-on-1, serta kesempatan kolaborasi bisnis dan pendanaan startup.",
  },
  {
    id: "faq-4",
    question: "Bagaimana cara berkolaborasi atau menawarkan lowongan kerja bagi sesama alumni?",
    answer: "Alumni yang ingin membuka lowongan magang, rekrutmen profesional, atau menawarkan kolaborasi proyek dapat menghubungi Divisi Kemitraan & Karir melalui menu Kontak atau mengirimkan detail kebutuhan ke email karir@fasilkom-techno.mercubuana.ac.id.",
  },
  {
    id: "faq-5",
    question: "Bagaimana cara berdonasi untuk program Beasiswa Dana Abadi Alumni?",
    answer: "Dana Abadi Alumni dikelola secara transparan dan teraudit oleh tim pengurus IKA Fasilkom. Anda dapat berkontribusi melalui transfer ke rekening resmi perkumpulan atau menghubungi bendahara IKA untuk skema donasi berkala.",
  },
  {
    id: "faq-6",
    question: "Apakah tersedia bantuan untuk legalisir ijazah dan transkrip secara online?",
    answer: "Ya! Ikatan Alumni bekerja sama dengan Tata Usaha Fasilkom UMB untuk mempermudah proses permohonan legalisir digital dan surat keterangan bagi alumni yang berada di luar kota maupun luar negeri.",
  },
];

// 6. VISI & MISI & NILAI INTI
export const aboutData = {
  title: "Membangun Sinergi, Menggerakkan Inovasi Teknologi Masa Depan",
  subtitle: "Ikatan Alumni Fasilkom Universitas Mercu Buana",
  description: "Fasilkom Techno MercuBuana adalah wadah silaturahmi, kolaborasi profesional, dan kontribusi nyata bagi lebih dari 5.800 alumni Fakultas Ilmu Komputer Universitas Mercu Buana di seluruh penjuru dunia. Kami berkomitmen menjembatani dunia akademik dengan kemajuan ekosistem teknologi modern.",
  vision: "Menjadi komunitas alumni teknologi yang unggul, berdaya saing global, berintegritas tinggi, dan berperan aktif sebagai motor transformasi digital Indonesia.",
  missions: [
    "Mempererat tali silaturahmi dan solidaritas antar alumni lintas angkatan dan program studi.",
    "Memfasilitasi peningkatan kompetensi profesional, inovasi riset, dan kewirausahaan berbasis teknologi.",
    "Menyediakan ekosistem bimbingan karir, mentorship, dan peluang kerja yang inklusif bagi alumni dan mahasiswa aktif.",
    "Memberikan kontribusi sosial dan keilmuan nyata bagi kemajuan almamater serta masyarakat luas.",
  ],
  values: [
    {
      title: "Inovasi Berkelanjutan",
      desc: "Mendorong eksplorasi teknologi terdepan untuk menyelesaikan tantangan masa kini.",
      icon: "Sparkles",
    },
    {
      title: "Sinergi & Kolaborasi",
      desc: "Membangun kekuatan bersama melalui jejaring yang solid dan saling memberdayakan.",
      icon: "UsersRound",
    },
    {
      title: "Integritas & Etika",
      desc: "Menjunjung tinggi kejujuran, profesionalitas, dan tanggung jawab etika digital.",
      icon: "ShieldCheck",
    },
    {
      title: "Kontribusi untuk Almamater",
      desc: "Berbakti memajukan almamater Universitas Mercu Buana ke pentas dunia.",
      icon: "HeartHandshake",
    },
  ],
};
