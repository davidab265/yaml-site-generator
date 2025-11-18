# Contributing to YAML Site Generator

Thank you for your interest in contributing! This document provides guidelines for contributing to this project.

## How to Contribute

### Reporting Bugs

If you find a bug, please open an issue with:
- A clear, descriptive title
- Steps to reproduce the issue
- Expected behavior vs actual behavior
- Your environment (OS, Node.js version, browser, etc.)
- Screenshots if applicable
- Any relevant error messages or logs

### Suggesting Enhancements

We welcome suggestions for new features or improvements! Please open an issue with:
- A clear description of the enhancement
- Why this would be useful
- Any examples, mockups, or use cases
- Potential implementation approach (optional)

### Pull Requests

1. **Fork the repository** and create your branch from `main`
2. **Make your changes**:
   - Follow the existing code style
   - Add comments for complex logic
   - Test your changes thoroughly
   - Update documentation if needed
3. **Test your changes**:
   ```bash
   npm run dev    # Test in development
   npm run build  # Test production build
   npm start      # Test production server
   ```
4. **Commit your changes** with a clear, descriptive commit message
5. **Push to your fork** and submit a pull request

### Development Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/yaml-site-generator.git
   cd yaml-site-generator
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Copy the example environment file:
   ```bash
   cp .env.example .env
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

### Code Style Guidelines

- Use clear, descriptive variable and function names
- Add comments for complex logic
- Follow React best practices
- Use Tailwind CSS for styling
- Keep components focused and single-purpose
- Follow the existing patterns in the codebase

### Commit Message Guidelines

- Use present tense ("Add feature" not "Added feature")
- Use imperative mood ("Move cursor to..." not "Moves cursor to...")
- Limit the first line to 72 characters or less
- Reference issues and pull requests when relevant

Examples:
```
Add support for custom fonts
Fix box alignment on mobile devices
Update README with deployment instructions
```

### Areas for Contribution

Some ideas for contributions:
- **Features**: New box types, animations, themes
- **Documentation**: Improve README, add tutorials, create examples
- **Styling**: New themes, improved responsive design
- **Performance**: Optimize loading, reduce bundle size
- **Testing**: Add unit tests, integration tests
- **Accessibility**: Improve keyboard navigation, screen reader support
- **Internationalization**: Add support for more languages

### Testing

Before submitting a pull request:
- Test in development mode (`npm run dev`)
- Test production build (`npm run build && npm start`)
- Test with Docker (`docker-compose up`)
- Test on different screen sizes
- Check browser console for errors

### Documentation

If your changes affect how users interact with the project:
- Update the README.md
- Update relevant configuration examples
- Add comments to complex code
- Update the .env.example if you add new environment variables

## Questions?

If you have questions, feel free to open an issue for discussion or reach out to the maintainers.

## Code of Conduct

- Be respectful and inclusive
- Welcome newcomers and help them learn
- Focus on what is best for the community
- Show empathy towards other community members

Thank you for contributing! 🎉
