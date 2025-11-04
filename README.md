# Nature's Heart Foundation (NHF-ADEI)

A simple, responsive, static website for Nature’s Heart Foundation – Action for Development and Empowerment Initiatives (NHF-ADEI). It showcases the organization’s mission, thematics, projects/impacts, partners, testimonials, and team.

## Features
- Responsive layout with a fixed, mobile-friendly navigation (hamburger menu)
- Smooth in-page scrolling to sections
- Thematic sections highlighting focus areas
- Project/Impact highlights
- Partner logos and testimonials
- Contact call-to-action form

## Tech Stack
- HTML5
- CSS3 (custom, no framework)
- Vanilla JavaScript (for mobile nav toggle)

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
  ├── index.html       # Landing page
  ├── teams.html       # Teams page
  └── style.css        # Global styles
```

## Getting Started
Because this is a static site, you can open it directly in a browser.

- Option 1: Double-click `index.html` to open it in your default browser.
- Option 2: Serve locally (recommended for correct asset paths and future growth):
  - With VS Code: use the Live Server extension to “Open with Live Server”.
  - With Node.js installed:
    ```bash
    npx serve .
    # or
    python -m http.server 8080
    ```
    Then visit `http://localhost:8080/index.html`.

## Editing
- Global styles live in `style.css`.
- The home page content is in `index.html`.
- Team entries are in `teams.html`.
- Mobile nav behavior is an inline script at the bottom of each HTML file.

## Accessibility & SEO Notes
- Use one `<h1>` per page; use `h2` for section titles.
- Ensure all images have meaningful `alt` attributes.
- Keep color contrast sufficient for readability.
- Add/maintain `<meta name="description" content="..." />` for each page.
- Ensure form labels are explicitly associated with inputs via matching `for`/`id`.

## Performance Tips
- Optimize large images (use WebP/AVIF with fallbacks).
- Add intrinsic dimensions (or CSS `aspect-ratio`) to images to reduce layout shift.
- Consider `loading="lazy"` on non-critical images (e.g., partners, team photos).
- Minify CSS for production if needed.

## Known Improvements/Todos
- Move any `<ul>` lists out of surrounding `<p>` tags in `index.html` to ensure valid HTML.
- Use absolute URLs with protocol for social links (e.g., `https://facebook.com/...`) and consider `rel="noopener noreferrer"`.
- Convert the hero background image to a compressed modern format.
- On `teams.html`, use `document.querySelectorAll` when attaching click handlers to multiple links.
- Add a real form handler (`action`/`method`) or client-side submission logic.

## Contributing
1. Create a new branch for your change.
2. Make edits to `index.html`, `teams.html`, and/or `style.css`.
3. Test on mobile and desktop viewports.
4. Open a pull request describing your changes.

## License
This project is provided as-is for NHF-ADEI. If you need a formal OSS license, add one (e.g., MIT) to this repository.

## Contact
- Email: replace `exampl@gmail.com` in the footer with the official address.
- Phone/Address: update in `index.html` and `teams.html` as needed.



