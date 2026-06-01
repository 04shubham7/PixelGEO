# Nexus - Frontend Engineering Assessment

A pixel-perfect, highly performant, and responsive web interface built for the Frontend Engineering Assessment.

## Architectural Overview

This project was developed with a focus on modern web standards, scalable component systems, and performance optimization. 
We have utilized an industry-standard stack to build a premium interface with advanced micro-interactions and rigorous design system constraints.

**Key Features & Technologies:**
- **Framework:** Vite + React for blazing fast HMR and optimized builds.
- **Styling Engine:** Tailwind CSS (v3.4) providing utility-first styling for maximum consistency and rapid development.
- **Component Library:** Shadcn UI (built on Radix UI primitives) for accessible, unstyled components that we've themed to match our Dark Glassmorphism aesthetic.
- **Animations:** Framer Motion powering complex staggered entrance animations, scroll-linked interactions, and fluid state changes.
- **Icons:** Lucide React for crisp, scalable, and consistent SVG iconography.
- **Responsiveness:** Fluidly adapts to explicit breakpoints using Tailwind's robust responsive design utility classes (Mobile, Tablet, Desktop).

## Installation & Setup

1. **Clone the repository** (if not already local):
   ```bash
   git clone <repository_url>
   cd intern_task
   ```


2. **Install Dependencies**:
   This project relies on React, Vite, Tailwind CSS, Shadcn UI, and Framer Motion. Install the packages:
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

- **Mockups:** As explicit design assets were not provided, the interface was designed from scratch to fulfill all functional requirements of the rubric (Hero, Data Grids, Validation Forms, Navigation) using a premium, state-of-the-art design language.
- **API Integration:** The contact form simulates a network request (1.5s delay) before showing a success state, as no backend endpoint was provided.
