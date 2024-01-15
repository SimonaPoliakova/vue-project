<template>
  <div class="shipping-details-container">
    <h2>Shipping Details</h2>
    <form @submit.prevent="submitShippingDetails">
      <div class="form-group">
        <label for="fullName">Full Name:</label>
        <input type="text" id="fullName" v-model="fullName" required />
      </div>

      <div class="form-group">
        <label for="address">Address:</label>
        <textarea id="address" v-model="address" required></textarea>
      </div>

      <div class="form-group">
        <label for="city">City:</label>
        <input type="text" id="city" v-model="city" required />
      </div>

      <div class="form-group">
        <label for="postalCode">Postal Code:</label>
        <input type="text" id="postalCode" v-model="postalCode" required />
      </div>

      <div class="form-group">
        <label for="paymentMethod">Payment Method:</label>
        <select id="paymentMethod" v-model="paymentMethod" required>
          <option value="creditCard">Credit Card</option>
          <option value="paypal">PayPal</option>
        </select>
      </div>

      <button type="submit" class="cart-button">Continue</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      fullName: "",
      address: "",
      city: "",
      postalCode: "",
      paymentMethod: "creditCard",
    };
  },
  methods: {
    submitShippingDetails() {
      this.$router.push({
        name: "checkout",
        params: {
          shippingDetails: {
            fullName: this.fullName,
            address: this.address,
            city: this.city,
            postalCode: this.postalCode,
          },
          paymentMethod: this.paymentMethod,
        },
      });
    },
  },
};
</script>

<style scoped>
.shipping-details-container {
  width: 70%;
  margin: 0 auto;
}

h2 {
  text-align: center;
}

form {
  display: flex;
  flex-direction: column;
  gap: 20px;
  max-width: 400px;
  margin-top: 20px;
  margin-left: auto;
  margin-right: auto;
}

.form-group {
  display: flex;
  flex-direction: column;
}

label {
  font-weight: bold;
  margin-bottom: 5px;
}

input,
textarea,
select {
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 4px;
}

button {
  background-color: #4caf50;
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background-color: #337a35;
}
</style>
