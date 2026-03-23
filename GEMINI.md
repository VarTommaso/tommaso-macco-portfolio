# Tommaso Macco Portfolio - GEMINI Context

This repository contains the source code for Tommaso Macco's personal portfolio, built with a modern, high-performance web stack.

## Project Overview

- **Purpose:** Personal portfolio and showcase.
- **Main Technologies:**
    - **Framework:** [Next.js 16](https://nextjs.org/) (App Router, Turbopack).
    - **Language:** [TypeScript](https://www.typescriptlang.org/).
    - **Styling:** [Tailwind CSS 4](https://tailwindcss.com/) with PostCSS.
    - **UI Components:** [Radix UI](https://www.radix-ui.com/) & [shadcn/ui](https://ui.shadcn.com/).
    - **Animations:** [Framer Motion](https://www.framer.com/motion/).
    - **Smooth Scrolling:** [Lenis](https://lenis.darkroom.engineering/).
    - **Icons:** [Lucide React](https://lucide.dev/).
    - **Theming:** [next-themes](https://github.com/pacocoursey/next-themes).

## Architecture

- **App Router:** Uses the Next.js App Router with route groups (e.g., `app/(website)`).
- **Components:**
    - `components/ui/`: Atomic UI components managed via shadcn/ui.
    - `components/`: Higher-level components like `Header`, `Footer`, and `SmoothScroll`.
- **Typography:**
    - **Body:** [Manrope](https://fonts.google.com/specimen/Manrope) (`--font-body`).
    - **Display:** [Space Grotesk](https://fonts.google.com/specimen/Space+Grotesk) (`--font-display`).
- **Styling Strategy:** Tailwind CSS 4 with an inline theme defined in `app/globals.css`. The project uses a dark-themed "Void" aesthetic with neon accents (Cyan/Purple).

## Building and Running

| Command | Description |
| :--- | :--- |
| `npm run dev` | Starts the development server with Turbopack enabled. |
| `npm run build` | Compiles the application for production deployment. |
| `npm run start` | Boots the production server after building. |
| `npm run lint` | Runs ESLint to identify and fix code quality issues. |
| `npm run format` | Formats the codebase using Prettier with Tailwind plugin. |
| `npm run typecheck`| Executes the TypeScript compiler to verify type safety. |

## Development Conventions

- **Component Installation:** Use `npx shadcn@latest add <component-name>` to add new UI primitives.
- **Class Merging:** Always use the `cn()` utility from `@/lib/utils` when conditionally joining Tailwind classes.
- **Theming:** The project is configured as dark-by-default. Follow the CSS variables defined in `globals.css` for consistent coloring.
- **Smooth Scrolling:** The `SmoothScroll` component (using Lenis) wraps the main layout in `app/(website)/layout.tsx`.
- **Animations:** Prefer Framer Motion for complex transitions and Lucide for iconography.
- **Linting & Formatting:** Adhere to the rules defined in `eslint.config.mjs` and `.prettierrc`.

## Z-Index Architecture

To maintain a consistent visual hierarchy and prevent overlapping issues, the project follows this z-index mapping:

- **`z-[10000]`**: Top-most interactive elements (e.g., Close buttons on full-screen overlays).
- **`z-[9999]`**: Full-screen Modals and Overlays (e.g., `ProjectOverlay`).
- **`z-50`**: Global floating UI (e.g., `Header`, `Select` dropdowns, `Dialog`).
- **`z-40`**: Mobile menu background and secondary overlays.
- **`z-30`**: Popovers and Tooltips.
- **`z-20`**: Floating decorative elements that should sit above content (use sparingly).
- **`z-10`**: Main foreground content (e.g., text, cards, containers inside sections).
- **`z-0` / Default**: Normal block flow and primary interactive backgrounds (e.g., `BlobContainer` wrapper).
- **`-z-10`**: Section backgrounds, localized decorative elements (e.g., static background blobs).
- **`-z-20`**: Deep backgrounds (e.g., Noise layers, massive text watermark).
