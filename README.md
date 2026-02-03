# Developer Portfolio

A modern, responsive web portfolio built with React to showcase my professional experience, technical skills, and project work. This portfolio features smooth animations, interactive 3D elements, and a clean design optimized for performance.

## Overview

This portfolio serves as a comprehensive digital resume and project showcase. It presents my background as a developer, highlights key projects with detailed descriptions, displays my technical skill set, and provides an integrated contact form for professional inquiries.

The application is designed with recruiters and potential collaborators in mind, offering an intuitive navigation experience and mobile-responsive layout that works seamlessly across all devices.

## Tech Stack

**Core Technologies:**
- React 18
- JavaScript (ES6+)
- Styled Components
- React Router

**UI & Animations:**
- Framer Motion
- Three.js
- React Three Fiber
- React Three Drei
- OGL (WebGL rendering)
- Typewriter Effect
- React Tilt

**Additional Libraries:**
- EmailJS (contact form integration)
- Material-UI Icons
- React Vertical Timeline Component
- React Scroll

## Key Features

- Fully responsive design that adapts to all screen sizes
- Interactive 3D background animations using WebGL
- Smooth scroll navigation with section highlighting
- Animated text effects and transitions
- Project showcase with category filtering
- Timeline-based experience and education sections
- Integrated contact form with email service
- Optimized build for fast loading and performance
- Easy content customization through centralized data file

## Project Structure

```
src/
├── components/
│   ├── sections/        # Main page sections (Hero, Skills, Projects, etc.)
│   ├── cards/          # Reusable card components
│   ├── canvas/         # 3D canvas components (Galaxy, Earth, Stars)
│   └── ui/             # UI utility components
├── data/
│   └── constants.js    # Centralized data (bio, projects, skills, etc.)
├── utils/
│   ├── Themes.js       # Theme configuration
│   ├── motion.js       # Animation variants
│   └── performance.js  # Performance utilities
├── images/             # Static image assets
├── App.js              # Main application component
└── index.js            # Application entry point

public/
└── index.html          # HTML template
```

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd rishav-chanda-portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

The application will open at `http://localhost:3000`

### Building for Production

Create an optimized production build:
```bash
npm run build
```

The build folder will contain all static files ready for deployment.

## Customization Guide

### Personal Information

Edit `src/data/constants.js` to update:
- Bio information (name, roles, description, social links)
- Skills and technologies
- Work experience
- Education history
- Project portfolio

### Images

- Replace `src/images/HeroImage.jpg` with your profile photo
- Update image URLs in `constants.js` for projects and experience cards

### Styling

- Modify color scheme in `src/utils/Themes.js`
- Adjust component styles in individual styled-component definitions

### Contact Form

Configure EmailJS credentials in `src/components/sections/Contact.jsx`:
- Service ID
- Template ID
- Public Key

Sign up at [EmailJS](https://www.emailjs.com/) to get your credentials.

## Deployment

This project can be deployed to various platforms:

### Netlify
1. Push your code to GitHub
2. Connect your repository to Netlify
3. Set build command: `npm run build`
4. Set publish directory: `build`
5. Deploy

### Vercel
1. Import your GitHub repository
2. Vercel auto-detects Create React App settings
3. Deploy

### GitHub Pages
1. Update `homepage` in `package.json` with your GitHub Pages URL
2. Run:
```bash
npm run deploy
```

## Performance Considerations

- Source maps are disabled in production (configured in `.env`)
- WebGL animations are optimized for performance
- Components use React best practices for efficient rendering
- Images should be optimized before adding to the project

## Credits

This portfolio was inspired by modern developer portfolio designs and has been fully customized and developed to reflect my personal brand and professional journey. All code has been reviewed, optimized, and tailored to my specific requirements.

## License

This project is open source and available under the MIT License.

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED.
