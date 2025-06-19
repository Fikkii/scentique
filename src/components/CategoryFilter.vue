<template>
  <div class="overflow-x-auto scrollbar-hide py-2">
    <div class="flex gap-2 w-max px-1 sm:px-0">
      <!-- All button -->
      <button
        @click="selectCategory(null)"
        :class="[ 
          'px-4 py-1.5 text-sm rounded-full border',
          selected === null
            ? 'bg-purple-600 text-white border-purple-600'
            : 'bg-white text-gray-700 hover:bg-gray-100 border-gray-300'
        ]"
      >
        All
      </button>

      <!-- Category pills -->
      <button
        v-for="cat in categories"
        :key="cat"
        @click="selectCategory(cat)"
        :class="[ 
          'px-4 py-1.5 text-sm rounded-full border capitalize',
          selected === cat
            ? 'bg-purple-600 text-white border-purple-600'
            : 'bg-white text-gray-700 hover:bg-gray-100 border-gray-300'
        ]"
      >
        {{ cat }}
      </button>
    </div>
  </div>
</template>

<script setup>
import { defineProps, defineEmits, ref } from 'vue'

const props = defineProps({
  categories: {
    type: Array,
    default: () => []
  }
})

const emit = defineEmits(['filter'])
const selected = ref(null)

function selectCategory(cat) {
  selected.value = cat
  emit('filter', cat)
}
</script>

<style scoped>
.scrollbar-hide::-webkit-scrollbar {
  display: none;
}
.scrollbar-hide {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
</style>
