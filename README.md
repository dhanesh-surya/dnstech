# DNS TechSupport Website

Modern, responsive website built with Next.js 14+ for DNS TechSupport - providing IT support, web development, and software solutions.

## 🚀 Features

- **Next.js 14+** with App Router
- **TypeScript** for type safety
- **Tailwind CSS** for styling
- **Responsive Design** - Mobile-first approach
- **SEO Optimized** - Meta tags, sitemap, robots.txt
- **Contact Form** with email notifications
- **Performance Optimized** - Image optimization, code splitting
- **Accessibility** - WCAG 2.1 Level AA compliant
- **24/7 Support** messaging and WhatsApp integration

## 📋 Prerequisites

- Node.js 18+ 
- npm or yarn or pnpm
- Git

## 🛠️ Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd dnstechsupport
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env
   ```
   
   Edit `.env` and add your configuration:
   - SMTP credentials for email functionality
   - Google Maps API key
   - reCAPTCHA keys (optional)
   - Analytics ID

4. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
dnstechsupport/
├── app/                      # Next.js app directory
│   ├── (routes)/            # Page routes
│   │   ├── about/
│   │   ├── services/
│   │   ├── contact/
│   │   └── [legal pages]/
│   ├── api/                 # API routes
│   │   └── contact/
│   ├── layout.tsx           # Root layout
│   ├── page.tsx             # Homepage
│   ├── globals.css          # Global styles
│   ├── sitemap.ts           # Dynamic sitemap
│   └── robots.ts            # Robots.txt
├── components/              # React components
│   ├── home/               # Homepage sections
│   ├── layout/             # Layout components
│   └── ui/                 # UI components
├── public/                  # Static assets
├── tailwind.config.ts      # Tailwind configuration
├── tsconfig.json           # TypeScript configuration
└── package.json            # Dependencies
```

## 🎨 Design System

### Colors
- **Primary**: #0066CC (Professional Blue)
- **Secondary**: #00A896 (Tech Green)
- **Accent**: #FF6B35 (Action Orange)

### Typography
- **Headings**: Poppins
- **Body**: Inter
- **Code**: Fira Code

### Breakpoints
- Mobile: 320px - 767px
- Tablet: 768px - 1023px
- Desktop: 1024px - 1439px
- Wide: 1440px+

## 🚀 Deployment

### Vercel (Recommended)

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Initial commit"
   git push origin main
   ```

2. **Deploy to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Import your GitHub repository
   - Configure environment variables
   - Deploy

### Manual Deployment

1. **Build the project**
   ```bash
   npm run build
   ```

2. **Start production server**
   ```bash
   npm start
   ```

## 📝 Environment Variables

Required environment variables:

```env
# Application
NEXT_PUBLIC_SITE_URL=https://dnstechsupport.com

# Email Configuration
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASSWORD=your-app-password
SMTP_FROM=noreply@dnstechsupport.com
CONTACT_EMAIL=digidhanesh@gmail.com

# Google Services
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=your-key
NEXT_PUBLIC_RECAPTCHA_SITE_KEY=your-key
RECAPTCHA_SECRET_KEY=your-key

# Analytics
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX

# Contact Information
NEXT_PUBLIC_PHONE=789-872-6342
NEXT_PUBLIC_EMAIL=digidhanesh@gmail.com
NEXT_PUBLIC_WHATSAPP=917898726342
NEXT_PUBLIC_ADDRESS=Pamgarh, Chhattisgarh, India
```

## 🧪 Testing

```bash
# Run linting
npm run lint

# Type checking
npm run type-check

# Run tests (when configured)
npm test
```

## 📊 Performance

Target metrics:
- Lighthouse Score: >90
- LCP: <2.5s
- FID: <100ms
- CLS: <0.1

## 🔒 Security

- HTTPS enforced
- Secure headers configured
- Input validation with Zod
- Rate limiting on API routes
- XSS and CSRF protection

## 📱 Features

### Core Pages
- ✅ Homepage with hero and services
- ✅ About page
- ✅ Services page with details
- ✅ Contact page with form
- ✅ Legal pages (Privacy, Terms, Cookie Policy)

### Components
- ✅ Responsive navigation
- ✅ Footer with links
- ✅ WhatsApp floating button
- ✅ Contact form with validation
- ✅ Service cards
- ✅ CTA sections

### Integrations
- ✅ Email notifications (Nodemailer)
- ⏳ Google Maps (API key required)
- ⏳ reCAPTCHA (keys required)
- ⏳ Google Analytics (ID required)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

## 📄 License

© 2026 DNS TechSupport – 24/7. All rights reserved.

## 📞 Contact

- **Email**: digidhanesh@gmail.com
- **Phone**: 789-872-6342
- **Location**: Pamgarh, Chhattisgarh, India
- **Website**: https://dnstechsupport.com

## 🙏 Acknowledgments

- Next.js Team
- Tailwind CSS
- Vercel
- All open-source contributors

---

Built with ❤️ by DNS TechSupport
