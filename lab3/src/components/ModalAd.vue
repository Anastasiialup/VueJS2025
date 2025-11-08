<template>
  <Teleport to="body">
    <transition name="fade">
      <div v-if="show" class="modal-overlay">
        <div class="modal">
          <slot></slot>
          <button @click="$emit('close')">Закрити</button>
        </div>
      </div>
    </transition>
  </Teleport>
</template>

<script setup>
defineProps(['show'])
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  top:0;
  left:0;
  width:100%;
  height:100%;
  background: rgba(0,0,0,0.5);
  display:flex;
  justify-content:center;
  align-items:center;
}

.modal {
  background:white;
  padding: 2rem;
  border-radius:8px;
  max-width:400px;
  width:90%;
}
</style>
