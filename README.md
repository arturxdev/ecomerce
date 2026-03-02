# Festejos Aurora Ecommerce

Next.js + PostgreSQL + Prisma base architecture for the Festejos Aurora rental ecommerce.

## Requirements

- Node.js 20+
- Docker (recommended for local PostgreSQL)

## Environment Variables

Copy `.env.example` to `.env`:

```bash
cp .env.example .env
```

Prisma 7 reads the datasource URL from `prisma.config.ts`.

## Local PostgreSQL with Docker

```bash
docker compose up -d
```

This starts PostgreSQL at `localhost:5432` with:
- user: `postgres`
- password: `postgres`
- database: `festejos_aurora`

## Prisma Commands

Generate Prisma client:

```bash
npm run prisma:generate
```

Create/apply migrations in local development:

```bash
npm run prisma:migrate -- --name init
```

Run seed data:

```bash
npm run prisma:seed
```

Open Prisma Studio:

```bash
npm run prisma:studio
```

## Start App

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build Check

```bash
npm run build
```

## VPS/Hostinger Notes

- Keep `DATABASE_URL` pointed to managed/self-hosted PostgreSQL.
- Run migrations during deploy (`npm run prisma:migrate:deploy`).
- Reuse the same Prisma schema and migration history for all environments.
