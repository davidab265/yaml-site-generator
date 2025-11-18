# Security Policy

## Supported Versions

We release patches for security vulnerabilities. Currently supported versions:

| Version | Supported          |
| ------- | ------------------ |
| 1.0.x   | :white_check_mark: |
| < 1.0   | :x:                |

## Reporting a Vulnerability

We take the security of our project seriously. If you discover a security vulnerability, please follow these steps:

### How to Report

1. **DO NOT** open a public issue
2. Send an email to the maintainers or create a private security advisory on GitHub
3. Include the following information:
   - Type of vulnerability
   - Full paths of source file(s) related to the vulnerability
   - Location of the affected source code (tag/branch/commit or direct URL)
   - Step-by-step instructions to reproduce the issue
   - Proof-of-concept or exploit code (if possible)
   - Impact of the vulnerability
   - Suggested fix (if you have one)

### What to Expect

- **Acknowledgment**: We will acknowledge receipt of your vulnerability report within 48 hours
- **Investigation**: We will investigate the issue and determine its impact and severity
- **Updates**: We will keep you informed about our progress
- **Resolution**: We will work on a fix and release it as soon as possible
- **Credit**: We will credit you for the discovery (unless you prefer to remain anonymous)

### Security Best Practices

When using this project:

1. **Environment Variables**: Never commit `.env` files with sensitive data
2. **Dependencies**: Keep dependencies up to date
3. **Docker**: Use specific version tags instead of `latest`
4. **Kubernetes**: Follow security best practices for your cluster
5. **Access Control**: Implement proper authentication if exposing publicly
6. **HTTPS**: Always use HTTPS in production
7. **Input Validation**: Be cautious with user-provided YAML configurations

### Known Security Considerations

- **YAML Configuration**: The application loads YAML files. Ensure only trusted YAML files are used
- **Environment Variables**: Sensitive data should not be stored in environment variables in production
- **Docker**: The Docker image runs as root by default. Consider using a non-root user in production
- **Dependencies**: Regularly update dependencies to patch known vulnerabilities

### Security Updates

Security updates will be released as patch versions and documented in the [CHANGELOG.md](CHANGELOG.md).

## Disclosure Policy

When we receive a security bug report, we will:

1. Confirm the problem and determine affected versions
2. Audit code to find any similar problems
3. Prepare fixes for all supported versions
4. Release new versions as soon as possible

Thank you for helping keep this project secure!
