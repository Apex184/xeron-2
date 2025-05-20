import React from 'react';
import Card from '../ui/Card';
import { useLanguage } from '../../context/LanguageContext';
import { CheckCircle, Trophy, Sparkles } from 'lucide-react';
import CollapsibleSection from '../ui/CollapsibleSection';

const WhyJoin: React.FC = () => {
  const { getTranslation } = useLanguage();

  const benefits = [
    {
      icon: <CheckCircle size={24} />,
      title: getTranslation('benefit1'),
      description: 'Get access to beta features before anyone else and help shape the future of the product.',
    },
    {
      icon: <Trophy size={24} />,
      title: getTranslation('benefit2'),
      description: 'Skip the line with priority customer service and personalized onboarding assistance.',
    },
    {
      icon: <Sparkles size={24} />,
      title: getTranslation('benefit3'),
      description: 'Receive exclusive discounts and promotional offers available only to waitlist members.',
    },
  ];

  return (
    <section id="why-join" className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-900 dark:to-indigo-950">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white">
            {getTranslation('whyJoinTitle')}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <Card key={index} variant="frosted" className="p-6">
              <div className="flex flex-col items-center text-center">
                <div className="w-12 h-12 flex items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400 mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">{benefit.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{benefit.description}</p>
              </div>
            </Card>
          ))}
        </div>

        <div className="max-w-4xl mx-auto">
          <CollapsibleSection title="How does the waitlist process work?">
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              After signing up for our waitlist, you'll receive a confirmation email with your position in line. 
              As we approach launch, we'll send you updates about our progress and when you can expect to gain access.
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              Waitlist members will be invited in batches, with priority given to those who joined earliest. 
              You'll receive special onboarding materials and direct access to our support team to ensure a smooth experience.
            </p>
          </CollapsibleSection>
          
          <div className="mt-6">
            <CollapsibleSection title="What makes Xerion AutoCal different?">
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Unlike traditional calendar apps, Xerion AutoCal uses advanced AI to learn your scheduling preferences 
                and optimize your calendar automatically. It reduces scheduling conflicts, finds optimal meeting times, 
                and integrates seamlessly with your existing tools.
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                Our unique integration with Zholix provides unparalleled team coordination capabilities, 
                while our AI-powered suggestions help you reclaim hours of productivity each week.
              </p>
            </CollapsibleSection>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyJoin;