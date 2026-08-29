# Bitoom Consulting — portfolio website

A first client-facing website for Bitoom Consulting, positioned around applied AI, computer vision, machine vision and production ML.

## Run locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Content edits

Most website copy lives in `data/site.ts`:
- brand / founder links
- future business email
- services
- projects
- experience
- notes / blog content

## Before launch

1. Register and confirm the final domain.
2. Replace `hello@bitoomconsulting.com` only after the mailbox exists.
3. Decide whether the site should use a founder portrait; v1 is intentionally brand-first.
4. Review employer/client project descriptions for confidentiality before publishing.
5. Add a real contact form (Formspree, Resend, or another endpoint) or link a booking page.
6. Add analytics only if wanted.

## Deployment

The simplest path is GitHub → Vercel. Import this project into Vercel, then attach the custom domain.
