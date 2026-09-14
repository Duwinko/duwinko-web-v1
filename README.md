# Duwinko

Public website and staff dashboard for Duwinko Software Ltd.

## Stack

Next.js App Router, TypeScript, Tailwind CSS, daisyUI (custom `duwinko` theme).

## Scripts

```bash
npm install
cp .env.example .env.local
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). Staff login: [http://localhost:3000/dashboard/login](http://localhost:3000/dashboard/login).

Set `ADMIN_EMAIL`, `ADMIN_PASSWORD`, and `ADMIN_SESSION_SECRET` in `.env.local`. Contact form submissions are stored in `data/inquiries.json`.
