import React from 'react';
import Card from '../ui/Card';
import SocialLinks from '../shared/SocialLinks';
import { teamMembers, advisors, TeamMember } from '../../data/teamData';
import { useLanguage } from '../../context/LanguageContext';

const TeamMemberCard: React.FC<{ member: TeamMember }> = ({ member }) => (
  <Card variant="team" className="overflow-hidden transition-all duration-300 hover:shadow-2xl hover:translate-y-[-5px]">
    <div className="h-48 overflow-hidden">
      <img
        src={member.imageUrl}
        alt={member.name}
        className="w-full h-full object-cover"
      />
    </div>
    <div className="p-6">
      <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{member.name}</h3>
      <p className="text-blue-600 dark:text-blue-400 mb-4">{member.role}</p>
      <SocialLinks
        twitter={member.socialLinks.twitter}
        linkedin={member.socialLinks.linkedin}
        className="justify-start"
        iconSize={18}
      />
    </div>
  </Card>
);

const TeamMembers: React.FC = () => {
  const { getTranslation } = useLanguage();

  return (
    <section id="team" className="py-20">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white">
            {getTranslation('teamTitle')}
          </h2>
          <p className="text-xl text-gray-700 dark:text-gray-300">
            Meet the talented individuals behind Xerion AutoCal who are passionate about revolutionizing scheduling.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {teamMembers.map((member) => (
            <TeamMemberCard key={member.id} member={member} />
          ))}
        </div>

        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
            {getTranslation('advisorsTitle')}
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-2xl mx-auto">
          {advisors.map((advisor) => (
            <TeamMemberCard key={advisor.id} member={advisor} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamMembers;