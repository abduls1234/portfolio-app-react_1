
# 💼 Portfolio Website – Figma Design Replication

**Live Demo →** [https://portfolio-app-react-1.vercel.app/](https://portfolio-app-react-1.vercel.app/)

This project is a **fully responsive, theme-switchable, and component-based React frontend** built to replicate a professionally designed portfolio shared via Figma. The goal was to recreate the UI layout and styling with high fidelity, while maintaining accessibility, modularity, and responsive behavior.

---

## 🎯 Objective

Replicate a given high-fidelity Figma design into a working frontend interface using modern technologies such as React.js, HTML, CSS, and minimal Bootstrap. The implementation emphasizes clean architecture, reusable components, and visual accuracy across light/dark themes and screen sizes.

---

## ✨ Key Features

- 🔁 **Pixel-perfect layout** inspired by a Figma design prototype  
- 🌙 **Theme toggle** with persistent localStorage state  
- ⌨️ **Keyboard & screen-reader accessibility** through semantic HTML  
- 🔗 **Section-scrolling with navigation highlights** and smooth transitions  
- 📱 **Fully responsive** grid/flexbox layout with mobile-first styling  
- 🎨 **Custom theming** using CSS variables and dark/light adaptive assets  
- 📧 **Fixed-position contact and social icons** with responsive orientation  
- ♻️ **Modular React component structure** for scalability and clarity  

---

## 🛠 Tech Stack

| Technology     | Purpose                                  |
|----------------|------------------------------------------|
| **React.js**   | Component-based frontend development     |
| **HTML/CSS**   | Semantic structure and custom styling    |
| **JavaScript** | DOM interaction and logic                |
| **Bootstrap**  | Utility classes for responsiveness       |
| **React Icons**| Social + theme icon components           |
| **CSS Vars**   | Dark/light mode theming                  |
| **Figma**      | Used as visual reference for the UI      |

---

## 🗂 Folder Structure Overview
src/
├── assets/               # Images, icons, vectors, theme assets
├── components/           # Reusable UI components (buttons, toggles, etc.)
├── sections/             # Page-specific sections (Home, About, etc.)
├── layout/               # Shared layout components like Header, Footer
├── styles/               # Global styles, variables, utility classes
├── hooks/                # Custom hooks (e.g., useTheme, useScroll)
├── utils/                # Helper functions and constants
├── App.jsx               # Root app with routing or layout handling
├── main.jsx              # ReactDOM entry point
└── index.css             # Baseline global styles (imported in main)
---

## 🔎 Component & Logic Breakdown

### `App.jsx`
- Manages `theme` state (`light` or `dark`)
- On first load, retrieves and persists theme preference via `localStorage`
- Wraps layout with `Header`, `Home`, and `About` components

### `Header.jsx`
- Sticky/fixed header bar with responsive layout
- Scrolls to specific sections on button click via `scrollIntoView`
- Dark/light toggle swaps icons (moon/sun), updates root attribute

### `Home.jsx`
- Grid layout combining social links, greeting text, and profile image
- “Download CV” and “Get in Touch” buttons with scroll-to-section behavior
- Uses `EmailComponent` and `SocialMedia` for fixed-position interaction

### `About.jsx`
- Multi-paragraph layout based on the Figma content structure
- Decorative vector images adapt responsively for layered visuals
- Uses semantic HTML and CSS for responsiveness and readability

### `SocialMedia.jsx`
- Fixed icon s

---

## 🔎 Component & Logic Breakdown

### `App.jsx`
- Manages `theme` state (`light` or `dark`)
- On first load, retrieves and persists theme preference via `localStorage`
- Wraps layout with `Header`, `Home`, and `About` components

### `Header.jsx`
- Sticky/fixed header bar with responsive layout
- Scrolls to specific sections on button click via `scrollIntoView`
- Dark/light toggle swaps icons (moon/sun), updates root attribute

### `Home.jsx`
- Grid layout combining social links, greeting text, and profile image
- “Download CV” and “Get in Touch” buttons with scroll-to-section behavior
- Uses `EmailComponent` and `SocialMedia` for fixed-position interaction

### `About.jsx`
- Multi-paragraph layout based on the Figma content structure
- Decorative vector images adapt responsively for layered visuals
- Uses semantic HTML and CSS for responsiveness and readability

### `SocialMedia.jsx`
- Fixed icon stack aligned left on desktop, horizontal on mobile
- `react-icons` components for social networks
- Responsive design and hover animations

### `EmailComponent.jsx`
- Right-aligned vertical email line with divider (desktop)
- Flips to horizontal row layout on mobile
- Styled based on theme variables

### `global.css`
- Located inside `/Components/styles/`
- Handles custom properties, layout utilities, transitions, and gradients
- Contains reusable button and typography classes

---

## 🧪 How to Run Locally

```bash
# Clone the repo
git clone https://github.com/your-username/portfolio-app-react_1.git
cd portfolio-app-react_1

# Install dependencies
npm install

# Start the development server
npm run dev
Project uses Vite for lightning-fast startup and hot module replacement.


🖼 Assets Used
All design assets (images, vectors, illustrations) were sourced directly from the original Figma file provided for replication purposes. Assets are stored under the /assets/ directory and organized per section or usage context.

📌 Deployment
The project is deployed via Vercel, optimized for static delivery and responsive design.
🔗 Live Demo: https://portfolio-app-react-1.vercel.app/

🙌 Acknowledgments
- Design Source: Provided as part of a portfolio replication assignment
- Frontend Implementation: Built from scratch with focus on layout precision, accessibility, and component-driven structure

---







# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
