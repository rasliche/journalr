import { db } from '#shared/db/db'
import { promptTable } from '#shared/db/schema'
import { eq } from 'drizzle-orm'

export default eventHandler(async (event) => {
  const id = getRouterParam(event, 'id')
  const prompts = await db.select().from(promptTable).where(eq(promptTable.id, id))
  return prompts[0]
})
