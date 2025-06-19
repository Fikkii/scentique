<template>
  <div class="my-4">
    <input v-model="query" @input="$emit('search', query)" placeholder="🔍 Search perfumes..." class="border rounded px-4 py-2 w-full shadow-sm" />
  </div>
</template>

<script setup>
import { ref } from 'vue'
const query = ref('')
</script>

