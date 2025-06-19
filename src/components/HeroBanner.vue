<template>
  <section class="bg-gradient-to-br from-purple-50 to-white p-4">
    <div class="max-w-7xl mx-auto px-4 grid gap-10 lg:grid-cols-2 items-center">

      <!-- Text Section -->
      <div data-aos="fade-right">
        <h1 class="text-4xl sm:text-5xl font-bold text-gray-800 leading-tight">
          Discover Your <span class="text-purple-600">Signature Scent</span>
        </h1>
        <p class="mt-4 text-gray-600 text-lg">
          Indulge in timeless aromas crafted for elegance. Shop our exclusive collection of premium perfumes.
        </p>
        <div class="mt-6">
          <router-link
            to="/shop"
            class="inline-block bg-purple-600 hover:bg-purple-700 text-white font-medium px-6 py-3 rounded-lg shadow transition"
          >
            Shop Now
          </router-link>
        </div>
      </div>

      <!-- Image Section -->
      <div class="relative w-full h-96 lg:h-[32rem]" data-aos="fade-left">
        <img
          src="/images/hero-perfume.png"
          alt="Perfume Display"
          class="absolute inset-0 w-full h-full object-contain"
        />
      </div>
    </div>
  </section>
</template>

<script setup>
// No script needed unless you want to add props or dynamic content
</script>

<style scoped>
/* Optional AOS fade */
[data-aos] {
  opacity: 0;
  transition-property: opacity, transform;
}
</style>

