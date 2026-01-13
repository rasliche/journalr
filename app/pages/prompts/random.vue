<template>
  <div>
    Get a random prompt.   
    {{ prompt.content }} 
  </div>
</template>

<script lang="ts" setup>
    const prompt = await $fetch('/api/random')
    // const promptsStore = usePromptStore()
    // const prompts = await promptsStore.fetchRandomPrompt()
</script>
