# Project Plan: Actor Portfolio Website

**Instructions:** We will go through each numbered item in this plan one at a time. After I complete a step, I will summarize what I have done and ask for confirmation to proceed by saying: "The next step has been completed, happy to proceed with the next step? y/n". Only after receiving a 'y' confirmation will I mark the item as complete (`- [x]`) and move to the next step.

This document outlines the plan for building a personal portfolio website for the actor, Timothy James.

## 1. Technology Stack

- **Frontend:** Next.js (React Framework) with TypeScript
- **Styling:** Tailwind CSS
- **Content:** Local JSON file (`src/content.json`)
- **Deployment:** Netlify or Vercel
- **Optional Content Management:** Sanity.io (Headless CMS)

## 2. Development Phases

### Phase 1: Project Setup & Configuration

- [x] 1. **Initialize Next.js Project:**
    - Use `create-next-app` to set up a new Next.js application.
    - Include TypeScript, Tailwind CSS, and ESLint for a modern development environment.
- [x] 2. **Prepare Local Content:**
    - Consolidate all website content into `src/content.json`.

### Phase 2: Frontend Development

- [ ] 1. **Load Local Content:**
    - Set up the Next.js application to read data from `src/content.json`.
- [ ] 2. **Build Pages & Components:**
    - Create the following pages:
        - Home/About (featuring a prominent showreel section)
        - CV/Résumé
        - Headshots/Gallery
        - Videos/Reels (including all reels from Linktree)
        - Contact
        - `tripletaketim` (placeholder page)
    - Develop reusable React components for displaying content (e.g., a `CreditRow` component for the CV grid).
- [ ] 3. **Implement Features:**
    - On the CV page, implement client-side controls for sorting (by Year) and grouping (by Type eg Musicals) the credits grid.
    - Add a dedicated section (e.g., in the footer or a contact page) to display social media and other professional links.
- [ ] 4. **Styling:**
    - Apply a clean, modern, and responsive design using Tailwind CSS.

### Phase 3: Deployment

- [ ] 1. **Version Control:**
    - Push the project to a GitHub repository.
- [ ] 2. **Continuous Deployment:**
    - Connect the GitHub repository to Netlify or Vercel.
    - Configure the deployment settings to automatically build and deploy the site whenever changes are pushed to the main branch.

### Phase 4: Optional - Migrate to Sanity.io

- [ ] 1. **Set up Sanity.io:**
    - Create a new Sanity.io project.
    - Define the content schemas based on the structure of `src/content.json`.
- [ ] 2. **Import Content:**
    - Write a script to import the data from the `src/content/` directory into Sanity.io.
    - Upload images from `/source_images` to the Sanity.io media library.
- [ ] 3. **Update Frontend:**
    - Modify the Next.js application to fetch data from the Sanity.io API instead of the local JSON file.
- [ ] 4. **Configure Webhooks:**
    - Set up webhooks so that content changes in Sanity can trigger a new build of the website, ensuring the live site is always up-to-date.
