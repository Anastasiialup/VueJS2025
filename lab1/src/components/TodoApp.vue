<template>
  <section class="card">
    <h3 class="form-title">Add Task✏️</h3>
    <form class="add" @submit.prevent="addTask">
      <input v-model.trim="newTitle" placeholder="Title *" required />
      <input v-model.trim="newDescription" placeholder="Description" />
      <select v-model="newPriority">
        <option value="low">low</option>
        <option value="medium">medium</option>
        <option value="high">high</option>
      </select>
      <button type="submit">Add</button>
    </form>

    <details class="filters" open>
      <summary>Filters 🔍</summary>
      <div class="filters-grid">
        <input v-model.trim="filters.text" placeholder="Search in title/description" />
        <select v-model="filters.status">
          <option value="all">all</option>
          <option value="active">active</option>
          <option value="done">done</option>
        </select>
        <select v-model="filters.priority">
          <option value="all">all</option>
          <option value="low">low</option>
          <option value="medium">medium</option>
          <option value="high">high</option>
        </select>
        <div class="date-range">
          <VueDatePicker v-model="filters.createdFrom" placeholder="Created from" />
          <VueDatePicker v-model="filters.createdTo" placeholder="Created to" />
        </div>
        <button type="button" @click="resetFilters">Reset</button>
      </div>
    </details>

    <div class="stats">
      <span>Total: {{ total }}</span>
      <span>Active: {{ activeCount }}</span>
      <span>Completed: {{ completedCount }}</span>
    </div>

    <ul class="list" v-if="paged.length">
      <TodoItem
        v-for="t in paged"
        :key="t.id"
        :todo="t"
        @toggle="toggleStatus"
        @remove="removeTask"
        @update="updateTask"
      />
    </ul>
    <p v-else class="empty">No tasks yet</p>

    <Pagination :total="filtered.length" v-model:page="page" :page-size="pageSize" />
  </section>
</template>

<script setup>
import { ref, reactive, computed, watch } from 'vue'
import TodoItem from './TodoItem.vue'
import Pagination from './Pagination.vue'
import VueDatePicker from '@vuepic/vue-datepicker'
import '@vuepic/vue-datepicker/dist/main.css'

const tasks = ref(load())
const newTitle = ref('')
const newDescription = ref('')
const newPriority = ref('low')

const filters = reactive({
  text: '',
  status: 'all',
  priority: 'all',
  createdFrom: null,
  createdTo: null,
})

const page = ref(1)
const pageSize = 5

const total = computed(() => tasks.value.length)
const activeCount = computed(() => tasks.value.filter((t) => t.status === 'active').length)
const completedCount = computed(() => tasks.value.filter((t) => t.status === 'done').length)

const filtered = computed(() => {
  const text = filters.text.toLowerCase()
  return tasks.value.filter((t) => {
    const matchesText =
      !text ||
      t.title.toLowerCase().includes(text) ||
      (t.description || '').toLowerCase().includes(text)
    const matchesStatus = filters.status === 'all' || t.status === filters.status
    const matchesPriority = filters.priority === 'all' || t.priority === filters.priority
    const created = new Date(t.createdAt)
    const fromOk = !filters.createdFrom || created >= startOfDay(filters.createdFrom)
    const toOk = !filters.createdTo || created <= endOfDay(filters.createdTo)
    return matchesText && matchesStatus && matchesPriority && fromOk && toOk
  })
})

const totalPages = computed(() => Math.max(1, Math.ceil(filtered.value.length / pageSize)))
const paged = computed(() => {
  if (page.value > totalPages.value) page.value = totalPages.value
  const start = (page.value - 1) * pageSize
  return filtered.value.slice(start, start + pageSize)
})

// Persist to LocalStorage
watch(tasks, (val) => localStorage.setItem('tasks', JSON.stringify(val)), { deep: true })

function addTask() {
  const title = newTitle.value.trim()
  if (!title) return
  tasks.value.unshift({
    id: generateId(),
    title,
    description: newDescription.value.trim(),
    status: 'active',
    createdAt: new Date().toISOString(),
    priority: newPriority.value,
  })
  newTitle.value = ''
  newDescription.value = ''
  newPriority.value = 'low'
  page.value = 1
}

function toggleStatus(id) {
  const t = tasks.value.find((x) => x.id === id)
  if (t) t.status = t.status === 'active' ? 'done' : 'active'
}

function removeTask(id) {
  tasks.value = tasks.value.filter((x) => x.id !== id)
}

function updateTask(updated) {
  const idx = tasks.value.findIndex((x) => x.id === updated.id)
  if (idx !== -1) tasks.value[idx] = { ...updated }
}

function resetFilters() {
  filters.text = ''
  filters.status = 'all'
  filters.priority = 'all'
  filters.createdFrom = null
  filters.createdTo = null
  page.value = 1
}

function load() {
  try {
    const raw = localStorage.getItem('tasks')
    if (!raw) return []
    const parsed = JSON.parse(raw)
    return Array.isArray(parsed) ? parsed : []
  } catch {
    return []
  }
}
function generateId() {
  return `${Date.now()}_${Math.random().toString(36).slice(2, 8)}`
}
function startOfDay(d) {
  const x = new Date(d)
  x.setHours(0, 0, 0, 0)
  return x
}
function endOfDay(d) {
  const x = new Date(d)
  x.setHours(23, 59, 59, 999)
  return x
}
</script>
