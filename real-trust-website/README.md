# Real Trust Website

A modern, responsive real estate website built with React, TypeScript, and Tailwind CSS.

## Features

- **Responsive Design** - Works perfectly on all devices
- **Modern UI/UX** - Clean, professional design
- **Interactive Contact Form** - Functional form with validation
- **Smooth Navigation** - Sticky header with smooth scrolling
- **Professional Sections:**
  - Hero section with consultation form
  - "Why Choose Us" with services
  - About Us with team images
  - Projects showcase
  - Client testimonials
  - Complete footer with contact info

## Tech Stack

- React 18
- TypeScript
- Tailwind CSS
- Vite
- Lucide React (for icons)

## Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. Clone the repository or extract the folder
2. Navigate to the project directory:
   ```bash
   cd real-trust-website
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

5. Open your browser and visit `http://localhost:5173`

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Project Structure

```
real-trust-website/
├── src/
│   ├── components/
│   │   ├── Header.tsx
│   │   ├── Hero.tsx
│   │   ├── WhyChooseUs.tsx
│   │   ├── AboutUs.tsx
│   │   ├── Projects.tsx
│   │   ├── Testimonials.tsx
│   │   └── Footer.tsx
│   ├── App.tsx
│   ├── main.tsx
│   ├── index.css
│   └── vite-env.d.ts
├── public/
├── package.json
├── tailwind.config.js
├── vite.config.ts
└── README.md
```

## Customization

### Colors
The website uses a blue and orange color scheme. You can customize colors in the Tailwind classes:
- Primary blue: `blue-600`
- Secondary orange: `orange-500`
- Text colors: `gray-900`, `gray-700`, `gray-600`

### Images
Replace the Pexels image URLs with your own images in the component files.

### Content
Update the text content in each component file to match your business needs.

## Deployment

To deploy the website:

1. Build the project:
   ```bash
   npm run build
   ```

2. The `dist` folder will contain the production-ready files
3. Upload the contents of the `dist` folder to your web server

## License

This project is licensed under the MIT License.