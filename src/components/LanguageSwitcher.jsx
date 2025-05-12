// src/components/LanguageSwitcher.jsx
import React from "react";
import { useLanguage } from "../contexts/LanguageContext"; 

function LanguageSwitcher({ language, setLanguage }) {


  return (
    
      <div className="language-switcher">
        <button
        onClick={() => setLanguage("fr")}
        className={`language-button ${language === "fr" ? "selected" : ""}`}
      >
        🇫🇷
      </button>
      <button
        onClick={() => setLanguage("en")}
        className={`language-button ${language === "en" ? "selected" : ""}`}
      >
        🇬🇧
      </button>
      
    
    </div>
  );
}

export default LanguageSwitcher;