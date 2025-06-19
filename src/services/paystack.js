import PaystackPop from '@paystack/inline-js'

export function startPayment(email, amount, onSuccess, onCancel) {
  if (!email || !amount || isNaN(amount)) {
    alert("Invalid email or amount.")
    return
  }

  const paystack = new PaystackPop()
  paystack.newTransaction({
    key: 'pk_test_71133a49d4fa2f3e24d489e6ac3d4d8b8ec46951', // Replace with your real public key
    email,
    amount: Math.floor(amount * 100), // Convert ₦ to kobo
    onSuccess: (response) => {
      console.log('Payment reference:', response.reference)
      onSuccess(response.reference)
    },
    onCancel: () => {
      console.log('Payment canceled')
      if (onCancel) onCancel()
    }
  })
}

