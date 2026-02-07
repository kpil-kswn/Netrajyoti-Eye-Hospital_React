# Netrajyoti Eye Hospital (Kanota) - Full Stack Web Application

A modern, high-performance healthcare platform built for **Netrajyoti Eye Hospital**, focusing on patient accessibility and digital presence. This project demonstrates a clean UI/UX, optimized asset management, and professional healthcare branding.

## 🚀 Live Demo
**https://netrajyoti-eye-hospital-kanota.vercel.app**

## 🛠️ Tech Stack
* **Frontend:** React.js (Vite)
* **Styling:** Tailwind CSS (Mobile-first, responsive design)
* **Routing:** React Router DOM
* **Icons:** Lucide-React
* **Deployment:** Vercel (CI/CD via GitHub Integration)

## ✨ Key Features
* **Dynamic Hospital Gallery:** High-performance image gallery with optimized assets and custom zoom-on-hover effects using Tailwind transitions.
* **Professional Doctor Profiles:** Dedicated section for medical staff featuring detailed credentials for Dr. Madhusudhan Sharma (MBBS) and Dr. Babulal Saudawat.
* **Patient-Centric Navigation:** Easy access to specialized services like Emergency Care, 24/7 Pharmacy, and Operation Theatre details.
* **Optimized Performance:** Leverages Vite’s build-time asset hashing and compression to ensure fast load times for high-resolution medical facility photos.
* **Responsive Layout:** Optimized for cross-device compatibility, ensuring accessibility for patients on mobile, tablet, and desktop.

## 🏗️ Technical Implementation
* **Asset Management:** Implemented a robust image import system to handle Vite's production build requirements and file hashing.
* **Routing Logic:** Configured `vercel.json` rewrites to handle client-side routing and prevent 404 errors on single-page application (SPA) refreshes.
* **Stacking Contexts:** Managed complex UI layers using CSS Z-indexing to create fixed background overlays with adjusted opacity for readability.

## 📂 Project Structure
```text
src/
 ├── assets/          # Optimized images and hospital logos
 ├── components/      # Modular React components (Navbar, Footer, Home, etc.)
 ├── App.jsx          # Root component and route definitions
 └── main.jsx         # Application entry point
