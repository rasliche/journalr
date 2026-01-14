import { db } from '#shared/db/db'
import { promptTable } from '#shared/db/schema'

export default eventHandler(async () => {

  const prompts = await db.select().from(promptTable)
  return prompts
})
