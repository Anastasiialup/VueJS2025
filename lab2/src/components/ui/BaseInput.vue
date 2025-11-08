<template>
  <div>
    <label>{{ label }}</label>
    <input :type="type" v-model="localValue" />
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'

const props = defineProps({
  modelValue: String,
  label: String,
  type: { type: String, default: 'text' }
})
const emit = defineEmits(['update:modelValue'])

const localValue = ref(props.modelValue)

// слідкуємо за локальним input і відправляємо update
watch(localValue, (val) => emit('update:modelValue', val))

// слідкуємо за пропсом, щоб синхронізувати, якщо він зміниться ззовні
watch(() => props.modelValue, (val) => { localValue.value = val })
</script>
