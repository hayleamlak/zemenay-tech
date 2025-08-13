# 🚀 Zemenay Community Website

A modern, responsive website built with React, featuring 3D graphics, smooth animations, and a beautiful glass morphism design. Built for forward-thinking businesses looking to revolutionize their digital experience.

![Zemenay Website Preview](src/assets/Zemenay%20Main.png)

## ✨ Features

- **🎨 Modern Design**: Glass morphism effects with backdrop blur and transparent backgrounds
- **🌐 3D Graphics**: Interactive 3D model viewer using React Three Fiber
- **📱 Fully Responsive**: Optimized for desktop, tablet, and mobile devices
- **⚡ Smooth Animations**: CSS animations and scroll-triggered effects
- **🎭 Interactive Components**: Hover effects, modals, and dynamic content
- **🔄 Infinite Marquee**: Smooth client logo scrolling with pause on hover
- **💎 Testimonials**: Beautiful testimonial cards with shine effects
- **🎯 React Icons**: Modern iconography using React Icons library
- **🚀 Performance Optimized**: Lazy loading and efficient rendering

## 🛠️ Tech Stack

- **Frontend Framework**: React 18
- **Build Tool**: Vite
- **Styling**: CSS3 with CSS Variables and Glass Morphism
- **3D Graphics**: React Three Fiber + Three.js
- **Icons**: React Icons
- **Routing**: React Router DOM
- **Animations**: CSS Animations + Intersection Observer API
- **Package Manager**: npm

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- **Node.js** (version 16.0 or higher)
- **npm** (version 8.0 or higher)

You can check your versions with:
```bash
node --version
npm --version
```

## 🚀 Installation

### 1. Clone the Repository

```bash
git clone https://github.com/hayleamlak/zemenay-website.git
cd zemenay-website
```

### 2. Install Dependencies

```bash
npm install
```

This will install all required packages including:
- React and React DOM
- React Router DOM
- React Three Fiber
- React Icons
- Vite and related build tools

### 3. Start Development Server

```bash
npm run dev
```

The website will open in your browser at `http://localhost:5173`

### 4. Build for Production

```bash
npm run build
```

The production build will be created in the `dist` folder.

### 5. Preview Production Build

```bash
npm run preview
```

## 📁 Project Structure

```
zemenay-website/
├── public/                 # Static assets
│   ├── myModel.glb        # 3D model file
│   └── venice_sunset_2k.hdr # HDR environment map
├── src/
│   ├── assets/            # Images and media files
│   │   ├── Zemenay Main.png
│   │   ├── client logos
│   │   └── team photos
│   ├── components/        # React components
│   │   ├── Navbar.jsx     # Navigation bar
│   │   ├── Footer.jsx     # Website footer
│   │   ├── ModelViewer.jsx # 3D model viewer
│   │   ├── Gallery.jsx    # 3D carousel gallery
│   │   ├── WelcomeScreen.jsx # Loading welcome screen
│   │   └── ...
│   ├── pages/             # Page components
│   │   ├── HomePage.jsx   # Homepage
│   │   ├── AboutPage.jsx  # About page
│   │   ├── ServicesPage.jsx # Services page
│   │   ├── PricingPage.jsx # Pricing page
│   │   └── ContactPage.jsx # Contact page
│   ├── styles/            # CSS stylesheets
│   │   ├── main.css       # Global styles
│   │   ├── homepage.css   # Homepage styles
│   │   ├── navbar.css     # Navigation styles
│   │   └── ...
│   ├── App.jsx            # Main app component
│   ├── main.jsx           # Entry point
│   └── index.css          # Base styles
├── package.json           # Dependencies and scripts
├── vite.config.js         # Vite configuration
└── README.md              # This file
```

## 🎮 Usage

### Navigation

The website features a sticky navigation bar with:
- **Home**: Landing page with hero section and features
- **About**: Company information and team members
- **Services**: Service offerings with 3D gallery
- **Pricing**: Pricing plans and comparison
- **Contact**: Contact information and form

### Interactive Features

#### 3D Model Viewer
- **Location**: Homepage background
- **Controls**: Mouse drag to rotate, scroll to zoom
- **Performance**: Optimized with React Three Fiber

#### Client Logo Marquee
- **Feature**: Infinite scrolling client logos
- **Interaction**: Pause on hover, resume on mouse leave
- **Performance**: Hardware-accelerated CSS animations

#### Testimonial Cards
- **Design**: Glass morphism with shine effects
- **Animation**: Hover effects with transform and glow
- **Layout**: Responsive grid (3 columns desktop, 2 tablet, 1 mobile)

#### Service Cards
- **Icons**: React Icons for visual appeal
- **Layout**: 4-column grid on desktop, responsive on mobile
- **Interaction**: Modal popups with detailed information

### Responsive Design

The website automatically adapts to different screen sizes:
- **Desktop**: Full layout with all features
- **Tablet**: Adjusted spacing and 2-column grids
- **Mobile**: Single-column layout with optimized touch targets

## 🎨 Customization

### Colors and Themes

CSS variables are defined in the root scope for easy customization:

```css
:root {
  --blue: #072630;                    /* Primary blue */
  --glass-bg: rgba(23, 41, 53, 0.28); /* Glass background */
  --text-light: #010407;              /* Light text */
  --text-muted: #000000;              /* Muted text */
  --shadow-blue: #00121888;           /* Blue shadows */
}
```

### Adding New Pages

1. Create a new component in `src/pages/`
2. Add the route in `src/App.jsx`
3. Create corresponding CSS in `src/styles/`
4. Update navigation in `src/components/Navbar.jsx`

### Modifying 3D Models

1. Replace `public/myModel.glb` with your 3D model
2. Update `src/components/ModelViewer.jsx` if needed
3. Ensure your model is optimized for web (low polygon count)

## 🚀 Deployment

### Vercel (Recommended)

1. Install Vercel CLI:
```bash
npm i -g vercel
```

2. Deploy:
```bash
vercel
```

### Netlify

1. Build the project:
```bash
npm run build
```

2. Drag the `dist` folder to Netlify's deploy area

### GitHub Pages

1. Add to `package.json`:
```json
{
  "homepage": "https://yourname.github.io/zemenay-website",
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}
```

2. Install gh-pages and deploy:
```bash
npm install --save-dev gh-pages
npm run deploy
```

## 🔧 Development

### Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
npm run lint         # Run ESLint (if configured)
```

### Code Style

- **Components**: Functional components with hooks
- **Styling**: CSS modules or separate CSS files
- **Naming**: PascalCase for components, kebab-case for files
- **Structure**: Organized imports, clear component hierarchy

### Performance Tips

- Use `React.memo()` for expensive components
- Implement lazy loading for routes
- Optimize 3D models for web
- Use CSS transforms for animations
- Implement proper image optimization

## 🐛 Troubleshooting

### Common Issues

#### 3D Model Not Loading
- Check if `myModel.glb` exists in `public/` folder
- Ensure the model file is not corrupted
- Check browser console for errors

#### Styles Not Applying
- Verify CSS file imports in components
- Check for CSS variable conflicts
- Ensure proper class naming

#### Build Errors
- Clear `node_modules` and reinstall: `rm -rf node_modules && npm install`
- Check Node.js version compatibility
- Verify all dependencies are installed

#### Performance Issues
- Optimize 3D models (reduce polygon count)
- Implement lazy loading for images
- Use React DevTools Profiler to identify bottlenecks

## 📱 Browser Support

- **Chrome**: 90+
- **Firefox**: 88+
- **Safari**: 14+
- **Edge**: 90+

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature-name`
3. Commit changes: `git commit -m 'Add feature'`
4. Push to branch: `git push origin feature-name`
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see 

## 📞 Support

For support and questions:
- **Email**: zemenaytechsolutions@gmail.com
- **Instagram**: [@zemenay](https://instagram.com)
- **LinkedIn**: [Zemenay](https://linkedin.com)

## 🙏 Acknowledgments

- **React Three Fiber** for 3D graphics
- **React Icons** for beautiful iconography
- **Vite** for fast development experience
- **CSS Glass Morphism** for modern design inspiration

---

**Built with ❤️ by the Zemenay Team**

*Empowering businesses with innovative digital solutions*
