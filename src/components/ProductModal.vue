<template>
  <transition name="fade">
    <div v-if="visible" class="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div class="bg-white w-full max-w-4xl m-5 rounded-lg overflow-y-auto max-h-[90vh] shadow-xl p-6 relative">
        <!-- Close -->
        <button @click="$emit('close')" class="absolute top-3 right-4 text-gray-600 hover:text-red-500 text-xl">
          &times;
        </button>

        <!-- Product Details -->
        <div class="grid md:grid-cols-2 gap-6">
          <!-- Image Gallery -->
          <div>
            <img :src="product.image" alt="" class="w-full h-72 object-cover rounded-lg" />
            <div class="mt-3 flex gap-2 overflow-x-auto scrollbar-hide">
              <img
                v-for="(img, idx) in product.gallery"
                :key="idx"
                :src="img"
                @click="product.image = img"
                class="w-14 h-14 object-cover rounded border cursor-pointer hover:ring-2 ring-purple-500"
              />
            </div>
          </div>

          <!-- Info -->
          <div>
            <h2 class="text-2xl font-bold">{{ product.name }}</h2>
            <p class="text-gray-500 capitalize">{{ product.category }}</p>
            <p class="mt-4 text-purple-600 text-xl font-semibold">
              ₦{{ product.price.toLocaleString() }}
            </p>

            <div class="mt-4 space-y-1 text-sm text-gray-700">
              <div><strong>Top Notes:</strong> {{ product.notes.top }}</div>
              <div><strong>Middle Notes:</strong> {{ product.notes.middle }}</div>
              <div><strong>Base Notes:</strong> {{ product.notes.base }}</div>
            </div>

            <div class="mt-4 flex items-center gap-3">
              <label class="text-sm font-medium text-gray-700">Qty</label>
              <input
                v-model.number="qty"
                type="number"
                min="1"
                class="w-16 px-3 py-1 rounded border focus:border-purple-500"
              />
            </div>

            <div class="mt-6 flex gap-4">
              <button
                @click="addToCart"
                class="bg-purple-600 hover:bg-purple-700 text-white px-5 py-2 rounded-md text-sm font-medium"
              >
                Add to Cart
              </button>
              <button @click="$emit('close')"
                class="bg-gray-200 hover:bg-gray-300 text-gray-800 px-5 py-2 rounded-md text-sm font-medium"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script setup>
import { ref } from 'vue'

const props = defineProps({
  product: Object,
  visible: Boolean
})
const emit = defineEmits(['close', 'add'])

const qty = ref(1)

function addToCart() {
  emit('add', { ...props.product, qty: qty.value })
  emit('close') // 👈 close modal after adding to cart
}
</script>

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
.scrollbar-hide::-webkit-scrollbar {
  display: none;
}
.scrollbar-hide {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
</style>

