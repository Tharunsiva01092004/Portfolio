# Portfolio Website

A modern, responsive portfolio website built with React, showcasing projects, skills, and experience. Features a sleek dark/light mode, smooth animations, and a clean UI.

## 🚀 Features

- **Responsive Design**: Fully responsive layout that works on all devices.
- **Dark/Light Mode**: Toggle between dark and light themes for better accessibility.
- **Dynamic Content**: Data is separated from components for easy updates.
- **Contact Form**: Functional contact form with validation (mock submission).
- **Animations**: Smooth transitions and micro-interactions.

## 🛠️ Tech Stack

- **Frontend**: React.js
- **Styling**: CSS3 (Modularized), CSS Variables
- **Routing**: React Router (if used in future extensions)
- **Icons**: Font Awesome

## 📦 Installation

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/Tharunsiva01092004/Portfolio.git
    cd Portfolio
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Start the development server:**
    ```bash
    npm start
    ```

4.  **Build for production:**
    ```bash
    npm run build
    ```

## 📂 Project Structure

```
src/
├── components/       # React components (Header, About, Projects, etc.)
├── context/          # Context API (ThemeContext)
├── data/             # Static data (portfolioData.js)
├── styles/           # Global styles and variables
├── App.js            # Main application component
└── index.js          # Entry point
```

## 🎨 Customization

To update the content, simply edit `src/data/portfolioData.js`. You can change your name, projects, skills, and contact info there without touching the component code.

## 📄 License

This project is licensed under the MIT License.
