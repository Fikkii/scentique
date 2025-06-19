<template>
  <header class="bg-white shadow-sm fixed top-0 left-0 w-full z-50">

    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
      <!-- Logo -->
      <div class="flex items-center gap-2">
        <h1 class="text-lg font-bold text-gray-800">Scen<span class="text-purple-500">tique</span></h1>
      </div>

      <!-- Nav (desktop) -->
      <nav class="hidden md:flex items-center gap-6 text-sm text-gray-700">
        <RouterLink :to="{ name: 'About' }" href="#" class="hover:text-purple-600">About</RouterLink>
        <RouterLink :to="{ name: 'Contact' }" href="#" class="hover:text-purple-600">Contact</RouterLink>
      </nav>

      <!-- Actions -->
      <div class="flex items-center gap-4">
        <!-- Search (optional) -->
        <div class="hidden sm:block">
          <input
            type="text"
            placeholder="Search perfumes..."
            @input="$emit('search', $event.target.value)"
            class="px-3 py-1.5 border rounded-lg text-sm border-gray-300 focus:ring-purple-500 focus:border-purple-500"
          />
        </div>

        <!-- Cart -->
        <button @click="$emit('open-cart')" class="relative">
          <i class="ri-shopping-bag-3-line text-xl text-gray-700 hover:text-purple-600"></i>
          <span
            v-if="cartCount > 0"
            class="absolute -top-1.5 -right-1.5 bg-purple-600 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full"
          >
            {{ cartCount }}
          </span>
        </button>

        <!-- Mobile menu icon -->
        <button @click="showMenu = !showMenu" class="md:hidden">
          <i class="ri-menu-line text-xl text-gray-700"></i>
        </button>
      </div>
    </div>

    <!-- Mobile nav -->
    <div v-if="showMenu" class="md:hidden bg-white border-t">
      <nav class="flex flex-col w-full items-stretch px-20 py-10 gap-8 text-sm text-gray-700">
        <RouterLink :to="{ name: 'About' }" href="#" class="hover:text-purple-600 border-b">About</RouterLink>
        <RouterLink :to="{ name: 'Contact' }" href="#" class="hover:text-purple-600">Contact</RouterLink>
      </nav>
    </div>
  </header>
</template>

<script setup>
import { ref } from 'vue'

defineProps({
  cartCount: {
    type: Number,
    default: 0
  }
})

const showMenu = ref(false)
</script>

