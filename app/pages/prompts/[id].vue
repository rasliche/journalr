<template>
  <div>
    <p>View a specific prompt.</p>
    <p class="text-xl">{{ prompt?.content }}</p>
    <p>Options</p>
    <ul>
      <li>Upvote</li>
      <li>Respond</li>
      <li>Downvote</li>
    </ul>
    Prompt ID: {{  useRoute().params.id }}
  </div>
</template>

<script lang="ts" setup>
    const route = useRoute()
    const { data: prompt } = await useFetch(`/api/prompts/${route.params.id}`)
</script>
