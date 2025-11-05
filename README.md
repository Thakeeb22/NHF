# Nature's Heart Foundation (NHF-ADEI) Website

A modern, responsive, static website for Nature’s Heart Foundation – Action for Development and Empowerment Initiatives (NHF-ADEI). It presents the organization’s mission, thematics, projects/impacts, partners, testimonials, team, and contact.

## Highlights
- Transparent, fixed navbar with mobile hamburger menu
- Animated hero section with floating shapes and accessible reduced‑motion support
- Thematics grid and detailed Our Impacts cards with styled links
- Testimonials carousel with autoplay, arrows, dots, swipe and pause‑on‑hover
- Partners grid with uniform, even-sized logo cards across breakpoints
- Circular Impact Metrics with animated ring and count‑up on scroll
- Contact CTA form with accessible labels

## Tech Stack
- HTML5
- CSS3 (custom, no framework)
- Vanilla JavaScript (nav toggle, carousel, counters)

## Pages
- `index.html` – Home (hero, about, thematics, our impacts + metrics, partners, testimonials, CTA)
- `about-us.html` – About
- `thematics.html` – Thematic focus areas
- `Impacts.html` – Projects and impacts (also includes metrics)
- `teams.html` – Teams
- `testimony.html` – Testimonies
- `contact.html` – Contact

## Project Structure
```
Natures heart foundation/
  ├── images/
  │   ├── brave logo.png
  │   ├── icon-facebook.svg
  │   ├── icon-instagram.svg
  │   ├── icon-twitter.svg
  │   ├── Nature's heart favicon.jpg
  │   ├── Nature's heart logo.svg
  │   ├── natures heart favicon.png
  │   ├── natures heart logo.png
  │   ├── REPORT TECH HER WEMA.jpg
  │   ├── REPORT TECH HER WEMA.pdf
  │   └── skb logo.png
  ├── index.html
  ├── about-us.html
  ├── thematics.html
  ├── Impacts.html
  ├── teams.html
  ├── testimony.html
  ├── contact.html
  └── style.css
```

## Getting Started
This is a static site—open `index.html` in a browser or serve locally for best results.

- Quick open: double‑click `index.html`.
- Local server (recommended):
  - VS Code: “Open with Live Server”.
  - Terminal:
    ```bash
    npx serve .
    # or
    python -m http.server 8080
    # then visit http://localhost:8080/index.html
    ```

## Editing & Customization
- Global styles: `style.css`
  - Colors: navbar/link/brand blues are around `#0288d1` and `#4dd0e1`.
  - Hero: animated gradient + floating shapes (`.hero`, `.shapes`).
  - Testimonials: `.testimon-viewport`, `.testimon-track`, `.testimon-card`, arrows/dots.
  - Metrics: `.metrics`, `.metrics-grid`, `.metric`, `.metric-number`.
- Scripts: Inline at the bottom of each HTML file.
  - Nav toggle (aria-expanded), closing on link click
  - Testimonials auto‑slide + arrows + dots + swipe
  - Impact metrics count‑up on scroll (IntersectionObserver)
- Update metrics values via `data-target` attributes in `index.html`/`Impacts.html`.

## Accessibility & SEO
- One `<h1>` per page; use `<h2>` for sections
- Descriptive `alt` text for images
- Label/`for` pairs and matching `id`s for form inputs
- Respect user motion preference (reduced‑motion disables nonessential animations)
- Add `<meta name="description" ...>` to each page as needed

## Performance Tips
- Compress images (prefer WebP/AVIF with fallbacks) and keep logos optimized
- Add intrinsic image sizes or use `object-fit`/`max-height` for stability
- Consider lazy‑loading non-critical images

## Deployment
- GitHub Pages: push to a `main`/`master` branch and enable Pages in repo settings.
- Netlify: drag‑and‑drop the folder or connect the repo (build not required for static).
- Vercel: “Import Project” and deploy as a static site.

## Contributing
1. Create a feature branch
2. Edit the relevant HTML/CSS files
3. Test on mobile and desktop
4. Open a pull request describing changes

## License
Provided as‑is for NHF‑ADEI. Add a license (e.g., MIT) if you need an explicit OSS license.

## Contact
- Email: naturesheartfoundation@gmail.com
- Phone: 09122736021
- Address: Kaduna, Nigeria
