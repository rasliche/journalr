<template>
    <UForm :state="state" :schema="schema" @submit="onSubmit">
        <UFormField label="New Prompt">
            <UInput v-model="state.newPromptContent" />
        </UFormField>
        <UButton type="submit">Add Prompt</UButton>
    </UForm>
</template>

<script lang="ts" setup>
    import * as z from 'zod'
    import type { FormSubmitEvent } from '@nuxt/ui'
    
    const schema = z.object({
        newPromptContent: z.string().min(1, 'Prompt content is required')
    })
    type Schema = z.output<typeof schema>

        
    const state = reactive<Partial<Schema>>({
        newPromptContent: undefined
    })

    
    const promptStore = usePromptStore()
    const toast = useToast()
    
    function onSubmit(event: FormSubmitEvent<Schema>) {
        try {
            promptStore.addPrompt(event.data.newPromptContent)
            // const response = await $fetch('/api/prompts', {
            //     method: 'POST',
            //     body: {
            //         content: event.data.newPromptContent
            //     }
            // })
            // prompts.value.push(response.newPrompt[0])
            toast.add({ title: 'Success', description: 'Your prompt has been submitted!', color: 'success' })
         } catch (error) {
            toast.add({ title: 'Oops?', description: 'Failed to add prompt.', color: 'info' })
        }
    }
</script>