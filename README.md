# Vedester Portfolio

A professional, responsive portfolio website showcasing my projects, skills, and live app previews.

## 🚀 Features

- Project filter by technology (React, Flask, etc.)
- Animated transitions using Framer Motion
- Scroll to top button
- Responsive and mobile-friendly layout
- Live demo and GitHub links for each project

## 🛠 Tech Stack

- React
- Tailwind CSS
- Framer Motion
- Vite

## 📦 How to Run Locally

```bash
git clone https://github.com/vedester/vedester-portfolio.git
cd vedester-portfolio
npm install
npm run dev


Tailwind CSS + Vite + React Setup Guide
A step-by-step guide to setting up Tailwind CSS in a React project using Vite (with the new Tailwind Vite plugin).

🧱 Prerequisites
Node.js and npm installed

Vite project initialized (npm create vite@latest)

React template selected during setup

📦 Step 1: Install Tailwind & Vite Plugin
In the root of your project, run:

bash
npm install tailwindcss @tailwindcss/vite
This installs both Tailwind CSS and the official Tailwind plugin for Vite.


🛠️ Step 2: Configure vite.config.js
Create or edit vite.config.js in your root directory:


// vite.config.js

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    tailwindcss(),
    react(),
  ],
})
✅ Don’t use both vite.config.ts and vite.config.js. Use only one — preferably vite.config.js if you don’t need TypeScript config.

🎨 Step 3: Update the App.css
add this to the top of the css file
@import "tailwindcss";

🧩 Step 4: Import CSS in main.jsx
Open src/main.jsx and make sure to import the Tailwind CSS file at the top:


Edit
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './app.css' // ← Import Tailwind styles here

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
🚀 Step 6: Start the Dev Server
Now run the project:


npm run dev
Open your browser at http://localhost:5173



<div className="bg-yellow-300 p-6 rounded-xl shadow-xl">
  <h1 className="text-4xl font-bold text-gray-800">
    Tailwind is Working!
  </h1>
</div>
📁 Final Project Structure

vedester-portfolio/
├── node_modules/
├── public/
├── src/
│   ├── App.jsx
│   ├── main.jsx
│   └──App.css     <-- Tailwind directives here
├── index.html
├── vite.config.js    <-- Tailwind + React plugins here
├── 
└── package.json
