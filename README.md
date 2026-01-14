# Journalr - For aspirational journal writers

Written using [Nuxt](https://nuxt.com/docs/getting-started/introduction).

Stored with Postgres.

Secured with Better-Auth.

## Setup

Make sure to install dependencies:

```bash
# npm
npm install
```

## Development Server

Start your postgresql container with default credentials.

```bash
docker compose up -d
```

Run the migrations

```bash
npm run db:migrate
```

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev
```

## Production

Build the application for production:

```bash
# npm
npm run build
```

Locally preview production build:

```bash
# npm
npm run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.
