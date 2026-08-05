# Engr. Ojkeh — Portfolio

Personal portfolio website for Engr. Ojkeh — Software Engineer, Full Stack Developer, and Technology Entrepreneur. Built with **Next.js (App Router)**, **React 19**, **TypeScript**, and **Tailwind CSS v4**.

## Features

- Responsive, animated, single-page portfolio with sections for Hero, About, Projects, Experience, Services, Tech Stack, Why Work With Me, Resume, and Contact.
- **Light / dark theme toggle** powered by `next-themes`, with system preference detection.
- **Contact form** backed by a Server Action that validates input with **Zod** and delivers email via **Resend**.
- **Rate limiting** on the contact form to reduce spam.
- Accessibility-minded markup (ARIA labels, keyboard-focusable controls, semantic landmarks).
- SEO metadata, Open Graph, Twitter cards, `robots.txt`, and `sitemap.xml`.

## Tech Stack

| Purpose      | Tools |
| ------------ | ----- |
| Framework    | Next.js 16 (App Router), React 19 |
| Language     | TypeScript |
| Styling      | Tailwind CSS v4, CSS variables |
| Animation    | Framer Motion |
| Icons        | lucide-react |
| Forms        | react-hook-form |
| Validation   | Zod |
| Email        | Resend |
| Theming      | next-themes |

## Getting Started

### Prerequisites

- Node.js 20+
- npm

### Installation

```bash
# 1. Install dependencies
npm install

# 2. Copy the environment template and fill in real values
cp .env.example .env
```

See [Environment Variables](#environment-variables) for the required values.

### Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Scripts

| Command          | Description                  |
| ---------------- | ---------------------------- |
| `npm run dev`    | Start the dev server         |
| `npm run build`  | Create a production build    |
| `npm run start`  | Serve the production build   |
| `npm run lint`   | Run ESLint                   |

## Environment Variables

Create a `.env` file at the project root with the following variables (see `.env.example`):

| Variable                 | Description                                                            |
| ------------------------ | ---------------------------------------------------------------------- |
| `RESEND_API_KEY`         | Resend API key. Create one at <https://resend.com/api-keys>.           |
| `CONTACT_RECIPIENT_EMAIL`| The email address that receives contact form submissions.              |
| `RESEND_FROM_EMAIL`      | Verified sender address. Must be an approved domain in your Resend account. |

> **Security:** `.env` is git-ignored and must never be committed. If a key is ever
> exposed (committed, shared, or pasted into chat), rotate it in the Resend dashboard.

## Project Structure

```
src/
├── app/
│   ├── actions/contact.ts      # Server Action: zod validation + Resend email + rate limit
│   ├── globals.css             # Tailwind entry, theme tokens (light/dark CSS variables)
│   ├── layout.tsx              # Root layout: fonts, metadata, ThemeProvider
│   ├── page.tsx                # Home page composition
│   ├── robots.ts               # robots.txt
│   └── sitemap.ts              # sitemap.xml
├── components/
│   ├── layout/                 # Navbar, Footer, MobileMenu
│   ├── sections/               # Hero, About, Projects, Experience, Services, ...
│   ├── shared/                 # AnimatedSection, AvailabilityIndicator
│   └── ui/                     # Button, ThemeToggle, ProjectCard, TechBadge, ...
├── data/                       # Content: projects, experience, services, socials, ...
├── lib/                        # Utils and constants
└── types/                      # Shared TypeScript interfaces
```

## How the Contact Form Works

1. `Contact.tsx` (client) collects the form and calls `contactAction`.
2. `contactAction` (server) validates the payload against a **Zod** schema.
3. The request is rate-limited per client IP.
4. The validated payload is sent through the **Resend** API to the configured recipient.
5. The client shows a success or error state based on the returned result.

The Resend API key lives only in the server action and is never exposed to the browser.

## Notes for Future Changes

- **Content** lives in `src/data/*` — edit those files to update projects, experience, services, socials, and personal details without touching components.
- **Theme tokens** are defined as CSS variables in `src/app/globals.css` (`:root` for light, `.dark` for dark). Add new color tokens there and they become Tailwind utilities (e.g. `bg-surface`, `text-muted`).
- **Rate limiting** is in-memory and resets on serverless instance recycling. For strict production limits, swap the `Map` in `contact.ts` for a durable store such as Redis or Upstash.

## Deployment

Deploy on [Vercel](https://vercel.com/new) (recommended) or your platform of choice. Configure the environment variables in the deployment dashboard — do not rely on a committed `.env`.
