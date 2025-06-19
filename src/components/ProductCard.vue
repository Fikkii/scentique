<template>
  <div class="rounded shadow bg-white">
    <img :src="product.image" class="w-full h-48 object-cover rounded" />
    <div class="p-4">
      <div class="flex py-2 justify-between items: center">
        <h3 class="font-semibold text-gray-800">{{ product.name }}</h3>
        <p class="text-purple-600 font-bold">₦{{ product.price.toLocaleString() }}</p>
      </div>
      <div class="flex justify-between mt-3">
        <button
            @click="$emit('add-to-cart', product)"
            class="bg-purple-600 font-bold hover:bg-purple-700 text-white px-4 py-2 rounded text-sm"
            >Add to Cart</button>

        <button
            @click="$emit('view-details', product)"
            class="text-gray-600 text-lg hover:text-purple-600 underline"
            >More</button>
      </div>
    </div>
  </div>
</template>

<script setup>
  defineProps({ product: Object })
defineEmits(['add-to-cart', 'view-details'])
</script>
