# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- `npm install` - Install dependencies (required after updates)
- `npm run dev` - Start development server on http://localhost:3000
- `npm run build` - Build the application for production
- `npm run generate` - Generate static site
- `npm run preview` - Preview production build locally

## Dependencies

- **Nuxt 3.13.0** - Current stable version (was previously on 3.0.0-rc.13)
- **@nuxt/content 2.13.2** - For markdown content management
- **Sass 1.78.0** - SCSS preprocessing with modern @use syntax

## Architecture Overview

This is a **Nuxt 3 personal portfolio website** using the Nuxt Content module for markdown-based content management. The site serves as a personal blog and portfolio for Liam Champkin, showcasing articles, mixtapes, and personal information.

### Key Architecture Components

**Content Structure:**
- Uses `@nuxt/content` v2 for markdown-based content management
- Content organized in `/content/` directory with subdirectories for different content types:
  - `/content/notes/` - Blog articles/notes
  - `/content/mixtapes/` - Music mixtape content
  - `/content/about.md` - About page content

**Routing & Pages:**
- Dynamic routing using `[...slug].vue` catch-all routes for content pages
- Separate sections for notes and mixtapes with dedicated index pages
- Layout system with `layouts/articles.vue` for content listing pages

**Styling:**
- SCSS-based styling with main stylesheet at `~/assets/css/main.scss`
- CSS variables defined in `_variables.scss`
- Responsive grid system (12-column grid used in components)
- Dark theme support configured in Nuxt Content with multiple theme options

**Key Technical Details:**
- TypeScript configuration extends from `.nuxt/tsconfig.json`
- Syntax highlighting configured for code blocks with GitHub dark/light themes
- Global app configuration in `nuxt.config.ts` with SEO meta setup
- Uses Vue 3 Composition API (`<script setup>`)

### Content Management Workflow

Content is managed through markdown files in the `/content/` directory. Each content type has its own subdirectory and uses frontmatter for metadata like title, description, and color themes for article cards.

The `ContentList` and `ContentDoc` components handle content rendering and listing automatically based on the file structure.