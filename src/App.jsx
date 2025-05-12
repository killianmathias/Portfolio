// src/App.jsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import PortfolioPage from './pages/PortfolioPage';
import ContactPage from './pages/ContactPage';
import DetailPage from './pages/DetailPage';
import { LanguageProvider } from "./contexts/LanguageContext";
import LanguageSwitcher from './components/LanguageSwitcher';
import { useState } from 'react';
import en from "./locales/en";
import fr from "./locales/fr";
function App() {
    return (
        <LanguageProvider>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<AboutPage />} />
                <Route path="/portfolio" element={<PortfolioPage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/details/:id" element={<DetailPage />} />
                {/* <Route path="*" element={<NotFoundPage />} /> */}
            </Routes>
        </LanguageProvider>
    );
}

export default App;