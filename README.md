# Bhavya Darji - Personal Portfolio

<div align="center">

**Modern Software Engineer Portfolio & Automated Resume Generation Platform**

[![Private & Proprietary](https://img.shields.io/badge/Status-Private%20%26%20Proprietary-red?style=for-the-badge)](LICENSE)
[![Next.js](https://img.shields.io/badge/Next.js-15-black?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org)
[![React](https://img.shields.io/badge/React-19-61dafb?style=for-the-badge&logo=react&logoColor=black)](https://react.dev)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178c6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-38bdf8?style=for-the-badge&logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-Animations-black?style=for-the-badge&logo=framer&logoColor=blue)](https://www.framer.com/motion/)

</div>

---

## Overview

This repository hosts the personal software engineering portfolio and digital presence for **Bhavya Darji**, a Software Development Engineer. Engineered with Next.js App Router, React 19, TypeScript, and Tailwind CSS, the platform delivers a fast, responsive, and visually striking presentation of professional experience, enterprise projects, technical proficiencies, and verified credentials.

The platform includes an automated serverless resume generator built with `pdf-lib` that compiles production-grade PDF resumes dynamically from centralized data sources.

---

## Features

- **Centralized Data Architecture**: All career experience, projects, skills, education, and credentials are maintained in a single structured configuration file (`src/data/portfolio.ts`).
- **Dynamic PDF Resume Generator**: Automated resume compilation engine powered by `pdf-lib` and custom utility scripts, generating downloadable PDF resumes directly from source data.
- **Interactive Experience Timeline**: Structured chronological timeline highlighting career roles, engineering achievements, and leadership milestones.
- **Production Projects Showcase**: Interactive display of production applications (Velaar, Handwrite, RideMate, Medway, HassleFreeDrive) with tech tags and live external links.
- **Technical Skills Categorization**: Clean categorization of competencies across frontend architectures, backend services, cloud systems, and database platforms.
- **Visual Micro-Interactions**: Fluid page transitions, scroll animations, and preloader sequences powered by Framer Motion.
- **Interactive Contact Channel**: Integrated contact form and verified social profiles for direct communication.

---

## Tech Stack

| Layer | Technologies |
|---|---|
| Framework | Next.js (App Router) |
| Core Language | TypeScript |
| UI Library | React 19 |
| Styling | Tailwind CSS |
| Animations | Framer Motion |
| Icons | Lucide React & React Icons |
| PDF Compilation | pdf-lib |

---

## Screenshots

### Hero & Introduction
<p align="center">
  <img src="./public/screenshots/hero.png" alt="Hero Section" width="800"/>
</p>

### Preloader Animation
<p align="center">
  <img src="./public/screenshots/animation.png" alt="Preloader Screen" width="800"/>
</p>

### About Me & Education
<p align="center">
  <img src="./public/screenshots/about-education.png" alt="About Me & Education" width="800"/>
</p>

### Professional Journey & Experience
<p align="center">
  <img src="./public/screenshots/experience-1.png" alt="Professional Journey" width="800"/>
</p>

<p align="center">
  <img src="./public/screenshots/experience-2.png" alt="Experience Timeline" width="800"/>
</p>

### Featured Projects & Ventures
<p align="center">
  <img src="./public/screenshots/projects-1.png" alt="Featured Projects - Velaar & Handwrite" width="800"/>
</p>

<p align="center">
  <img src="./public/screenshots/projects-2.png" alt="Client Projects - Ride Mate, Medway, ATM Promo, Prime Financials" width="800"/>
</p>

### Technical Expertise & Skills
<p align="center">
  <img src="./public/screenshots/skills.png" alt="Technical Expertise" width="800"/>
</p>

### Licenses & Certifications
<p align="center">
  <img src="./public/screenshots/certificates.png" alt="Licenses & Certifications" width="800"/>
</p>

### Interactive Contact & Footer
<p align="center">
  <img src="./public/screenshots/contact.png" alt="Interactive Contact Form" width="800"/>
</p>

<p align="center">
  <img src="./public/screenshots/footer.png" alt="Footer" width="800"/>
</p>

---

## Getting Started

### Prerequisites

- Node.js 18.x or higher
- npm, yarn, pnpm, or bun

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/bhavya-darjii/bhavya.git
   cd bhavya
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

### Running the Application

```bash
# Start development server
npm run dev

# Dynamically generate PDF resume
npm run build:resume

# Build for production deployment
npm run build

# Start production server
npm run start
```

The application will be accessible at `http://localhost:3000`.

---

## Project Structure

```
bhavya/
├── public/                 # Static assets, screenshots, and compiled resume PDFs
├── src/
│   ├── app/                # Next.js App Router layouts, pages, and global styling
│   ├── components/         # Reusable modular UI components
│   └── data/               # Centralized data source
│       └── portfolio.ts    # Single source of truth for projects, roles, and skills
├── scripts/                # Dynamic resume generation and PDF metadata scripts
├── package.json            # Project dependencies and script definitions
└── tailwind.config.ts      # Tailwind CSS design system tokens
```

---

## License

**Copyright © 2026 Bhavya Darji. All Rights Reserved.**

This project and its underlying source code are **confidential, private, and proprietary**. Unauthorized copying, modification, distribution, public display, or commercial use of this software, via any medium, is strictly prohibited without explicit prior written authorization from the copyright holder.

---

## Author & Contact

**Bhavya Darji**  
- **Portfolio:** [bhavya-darji.vercel.app](https://bhavya-darji.vercel.app/)  
- **GitHub:** [@bhavya-darjii](https://github.com/bhavya-darjii)  
- **LinkedIn:** [Bhavya Darji](https://www.linkedin.com/in/bhavya-darji-181573242/)  
- **Email:** [bhavyadarji462@gmail.com](mailto:bhavyadarji462@gmail.com)

---

<p align="center">Made with ❤️ by <a href="https://bhavya-darji.vercel.app/" target="_blank" rel="noopener noreferrer"><strong>Bhavya Darji</strong></a></p>
