# Nature's Heart Foundation Website

## Overview
Nature's Heart Foundation is a responsive, modern website built with HTML, CSS, and vanilla JavaScript. It showcases the foundation's mission, impact projects, team members, and provides contact information for visitors interested in supporting environmental conservation efforts.

## Project Structure

```
Natures heart foundation/
├── index.html              # Homepage with hero, about, thematics, impacts, testimonials, CTA
├── about-us.html           # Detailed about us page
├── thematics.html          # Thematic areas of focus
├── Impacts.html            # Impact metrics and project showcase
├── teams.html              # Team members display
├── testimony.html          # Testimonials/success stories
├── contact.html            # Contact form and information
├── style.css               # Main stylesheet (responsive design)
├── images/                 # Logo, favicon, and project images
│   └── natures heart favicon.png
└── README.md               # This file
```

## Features

### 1. **Responsive Design**
- Mobile-first approach with breakpoints at 575px, 768px, and 800px
- Single-column layout on mobile devices automatically expands to multi-column on desktop
- Prevents horizontal overflow and unwanted zoom on mobile devices
- Uses CSS Grid for flexible layout management

### 2. **Header & Navigation**
- Fixed navigation bar with smooth scrolling
- Logo and menu links
- Mobile hamburger menu (hidden on desktop, visible on screens ≤800px)
- Hamburger animation (bars transform into X on click)
- Backdrop blur effect on mobile menu for visual polish

### 3. **Hero Section**
- Animated gradient background with smooth color transitions
- Floating geometric shapes (circles, squares, triangles) with continuous animation
- Centered call-to-action box with semi-transparent backdrop blur
- Responsive padding and sizing using `clamp()` for fluid typography

### 4. **About Us Section**
- Three subsections: About, Mission, and Vision
- Clean card-based layout
- Responsive width that adjusts for mobile

### 5. **Thematics Section**
- 2x2 grid of thematic focus areas
- Hover effects with shadow transitions
- Light blue background (`#dae7ee`) for visual distinction
- Scales to single column on mobile

### 6. **Our Impacts Section**
- Six project cards with gradient backgrounds
- Color-coded projects (red, blue, green, gray tones)
- Interactive links with arrow animations (→ slides on hover)
- 70% width on desktop, 100% on mobile
- Light purple background (`#f7e0f6`)

### 7. **Impact Metrics**
- Circular cards with animated spinning gradient border
- Count-up animation triggered when cards enter viewport (IntersectionObserver)
- 3-column grid on desktop, responsive grid on tablet, 1-column on mobile
- Smooth easing function for natural count animations

### 8. **Partners Section**
- Flexible layout displaying partner logos
- White cards with shadow effects
- Responsive sizing (50% width on desktop, 80% on tablet, 30% on mobile)
- Image object-fit for proper logo scaling

### 9. **Testimonials Slider**
- Auto-scrolling carousel (2-second interval)
- Manual navigation with next/previous buttons
- Pauses auto-scroll on hover, resumes on mouse leave
- 70% width on desktop, full-width on mobile
- Smooth translateX transition between slides

### 10. **Call-to-Action (CTA)**
- Contact form section with input fields and submit button
- Form styling with focus states and hover effects
- Responsive width (40% on desktop, full-width on mobile)

### 11. **Footer**
- Dark background (#333333)
- Contact information section
- Social media links placeholder
- Copyright text

### 12. **Back-to-Top Button**
- Fixed position button (bottom-right)
- Only visible after scrolling 300px down
- Smooth scroll-to-top animation
- Visible on mobile devices

---

## JavaScript Functionality

### Navbar Toggle (Mobile Menu)
```javascript
// Opens/closes mobile menu on hamburger click
// Closes menu when a link is clicked
// Animates hamburger bars
```

### Testimonials Slider
```javascript
// Auto-advances slides every 2 seconds
// Manual controls via next/previous buttons
// Pause on hover, resume on mouse leave
// Wraps around at end of slides
```

### Impact Metrics Count-Up
```javascript
// Triggers count animation when metric cards enter viewport
// Uses Intersection Observer API for performance
// Easing function for smooth animation (easeOut cubic)
// 1500ms duration for each count animation
```

### Back-to-Top Button
```javascript
// Shows button when user scrolls past 300px
// Smooth scroll to top on click
// Toggles visibility class based on scroll position
```

---

## Styling Highlights

### Color Palette
- **Primary Blue**: `#0288d1`
- **Cyan**: `#4dd0e1`
- **Green**: `#a8d5ba`
- **Light Green**: `#d8f1e2`
- **Dark Gray**: `#333333`
- **Light Gray**: `#f4f4f4`

### Responsive Breakpoints
- **Mobile Small**: < 576px
- **Mobile Large**: 576px – 767px
- **Tablet**: 768px – 799px
- **Desktop**: ≥ 800px

### Typography
- **Font Family**: Poppins (Google Fonts)
- **Font Weights**: 100–900
- **Responsive Font Sizes**: Uses `clamp()` for fluid scaling

### Box Shadows & Effects
- Subtle shadows on cards (0px 0px 6px 0px grey)
- Elevated shadows on hover (0px 0px 20px 1px grey)
- Backdrop blur effects on hero and mobile menu
- Gradient overlays on project cards

---

## Mobile Optimization

### Key Mobile Features
1. **Single Column Layout**: All sections stack vertically
2. **Touch-Friendly Navigation**: Large hamburger button, adequate tap targets
3. **Optimized Forms**: Full-width inputs with proper spacing
4. **Image Scaling**: All images scale proportionally with viewport
5. **Reduced Motion**: Respects `prefers-reduced-motion` media query

### Known Mobile Considerations
- Navbar menu width: 80% (prevents edge cutoff)
- Hero details: 90% width with max-width for readability
- Partner cards: Scale from 50% → 80% → 30% across breakpoints
- Metrics grid: 3 columns → 2 columns → 1 column
- Testimonial slider: 70% → 100% width on smaller screens

---

## Browser Support
- Modern browsers (Chrome, Firefox, Safari, Edge)
- CSS Grid support required
- JavaScript ES6+ features used (arrow functions, const/let, template literals)
- CSS custom properties (prefers-reduced-motion) supported

---

## Performance Considerations
1. **Intersection Observer**: Used for lazy-triggering metric animations
2. **CSS Animations**: GPU-accelerated transforms (`translate3d`, `rotate`)
3. **Smooth Scrolling**: CSS-based (no JS scroll listener except back-to-top toggle)
4. **Image Optimization**: Recommended to compress images in `/images` folder
5. **Font Loading**: Google Fonts with preconnect links for fast loading

---

## Accessibility Features
- Semantic HTML structure
- ARIA labels on interactive elements (`aria-label="Back to top"`)
- Keyboard navigation support for forms and buttons
- Focus states on all interactive elements
- Color contrast suitable for readability
- Reduced motion support for animations

---

## How to Use

### Running Locally
1. Clone or download the project folder
2. Open `index.html` in a web browser (or use Live Server in VS Code)
3. Navigate between pages using the navbar menu

### Testing on Mobile
1. Use Live Server in VS Code
2. Find your PC IP: `cmd` → `ipconfig` → note IPv4 address
3. On mobile device, open: `http://<PC_IP>:5500/index.html`
4. Test responsive behavior across different screen sizes

### Customization
- **Colors**: Update color variables in `style.css`
- **Content**: Edit HTML files to add your own text and images
- **Images**: Replace placeholder images in `/images` folder
- **Fonts**: Change Google Fonts link in `<head>` of HTML files

---

## Known Issues & To-Do

### Current Issues
- Mobile zoom issue resolved (prevented by `overflow-x: hidden` and box-sizing)
- Some pages (teams.html, testimony.html, contact.html) have incomplete script tags

### Recommended Improvements
1. Extract duplicate inline scripts into a shared `script.js` file
2. Add image alt text across all pages
3. Add meta descriptions for SEO
4. Standardize filename casing (Impacts.html → impacts.html)
5. Complete missing form functionality (back-end integration)
6. Add loading spinners for form submission
7. Optimize images with compression tools
8. Consider lazy-loading images below the fold

---

## File Sizes & Assets
- **CSS**: Single stylesheet (`style.css`) for all pages
- **JavaScript**: Inline scripts in HTML (recommend extracting to external file)
- **Images**: Favicon + logo + partner logos + team photos
- **Fonts**: Google Fonts CDN (Poppins family)

---

## Developer Notes
- Grid-based layout simplifies responsive adjustments
- Mobile-first media queries make desktop scaling predictable
- Intersection Observer ensures smooth animations without performance hit
- CSS custom properties (if added) would improve maintainability
- Consider adding dark mode support in future iterations

---

## Contact & Support
For questions or support, contact Nature's Heart Foundation through the contact form or email provided in the footer.

---

**Last Updated**: November 23, 2025  
**Version**: 1.0