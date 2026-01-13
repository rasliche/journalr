<template>
  <div>
    Get a random prompt.   
    {{ prompt?.content }}
    <h3>Options</h3>
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
