import { db } from '#shared/db/db'
import { promptTable } from '#shared/db/schema/schema'

export default eventHandler(async (event) => {
  console.log(event)
  // const prompts = await db.insert().from(promptTable)
  return { message: 'Hello from prompts POST endpoint' }
})
