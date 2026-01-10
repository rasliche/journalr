// import { serverSupabaseClient } from '#supabase/server'

export default eventHandler(async (event) => {
  // const client = await serverSupabaseClient(event)

  // const { data } = await client.schema('promptr').from('prompts').select()
const data = [
  { id: 1, title: 'Prompt 1', content: 'This is the first prompt.' },
  { id: 2, title: 'Prompt 2', content: 'This is the second prompt.' },
  { id: 3, title: 'Prompt 3', content: 'This is the third prompt.' }
]
  return { prompts: data }
})
