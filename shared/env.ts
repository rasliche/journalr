import { z } from "zod"
// This is a type-safe environment file
// If something is defined here but missing in the .env file,
// the app will crash on startup. CJ from syntax has a utility to make pretty errors.
const EnvSchema = z.object({
    NODE_ENV: z.string(),
    BETTER_AUTH_SECRET: z.string(),
    BETTER_AUTH_URL: z.string(),
    DATABASE_URL: z.string(),
})

export type EnvSchema = z.infer<typeof EnvSchema>

export default EnvSchema.parse(process.env)