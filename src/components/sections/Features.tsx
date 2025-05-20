import React from 'react';
import Card from '../ui/Card';
import { useLanguage } from '../../context/LanguageContext';
import { Calendar, Layers, Clock, Share2, Zap } from 'lucide-react';

const FeatureCard: React.FC<{
  icon: React.ReactNode;
  title: string;
  description: string;
}> = ({ icon, title, description }) => (
  <Card variant="frosted" className="p-6 hover:shadow-lg transition-shadow">
    <div className="flex flex-col items-center text-center">
      <div className="w-12 h-12 flex items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400 mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">{title}</h3>
      <p className="text-gray-600 dark:text-gray-400">{description}</p>
    </div>
  </Card>
);

const Features: React.FC = () => {
  const { getTranslation } = useLanguage();

  const features = [
    {
      icon: <Zap size={24} />,
      title: getTranslation('feature1'),
      description: 'Our AI understands your preferences and optimizes your schedule automatically.',
    },
    {
      icon: <Layers size={24} />,
      title: getTranslation('feature2'),
      description: 'Connects with all your favorite calendar apps without friction.',
    },
    {
      icon: <Calendar size={24} />,
      title: getTranslation('feature3'),
      description: 'Flawlessly coordinate with Zholix for enhanced team productivity.',
    },
    {
      icon: <Share2 size={24} />,
      title: getTranslation('feature4'),
      description: 'Stay in sync with your team with smart notifications and updates.',
    },
    {
      icon: <Clock size={24} />,
      title: getTranslation('feature5'),
      description: 'Never worry about time zones again with automatic adjustments.',
    },
  ];

  return (
    <section id="features" className="py-20 relative">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white">
            Product Highlights
          </h2>
          <p className="text-xl text-gray-700 dark:text-gray-300">
            {getTranslation('productIntro')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;