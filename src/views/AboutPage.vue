<template>
  <section class="min-h-screen bg-white py-16 px-4">
    <div class="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
      <!-- Image Section -->
      <div>
        <img
          src="/images/hero-perfume.png"
          alt="Perfume Bottles"
          class="rounded-lg shadow-lg w-full h-auto object-cover"
        />
      </div>

      <!-- Text Section -->
      <div>
        <button @click="router.go(-1)" class="font-bold text-purple-500"><i class="ri-arrow-left-line"></i>Continue Shopping</button>
        <h1 class="text-4xl font-bold text-gray-800 mb-4">Our Story</h1>
        <p class="text-gray-600 leading-relaxed mb-6">
          Welcome to <span class="text-purple-600 font-semibold">Scentique</span>, your one-stop destination for discovering the finest perfumes curated with love and elegance.
          Our journey began with a simple idea: that everyone deserves to feel confident, beautiful, and remembered — through scent.
        </p>
        <p class="text-gray-600 leading-relaxed mb-6">
          Each fragrance in our collection is selected to evoke emotion and spark memories. Whether you're looking for something bold, floral, fresh, or mysterious — we have a scent for you.
        </p>
        <p class="text-gray-600 leading-relaxed">
          We're a proudly Nigerian brand, delivering across the country with heart and care. Thank you for supporting local luxury.
        </p>
      </div>

    </div>
  </section>
</template>

<script setup>
  import { useRouter } from 'vue-router'

  const router = useRouter()
</script>

