<template>
        <UPageSection class="list">
            <p v-if="prompts.length === 0">No entries yet — create your first journal entry.</p>

            <ul v-else>
                <li v-for="prompt in prompts" :key="prompt.id">
                    <!-- <div class="meta">
                        <time class="date">{{ prompt.createdAt }}</time>
                    </div> -->
                    <p>{{ prompt.content }}</p>
                </li>
            </ul>
        </UPageSection>
</template>

<script setup>
    const prompts = await $fetch('/api/prompts')
    console.log(prompts)
</script>