<template>
  <section class="min-h-screen bg-white py-16 px-4">
    <div class="max-w-3xl mx-auto text-center">
      <h1 class="text-4xl font-bold text-gray-800 mb-4">Get in Touch</h1>
      <p class="text-gray-600 text-lg mb-10">
      Have a question, concern, or custom request? We're here to help you find your perfect scent.
      </p>

      <!-- Contact Options -->
      <div class="space-y-6">
        <!-- WhatsApp -->
        <div class="flex gap-2 justify-center">

          <RouterLink
              to="/"
              class="inline-flex items-center justify-center gap-2 bg-orange-600 hover:bg-green-700 text-white font-medium px-6 py-3 rounded-lg shadow-md transition"
              >
              <i class="ri-arrow-left-line text-xl"></i> Continue Shopping
          </RouterLink>

          <a
              :href="whatsappLink"
              target="_blank"
              class="inline-flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white font-medium px-6 py-3 rounded-lg shadow-md transition"
              >
              <i class="ri-whatsapp-line text-xl"></i> Chat on WhatsApp
          </a>
        </div>

        <!-- Email -->
        <div class="text-gray-700">
          <p><i class="ri-mail-line mr-1 text-purple-600"></i> Email us: <a href="mailto:support@scentique.com" class="text-purple-600 hover:underline">support@scentique.com</a></p>
        </div>

        <!-- Phone (optional) -->
        <div class="text-gray-700">
          <p><i class="ri-phone-line mr-1 text-purple-600"></i> Call us: <a
                :href="`tel:${whatsappNumber}`" class="text-purple-600 hover:underline">{{ whatsappNumber }}</a></p>
        </div>
      </div>

      <!-- Optional contact form -->
      <div class="mt-10 text-sm text-gray-500">
        We typically respond within 24 hours.
      </div>
    </div>
  </section>
</template>

<script setup>
// Your actual WhatsApp number
const whatsappNumber = import.meta.env.VITE_WHATSAPP
const whatsappMessage = 'Hello! I have a question about my order.'
const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`
</script>

