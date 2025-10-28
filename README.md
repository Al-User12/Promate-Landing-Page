# Promate Landing Page

A production-ready Next.js 14+ App Router project showcasing custom premium car floor mats (karpet mobil) with a dark automotive design theme.

## 🚀 Features

- **Next.js 14+ App Router**: Modern React framework with server components
- **Tailwind CSS**: Utility-first styling with custom dark automotive theme
- **TypeScript**: Full type safety across the application
- **SEO Optimized**: Next.js Metadata API + JSON-LD structured data
- **Mobile-First**: Responsive design that works on all devices
- **Performance**: Optimized images with next/image
- **Indonesian Localization**: All content in Bahasa Indonesia

## 🎨 Design System

### Colors
- **Brand Black**: `#0F0F0F` - Primary background
- **Surface**: `#1A1A1A` - Card backgrounds
- **Muted Text**: `#A7A7A7` - Secondary text
- **Line**: `#2A2A2A` - Borders and dividers
- **Primary Red**: `#EF4444` - CTA buttons
- **WhatsApp Green**: `#25D366` - WhatsApp buttons

### Border Radius
- Cards: `16px`
- Buttons: `20px`

### Shadows
- Card: Soft, dark shadows for depth
- Hover: Enhanced shadows on interaction

## 📁 Project Structure

```
├── app/
│   ├── [slug]/
│   │   └── page.tsx          # Product detail page
│   ├── layout.tsx             # Root layout with SEO
│   ├── page.tsx               # Home page
│   └── globals.css            # Global styles
├── components/
│   ├── BrandSection.tsx       # Brand product showcase
│   ├── CtaRibbon.tsx          # Call-to-action banner
│   ├── FloatingWhatsApp.tsx   # Fixed WhatsApp button
│   ├── Footer.tsx             # Site footer
│   ├── Gallery.tsx            # Product image gallery
│   ├── Header.tsx             # Site header with rating
│   ├── Hero.tsx               # Hero section
│   ├── LocationCard.tsx       # Location display
│   ├── ProductCard.tsx        # Product preview card
│   └── Rating.tsx             # Star rating component
├── public/
│   └── placeholders/          # Image placeholders
├── next.config.js             # Next.js configuration
├── tailwind.config.ts         # Tailwind configuration
├── tsconfig.json              # TypeScript configuration
└── package.json               # Dependencies
```

## 🛠️ Setup & Installation

### Prerequisites
- Node.js 18+ 
- npm or yarn or pnpm

### Installation

1. **Install dependencies:**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

2. **Add your images:**
   - Place your actual product images in `public/placeholders/`
   - Follow the naming convention in `public/placeholders/.gitkeep`
   - See image requirements below

3. **Run development server:**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. **Open your browser:**
   - Navigate to [http://localhost:3000](http://localhost:3000)

## 📸 Image Requirements

Replace placeholder images in `public/placeholders/` with your actual images:

### Brand Logos (200x100px or similar)
- `logo-brand.png` - Promate logo
- `logo-toyota.png`
- `logo-mitsubishi.png`
- `logo-honda.png`
- `logo-wuling.png`

### Hero & Marketing
- `hero-1125x720.png` (16:10 ratio)
- `cta-background-1920x600.png` (wide banner)
- `building-1200x900.png` (4:3 ratio)

### Products
- `showcase-square-800x800.png` (1:1 ratio for product cards)
- `product-main-1200x800.png` (3:2 ratio for detail page)
- `thumb-240x240.png` (1:1 ratio for thumbnails)

## 🎯 Key Pages

### Home Page (`/`)
Sections in order:
1. Header with brand logo and rating
2. Hero section with CTAs
3. Product showcase grouped by brand
4. CTA ribbon "Mau Pasang Langsung Tanpa Ribet?"
5. Location card with map link
6. Repeated CTA ribbon
7. Footer
8. Floating WhatsApp button

### Product Detail Page (`/[slug]`)
Dynamic product pages with:
- Image gallery with thumbnails
- Product title and variant
- Detailed description
- Material benefits
- WhatsApp CTA
- Floating WhatsApp button

## 🔧 Customization

### Adding New Products

Edit `app/page.tsx` to add products to brands:

```typescript
const brandsData = [
  {
    brandName: "Toyota",
    brandLogo: "/placeholders/logo-toyota.png",
    products: [
      {
        slug: "your-product-slug",
        model: "Model Name",
        variant: "Variant Name",
        image: "/placeholders/your-image.png",
      },
      // ... more products
    ],
  },
  // ... more brands
];
```

### Adding Product Details

Edit `app/[slug]/page.tsx` to add product detail data:

```typescript
const productData: Record<string, any> = {
  "your-product-slug": {
    title: "Product Title",
    variant: "Variant Description",
    description: ["Paragraph 1", "Paragraph 2", "Paragraph 3"],
    images: [
      { src: "/placeholders/image1.png", alt: "Description" },
      // ... more images
    ],
  },
};
```

### Updating Contact Information

Update WhatsApp number throughout the application:
- Search for `6281234567890` and replace with your actual number
- Update contact info in `components/Footer.tsx`

### Customizing Colors

Edit `tailwind.config.ts` to modify the color scheme:

```typescript
colors: {
  brand: {
    black: "#0F0F0F",
    surface: "#1A1A1A",
    // ... customize as needed
  },
}
```

## 🚢 Deployment

### Build for Production

```bash
npm run build
npm start
```

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Import project to [Vercel](https://vercel.com)
3. Vercel will auto-detect Next.js and configure build settings
4. Deploy!

### Other Platforms
- **Netlify**: Use `next export` or Netlify adapter
- **Railway**: Direct Next.js support
- **AWS/GCP**: Use container deployment

## 📱 Mobile Optimization

The site is fully responsive with:
- Mobile-first design approach
- Touch-friendly buttons (minimum 44x44px)
- Optimized images for different screen sizes
- Smooth scrolling and transitions

## ♿ Accessibility

- Semantic HTML elements
- ARIA labels for icon buttons
- Keyboard navigation support
- Alt text for all images
- High contrast color ratios

## 🔍 SEO Features

- Next.js Metadata API for dynamic meta tags
- JSON-LD structured data (LocalBusiness schema)
- Open Graph tags for social sharing
- Optimized title and description tags
- Semantic HTML structure

## 📊 Performance

- Server components for faster initial load
- Image optimization with next/image
- Code splitting by route
- Lazy loading for images below the fold

## 📝 License

This project is private and proprietary.

## 🤝 Support

For questions or support:
- WhatsApp: +62 812-3456-7890 (update with actual number)
- Email: info@promatesupplier.id

---

Built with ❤️ using Next.js 14 and Tailwind CSS

