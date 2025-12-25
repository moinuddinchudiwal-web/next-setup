This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

nextjs-setup-project/
├─ .next/ # Next.js build output
├─ .vscode/ # VSCode workspace settings
├─ node_modules/ # Node modules
├─ public/ # Static assets like images, icons, fonts
│ └─ ...
├─ src/ # Source code
│ ├─ app/ # Next.js App Router
│ │ ├─ layout.tsx # Root layout
│ │ ├─ page.tsx # Default landing page
│ │ ├─ global.css # Global styles & Tailwind config
│ │ ├─ dashboard/ # Protected dashboard pages
│ │ │ ├─ page.tsx
│ │ │ └─ ...
│ │ ├─ unauthorized.tsx # 401 Unauthorized page
│ │ ├─ not-found.tsx # 404 Page
│ │ └─ ...
│ │
│ ├─ components/ # Reusable UI components
│ │ ├─ ui/ # shadcn components
│ │ ├─ common/ # Common components
│ │ ├─ modals/
│ │ │ ├─ base-modal.tsx
│ │ │ └─ confirm-modal.tsx
│ │ └─ ...
│ │
│ ├─ config/ # App configuration files
│ │ ├─ env.ts # Environment variables
│ │ ├─ routes.ts # App routes
│ │ ├─ storage.ts # LocalStorage keys
│ │ ├─ cookies.ts # Cookie keys
│ │ ├─ statusCode.ts # HTTP status codes
│ │ └─ roles.ts # Role keys
│ │
│ ├─ hooks/ # Custom hooks
│ │ ├─ useDebounce.ts
│ │ ├─ useThrottle.ts
│ │ └─ ...
│ │
│ ├─ lib/ # Custom functions/utilities
│ │ ├─ utils.ts
│ │ └─ ...
│ │
│ ├─ store/ # Redux Toolkit store
│ │ ├─ index.ts # Store setup
│ │ ├─ baseQuery.ts # fetchBaseQuery
│ │ ├─ apiEndpoints.ts # API endpoints
│ │ ├─ http.ts # HTTP helpers
│ │ ├─ hooks.ts # Redux hooks
│ │ ├─ auth/ # Auth slice & API
│ │ │ ├─ authApi.ts
│ │ │ ├─ authSlice.ts
│ │ │ ├─ authTypes.ts
│ │ │ └─ authHooks.ts / index.ts
│ │ ├─ product/ # Product slice & API
│ │ │ ├─ productApi.ts
│ │ │ ├─ productSlice.ts
│ │ │ ├─ productTypes.ts
│ │ │ └─ productHooks.ts / index.ts
│ │ └─ ...
│ │
│ ├─ utils/ # Utility functions
│ │ ├─ localStorage.ts
│ │ ├─ cookies.ts
│ │ ├─ date.ts # Dayjs helpers
│ │ └─ ...
│ │
│ ├─ middleware.ts # Auth & role-based route middleware
│ └─ ...
│
├─ .env # Environment variables
├─ .gitignore
├─ components.json # Optional component config
├─ eslint.config.mjs
├─ package.json
├─ package-lock.json
├─ tsconfig.json
├─ README.md
└─ ...
