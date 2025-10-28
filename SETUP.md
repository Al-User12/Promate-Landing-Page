# Quick Setup Guide

## 🚀 Get Started in 3 Steps

### Step 1: Install Dependencies

Open your terminal in the project directory and run:

```bash
npm install
```

This will install all required packages:
- Next.js 14.2
- React 18.3
- Tailwind CSS 3.4
- TypeScript 5.3

### Step 2: Add Your Images

Project ini sudah menggunakan placeholder SVG (`placeholder.svg` dan `placeholder-logo.svg`) yang siap digunakan untuk development.

**Untuk menggunakan gambar asli Anda:**

1. Navigate to `public/placeholders/`
2. Baca file `README.md` di folder tersebut untuk panduan lengkap
3. Anda bisa:
   - **Opsi A**: Replace file SVG yang ada dengan gambar asli Anda
   - **Opsi B**: Tambahkan gambar baru (PNG/JPG/WebP) dan update path di code

**Struktur folder yang direkomendasikan:**
```
public/placeholders/
├── logos/          (logo brand mobil)
├── products/       (foto produk karpet)
├── hero/           (hero section images)
└── location/       (foto toko/kantor)
```

> **Tip:** Untuk development awal, SVG placeholder sudah cukup. Ganti dengan gambar asli saat sudah siap production.

### Step 3: Run the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see your site!

## 📱 Update Contact Information

Replace the placeholder WhatsApp number throughout the project:

1. Search for `6281234567890` in all files
2. Replace with your actual WhatsApp number (include country code, e.g., `628123456789`)
3. Update contact info in `components/Footer.tsx`

Files to update:
- `components/Hero.tsx`
- `components/CtaRibbon.tsx`
- `components/FloatingWhatsApp.tsx`
- `app/[slug]/page.tsx`
- `components/Footer.tsx`

## 🎨 Customize Products

### Add Products to Home Page

Edit `app/page.tsx` and modify the `brandsData` array:

```typescript
const brandsData = [
  {
    brandName: "Toyota",
    brandLogo: "/placeholders/logo-toyota.png",
    products: [
      {
        slug: "land-cruiser-300-gr-sport", // URL slug
        model: "Land Cruiser 300 GR Sport", // Display name
        variant: "Black Marble + Coil Black", // Variant description
        image: "/placeholders/showcase-square-800x800.png", // Product image
      },
      // Add more products here
    ],
  },
  // Add more brands here
];
```

### Add Product Details

Edit `app/[slug]/page.tsx` and add entries to `productData`:

```typescript
const productData: Record<string, any> = {
  "land-cruiser-300-gr-sport": { // Must match slug from home page
    title: "Land Cruiser 300 GR Sport",
    variant: "Black Marble • Coil Black",
    description: [
      "First paragraph of description...",
      "Second paragraph...",
      "Third paragraph...",
    ],
    images: [
      {
        src: "/placeholders/product-main-1200x800.png",
        alt: "Descriptive alt text for SEO",
      },
      // Add 3-4 images for the gallery
    ],
  },
  // Add more products here
};
```

## 🏗️ Build for Production

When you're ready to deploy:

```bash
npm run build
npm start
```

## 🚢 Deploy to Vercel (Recommended)

1. Push your project to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "Import Project"
4. Select your GitHub repository
5. Click "Deploy"

Vercel will automatically:
- Detect Next.js configuration
- Build your project
- Deploy to a production URL
- Set up automatic deployments for future updates

## ✅ Checklist

Before going live, make sure you've:

- [ ] Replaced all placeholder images
- [ ] Updated WhatsApp number in all components
- [ ] Updated contact information in footer
- [ ] Added your actual products and details
- [ ] Updated Promate logo
- [ ] Updated location information
- [ ] Tested all WhatsApp links
- [ ] Tested on mobile devices
- [ ] Verified all product detail pages work
- [ ] Updated meta descriptions for SEO

## 🆘 Troubleshooting

**Images not showing?**
- Make sure image files are in `public/placeholders/`
- Check that file names exactly match (case-sensitive)
- Verify image file extensions (.png, .jpg, .webp)

**WhatsApp links not working?**
- Verify phone number format (include country code without + or spaces)
- Test WhatsApp links in browser

**Build errors?**
- Run `npm install` again
- Delete `.next` folder and rebuild
- Check for TypeScript errors in terminal

**Need help?**
- Check the main README.md for detailed documentation
- Review Next.js docs: https://nextjs.org/docs

---

**Ready to launch?** Follow the deployment guide above and your site will be live in minutes! 🎉

