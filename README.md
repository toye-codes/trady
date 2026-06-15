# Trady

Trady is a frontend-only demo web app for book swapping, discovery, and buying. It is built with **Next.js 15**, **React 19**, **Tailwind CSS**, and **Framer Motion**. The app is designed to showcase a clean reader-focused marketplace experience with simulated user and seller dashboards.

> This repository does not include a backend. All listing, order, notification, and barter data is simulated using local JSON files and frontend demo pages.

## Features

- Landing page with product messaging, animated book showcase, and feature highlights.
- Authentication UI for **Login** and **Sign Up** that routes into dashboard pages.
- User dashboard supporting:
  - `/user/home` — popular and trending books overview
  - `/user/find-book` — search, filter, and sort books
  - `/user/barters` — browse book barter listings
  - `/user/barters/[barter]` — book barter detail page
  - `/user/orders` — order history with purchased and barter tabs
  - `/user/bookmarks` — saved books
  - `/user/notifications` — notifications panel
  - `/user/profile` — user profile management
  - `/user/settings` — account and notification settings
  - `/user/[bookId]` — individual book detail pages
- Seller dashboard supporting:
  - `/seller/home` — seller summary and key metrics
  - `/seller/books` — inventory and listings management UI
  - `/seller/add-book` — add-book form simulation
  - `/seller/orders` — seller order management table
  - `/seller/analytics` — seller performance metrics
  - `/seller/profile` — seller profile info
  - `/seller/settings` — seller settings and notifications
- Mobile-responsive sidebar navigation and header controls.
- Uses local `src/app/data/books.json` and `src/app/data/barterListing.json` for demo content.

## Project Structure

- `src/app/` — Next.js App Router pages and layouts
- `src/app/(auth)/` — auth layouts and login/sign-up pages
- `src/app/(dashboard)/user/` — user dashboard app routes
- `src/app/(dashboard)/seller/` — seller dashboard app routes
- `src/app/component/` — shared UI components and footer
- `src/app/component/global/` — global landing page components
- `src/app/data/` — local demo JSON data for books and barter listings
- `public/` — static image assets
- `next.config.mjs` — Next.js config with external image host allowlist

## Installation

1. Install dependencies:

```bash
npm install
```

2. Run the development server:

```bash
npm run dev
```

3. Open the app in your browser:

```text
http://localhost:3000
```

## How to Use

1. Open the app at `/` and explore the landing page.
2. Click **Login** or **Get Started** to open the auth screens.
3. Submit either auth form to navigate into the user dashboard.
4. Use sidebar links to explore book discovery, barters, orders, bookmarks, and notifications.
5. Switch to the seller dashboard by visiting `/seller/home` or clicking the seller CTA.

## Data Simulation

- The app is intentionally frontend-only.
- Book and barter content is loaded from local JSON files:
  - `src/app/data/books.json`
  - `src/app/data/barterListing.json`
- Order and notification content is mocked in component state.
- No real authentication or persistent backend state is implemented.

## Notes

- Image loading uses external domains configured in `next.config.mjs`.
- The app uses `slugify` to generate friendly detail-page links.
- Some pages are intentionally built as demo workflows to illustrate UI and navigation.

## Available Scripts

- `npm run dev` — run development server
- `npm run build` — build production app
- `npm run start` — serve the production build
- `npm run lint` — run ESLint

## Customization

To extend this app later:

- Add API routes and backend services for real book listings.
- Replace mock JSON data with a real database or third-party book API.
- Add real authentication and user session management.
- Convert order/bookmark state to persistent storage.

## License

This project is provided as a demo UI and does not include commercial backend systems.
