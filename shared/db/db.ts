// This import always runs in the context of nuxt, so the # shorthand works
import env from '#shared/env'
import { drizzle } from 'drizzle-orm/node-postgres'

export const db = drizzle(env.DATABASE_URL!);
