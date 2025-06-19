<template>
  <footer class="bg-gray-100 border-t border-gray-200 py-10 mt-12">
    <div class="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-gray-700">

      <!-- Brand -->
      <div>
        <h2 class="text-2xl font-bold text-purple-600">Scentique</h2>
        <p class="mt-2 text-sm">
          Elevate your presence with signature scents for every mood.
        </p>
      </div>

      <!-- Shop Links -->
      <div>
        <h3 class="font-semibold text-gray-800 mb-2">Shop</h3>
        <ul class="space-y-1 text-sm">
          <li><router-link to="/shop" class="hover:text-purple-600">All Perfumes</router-link></li>
          <li><router-link to="/category/floral" class="hover:text-purple-600">Floral</router-link></li>
          <li><router-link to="/category/woody" class="hover:text-purple-600">Woody</router-link></li>
          <li><router-link to="/category/unisex" class="hover:text-purple-600">Unisex</router-link></li>
        </ul>
      </div>

      <!-- Company -->
      <div>
        <h3 class="font-semibold text-gray-800 mb-2">Company</h3>
        <ul class="space-y-1 text-sm">
          <li><router-link to="/about" class="hover:text-purple-600">About Us</router-link></li>
          <li><router-link to="/contact" class="hover:text-purple-600">Contact</router-link></li>
          <li><router-link to="/faq" class="hover:text-purple-600">FAQ</router-link></li>
        </ul>
      </div>

      <!-- Newsletter + Social -->
      <div>
        <h3 class="font-semibold text-gray-800 mb-2">Stay Connected</h3>
        <form @submit.prevent class="flex flex-col sm:flex-row items-center gap-2">
          <input
            type="email"
            placeholder="Your email"
            class="w-full sm:flex-1 px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-purple-500"
          />
          <button class="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700 text-sm">Subscribe</button>
        </form>
        <div class="mt-4 flex gap-4 text-xl text-purple-600">
          <a :href="`https://instagram.com/${instagramUsername}`" target="_blank"><i class="ri-instagram-line hover:text-purple-800"></i></a>
          <a :href="`https://facebook.com/${facebookUsername}`" target="_blank"><i class="ri-facebook-line hover:text-purple-800"></i></a>
          <a :href="`tel:${whatsappNumber}`" target="_blank"><i class="ri-whatsapp-line hover:text-purple-800"></i></a>
        </div>
      </div>
    </div>

    <div class="mt-10 text-center text-sm text-gray-500">
      &copy; {{ new Date().getFullYear() }} Scentique. All rights reserved.
    </div>
  </footer>
</template>

<script setup>
const whatsappNumber = import.meta.env.VITE_WHATSAPP
const facebookUsername = import.meta.env.VITE_FACEBOOK
const instagramUsername = import.meta.env.VITE_INSTAGRAM
// No JS needed here unless you want to hook the form
</script>

