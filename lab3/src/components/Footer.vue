<template>
  <footer>
    <p>© 2025 Новини Online. Усі права захищені.</p>
    <nav class="footer-nav">
      <router-link to="/">Головна</router-link>
      <router-link to="/about">Про нас</router-link>
    </nav>
  </footer>
</template>

<style scoped>
footer {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem 2rem;
  border-top: 1px solid #ccc;
}

.footer-nav a {
  margin: 0 0.5rem;
}
</style>
