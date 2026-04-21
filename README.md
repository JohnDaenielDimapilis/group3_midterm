# group3_midterm

A professional React midterm project built with Vite, Redux Toolkit, RTK Query, and React Router v6. The app fetches post data from the free [JSONPlaceholder](https://jsonplaceholder.typicode.com/) API, supports search and pagination, and includes a detail page for individual posts.

## Features

- RTK Query API service using `createApi`, `fetchBaseQuery`, and generated hooks
- List endpoint: `GET /posts`
- Single item endpoint: `GET /posts/:id`
- Case-insensitive real-time search
- Client-side pagination with Previous and Next controls
- React Router v6 pages for home and item details
- Loading, error, and empty-result states
- Responsive card-based UI
- Vercel-ready routing configuration via `vercel.json`

## Tech Stack

- React + Vite
- Redux Toolkit
- RTK Query
- React Router v6
- CSS

## Getting Started

```bash
npm install
npm run dev
```

## Build for Production

```bash
npm run build
```

## Deploy to Vercel

1. Push the repository to GitHub.
2. Import the project into Vercel.
3. Keep the default Vite build settings:
   - Build command: `npm run build`
   - Output directory: `dist`
4. Deploy the project.
5. The included `vercel.json` rewrite keeps React Router routes working on refresh.
