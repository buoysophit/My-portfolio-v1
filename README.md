# 🚀 BuoySophit's Portfolio

A modern, responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS. Showcasing my journey as a Computer Science student and my passion for software development.

[![Live Demo](https://img.shields.io/badge/Live-Demo-blue?style=for-the-badge&logo=vercel)](https://portfolio.buoysophit.pro)
[![GitHub](https://img.shields.io/badge/GitHub-Repository-black?style=for-the-badge&logo=github)](https://github.com/buoysophit)

## ✨ Features

- **🎨 Modern Design**: Clean, professional UI with smooth animations
- **📱 Fully Responsive**: Optimized for all devices and screen sizes
- **🌙 Dark/Light Mode**: Theme switching with system preference detection
- **⚡ Performance Optimized**: Built with Next.js 14 for optimal performance
- **🎭 Interactive Animations**: Smooth transitions using Framer Motion
- **📊 Dynamic Content**: Easy content management through structured data
- **🔍 SEO Optimized**: Proper meta tags and structured data
- **♿ Accessible**: Following WCAG accessibility guidelines

## 🛠️ Tech Stack

### Frontend
- **Framework**: [Next.js 14](https://nextjs.org/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **UI Components**: [Radix UI](https://www.radix-ui.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)

### Development Tools
- **Package Manager**: [pnpm](https://pnpm.io/)
- **Code Quality**: ESLint + Prettier
- **Version Control**: Git & GitHub

## 🚀 Quick Start

### Prerequisites
Make sure you have the following installed:
- Node.js (v18 or higher)
- pnpm (recommended) or npm

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/buoysophit/My-portfolio-v1.git
   cd My-portfolio-v1
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   # or
   npm install
   ```

3. **Start the development server**
   ```bash
   pnpm dev
   # or
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── globals.css        # Global styles and CSS variables
│   ├── layout.tsx         # Root layout component
│   ├── page.tsx          # Home page
│   └── blog/             # Blog routes
├── components/            # Reusable UI components
│   ├── ui/               # Base UI components (shadcn/ui)
│   ├── magicui/          # Animation components
│   ├── hero-profile.tsx  # Hero section component
│   ├── contact.tsx       # Contact form component
│   ├── os.tsx           # OS Experience component
│   └── ...
├── data/                 # Static data and content
│   ├── resume.tsx       # Personal data and resume info
│   └── blog.ts          # Blog posts data
├── lib/                 # Utility functions
│   └── utils.ts         # Helper functions
└── public/              # Static assets
    ├── images/
    ├── assets/
    └── ...
```

## 🎨 Customization

### Personal Information
Update your personal information in `src/data/resume.tsx`:

```typescript
export const DATA = {
  name: "Your Name",
  initials: "YN",
  url: "https://yourwebsite.com",
  location: "Your Location",
  description: "Your description...",
  // ... other fields
};
```

### Theme Colors
Modify the color scheme in `src/app/globals.css`:

```css
:root {
  --primary: 0 0% 9%;
  --secondary: 0 0% 96.1%;
  /* ... other CSS variables */
}
```

### Adding New Sections
1. Create a new component in `src/components/`
2. Import and use it in `src/app/page.tsx`
3. Add smooth animations using the `BlurFade` component

## 📱 Sections

- **🏠 Hero**: Introduction with profile image and key information
- **👨‍💻 About**: Personal summary and background
- **🔧 Technology Stack**: Interactive technology cloud
- **🎓 Education**: Academic background
- **📚 Courses**: Completed certifications and courses
- **💻 OS Experience**: Operating systems expertise
- **🛠️ Skills**: Technical and non-technical skills
- **🚀 Projects**: Portfolio of work and projects
- **📧 Contact**: Contact form and social links

## 🌟 Key Features Explained

### Responsive Design
- Mobile-first approach
- Optimized for tablets and desktops
- Fluid typography and spacing

### Performance
- Next.js optimization
- Image optimization with next/image
- Lazy loading for smooth performance

### Accessibility
- Proper semantic HTML
- ARIA labels and roles
- Keyboard navigation support
- Screen reader friendly

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to [Vercel](https://vercel.com)
3. Deploy with zero configuration

### Other Platforms
The project can be deployed on any platform that supports Next.js:
- Netlify
- AWS Amplify
- DigitalOcean App Platform

## 📈 Performance

- **Lighthouse Score**: 95+ across all metrics
- **Core Web Vitals**: Optimized for LCP, FID, and CLS
- **Bundle Size**: Optimized with tree shaking and code splitting

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📞 Contact

**BuoySophit** - Computer Science Student

- 📧 Email: [Bouysophit11@gmail.com](mailto:Bouysophit11@gmail.com)
- 🔗 LinkedIn: [buoy-sophit](https://www.linkedin.com/in/buoy-sophit-06111a2b4/)
- 🐙 GitHub: [buoysophit](https://github.com/buoysophit)
- 🎥 YouTube: [PhitterParker](https://www.youtube.com/@phitterparker)
- 🌐 Portfolio: [portfolio.buoysophit.pro](https://portfolio.buoysophit.pro)

---

⭐ **Star this repository if you found it helpful!**

*Built with ❤️ by BuoySophit*