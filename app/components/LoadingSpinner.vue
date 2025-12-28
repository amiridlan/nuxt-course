<script setup lang="ts">
// No props needed - component will be controlled by the plugin
</script>

<template>
  <div class="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
    <div class="flex flex-col items-center gap-4 bg-white rounded-lg p-8 shadow-2xl">
      <!-- Spinner -->
      <div class="relative w-16 h-16">
        <div class="absolute inset-0 border-4 border-primary-green/20 rounded-full"></div>
        <div class="absolute inset-0 border-4 border-primary-green border-t-transparent rounded-full animate-spin"></div>
      </div>
      
      <!-- Loading Text -->
      <p class="text-lg font-semibold text-primary-dark">Loading...</p>
    </div>
  </div>
</template>

<style scoped>
@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

.animate-spin {
  animation: spin 1s linear infinite;
}
</style>