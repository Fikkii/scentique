<template>
  <Header :cart-count="cart.length" @search="onSearch" @open-cart="openCartDrawer" />
  <HeroBanner class="mt-20"/>
  <div class="p-10 max-w-7xl mx-auto">
    <h3 class="text-purple-500 font-bold">Categories</h3>
    <CategoryFilter class="pb-6" :categories="categories" @filter="onFilter" />
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      <ProductCard
          v-for="prod in filtered"
          :key="prod.id"
          :product="prod"
          @add-to-cart="addToCart"
          @view-details="viewProduct"
          />
    </div>

    <CartDrawer
        v-if="cartOpen"
        :cart="cart"
        @remove="removeFromCart"
        @checkout="handleCheckout"
        @close="cartOpen = false"
        />
    <!-- ...existing components -->
    <FloatingCart :cart="cart" @open-cart="cartOpen = true" />
    <CartDrawer
        v-if="cartOpen"
        :cart="cart"
        @checkout="handleCheckout"
        @remove="removeFromCart"
        @close="cartOpen = false"
        />

  </div>
  <TestimonialSlider />
  <Footer />


 <ProductModal
    v-if="selectedProduct"
    :product="selectedProduct"
    :visible="showModal"
    @close="showModal = false"
    @add="addToCart"
  />
</template>

<script setup>
  import { ref, computed, onMounted } from 'vue'
import SearchBar from '../components/SearchBar.vue'
import CategoryFilter from '../components/CategoryFilter.vue'
import ProductCard from '../components/ProductCard.vue'
import ProductModal from '../components/ProductModal.vue'
import CartDrawer from '../components/CartDrawer.vue'
import { startPayment } from '../services/paystack'
import FloatingCart from '../components/FloatingCart.vue'
import Header from '../components/Header.vue'
import HeroBanner from '@/components/HeroBanner.vue'
import Footer from '@/components/Footer.vue'
import TestimonialSlider from '@/components/TestimonialSlider.vue'

import { useRouter } from 'vue-router'

const router = useRouter()

const products = ref([])
const query = ref('')
const filterCat = ref(null)
const cart = ref([])
const cartOpen = ref(false)
const showCartIcon = ref(false)

onMounted(async () => {
  const res = await fetch('/products.json')
  const data = await res.json()
  products.value = data
})

const selectedProduct = ref(null)
const showModal = ref(false)

function viewProduct(product) {
  selectedProduct.value = { ...product }
  showModal.value = true
}

function openCart() {
  cartOpen.value = true
  showCartIcon.value = false

  // Auto-close after 5 seconds
  setTimeout(() => {
    cartOpen.value = false
    showCartIcon.value = true
  }, 5000)
}

function closeCart() {
  cartOpen.value = false
  showCartIcon.value = true
}

function removeFromCart(id) {
  const index = cart.value.findIndex(i => i.id === id)
  if (index !== -1) {
    if (cart.value[index].qty > 1) {
      cart.value[index].qty--
    } else {
      cart.value.splice(index, 1)
    }
  }
}

const categories = computed(() => [...new Set(products.value.map(p => p.category))])

const filtered = computed(() =>
  products.value.filter(p =>
    (!filterCat.value || p.category === filterCat.value) &&
    p.name.toLowerCase().includes(query.value.toLowerCase())
  )
)

function onSearch(q) { query.value = q }

function onFilter(cat) { filterCat.value = cat }

function addToCart(product) {
  const existing = cart.value.find(p => p.id === product.id)
  if (existing) existing.qty++
  else cart.value.push({ ...product, qty: 1 })
}

function handleCheckout(email) {
  const total = cart.value.reduce((sum, i) => sum + i.price * i.qty, 0)
  if (!email) return
  startPayment(email, total, (ref) => {
  const items = cart.value.map(i => `• ${i.name} x${i.qty}`).join('\n')
    const message = `
🛍️ New Order!
-----------------------
👤 Email: ${email} \n

📦 Items:
${items} \n

💵 Total: ₦${total.toLocaleString()} \n

Please confirm Payment. When should i be expecting my goods.
`.trim()

    router.push({ name: 'CheckoutSuccess', query: { ref, message } })
  })
}
</script>

