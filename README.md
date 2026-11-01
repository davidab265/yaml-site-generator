# YAML Site Generator

<p align="center">
  <strong>A customizable landing-page generator driven by a single YAML config.</strong><br />
  Responsive design, dark theme, multiple logo options — deploys via npm, Docker Compose, or Kubernetes.
</p>

<p align="center">
  <a href="https://github.com/davidab265/yaml-site-generator/actions/workflows/ci.yml"><img src="https://github.com/davidab265/yaml-site-generator/actions/workflows/ci.yml/badge.svg" alt="CI Status" /></a>
  <a href="./LICENSE"><img src="https://img.shields.io/badge/license-MIT-blue.svg" alt="MIT License" /></a>
  <a href="https://nodejs.org/"><img src="https://img.shields.io/badge/node-%3E%3D18.0.0-brightgreen.svg" alt="Node.js Version" /></a>
  <a href="https://nextjs.org/"><img src="https://img.shields.io/badge/Next.js-14.0-black.svg" alt="Next.js 14" /></a>
  <a href="https://kubernetes.io/"><img src="https://img.shields.io/badge/kubernetes-ready-326CE5.svg" alt="Kubernetes Ready" /></a>
  <a href="./SECURITY.md"><img src="https://img.shields.io/badge/security-policy-blueviolet.svg" alt="Security Policy" /></a>
</p>

---

## Overview

**YAML Site Generator** builds a modern, dark-themed landing page of link boxes (documentation, dashboards, tools, portals) from a single `boxes.yaml` file — no code changes required:

- **YAML-driven**: Title, subtitle, columns (1–4), and unlimited boxes defined in one config file
- **Two config sources**: `boxes.yaml` or environment variables (YAML takes precedence)
- **Multiple logo types**: Emoji, Font Awesome (`fa:`/`fab:`/`far:`), inline SVG, and image URLs
- **Per-box styling**: Optional `customClass` for individual card styling
- **Deployment-ready**: Next.js standalone build, multi-stage Dockerfile, and a Kustomize `k8s/` overlay

---

## Screenshots

<p align="center">
  <strong>1. Default Three-Column Layout</strong><br />
  <em>Dark-themed responsive grid rendered entirely from <code>boxes.yaml</code>.</em>
</p>

<p align="center">
  <img src="images/site-generator.png" alt="Default 3-column layout" width="900" />
</p>

---

<p align="center">
  <strong>2. Two-Column Layout</strong><br />
  <em>Wider cards for fewer, richer links — set <code>columns: 2</code>.</em>
</p>

<p align="center">
  <img src="images/site-generator-2col.png" alt="2-column layout" width="900" />
</p>

---

<p align="center">
  <strong>3. Four-Column Compact Grid</strong><br />
  <em>Compact quick-links hub — set <code>columns: 4</code>.</em>
</p>

<p align="center">
  <img src="images/site-generator-4col.png" alt="4-column layout" width="900" />
</p>

---

<p align="center">
  <strong>4. Mobile View</strong><br />
  <em>Responsive down to small screens with the same config.</em>
</p>

<p align="center">
  <img src="images/site-generator-mobile.png" alt="Mobile view" width="420" />
</p>

---

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
```

Open `http://localhost:3000` in your browser.

### Docker Quick Start

```bash
# Clone the repository
git clone https://github.com/davidab265/yaml-site-generator.git
cd yaml-site-generator

# Start with Docker Compose
docker-compose up -d
```

Open `http://localhost:3000` in your browser.

---

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

| Variable | Description | Default |
|---|---|---|
| `SITE_TITLE` | Site title (plain text) | `My Site` |
| `SITE_SUBTITLE` | Site subtitle | `Your Gateway to Powerful Development Tools` |
| `SITE_TITLE_HTML` | Optional HTML title (overrides `SITE_TITLE`) | — |
| `SITE_COLUMNS` | Number of grid columns (1–4) | `3` |
| `BOX_<n>_LOGO` | Logo for box `<n>` (emoji, `fa:` icon, SVG, or image URL) | — |
| `BOX_<n>_TITLE` | Title for box `<n>` | — |
| `BOX_<n>_DESCRIPTION` | Description for box `<n>` | — |
| `BOX_<n>_LINK` | Link for box `<n>` | — |
| `BOX_<n>_CUSTOM_CLASS` | Optional CSS class for box `<n>` | — |
| `CONFIG_PATH` | Optional path to an alternate YAML config file | `boxes.yaml` |

---

## Logo Options

### Emoji Icons

```yaml
logo: "📚"  # In YAML
```

```env
BOX_1_LOGO=📚  # In environment variables
```

### Font Awesome Icons

Use the format `fa:icon-name`, `fab:icon-name`, or `far:icon-name`:

```yaml
logo: "fa:book"       # Solid style
logo: "fab:github"    # Brand style
logo: "far:calendar"  # Regular style
```

### SVG and Image URLs

```yaml
# SVG Icons
logo: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">...</svg>'

# Image URLs
logo: 'https://example.com/image.png'
```

---

## Customization

- **Styling**: Edit `tailwind.config.js` and `styles/globals.css`
- **Dark Theme**: Customize colors in `styles/dark-theme.css`
- **Layout**: Adjust columns using the `columns` property
- **Individual Boxes**: Add custom CSS classes using the `customClass` property

---

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

# Run the container (mount your config)
docker run -p 3000:3000 -v $(pwd)/boxes.yaml:/app/boxes.yaml yaml-site
```

### Kubernetes Deployment

The application includes a Kustomize overlay in the `k8s/` directory:

```bash
# Apply all resources
kubectl apply -k k8s/

# Check deployment status
kubectl get pods -l app=yaml-site
```

The Kubernetes setup includes:

- ConfigMap for the `boxes.yaml` configuration
- Deployment with 2 replicas
- Service for internal access
- Ingress for external access (edit `k8s/ingress.yaml` to set your host)

---

## Testing

```bash
npm run lint    # Lint the codebase
npm run build   # Verify the production build
```

---

## Community & Contributing

We welcome contributions of all kinds! Please read our [CONTRIBUTING.md](./CONTRIBUTING.md) guide and [Code of Conduct](./CODE_OF_CONDUCT.md) before submitting pull requests.

- **Found a bug?** Open an issue using the [Bug Report template](https://github.com/davidab265/yaml-site-generator/issues/new?template=bug_report.yml).
- **Have an idea?** Suggest an enhancement via [Feature Request](https://github.com/davidab265/yaml-site-generator/issues/new?template=feature_request.yml).
- **Security issue?** Follow our confidential [Security Policy](./SECURITY.md).
- **Changelog**: See [CHANGELOG.md](./CHANGELOG.md) for release history.

---

## License

[MIT License](./LICENSE) © 2025 YAML Site Generator Contributors.
