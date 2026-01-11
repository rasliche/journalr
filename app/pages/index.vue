<template>
    <main class="page">
        <div>
            <button v-if="!session?.data" @click="() => authClient.signIn.social({
                provider: 'github'
            })">
                Continue with GitHub
            </button>
            <div>
                <pre>{{ session.data }}</pre>
                <button v-if="session.data" @click="authClient.signOut()">
                    Sign out
                </button>
            </div>
        </div>
        
        <header class="header">
            <h1>Journalr</h1>
            <div>
                <button @click="showForm = !showForm" class="btn">
                    {{ showForm ? 'Cancel' : 'New Entry' }}
                </button>
            </div>
        </header>

        <section v-if="showForm" class="form">
            <input v-model="draft.title" placeholder="Title" class="input" />
            <textarea v-model="draft.content" placeholder="Write something..." class="textarea" />
            <div class="actions">
                <button @click="createEntry" :disabled="!draft.title" class="btn primary">Save</button>
            </div>
        </section>

        <section class="list">
            <p v-if="entries.length === 0" class="empty">No entries yet — create your first journal entry.</p>

            <ul v-else>
                <li v-for="entry in sortedEntries" :key="entry.id" class="entry">
                    <div class="meta">
                        <strong class="title">{{ entry.title }}</strong>
                        <time class="date">{{ formatDate(entry.createdAt) }}</time>
                    </div>
                    <p class="excerpt">{{ excerpt(entry.content) }}</p>
                </li>
            </ul>
        </section>
    </main>
</template>

<script setup>
import { ref, computed, onMounted, watch } from 'vue'
import { authClient } from '~/utils/auth-client'
const session = authClient.useSession()

const STORAGE_KEY = 'journalr.entries'

const entries = ref([])
const showForm = ref(false)
const draft = ref({ title: '', content: '' })

onMounted(() => {
    try {
        const raw = localStorage.getItem(STORAGE_KEY)
        entries.value = raw ? JSON.parse(raw) : []
    } catch {
        entries.value = []
    }
})

watch(entries, (val) => {
    try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(val))
    } catch {
        throw new Error('Failed to save entries to localStorage')
    }
}, { deep: true })

function createEntry() {
    if (!draft.value.title) return
    entries.value.push({
        id: Date.now().toString(),
        title: draft.value.title,
        content: draft.value.content || '',
        createdAt: new Date().toISOString()
    })
    draft.value.title = ''
    draft.value.content = ''
    showForm.value = false
}

const sortedEntries = computed(() =>
    [...entries.value].sort((a, b) => (b.createdAt > a.createdAt ? 1 : -1))
)

function excerpt(text, n = 140) {
    if (!text) return ''
    return text.length > n ? text.slice(0, n).trim() + '…' : text
}

function formatDate(iso) {
    try {
        return new Date(iso).toLocaleString()
    } catch {
        return iso
    }
}
</script>