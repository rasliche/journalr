<template>
    <div>
        <UForm :state="state" :schema="schema" @submit="onSubmit">
            <UFormField label="New Prompt">
                <UInput v-model="state.newPromptContent" />
            </UFormField>
            <UButton type="submit">Add Prompt</UButton>
        </UForm>

        <UPageSection class="list">
            <p v-if="prompts.length === 0">No entries yet — create your first journal entry.</p>
            
            <div v-else>
                <div v-for="prompt in prompts" :key="prompt.id">
                    <!-- <div class="meta">
                        <time class="date">{{ prompt.createdAt }}</time>
                    </div> -->
                    <p>{{ prompt.content }}</p>
                </div>
            </div>
        </UPageSection>
    </div>
</template>

<script setup lang="ts">
    import * as z from 'zod'
    import type { FormSubmitEvent } from '@nuxt/ui'

    const schema = z.object({
        newPromptContent: z.string().min(1, 'Prompt content is required')
    })

    type Schema = z.output<typeof schema>

    const state = reactive<Partial<Schema>>({
        newPromptContent: undefined
    })

    const toast = useToast()
    async function onSubmit(event: FormSubmitEvent<Schema>) {
        try {
            const response = await $fetch('/api/prompts', {
                method: 'POST',
                body: {
                    content: event.data.newPromptContent
                }
            })
            prompts.value.push(response.newPrompt[0])
            toast.add({ title: 'Success', description: 'Your prompt has been submitted!', color: 'success' })
         } catch (error) {
            toast.add({ title: 'Oops?', description: 'Failed to add prompt.', color: 'info' })
        }
    }

    const prompts = ref()
    prompts.value = await $fetch('/api/prompts')


    // const handleFormSubmit = async () => {
    //     try {
    //         const response = await $fetch('/api/prompts', {
    //             method: 'POST',
    //             body: {
    //                 content: newPromptContent.value
    //             }
    //         })
    //         console.log('Prompt added:', response)
    //     } catch (error) {
    //         console.error('Error adding prompt:', error)
    //     }
    // }
</script>