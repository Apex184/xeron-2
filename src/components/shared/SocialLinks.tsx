import React from "react";
import { Twitter, Linkedin } from "lucide-react";

type SocialLinksProps = {
  twitter?: string;
  linkedin?: string;
  github?: string;
  className?: string;
  iconSize?: number;
};

const SocialLinks: React.FC<SocialLinksProps> = ({
  twitter,
  linkedin,
  // github,
  className = "",
  iconSize = 20,
}) => {
  return (
    <div className={`flex space-x-3 ${className}`}>
      {twitter && (
        <a
          href={twitter}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
          aria-label="Twitter">
          <Twitter size={iconSize} />
        </a>
      )}
      {linkedin && (
        <a
          href={linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 dark:text-gray-300 hover:text-blue-700 dark:hover:text-blue-400 transition-colors"
          aria-label="LinkedIn">
          <Linkedin size={iconSize} />
        </a>
      )}
      {/* {github && (
        <a
          href={github}
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white transition-colors"
          aria-label="GitHub"
        >
          <Github size={iconSize} />
        </a>
      )} */}
    </div>
  );
};

export default SocialLinks;
