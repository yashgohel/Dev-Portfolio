# Yash's Developer Portfolio (React + Vite + GSAP)

A responsive, single-page developer portfolio website built using **React**, **Vite**, **GSAP (GreenSock)**, and custom **CSS3**. 

This portfolio features fluid scroll animations, interactive custom backgrounds, and immersive 3D perspective hover cards.

## Features
- **Vite & React**: Fast dev reload times, componentized structure, and optimized asset bundling.
- **Interactive GridMotion Background**: A mouse-interactive scrolling skill and projects grid background on the Hero section (powered by GSAP).
- **Subtle Video Card Backdrops**: Cards render a translucent, loop-playing overlay backdrop using a fluid custom video (`Animate_the_image_into_video.mp4`).
- **3D Perspective Tilt**: All category cards (About, Skills, Projects, Experience Timeline) dynamically tilt towards the cursor on hover.
- **GSAP ScrollTrigger Entrance**: Staggered fade and slide entrance cascades for skills columns, bouncy badge entries, and sequential project card slide-ups.
- **Fully Responsive**: Crafted with Flexbox and CSS Grid, styled to look premium on desktops, tablets, and smartphones.

---

## Tech Stack
- **Frontend Core**: React 18 (with JSX), HTML5, CSS3 Custom Properties
- **Build Tooling**: Vite 5
- **Animations**: GSAP (GreenSock) & GSAP ScrollTrigger
- **Icons**: FontAwesome & Devicons

---

## How to Run Locally

Make sure you have Node.js installed on your machine.

### 1. Install Dependencies
Navigate to the project root and run:
```bash
npm install
```

### 2. Start the Development Server
```bash
npm run dev
```
Open your browser and navigate to the local address displayed in the console (usually **`http://localhost:5173/`**).

---

## Build & Deployment

### 1. Build for Production
To build the application files for production, run:
```bash
npm run build
```
Vite will compile the code and place all static deployment bundle assets inside the `/dist` directory.

### 2. Deploying on Netlify
When deploying this repository on Netlify, configure the build settings as follows:
- **Build Command**: `npm run build`
- **Publish Directory**: `dist`
- **Base Directory**: `/` (or leave empty)

---

## Customization Instructions

- **Hero & Skills Background Grid**: Open [Hero.jsx](file:///E:/Full_Stack/antigravity/portfolio/src/components/Hero.jsx) and customize the `items` array to change the images, skill badges, or text labels scrolling behind the title text.
- **Skills List**: Customize the categorized tags inside [Skills.jsx](file:///E:/Full_Stack/antigravity/portfolio/src/components/Skills.jsx).
- **Projects Showcase**: Update the `projectsList` array inside [Projects.jsx](file:///E:/Full_Stack/antigravity/portfolio/src/components/Projects.jsx) to modify descriptions, tags, live urls, and repository links.
- **Experience Timeline**: Update the `timelineItems` array inside [Experience.jsx](file:///E:/Full_Stack/antigravity/portfolio/src/components/Experience.jsx) to adjust graduation dates or work history details.
- **Certificates list**: Customize entries inside [Certificates.jsx](file:///E:/Full_Stack/antigravity/portfolio/src/components/Certificates.jsx).
