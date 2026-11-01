# YAML Site Generator

[![CI](https://github.com/davidab265/yaml-site-generator/actions/workflows/ci.yml/badge.svg)](https://github.com/davidab265/yaml-site-generator/actions/workflows/ci.yml)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Node Version](https://img.shields.io/badge/node-%3E%3D18.0.0-brightgreen)](https://nodejs.org/)
[![Next.js](https://img.shields.io/badge/Next.js-14.0-black)](https://nextjs.org/)
[![Docker](https://img.shields.io/badge/Docker-Ready-blue)](https://www.docker.com/)
[![Kubernetes](https://img.shields.io/badge/Kubernetes-Ready-326CE5)](https://kubernetes.io/)
[![Security Policy](https://img.shields.io/badge/security-policy-blueviolet)](./SECURITY.md)

A customizable landing page generator with YAML configuration, featuring responsive design, dark theme, and multiple deployment options.

## 📸 Screenshots

<p align="center">
  <img src="images/site-generator.png" alt="Default 3-column layout" width="46%" />
  <img src="images/site-generator-2col.png" alt="2-column layout" width="46%" />
</p>
<p align="center">
  <img src="images/site-generator-4col.png" alt="4-column layout" width="46%" />
  <img src="images/site-generator-mobile.png" alt="Mobile view" width="30%" />
</p>

## 📚 Documentation

- [Contributing Guidelines](CONTRIBUTING.md)
- [Code of Conduct](CODE_OF_CONDUCT.md)
- [Security Policy](SECURITY.md)
- [Changelog](CHANGELOG.md)
- [License](LICENSE)

## Table of Contents
- [Features](#features)
- [Quick Start](#quick-start)
- [Configuration](#configuration)
  - [YAML Configuration](#yaml-configuration)
  - [Environment Variables](#environment-variables)
- [Logo Options](#logo-options)
  - [Emoji Icons](#emoji-icons)
  - [Font Awesome Icons](#font-awesome-icons)
  - [SVG and Image URLs](#svg-and-image-urls)
- [Customization](#customization)
- [Deployment Options](#deployment-options)
  - [Standard Deployment](#standard-deployment)
  - [Docker Deployment](#docker-deployment)
  - [Kubernetes Deployment](#kubernetes-deployment)
- [License](#license)

## Features

- Modern, responsive design with dark theme support
- Configurable boxes with logos, titles, descriptions, and links
- Multiple logo options: emoji, Font Awesome icons, SVG, and image URLs
- Custom styling for individual boxes
- Adjustable grid layout (1-4 columns)
- Configuration via YAML file or environment variables
- Server-side rendering with Next.js
- Fully dockerized for easy deployment
- Kubernetes deployment ready

## Quick Start

### Standard Installation

```bash
# Clone the repository
git clone https://github.com/davidab265/yaml-site-generator.git
cd yaml-site-generator

# Install dependencies
npm install

# Run the development server
npm run dev

# Access at http://localhost:3000
```

### Docker Quick Start

```bash
# Clone the repository
git clone https://github.com/davidab265/yaml-site-generator.git
cd yaml-site-generator

# Start with Docker Compose
docker-compose up -d

# Access at http://localhost:3000
```

## Configuration

The site can be configured in two ways:

1. **YAML Configuration (Recommended)**: Edit the `boxes.yaml` file in the root directory
2. **Environment Variables**: Set environment variables as shown in `.env.example`

YAML configuration takes precedence over environment variables.

### YAML Configuration

Edit the `boxes.yaml` file to add, remove, or modify boxes:

```yaml
# Site title (plain text)
title: "My Site"
# Site subtitle
subtitle: "Your Gateway to Powerful Development Tools"
# Optional HTML title (will override the plain text title if provided)
titleHtml: "<span class='text-light-a0'>My</span><span class='text-primary-light'>Site</span>"
# Number of columns in the grid (1-4)
columns: 3
boxes:
  - logo: "📚"  # Emoji, SVG icon, or image URL
    title: "Documentation"
    description: "Comprehensive guides and references"
    link: "/docs"
    customClass: "bg-tonal-100"  # Optional custom CSS class
  # Add more boxes as needed
```

### Environment Variables

Copy `.env.example` to `.env` and customize the variables:

```
# Site Configuration
SITE_TITLE=My Site
SITE_SUBTITLE=Your Gateway to Powerful Development Tools
SITE_TITLE_HTML=<span class='text-light-a0'>My</span><span class='text-primary-light'>Site</span>
SITE_COLUMNS=3

# Box 1
BOX_1_LOGO=📚
BOX_1_TITLE=Documentation
BOX_1_DESCRIPTION=Comprehensive guides and references
BOX_1_LINK=/docs
BOX_1_CUSTOM_CLASS=bg-tonal-100
```

## Logo Options

### Emoji Icons

Use emoji icons for a simple and effective approach:

```yaml
logo: "📚"  # In YAML
```

```
BOX_1_LOGO=📚  # In environment variables
```

### Font Awesome Icons

Use the format `fa:icon-name`, `fab:icon-name`, or `far:icon-name`:

```yaml
logo: "fa:book"      # Solid style
logo: "fab:github"   # Brand style
logo: "far:calendar"  # Regular style
```

### SVG and Image URLs

```yaml
# SVG Icons
logo: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">...</svg>'

# Image URLs
logo: 'https://example.com/image.png'
```

## Customization

- **Styling**: Edit `tailwind.config.js` and `styles/globals.css`
- **Dark Theme**: Customize colors in `styles/dark-theme.css`
- **Layout**: Adjust columns using the `columns` property
- **Individual Boxes**: Add custom CSS classes using the `customClass` property

## Deployment Options

### Standard Deployment

```bash
# Build for production
npm run build

# Start the production server
npm start
```

### Docker Deployment

#### Using Docker Compose (Recommended)

```bash
# Build and start in detached mode
docker-compose up -d

# View logs
docker-compose logs -f

# Stop the container
docker-compose down
```

#### Using Docker Directly

```bash
# Build the image
docker build -t yaml-site .

# Run the container
docker run -p 3000:3000 -v $(pwd)/boxes.yaml:/app/boxes.yaml -v $(pwd)/.env:/app/.env yaml-site
```

### Kubernetes Deployment

The application includes Kubernetes manifests in the `k8s` directory:

```bash
# Apply all resources
kubectl apply -k k8s/

# Check deployment status
kubectl get pods -l app=yaml-site
```

The Kubernetes setup includes:
- ConfigMap for the boxes.yaml configuration
- Deployment with 2 replicas
- Service for internal access
- Ingress for external access

## Community & Contributing

We welcome contributions of all kinds! Please read our [CONTRIBUTING.md](./CONTRIBUTING.md) guide and [Code of Conduct](./CODE_OF_CONDUCT.md) before submitting pull requests.

- **Found a bug?** Open an issue using the [Bug Report template](https://github.com/davidab265/yaml-site-generator/issues/new?template=bug_report.yml).
- **Have an idea?** Suggest an enhancement via [Feature Request](https://github.com/davidab265/yaml-site-generator/issues/new?template=feature_request.yml).
- **Security issue?** Follow our confidential [Security Policy](./SECURITY.md).

## License

[MIT License](./LICENSE) © 2025 YAML Site Generator Contributors.
