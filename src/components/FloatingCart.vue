<template>
  <div
    v-if="count > 0"
    class="fixed bottom-4 right-4 w-[95%] sm:w-auto bg-white border border-gray-200 shadow-xl rounded-xl flex items-center justify-between p-3 sm:p-4 z-50 transition-all duration-300"
  >
    <!-- Product Images Preview -->
    <div class="flex gap-2 overflow-x-auto scrollbar-hide pr-2 max-w-[60%] sm:max-w-[220px]">
      <div
        v-for="item in cart"
        :key="item.id"
        class="relative shrink-0"
      >
        <img
          :src="item.image"
          :alt="item.name"
          class="w-10 h-10 object-cover rounded-full border-2 border-purple-500"
          title="x{{ item.qty }}"
        />
        <span
          class="absolute -top-1 -right-1 text-xs bg-purple-600 text-white rounded-full w-5 h-5 flex items-center justify-center font-semibold"
        >
          {{ item.qty }}
        </span>
      </div>
    </div>

    <!-- Cart Summary -->
    <div class="ml-3 flex-1">
      <p class="text-sm sm:text-base font-semibold text-gray-800">
        {{ count }} item{{ count > 1 ? 's' : '' }} • ₦{{ total.toLocaleString() }}
      </p>
      <p class="text-xs text-gray-500 hidden sm:block">Tap to open your cart</p>
    </div>

    <!-- View Cart CTA -->
    <button
      class="ml-4 bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 text-sm font-medium rounded-lg whitespace-nowrap"
      @click="$emit('open-cart')"
    >
      View Cart
    </button>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps(['cart'])

const count = computed(() => props.cart.reduce((sum, i) => sum + i.qty, 0))
const total = computed(() => props.cart.reduce((sum, i) => sum + i.price * i.qty, 0))
</script>

<style scoped>
/* Hide scroll bar for image preview */
.scrollbar-hide::-webkit-scrollbar {
  display: none;
}
.scrollbar-hide {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
</style>

