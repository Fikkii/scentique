<template>
  <section class="min-h-screen flex items-center justify-center bg-purple-50 px-4 py-12">
    <div class="max-w-md w-full bg-white rounded-lg shadow-lg p-8 text-center space-y-6">

      <!-- Success Icon -->
      <div class="text-green-500 text-5xl">
        <i class="ri-checkbox-circle-line"></i>
      </div>

      <h2 class="text-2xl font-bold text-gray-800">Payment Successful!</h2>
      <p class="text-gray-600">
        Thank you for your purchase. We’ve received your payment.
      </p>

      <!-- Reference ID -->
      <div v-if="ref" class="bg-gray-100 text-sm px-4 py-2 rounded text-gray-700">
        Payment Reference: <span class="font-semibold">{{ ref }}</span>
      </div>

      <!-- WhatsApp follow-up -->
      <a
        :href="whatsappLink"
        target="_blank"
        class="inline-block w-full bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded transition"
      >
        Contact Seller on WhatsApp
      </a>

      <!-- Home -->
      <router-link
        to="/"
        class="inline-block w-full bg-purple-600 hover:bg-purple-700 text-white py-2 px-4 rounded transition"
      >
        Back to Home
      </router-link>
    </div>
  </section>
</template>

<script setup>
import { useRoute } from 'vue-router'

const route = useRoute()
const ref = route.query.ref || ''
const message = route.query.message || ''

const whatsappNumber = import.meta.env.VITE_WHATSAPP
const whatsappLink = `https://wa.me/${whatsappNumber}?text=Hello, I just paid for an order. Payment
Reference: ${ref}, ${message}`
</script>

