<template>
  <li class="todo-item">
    <div v-if="!isEditing" class="view">
      <input
        type="checkbox"
        :checked="todo.status === 'done'"
        @change="$emit('toggle', todo.id)"
      />
      <span :class="{ done: todo.status === 'done' }">
        <strong>{{ todo.title }}</strong> — {{ todo.description }}
        ({{ todo.priority }})
      </span>
      <time>📅 {{ formatDate(todo.createdAt) }}</time>

      <div class="actions">
        <button @click="isEditing = true">Edit</button>
        <button @click="$emit('remove', todo.id)">Delete</button>
      </div>
    </div>

    <div v-else class="edit">
      <input v-model="editTitle" />
      <input v-model="editDescription" />
      <select v-model="editPriority">
        <option value="low">low</option>
        <option value="medium">medium</option>
        <option value="high">high</option>
      </select>
      <button @click="save">aSave</button>
      <button @click="cancel">Cancel</button>
    </div>
  </li>
</template>

<script setup>
import { ref } from 'vue'

const props = defineProps({
  todo: { type: Object, required: true }
})
const emit = defineEmits(['toggle', 'remove', 'update'])

const isEditing = ref(false)
const editTitle = ref(props.todo.title)
const editDescription = ref(props.todo.description)
const editPriority = ref(props.todo.priority)

function save() {
  emit('update', {
    ...props.todo,
    title: editTitle.value,
    description: editDescription.value,
    priority: editPriority.value
  })
  isEditing.value = false
}

function cancel() {
  isEditing.value = false
  editTitle.value = props.todo.title
  editDescription.value = props.todo.description
  editPriority.value = props.todo.priority
}

function formatDate(iso) {
  return new Date(iso).toLocaleDateString()
}
</script>
