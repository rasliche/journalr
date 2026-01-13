<template>
    <div>
        <PromptForm />
        <UPageSection class="list">
            <p v-if="promptStore.prompts.length === 0">No entries yet — create your first journal entry.</p>
            
            <div v-else>
                <div v-for="prompt in promptStore.prompts" :key="prompt.id">
                    <!-- <div class="meta">
                        <time class="date">{{ prompt.createdAt }}</time>
                    </div> -->
                    <ULink :to="`/prompts/${prompt.id}`">{{ prompt.content }}</ULink>
                </div>
            </div>
        </UPageSection>
        <DevOnly>
            <div>
                <h1>{{ websiteStore.name }}</h1>
                <p>{{ websiteStore.description }}</p>
            </div>
        </DevOnly>
    </div>
</template>

<script setup lang="ts">
    // const prompts = ref()
    // prompts.value = await $fetch('/api/prompts')

    const websiteStore = useWebsiteStore()
    const promptStore = usePromptStore()
    await callOnce(promptStore.fetchPrompts)

</script>