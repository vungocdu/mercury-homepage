# Project Screenshots Directory

This directory contains screenshots for all Mercury Solutions projects showcased on the website.

## Directory Structure

```
projects/
├── actiwell-management-system/
│   ├── dashboard.png
│   ├── patient-care.png
│   ├── admin-panel.png
│   └── mobile-app.png
├── timekeeping-ai-camera/
│   ├── camera-system.png
│   ├── dashboard.png
│   ├── reports.png
│   └── mobile-app.png
├── myarm-mobile-app/
│   ├── home-screen.png
│   ├── control-panel.png
│   ├── monitoring.png
│   └── settings.png
├── tvc-corporate-branding/
│   ├── brand-film-1.png
│   ├── brand-film-2.png
│   ├── behind-scenes.png
│   └── final-cut.png
├── tvc-product-launch/
│   ├── product-showcase.png
│   ├── campaign-video.png
│   ├── social-media.png
│   └── tv-commercial.png
├── tvc-internal-communications/
│   ├── training-video.png
│   ├── company-culture.png
│   ├── employee-engagement.png
│   └── hr-communications.png
└── tvc-event-coverage/
    ├── event-highlights.png
    ├── behind-scenes.png
    ├── promotional-content.png
    └── social-media-clips.png
```

## Image Guidelines

### Technical Requirements
- **Format**: PNG or JPG
- **Resolution**: Minimum 1920x1080 (Full HD)
- **File Size**: Optimize for web (max 500KB per image)
- **Aspect Ratio**: 16:9 for videos, 4:3 for mobile apps, 1:1 for social media

### Content Guidelines
- **Quality**: High-quality, professional screenshots
- **Branding**: Include Mercury Solutions watermark if appropriate
- **Descriptions**: Each image should have a clear, descriptive filename
- **Updates**: Keep screenshots current with latest project versions

### Naming Convention
- Use kebab-case for filenames
- Include project name and feature description
- Example: `actiwell-dashboard-overview.png`

## Usage in Components

```typescript
// Example usage in Projects component
const projectScreenshots = {
  actiwell: [
    '/images/screenshots/projects/actiwell-management-system/dashboard.png',
    '/images/screenshots/projects/actiwell-management-system/patient-care.png',
    // ... more screenshots
  ],
  timekeeping: [
    '/images/screenshots/projects/timekeeping-ai-camera/camera-system.png',
    '/images/screenshots/projects/timekeeping-ai-camera/dashboard.png',
    // ... more screenshots
  ],
  // ... other projects
}
```

## Maintenance

- **Regular Updates**: Update screenshots when projects are updated
- **Version Control**: Keep track of screenshot versions
- **Backup**: Maintain backup copies of all screenshots
- **Documentation**: Update this README when adding new projects

## Adding New Projects

1. Create a new directory for the project
2. Add high-quality screenshots following the naming convention
3. Update the project data in the relevant component
4. Update this README with the new project structure
5. Optimize images for web performance 