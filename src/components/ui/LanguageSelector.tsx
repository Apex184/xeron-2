import React, { useState, useRef, useEffect } from 'react';
import { languageOptions } from '../../data/languageData';
import { useLanguage } from '../../context/LanguageContext';
import { Globe } from 'lucide-react';

const LanguageSelector: React.FC = () => {
  const { language, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const currentLanguage = languageOptions.find(lang => lang.code === language) || languageOptions[0];

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 px-3 py-2 rounded-lg transition-all duration-200 bg-white/10 backdrop-blur-md border border-white/10 dark:bg-gray-800/30 hover:bg-white/20 dark:hover:bg-gray-800/50"
      >
        <Globe size={16} />
        <span>{currentLanguage.name}</span>
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 rounded-xl bg-white/90 dark:bg-gray-800/90 backdrop-blur-lg shadow-lg border border-gray-100 dark:border-gray-700/50 z-50 py-1 max-h-80 overflow-y-auto">
          {languageOptions.map((option) => (
            <button
              key={option.code}
              onClick={() => {
                setLanguage(option.code);
                setIsOpen(false);
              }}
              className={`w-full text-left px-4 py-2 hover:bg-blue-50 dark:hover:bg-gray-700/50 transition-colors ${
                language === option.code ? 'bg-blue-100/50 dark:bg-gray-700/30 font-medium' : ''
              }`}
            >
              {option.name}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageSelector;