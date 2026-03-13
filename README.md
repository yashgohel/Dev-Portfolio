# Yash's Developer Portfolio

A responsive, single-page portfolio website designed for a Full Stack and Python Developer. Built using modern HTML5, CSS3, and Vanilla JavaScript.

## Features
- Modern dark theme with neon accents
- 100% mobile-responsive layout (Grid/Flexbox)
- Smooth scrolling and intersection observer animations
- Responsive timeline for Experience/Education
- Clean semantic HTML

## How to Run Locally

You don't need a build step for this project since it's built with Vanilla web technologies! 

### Option 1: Live Server (VS Code)
1. Open the `portfolio` folder in Visual Studio Code.
2. Install the "Live Server" extension if you don't have it.
3. Right-click on `index.html` and select **"Open with Live Server"**.

### Option 2: Python HTTP Server
If you have Python installed, you can spin up a quick local server:
1. Open your terminal and navigate to the `portfolio` directory.
2. Run the command: `python -m http.server 8000`
3. Open your browser and go to `http://localhost:8000`

## Customization Instructions

To make this portfolio your own, you'll need to update a few placeholder links:

1. **Profile Picture**: In `index.html`, find the Hero Section (`<section id="home">`). Replace the `src` attribute of the `.profile-img` with a path to your actual headshot (e.g., `images/profile.jpg`).
2. **Resume Link**: In the Hero Section, find the `Download Resume` button. Update the `href="#"` to point to a PDF version of your resume (e.g., `href="assets/yash-resume.pdf"`).
3. **Project Images**: In the Projects Section (`<section id="projects">`), replace the `.project-img > img src` placeholders with screenshots of your actual projects.
4. **Project Links**: Update the "Live Demo" and "GitHub Repo" `href="#"` links to your actual live sites and repositories.
5. **Social Links**: In the `<footer class="footer-container">`, update the social link `href` attributes to point to your LinkedIn, GitHub, and email.

## Tech Stack
- **HTML5**: Semantic tags, accessibility
- **CSS3**: Custom properties (Variables), Flexbox, CSS Grid, media queries
- **JavaScript**: ES6, DOM manipulation, IntersectionObserver API

Enjoy your new portfolio!
