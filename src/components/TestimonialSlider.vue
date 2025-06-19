<template>
  <section class="bg-white py-16">
    <div class="max-w-4xl mx-auto text-center px-4">
      <h2 class="text-3xl font-bold text-gray-800 mb-10">
        What Our Customers Say
      </h2>

      <div class="relative">
        <!-- Slide -->
        <div
          v-for="(review, index) in testimonials"
          :key="index"
          v-show="current === index"
          class="transition duration-500 ease-in-out"
        >
          <div class="bg-purple-50 p-6 rounded-xl shadow">
            <p class="text-lg text-gray-700 italic mb-4">
              “{{ review.quote }}”
            </p>
            <div class="flex flex-col items-center">
              <img
                :src="review.image"
                alt="avatar"
                class="w-16 h-16 rounded-full object-cover border-2 border-purple-500"
              />
              <p class="mt-2 font-semibold text-gray-800">{{ review.name }}</p>
              <span class="text-sm text-gray-500">{{ review.location }}</span>
            </div>
          </div>
        </div>

        <!-- Navigation -->
        <div class="mt-6 flex justify-center gap-4">
          <button
            v-for="(review, index) in testimonials"
            :key="'dot-' + index"
            class="w-3 h-3 rounded-full"
            :class="current === index ? 'bg-purple-600' : 'bg-gray-300'"
            @click="current = index"
          ></button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const testimonials = ref([
  {
    name: 'Amara E.',
    location: 'Lagos, Nigeria',
    quote: 'Absolutely love the scent! It lasts all day and I get compliments everywhere I go.',
    image: '/images/avatar1.jpg'
  },
  {
    name: 'Damilola S.',
    location: 'Abuja, Nigeria',
    quote: 'Great quality and fast delivery. I will definitely buy again!',
    image: '/images/avatar2.jpg'
  },
  {
    name: 'Grace T.',
    location: 'Port Harcourt',
    quote: 'The packaging was beautiful and the scent is divine.',
    image: '/images/avatar3.jpg'
  }
])

const current = ref(0)

onMounted(() => {
  setInterval(() => {
    current.value = (current.value + 1) % testimonials.value.length
  }, 7000) // auto-slide every 7s
})
</script>

