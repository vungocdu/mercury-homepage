# GitLab Pages Setup Guide

## Overview
This project is configured to automatically deploy to GitLab Pages when changes are pushed to the main branch.

## CI/CD Pipeline

The `.gitlab-ci.yml` file contains two stages:

### 1. Build Stage
- Uses Node.js 18 Alpine image
- Installs all dependencies (including devDependencies for build)
- Builds the Next.js app with static export
- Creates artifacts in the `out/` directory

### 2. Deploy Stage (Pages)
- Uses Alpine Linux image
- Copies built files to `public/` directory
- Deploys to GitLab Pages
- Creates artifacts that GitLab Pages serves

## Configuration Files

### next.config.js
```javascript
output: 'export',        // Enables static export
trailingSlash: true,     // Required for static hosting
images: {
  domains: ['minova.vn'],
  unoptimized: true,     // Required for static export
}
```

### .gitlab-ci.yml
- Triggers only on main branch
- Caches node_modules for faster builds
- Uses lightweight Alpine images
- Creates artifacts for GitLab Pages

## Deployment URL
After successful deployment, your site will be available at:
```
https://[username].gitlab.io/[project-name]
```

## Manual Deployment
If you need to deploy manually:
1. Push changes to main branch
2. Go to GitLab project → CI/CD → Pipelines
3. Monitor the build and deploy stages
4. Check Pages section for deployment status

## Troubleshooting

### Build Failures
- Check if all dependencies are in package.json
- Verify next.config.js configuration
- Check GitLab CI/CD logs for specific errors

### Pages Not Loading
- Ensure `public/` directory contains built files
- Check GitLab Pages settings in project settings
- Verify domain configuration if using custom domain

### Performance Issues
- Optimize images and assets
- Consider using CDN for static assets
- Monitor build times and optimize dependencies 