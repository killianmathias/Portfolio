// src/contexts/LanguageContext.jsx
import React, { createContext, useState, useContext } from "react";

// Crée le contexte
const LanguageContext = createContext();

// Crée un fournisseur pour le contexte
export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("fr");

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

// Crée un hook personnalisé pour utiliser le contexte facilement
export const useLanguage = () => useContext(LanguageContext);