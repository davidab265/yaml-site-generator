import fs from 'fs';
import path from 'path';
import yaml from 'js-yaml';

export function getConfig() {
  // Default configuration
  const defaultConfig = {
    title: 'GetApp',
    subtitle: 'Your Gateway to Powerful Development Tools',
    columns: 3,
    boxes: []
  };

  try {
    // Try to load from YAML file first (check root directory, then config directory)
    const configPath = process.env.CONFIG_PATH || 'boxes.yaml';
    let yamlPath = path.join(process.cwd(), configPath);
    
    // If file doesn't exist in the root directory, try the config directory
    if (!fs.existsSync(yamlPath) && !configPath.includes('/')) {
      yamlPath = path.join(process.cwd(), 'config', configPath);
    }
    
    if (fs.existsSync(yamlPath)) {
      const fileContents = fs.readFileSync(yamlPath, 'utf8');
      const yamlConfig = yaml.load(fileContents);
      return yamlConfig;
    }
  } catch (error) {
    console.error('Error loading YAML config:', error);
  }

  // If YAML file doesn't exist or has an error, try environment variables
  const envBoxes = [];
  let i = 1;
  
  while (process.env[`BOX_${i}_TITLE`]) {
    envBoxes.push({
      logo: process.env[`BOX_${i}_LOGO`] || '',
      title: process.env[`BOX_${i}_TITLE`] || '',
      description: process.env[`BOX_${i}_DESCRIPTION`] || '',
      link: process.env[`BOX_${i}_LINK`] || '#',
      customClass: process.env[`BOX_${i}_CUSTOM_CLASS`] || ''
    });
    i++;
  }

  if (envBoxes.length > 0) {
    return {
      title: process.env.SITE_TITLE || defaultConfig.title,
      titleHtml: process.env.SITE_TITLE_HTML || null,
      subtitle: process.env.SITE_SUBTITLE || defaultConfig.subtitle,
      columns: parseInt(process.env.SITE_COLUMNS || '3', 10),
      boxes: envBoxes
    };
  }

  // Return default config if neither YAML nor env vars are available
  return defaultConfig;
}
