<template>
  <div>
    Get a random prompt.   
    <p class="text-xl">{{ prompt?.content }}</p>
    <p>Options</p>
    <ul>
      <li>Upvote</li>
      <li>Respond</li>
      <li>Downvote</li>
    </ul>
  </div>
</template>

<script lang="ts" setup>
    const { data: prompt } = await useFetch('/api/random')
    // const promptsStore = usePromptStore()
    // const prompts = await promptsStore.fetchRandomPrompt()
</script>
