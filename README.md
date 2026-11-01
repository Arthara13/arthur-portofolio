# Arthur Fikry Swara — Editorial Electric Blue Portfolio (v3)

A React + Vite portfolio with a scroll-driven 3D introduction, authentic project visuals, an academic statistical lab, and WhatsApp contact. All interface copy is in English.

## Run locally

1. Extract the ZIP and open the **arthur-editorial-v3** folder in VS Code.
2. Run `npm install` then `npm run dev`.
3. Open the local address shown in the terminal (typically http://localhost:5173).

## Main changes

- Cleaner, less generic futuristic/editorial styling with reduced neon, without removing the reversible 3D scroll transition.
- Removed floating bottom-right label, generic scrolling marquee, and the footer elements requested for deletion.
- Fixed the stray letter in the header brand logo.
- WhatsApp links now open `https://wa.me/6285714331874` with a prefilled greeting.
- Hero uses Arthur's supplied formal portrait cutout with softened edge halo.
- Leadership is now based on the real graffiti/organization photograph rather than an awkward artificial-looking PNG cutout.
- Power BI project card uses the genuine screenshot shared by the owner.
- OptikData card uses a faithful **layout recreation** of the screenshot shared in chat. This is not an exact pixel-for-pixel copy or direct screenshot; replace `/public/projects/optikdata-editorial.webp` with the original image later if desired.
- Live project links and Statistical Analysis Lab are preserved.

## Important files

- `src/components/ScrollStory.jsx` + `scroll-story.css`: scroll-driven rotating panels.
- `src/data/projects.js`: project titles, screenshots, links and technology labels.
- `src/data/site.js`: profile, WhatsApp contact and experience.
- `src/index.css`: global styles, section layout, responsive design and editorial refinements.
- `public/projects/`: screenshots and project cover images.

## Build

`npm run build`

The source files were parsed with TypeScript's JSX/JS parser and image references were checked. A full Vite build was not run in this environment because npm could not finish package installation.
