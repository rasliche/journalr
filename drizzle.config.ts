// You cannot use the shorthand import here because
// this file is executed by the drizzle-kit CLI, not in the context of nuxt
import env from './shared/env'
import { defineConfig } from 'drizzle-kit';

export default defineConfig({
  out: './shared/db/migrations',
  schema: './shared/db/schema/index.ts',
  dialect: 'postgresql',
  dbCredentials: {
    url: env.DATABASE_URL!,
  },
});