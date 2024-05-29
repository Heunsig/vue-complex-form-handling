<script setup lang="ts">
import { useFormStore } from '@/stores/form'

defineProps<{
  hasFirstNameError: boolean
  hasLastNameError: boolean
}>()

const { form } = useFormStore()
</script>

<template>
  <div :class="{ 'has-error': hasFirstNameError || hasLastNameError }">
    <h2>Personal Information</h2>
    <div>
      <label for="first_name">* First Name:</label>
      <div>
        <input type="text" id="first_name" v-model="form.personal.first_name" />
        <p v-if="hasFirstNameError" class="error-msg">First Name is required.</p>
      </div>
    </div>
    <div>
      <label for="last_name">* Last Name:</label>
      <div>
        <input type="text" id="last_name" v-model="form.personal.last_name" />
        <p v-if="hasLastNameError" class="error-msg">Last Name is required.</p>
      </div>
    </div>
    <div>
      <!-- Date of birth -->
      <label for="dob">Date of Birth:</label>
      <input type="date" id="dob" v-model="form.personal.dob" />
    </div>
    <div>
      <!-- Gender selector -->
      <label for="gender">Gender:</label>
      <select id="gender" v-model="form.personal.gender">
        <option value="Male">Male</option>
        <option value="Female">Female</option>
      </select>
    </div>
  </div>
</template>
<style scoped>
.has-error {
  background-color: color-mix(in lab, red, transparent 80%);
}

div:has(> label) {
  margin: 1rem 0;
  display: flex;

  label {
    font-weight: bold;
    width: 8rem;
  }

  input + .error-msg {
    color: red;
    margin: 0;
  }
}
</style>
