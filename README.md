# Animated React Portfolio (Documentation)

Dokumentasi ini menjelaskan langkah-langkah untuk menjalankan dan membangun portofolio React animasi.

## Prasyarat

1. Node.js LTS (disarankan v20+ atau v18+). Pastikan `node` dan `npm` terpasang.
2. Git (opsional)

## Instalasi

1. Clone repository atau buat folder baru dan salin file-file di proyek.
2. Jalankan:

```bash
npm install
```

> Paket utama yang digunakan:
>
> - React ^19.2.0
> - Vite ^7.0.0
> - Tailwind CSS ^3.0.0.
> - Framer Motion ^12.23.24

3. Jalankan development server:

```bash
npm run dev
```

Server akan tersedia di `http://localhost:5173` (atau port lain jika 5173 sibuk).

## Build untuk produksi

```bash
npm run build
npm run preview
```

## Struktur proyek

(Lihat bagian atas README untuk pohon file.)

## Catatan teknis dan alasan pemilihan

- **Vite**: sangat cepat untuk development dan mendukung HMR. (menggunakan Vite v7)
- **Tailwind CSS v4**: utilities modern dan lebih cepat kustomisasinya. Pastikan membaca upgrade guide jika proyek migrasi dari v3.
- **Framer Motion**: untuk animasi deklaratif dan performa yang baik.
- **React 19**: memanfaatkan fitur terbaru dan peningkatan performa.

## Kustomisasi

- Ganti `src/data/*` untuk menyesuaikan skill dan projek yang pernah kamu pelajari.
- Ganti `Header` dan teks di `Hero` agar menggambarkan dirimu.
- Semua gambar merujuk ke URL eksternal agar repository tetap ringan.

## Troubleshooting umum

- Jika build gagal karena versi package, pastikan Node.js up-to-date, atau sesuaikan versi dependensi di `package.json`.
- Untuk masalah Tailwind (class tidak muncul), pastikan `content` di `tailwind.config.cjs` menunjuk ke file yang benar.
