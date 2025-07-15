// This utility only handles parsing icon strings
// The actual icons are imported in _app.js

/**
 * Parse icon string in format: "fa:icon-name" or "fab:icon-name"
 * Examples:
 * - fa:home (solid home icon)
 * - fab:github (brand github icon)
 * - far:calendar (regular calendar icon)
 * 
 * @param {string} iconString - The icon string to parse
 * @returns {Object|null} Icon object or null if invalid format
 */
export const parseIconString = (iconString) => {
  if (!iconString || typeof iconString !== 'string') {
    return null;
  }

  // Check if it's a Font Awesome icon format
  if (iconString.includes(':')) {
    const [prefix, iconName] = iconString.split(':');
    
    // Validate prefix and icon name
    if (!prefix || !iconName) {
      return null;
    }
    
    // Convert prefix to proper format
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
        return null;
    }
    
    // Return the icon object
    return {
      type: 'font-awesome',
      prefix: iconPrefix,
      // Convert kebab-case to camelCase for Font Awesome
      iconName: iconName.split('-').map((part, index) => 
        index === 0 ? part : part.charAt(0).toUpperCase() + part.slice(1)
      ).join(''),
    };
  }
  
  return null;
};

/**
 * Check if a string is a valid icon string format
 */
export const isIconString = (str) => {
  return parseIconString(str) !== null;
};

export default { parseIconString, isIconString };
