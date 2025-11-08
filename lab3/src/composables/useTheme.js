import { ref, onMounted } from 'vue'

export function useTheme() {
  const isDark = ref(false)

  onMounted(() => {
    const savedTheme = localStorage.getItem('theme') || 'light'
    document.documentElement.dataset.theme = savedTheme
    isDark.value = savedTheme === 'dark'
  })

  const toggleTheme = () => {
    isDark.value = !isDark.value
    const theme = isDark.value ? 'dark' : 'light'
    document.documentElement.dataset.theme = theme
    localStorage.setItem('theme', theme)
  }

  return { isDark, toggleTheme }
}
