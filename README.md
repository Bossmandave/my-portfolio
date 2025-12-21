# Agodi David - Personal Portfolio Website

A modern, responsive personal portfolio website built with React, Tailwind CSS, and Framer Motion. This portfolio showcases my skills, projects, experience, and provides a way for potential employers and collaborators to get in touch.

![React](https://img.shields.io/badge/React-18.3.1-blue.svg)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-3.4.3-38bdf8.svg)
![Framer Motion](https://img.shields.io/badge/Framer%20Motion-Latest-0055ff.svg)

## 🚀 Features

- **Modern UI/UX**: Clean, professional design with smooth animations
- **Fully Responsive**: Optimized for all devices (mobile, tablet, desktop)
- **Smooth Animations**: Powered by Framer Motion for engaging user interactions
- **Interactive Components**: 
  - Animated navigation bar with mobile menu
  - Smooth scroll navigation
  - Hover effects and transitions
  - Form validation
- **Performance Optimized**: Fast loading times and optimized animations
- **Accessibility**: Built with accessibility best practices in mind

## 🛠️ Tech Stack

- **React 18.3.1** - Modern UI library
- **Tailwind CSS 3.4.3** - Utility-first CSS framework
- **Framer Motion** - Production-ready motion library for React
- **React Anchor Link Smooth Scroll** - Smooth scrolling navigation
- **React Router Hash Link** - Hash link support

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Bossmandave/my-portfolio.git
   cd my-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🏗️ Project Structure

```
my-portfolio/
├── public/
│   ├── favicon.ico
│   ├── index.html
│   └── ...
├── src/
│   ├── assets/
│   │   ├── icons/
│   │   ├── images/
│   │   └── svg/
│   ├── components/
│   │   ├── About/
│   │   │   └── About.jsx
│   │   ├── Contact/
│   │   │   └── Contact.jsx
│   │   ├── Footer/
│   │   │   └── Footer.jsx
│   │   ├── Hero Section/
│   │   │   └── Hero.jsx
│   │   ├── Layout/
│   │   │   └── Layout.jsx
│   │   ├── Navbar/
│   │   │   └── Navbar.jsx
│   │   ├── Recent Works/
│   │   │   └── Works.jsx
│   │   ├── Resume/
│   │   │   └── Resume.jsx
│   │   └── Services/
│   │       └── Services.jsx
│   ├── App.jsx
│   ├── index.jsx
│   ├── index.css
│   └── ...
├── tailwind.config.js
├── package.json
└── README.md
```

## 🎨 Sections

### 1. **Hero Section**
- Introduction and greeting
- Professional title and description
- Call-to-action buttons (Contact Me, Learn More)
- Animated profile image with floating effect

### 2. **About Section**
- Professional background and expertise
- Skills and technologies
- Social media links with hover animations

### 3. **Services Section**
- Front-end Frameworks
- Responsive Web Design
- User Interface (UI) Design
- Performance Optimization

### 4. **Recent Works**
- Project showcase with images
- Project descriptions
- Technologies used
- Live preview links

### 5. **Resume/Experience**
- Education timeline
- Work experience timeline
- Interactive timeline with animations

### 6. **Contact Form**
- Contact form with validation
- Email, name, phone, and message fields
- Form submission handling

### 7. **Footer**
- Contact information
- Quick navigation links
- Social media links
- Copyright information

## 🎭 Animations

The website uses Framer Motion for various animations:

- **Page Transitions**: Smooth fade-in effects on page load
- **Scroll Animations**: Elements animate as they come into view
- **Hover Effects**: Interactive hover states on buttons and cards
- **Mobile Menu**: Animated hamburger menu with slide-in effect
- **Floating Elements**: Subtle floating animations on hero image
- **Stagger Animations**: Sequential animations for lists and grids

## 📱 Responsive Design

The website is fully responsive and optimized for:

- **Mobile**: 320px and up
- **Tablet**: 768px and up
- **Desktop**: 1024px and up
- **Large Desktop**: 1280px and up

## 🔧 Customization

### Updating Personal Information

1. **Hero Section**: Edit `src/components/Hero Section/Hero.jsx`
   - Update name, title, and description
   - Replace profile image in `src/assets/images/`

2. **About Section**: Edit `src/components/About/About.jsx`
   - Update bio and skills
   - Update social media links

3. **Contact Information**: Edit `src/components/Footer/Footer.jsx`
   - Update email, address, and phone number

4. **Projects**: Edit `src/components/Recent Works/Works.jsx`
   - Add/update project images, descriptions, and links

5. **Resume**: Edit `src/components/Resume/Resume.jsx`
   - Update education and work experience

### Styling

The project uses Tailwind CSS for styling. Customize the theme in `tailwind.config.js`:

```javascript
theme: {
  extend: {
    colors: {
      primary: {
        // Your custom colors
      },
    },
  },
}
```

## 🚢 Deployment

### Build for Production

```bash
npm run build
```

This creates an optimized production build in the `build` folder.

### Deploy to Vercel

1. Install Vercel CLI: `npm i -g vercel`
2. Run `vercel` in the project directory
3. Follow the prompts

### Deploy to Netlify

1. Build the project: `npm run build`
2. Drag and drop the `build` folder to Netlify
3. Or connect your GitHub repository for continuous deployment

### Deploy to GitHub Pages

1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add to `package.json`:
   ```json
   "homepage": "https://yourusername.github.io/my-portfolio",
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d build"
   }
   ```
3. Run `npm run deploy`

## 📝 Available Scripts

- `npm start` - Runs the app in development mode
- `npm test` - Launches the test runner
- `npm run build` - Builds the app for production
- `npm run eject` - Ejects from Create React App (one-way operation)

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👤 Author

**Agodi David**

- GitHub: [@Bossmandave](https://github.com/Bossmandave)
- Email: agodidavid004@gmail.com
- Location: Abuja, Nigeria

## 🙏 Acknowledgments

- [Framer Motion](https://www.framer.com/motion/) for animation library
- [Tailwind CSS](https://tailwindcss.com/) for styling framework
- [React](https://reactjs.org/) for the UI library
- All the open-source contributors and libraries used in this project

## 📞 Contact

For inquiries, collaborations, or job opportunities, please reach out:

- **Email**: agodidavid004@gmail.com
- **Phone**: +234 9071604370
- **Address**: 29 Cairo Crescent, PTF Estate Wuse II, Abuja, Nigeria

---

⭐ If you found this portfolio helpful or interesting, please consider giving it a star!
