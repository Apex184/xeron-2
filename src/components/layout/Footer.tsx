import React from 'react';
import SocialLinks from '../shared/SocialLinks';
import { useLanguage } from '../../context/LanguageContext';
import { Zap } from 'lucide-react';

const Footer: React.FC = () => {
  const { getTranslation } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-50 dark:bg-gray-900 pt-16 pb-8">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2 font-bold text-xl text-gray-900 dark:text-white">
              <Zap className="h-6 w-6 text-blue-600 dark:text-blue-400" />
              <span>Xerion AutoCal</span>
            </div>
            <p className="text-gray-600 dark:text-gray-400 max-w-xs">
              Revolutionizing scheduling with AI precision. Join thousands of professionals ready to redefine scheduling.
            </p>
            <SocialLinks 
              twitter="https://twitter.com"
              linkedin="https://linkedin.com"
              github="https://github.com"
            />
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#features" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  Features
                </a>
              </li>
              <li>
                <a href="#why-join" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  Benefits
                </a>
              </li>
              <li>
                <a href="#team" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  Team
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <a href="#privacy" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  {getTranslation('privacyPolicy')}
                </a>
              </li>
              <li>
                <a href="#terms" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  {getTranslation('termsOfService')}
                </a>
              </li>
              <li>
                <a href="#cookies" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  Cookies Policy
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Related Products</h3>
            <ul className="space-y-2">
              <li>
                <a href="https://zholix.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  Zholix
                </a>
              </li>
              <li>
                <a href="https://xeriontech.com" target="_blank" rel="noopener noreferrer" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  Xerion Tech
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800 text-center text-gray-600 dark:text-gray-400">
          <p>&copy; {currentYear} Xerion AutoCal. {getTranslation('footerRights')}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;