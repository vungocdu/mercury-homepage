# Process Images

This directory contains images for the Our Process section.

## Required Images for Process Steps

### Step 01 - Plan
- **File**: `01.jpg` (or `01.png`, `01.webp`)
- **Content**: Planning phase with requirements gathering and project estimation
- **Suggested**: Team meeting, whiteboard with requirements, project planning tools
- **Size**: 400x300px recommended
- **Format**: JPG, PNG, or WebP

### Step 02 - Design & Define
- **File**: `02.jpg` (or `02.png`, `02.webp`)
- **Content**: Design phase with wireframes and system architecture
- **Suggested**: Wireframes, design mockups, system architecture diagrams
- **Size**: 400x300px recommended
- **Format**: JPG, PNG, or WebP

### Step 03 - Build & Test
- **File**: `03.jpg` (or `03.png`, `03.webp`)
- **Content**: Development and testing phase with code implementation
- **Suggested**: Code editor, development tools, testing interface
- **Size**: 400x300px recommended
- **Format**: JPG, PNG, or WebP

### Step 04 - Deploy & Maintenance
- **File**: `04.jpg` (or `04.png`, `04.webp`)
- **Content**: Deployment and maintenance phase with continuous monitoring
- **Suggested**: Server deployment, monitoring dashboards, maintenance tools
- **Size**: 400x300px recommended
- **Format**: JPG, PNG, or WebP

## Image Guidelines

- Use high-quality images that represent each phase clearly
- Maintain consistent aspect ratio (4:3 recommended)
- Ensure images are optimized for web (compressed, reasonable file size)
- Use images that align with Mercury Solutions brand colors
- Consider using images that show technology and professionalism

## Current Implementation

The component currently uses gradient placeholders with icons. Replace these with actual images by:

1. Adding the image files to this directory with the correct naming convention (01.jpg, 02.jpg, etc.)
2. The application will automatically detect and display the images
3. If images are not found, it will fall back to the gradient placeholders

## Automatic Image Detection

The application will automatically look for images in this order:
1. `01.jpg`, `02.jpg`, `03.jpg`, `04.jpg`
2. `01.png`, `02.png`, `03.png`, `04.png`
3. `01.webp`, `02.webp`, `03.webp`, `04.webp`

## TVC Directory Structure

For TVC-related content, use the organized structure in `/public/images/tvc/`:

### Core TVC Content
- `/videos/` - TVC video files (MP4, MOV, AVI)
- `/thumbnails/` - Video thumbnails and preview images
- `/portfolio/` - Portfolio showcase images
- `/services/` - Service-specific images
- `/team/` - Team member photos and profiles

### Production Elements
- `/equipment/` - Camera, lighting, audio equipment
- `/behind-scenes/` - Behind-the-scenes photos
- `/locations/` - Location scouting and setup photos
- `/studios/` - Studio setup and equipment
- `/sets/` - Set design and construction
- `/props/` - Props and set decorations

### Creative Elements
- `/storyboards/` - Storyboard images
- `/scripts/` - Script documents and text
- `/animations/` - Animation files and GIFs
- `/3d/` - 3D models and renders
- `/special-effects/` - VFX and special effects
- `/lighting/` - Lighting setup and effects

### Production Support
- `/costumes/` - Costume design and fittings
- `/makeup/` - Makeup and styling
- `/hair/` - Hair styling and design
- `/wardrobe/` - Wardrobe and clothing
- `/transportation/` - Transportation and logistics
- `/catering/` - Catering and food services

### Business & Legal
- `/contracts/` - Contract documents
- `/invoices/` - Invoice documents
- `/receipts/` - Receipt and expense documents
- `/permits/` - Location and filming permits
- `/insurance/` - Insurance documents
- `/security/` - Security setup and personnel

### Project Management
- `/timeline/` - Project timeline images
- `/milestones/` - Milestone achievement images
- `/deliverables/` - Final deliverable images
- `/feedback/` - Client feedback and notes
- `/revisions/` - Revision and edit images
- `/approvals/` - Approval process images
- `/final-delivery/` - Final delivery images

### Marketing & Branding
- `/campaigns/` - Campaign-specific images
- `/industries/` - Industry-specific content
- `/clients/` - Client logos and branding
- `/testimonials/` - Client testimonial images
- `/awards/` - Award and recognition images
- `/logos/` - Logo variations and assets
- `/icons/` - Icon sets and graphics

### Visual Assets
- `/hero/` - Hero section images
- `/backgrounds/` - Background images and textures
- `/gallery/` - General gallery images
- `/archive/` - Archived content and old projects

## Usage Instructions

1. **For Process Images**: Simply add numbered images (01.jpg, 02.jpg, etc.) to this directory
2. **For TVC Content**: Use the appropriate subdirectory in `/public/images/tvc/`
3. **File Naming**: Use descriptive, lowercase names with hyphens (e.g., `client-meeting.jpg`)
4. **File Formats**: Prefer WebP for web optimization, JPG for photos, PNG for graphics with transparency
5. **Image Optimization**: Compress images for web use while maintaining quality

## Automatic Integration

The application will automatically:
- Detect and display process step images when available
- Fall back to gradient placeholders if images are missing
- Optimize images for different screen sizes
- Maintain aspect ratios and visual consistency 