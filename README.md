# Fix It Auto Repair Website

A modern, fully responsive website for Fix It Auto Repair - a family-owned auto repair shop in Ames, IA.

## Features

✨ **Modern Design**
- Glassmorphism effects and smooth animations
- Mobile-first responsive design
- Cinematic hero sections with parallax effects
- Professional color palette (Blue, Sky Blue, Amber accents)

🚀 **Key Functionality**
- Online appointment booking system
- Service catalog with pricing
- Customer testimonials carousel
- Interactive FAQ section
- Blog with auto care tips
- Contact form with Google Maps integration
- Special offers page

🛠️ **Technical Stack**
- React 19
- TypeScript
- Vite
- React Router v7
- Tailwind CSS v4
- shadcn/ui components
- Lucide React icons

## Installation

1. **Install Node.js and npm** (if not already installed)
   - Download from https://nodejs.org/

2. **Install dependencies**
   ```bash
   cd fix-it-auto-repair
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

5. **Preview production build**
   ```bash
   npm run preview
   ```

## Project Structure

```
fix-it-auto-repair/
├── public/                 # Static assets (images, logos)
├── src/
│   ├── components/        # Reusable components
│   │   ├── ui/           # shadcn UI components
│   │   ├── Layout.tsx    # Main layout with header/footer
│   │   └── BookingModal.tsx
│   ├── pages/            # Page components
│   │   ├── HomePage.tsx
│   │   ├── ServicesPage.tsx
│   │   ├── AboutPage.tsx
│   │   ├── SpecialOffersPage.tsx
│   │   ├── ContactPage.tsx
│   │   ├── FAQPage.tsx
│   │   └── BlogPage.tsx
│   ├── lib/              # Utility functions
│   ├── App.tsx           # Main app component
│   ├── main.tsx          # Entry point
│   └── index.css         # Global styles & theme
├── package.json
├── tsconfig.json
├── vite.config.ts
└── components.json       # shadcn configuration

```

## Pages

- **Home** - Hero section, services overview, testimonials, trust signals
- **Services** - Detailed service catalog with pricing and descriptions
- **About** - Company story, team profiles, certifications
- **Special Offers** - Current promotions and discounts
- **Contact** - Contact form, business hours, location map
- **FAQ** - Frequently asked questions organized by category
- **Blog** - Auto care tips and industry news

## Customization

### Colors
Edit `src/index.css` to customize the color palette:
```css
--primary: #1E3A8A;
--secondary: #0EA5E9;
--accent: #F59E0B;
```

### Content
- Update business information in `src/components/Layout.tsx`
- Modify service offerings in `src/pages/ServicesPage.tsx`
- Add team members in `src/pages/AboutPage.tsx`
- Update special offers in `src/pages/SpecialOffersPage.tsx`

### Images
Replace images in the `public/` folder with your own:
- Logo: `fix-it-logo-308w.jpg`
- Hero image: `hero-front-shop-2304w.jpg`
- Certification badges: `454-4549310_ase-certified-ase-certified-logo-clipart-84w.png`
- Warranty badge: `warranty-img-removebg-preview+1-8b134481-659w.png`

## SEO Optimization

The site includes:
- Semantic HTML structure
- Meta descriptions
- Local business schema (ready to implement)
- Fast loading times with optimized images
- Mobile-responsive design

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

Copyright © 2024 Fix It Auto Repair. All rights reserved.

## Support

For questions or issues, contact:
- Phone: (515) 292-0177
- Email: info@fixitautoames.com
- Address: 123 Main Street, Ames, IA 50010