import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

// Layout
import MainLayout from './components/layout/MainLayout';

// Pages
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Services from './pages/Services/Services';
import WebDevelopment from './pages/WebDevelopment/WebDevelopment';
import AppDevelopment from './pages/AppDevelopment/AppDevelopment';
import ECommerce from './pages/ECommerce/ECommerce';
import GraphicsDesign from './pages/GraphicsDesign/GraphicsDesign';
import Projects from './pages/Projects/Projects';
import Team from './pages/Team/Team';
import Contact from './pages/Contact/Contact';
import ProjectDetails from './components/sections/projects/ProjectDetails';

function App() {
  return (
    <Router>
      <MainLayout>
        <AnimatePresence mode='wait'>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/web-development" element={<WebDevelopment />} />
            <Route path="/app-development" element={<AppDevelopment />} />
            <Route path="/ecommerce" element={<ECommerce />} />
            <Route path="/graphics-design" element={<GraphicsDesign />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/team" element={<Team />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/projects/:id" element={<ProjectDetails />} />

          </Routes>
        </AnimatePresence>
      </MainLayout>
    </Router>
  );
}

export default App;