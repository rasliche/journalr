export const usePromptStore = defineStore('promptStore', {
  state: () => ({
    prompts: [] as Array<{ id: string; content: string }>,
  }),
  actions: {
    async fetchPrompts() {
      this.prompts = await $fetch('/api/prompts')
    },
    async addPrompt(content: string) {
      const response = await $fetch('/api/prompts', {
        method: 'POST',
        body: { content },
      })
      this.prompts.push(response.newPrompt[0])
    },
    async fetchRandomPrompt() {
      const response = await $fetch('/api/random')
      return response
    }
  },
})