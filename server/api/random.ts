import { db } from '#shared/db/db'
import { promptTable } from '#shared/db/schema/schema'
import { sql } from 'drizzle-orm'

export default eventHandler(async () => {
  const prompts = await db.select().from(promptTable).orderBy(sql`RANDOM()`).limit(1)
  return prompts[0]
})
