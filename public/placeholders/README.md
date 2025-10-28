# Placeholder Images Directory

Direktori ini berisi file placeholder SVG yang digunakan sementara dalam project.

## File yang Tersedia:

### 1. placeholder-logo.svg
Digunakan untuk:
- Logo brand Promate (Header)
- Logo brand mobil (Toyota, Mitsubishi, Honda, Wuling)

### 2. placeholder.svg
Digunakan untuk:
- Hero image
- Product showcase cards
- CTA background images
- Location/building images
- Product detail gallery images
- Thumbnail images

## Cara Mengganti dengan Gambar Asli:

### Opsi 1: Ganti File SVG (Mudah)
Jika Anda punya gambar dalam format SVG, cukup replace file yang ada dengan gambar Anda:
- Ganti `placeholder-logo.svg` dengan logo asli
- Ganti `placeholder.svg` dengan gambar produk asli

### Opsi 2: Gunakan Format Gambar Lain (PNG/JPG/WebP)
Jika Anda ingin menggunakan format gambar lain:

1. **Tambahkan gambar Anda** ke folder ini, misalnya:
   - `logo-promate.png`
   - `logo-toyota.png`
   - `hero-image.jpg`
   - `product-1.jpg`
   - dll.

2. **Update path gambar** di file-file berikut:

   **Header & Brand Logos:**
   - `components/Header.tsx` - ganti path logo Promate
   - `app/page.tsx` - ganti `brandLogo` untuk setiap brand

   **Hero & Marketing:**
   - `components/Hero.tsx` - ganti hero image
   - `components/CtaRibbon.tsx` - ganti background CTA
   - `components/LocationCard.tsx` - ganti gambar building

   **Product Images:**
   - `app/page.tsx` - ganti `image` untuk setiap produk
   - `app/[slug]/page.tsx` - ganti semua gambar di array `images`

## Rekomendasi Ukuran Gambar:

Untuk hasil terbaik, gunakan ukuran berikut:

### Logos
- Logo brand: 200x200px (persegi) atau 200x100px (landscape)
- Format: PNG transparan atau SVG

### Hero & Marketing
- Hero image: 1200x750px (ratio 16:10)
- CTA background: 1920x600px (wide banner)
- Building/location: 1200x900px (ratio 4:3)
- Format: JPG atau WebP (untuk ukuran file lebih kecil)

### Products
- Product cards: 800x800px (persegi 1:1)
- Product detail main: 1200x800px (ratio 3:2)
- Thumbnails: 240x240px (persegi 1:1)
- Format: JPG atau WebP

## Tips Optimasi:

1. **Compress gambar** sebelum upload menggunakan tools seperti:
   - TinyPNG (https://tinypng.com)
   - Squoosh (https://squoosh.app)
   - ImageOptim (untuk Mac)

2. **Gunakan WebP** untuk ukuran file lebih kecil dengan kualitas sama

3. **Responsive images**: Next.js secara otomatis akan optimize gambar Anda

4. **SVG untuk logos**: Lebih baik gunakan SVG untuk logo karena scalable dan ukuran file kecil

## Struktur Gambar yang Ideal:

```
public/placeholders/
├── placeholder.svg (temporary - ganti dengan gambar asli)
├── placeholder-logo.svg (temporary - ganti dengan logo asli)
│
├── logos/
│   ├── promate.svg
│   ├── toyota.png
│   ├── mitsubishi.png
│   ├── honda.png
│   └── wuling.png
│
├── hero/
│   └── hero-main.jpg
│
├── products/
│   ├── land-cruiser-1.jpg
│   ├── land-cruiser-2.jpg
│   ├── alphard-1.jpg
│   └── ... (lebih banyak gambar produk)
│
└── location/
    └── office-building.jpg
```

Setelah menambahkan gambar dengan struktur folder seperti di atas, update path di code menjadi:
- `/placeholders/logos/promate.svg`
- `/placeholders/products/land-cruiser-1.jpg`
- dll.

