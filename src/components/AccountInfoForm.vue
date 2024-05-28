<script setup lang="ts">
import { ref } from 'vue'

const form = ref({
  email: '',
  password: '',
  confirm_password: ''
})
</script>
<template>
  <div>
    <h2>Account Information</h2>
    <div>
      <!-- Email -->
      <label for="email">Email:</label>
      <input type="email" id="email" v-model="form.email" />
    </div>
    <div>
      <!-- Password -->
      <label for="password">Password:</label>
      <input type="password" id="password" v-model="form.password" />
    </div>
    <div>
      <!-- Confirm Password -->
      <label for="confirm_password">Confirm Password:</label>
      <input type="password" id="confirm_password" v-model="form.confirm_password" />
    </div>
  </div>
</template>
<style scoped>
div:has(> label) {
  margin: 1rem 0;
  display: flex;

  label {
    font-weight: bold;
    width: 8rem;
  }
}
</style>
