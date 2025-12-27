<template>
  <div class="flex flex-col md:flex-row gap-4 mb-8">
    <!-- Search Bar -->
    <input
      v-model="searchQuery"
      type="text"
      placeholder="Cari nama resipi..."
      class="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-dodgeroll-gold-500"
      @input="handleSearch"
    />

    <!-- Filter Dropdown -->
    <select
      v-model="selectedOrigin"
      class="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-dodgeroll-gold-500"
      @change="handleFilter"
    >
      <option value="">Semua Asal</option>
      <option value="Malaysia">Malaysia</option>
      <option value="Indonesia">Indonesia</option>
      <option value="Singapore">Singapore</option>
      <!-- Add more origins as needed -->
    </select>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const searchQuery = ref('');
const selectedOrigin = ref('');

const emit = defineEmits<{
  search: [query: string];
  filter: [origin: string];
}>();

const handleSearch = () => {
  emit('search', searchQuery.value);
};

const handleFilter = () => {
  emit('filter', selectedOrigin.value);
};
</script>
