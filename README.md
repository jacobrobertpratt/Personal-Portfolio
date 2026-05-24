Example Layout Reference:

project/
├─ public/                 # static files served directly
│  ├─ images/
│  ├─ icons/
│  └─ fonts/
├─ src/
│  ├─ app/                 # app entry, routing, layouts, pages
│  │  ├─ layout/
│  │  ├─ routes/
│  │  └─ providers/
│  ├─ features/            # feature-based modules
│  │  ├─ auth/
│  │  │  ├─ components/
│  │  │  ├─ pages/
│  │  │  ├─ hooks/
│  │  │  ├─ services/
│  │  │  ├─ utils/
│  │  │  └─ types.ts
│  │  ├─ blog/
│  │  └─ dashboard/
│  ├─ components/          # reusable global UI components
│  │  ├─ ui/
│  │  ├─ forms/
│  │  └─ layout/
│  ├─ services/            # shared API clients, external integrations
│  ├─ hooks/               # shared hooks
│  ├─ lib/                 # helpers, config wrappers, utilities
│  ├─ styles/              # global styles, tokens, themes
│  ├─ types/               # shared TypeScript types/interfaces
│  ├─ constants/           # app-wide constants
│  └─ utils/               # generic utility functions
├─ tests/
│  ├─ unit/
│  ├─ integration/
│  └─ e2e/
├─ docs/                   # architecture notes, conventions
├─ scripts/                # build, deploy, maintenance scripts
├─ .env
├─ .env.example
├─ package.json
└─ README.md