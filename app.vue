<template>
  <div>
    <NuxtRouteAnnouncer />
    <header>
      New Prompt: 
      <UInput></UInput>
    </header>
    <section class="w-5/6 text-center">
      <article v-for="prompt in prompts" :key="prompt.id">
        <button>upvote</button>
        <button>downvote</button>
        {{ prompt.prompt_text }}
      </article>
    </section>
    <NuxtPage />
  </div>
</template>


<script setup>
  const supabase = useSupabaseClient()
  const prompts = ref([])

  async function getPrompts() {
    const { data } = await supabase.from('prompts').select()
    prompts.value = data
  }

  onMounted(() => {
    getPrompts()
  })
</script>
