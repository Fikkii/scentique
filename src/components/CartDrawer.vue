<template>
  <transition name="slide">
    <aside
      class="fixed top-0 right-0 w-full sm:w-[400px] bg-white shadow-2xl h-full z-50 flex flex-col"
    >
      <!-- Header -->
      <div class="flex items-center justify-between p-4 border-b">
        <h2 class="text-xl font-bold"><i class="ri-shopping-cart-line"></i> Your Cart</h2>
        <button
          @click="$emit('close')"
          class="text-gray-500 hover:text-red-600 text-2xl"
          title="Close Cart"
        >
          &times;
        </button>
      </div>

      <!-- Empty Cart -->
      <div v-if="cart.length === 0" class="flex-1 flex items-center justify-center text-gray-500">
        Your cart is empty.
      </div>

      <!-- Cart Items -->
      <div v-else class="flex-1 overflow-y-auto p-4 space-y-4">
        <div
          v-for="item in cart"
          :key="item.id"
          class="flex items-start gap-4 border-b pb-4"
        >
          <img
            :src="item.image"
            alt="cart image"
            class="w-16 h-16 object-cover rounded-md border"
          />
          <div class="flex-1">
            <h3 class="font-semibold text-sm sm:text-base">{{ item.name }}</h3>
            <p class="text-sm text-gray-600">₦{{ item.price.toLocaleString() }} each</p>
            <div class="flex items-center mt-2 gap-2">
              <button
                @click="$emit('remove', item.id)"
                class="px-2 py-0.5 text-sm bg-red-100 hover:bg-red-200 text-red-600 rounded"
                title="Remove one"
              >−</button>
              <span class="px-2 text-sm font-semibold">{{ item.qty }}</span>
              <button
                @click="$emit('add', item.id)"
                class="px-2 py-0.5 text-sm bg-green-100 hover:bg-green-200 text-green-600 rounded"
                title="Add one"
              >+</button>
            </div>
            <p class="mt-1 text-sm font-semibold text-gray-800">
              ₦{{ (item.price * item.qty).toLocaleString() }}
            </p>
          </div>
        </div>

        <!-- Email -->
        <div class="mt-4">
          <label class="text-sm text-gray-700 block mb-1">Email for Paystack</label>
          <input
            v-model="email"
            type="email"
            placeholder="you@example.com"
            class="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring focus:border-purple-500 text-sm"
          />
        </div>
      </div>

      <!-- Bottom Summary and Checkout -->
      <div
        class="border-t p-4 bg-white sticky bottom-0 w-full flex flex-col gap-2"
      >
        <div class="flex justify-between text-lg font-bold text-gray-800">
          <span>Total:</span>
          <span>₦{{ total.toLocaleString() }}</span>
        </div>
        <button
          @click="checkout"
          class="mt-2 w-full bg-purple-600 hover:bg-purple-700 text-white py-2 rounded-md text-sm font-medium disabled:opacity-50"
          :disabled="!email || cart.length === 0"
        >
          Proceed to Checkout
        </button>
      </div>
    </aside>
  </transition>
</template>

<script setup>
import { computed, ref } from 'vue'

const props = defineProps(['cart'])
const emit = defineEmits(['checkout', 'remove', 'add', 'close'])

const email = ref('')

const total = computed(() =>
  props.cart.reduce((sum, item) => sum + item.price * item.qty, 0)
)

function checkout() {
  emit('checkout', email.value)
}
</script>

<style scoped>
.slide-enter-active,
.slide-leave-active {
  transition: transform 0.3s ease;
}
.slide-enter-from {
  transform: translateX(100%);
}
.slide-leave-to {
  transform: translateX(100%);
}
</style>

