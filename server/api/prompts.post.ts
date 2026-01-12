import { db } from '#shared/db/db'
import { promptTable } from '#shared/db/schema/schema'

export default eventHandler(async (event) => {
  const body = await readBody(event)
  const newPrompt = await db.insert(promptTable).values({content: body.content}).returning()
  return { newPrompt }
})
