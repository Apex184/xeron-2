import React, { createContext, useContext, useState } from 'react';
import { languages } from '../data/languageData';

type LanguageContextType = {
  language: string;
  setLanguage: (code: string) => void;
  getTranslation: (key: string) => string;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState('en');

  const getTranslation = (key: string): string => {
    return languages[language]?.[key] || languages.en[key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, getTranslation }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};