# Nexus - Frontend Engineering Assessment

A pixel-perfect, highly performant, and responsive web interface built for the Frontend Engineering Assessment.

## Architectural Overview

This project was developed with a focus on modern web standards, performance optimization, and modularity. 
In the absence of explicit UI mockups, a premium "dark mode glassmorphism" aesthetic was chosen to demonstrate advanced CSS capabilities and high-fidelity design implementation.

**Key Features:**
- **Framework:** Vite + React (chosen for speed, HMR, and modular component architecture).
- **Styling:** Vanilla CSS with comprehensive custom properties (`:root` variables) acting as the design system token registry.
- **Responsiveness:** Fluidly adapts to 3 explicit breakpoints: Mobile (320px+), Tablet (768px+), and Desktop (1440px+).
- **Component Architecture:** DRY, reusable elements (e.g., global `Button` system).
- **Performance:** Optimized CSS transitions, semantic HTML5 structure (`<header>`, `<main>`, `<section>`, `<footer>`), and visually lightweight SVG iconography.
- **Interactivity:** Client-side form validation with accessible error messaging and loading states.

## Installation & Setup

1. **Clone the repository**:
   ```bash
   git clone <repository_url>
   cd intern_task
   ```

2. **Install Dependencies**:
   This project relies on React and Vite. Install the packages using npm:
   ```bash
   npm install
   ```

3. **Run the Development Server**:
   Start the local Vite development server:
   ```bash
   npm run dev
   ```
   *The application will typically be available at http://localhost:5173*

4. **Build for Production**:
   To generate a highly optimized production bundle:
   ```bash
   npm run build
   ```
   *The output will be generated in the `dist` directory.*

## Functional Assumptions

- **Mockups:** As explicit design assets were not provided, the interface was designed from scratch to fulfill all functional requirements of the rubric (Hero, Data Grids, Validation Forms, Navigation).
- **API Integration:** The contact form simulates a network request (1.5s delay) before showing a success state, as no backend endpoint was provided.
- **Assets:** SVGs are inline for optimal Time to Interactive (TTI) and to reduce network requests.
