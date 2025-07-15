import React from 'react';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const AppBox = ({ logo, title, description, link, customClass = '' }) => {
  // Determine if the logo is an icon font, SVG string, URL, or emoji
  const renderLogo = () => {
    if (!logo) {
      // Default icon if no logo provided
      return <div className="text-primary text-4xl">📦</div>;
    }
    
    // Check if it's a Font Awesome icon format (fa:home, fab:github, etc.)
    if (typeof logo === 'string' && logo.includes(':')) {
      const [prefix, iconName] = logo.split(':');
      
      let iconPrefix;
      switch (prefix.toLowerCase()) {
        case 'fa':
        case 'fas':
          iconPrefix = 'fas';
          break;
        case 'fab':
          iconPrefix = 'fab';
          break;
        case 'far':
          iconPrefix = 'far';
          break;
        default:
          return <div className="text-primary text-4xl">{logo}</div>;
      }
      
      return (
        <div className="text-primary text-4xl flex justify-center items-center">
          <FontAwesomeIcon 
            icon={[iconPrefix, iconName]} 
            size="lg"
          />
        </div>
      );
    } else if (logo.startsWith('http')) {
      // Handle image URLs
      return (
        <Image 
          src={logo} 
          alt={title} 
          width={48} 
          height={48} 
          className="mx-auto"
        />
      );
    } else if (logo.startsWith('<svg') || logo.startsWith('<i')) {
      // Handle SVG or icon HTML
      return <div className="text-primary text-4xl flex justify-center" dangerouslySetInnerHTML={{ __html: logo }} />;
    } else {
      // Handle emoji or text
      return <div className="text-primary text-4xl">{logo}</div>;
    }
  };

  return (
    <a 
      href={link} 
      className={`app-box block hover:scale-105 transition-transform duration-300 ${customClass}`} 
      target="_blank" 
      rel="noopener noreferrer"
      style={{
        backgroundColor: 'var(--clr-surface-a10)',
        borderColor: 'var(--clr-surface-a20)',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.3)'
      }}
    >
      <div className="app-icon" style={{ color: 'var(--clr-primary-a20)' }}>
        {renderLogo()}
      </div>
      <h2 className="app-title" style={{ color: 'var(--clr-primary-a30)' }}>{title}</h2>
      <p className="app-description" style={{ color: 'var(--clr-surface-a50)' }}>{description}</p>
    </a>
  );
};

export default AppBox;
