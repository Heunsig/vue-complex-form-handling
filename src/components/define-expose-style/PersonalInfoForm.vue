<script setup lang="ts">
import { ref, watch } from 'vue'

const hasFirstNameError = ref(false)
const hasLastNameError = ref(false)
const form = ref({
  first_name: '',
  last_name: '',
  dob: '',
  gender: ''
})

// Bonus
watch(
  () => form.value.first_name,
  () => {
    if (form.value.first_name === '') {
      hasFirstNameError.value = true
      return
    }
    hasFirstNameError.value = false
  }
)

watch(
  () => form.value.last_name,
  () => {
    if (form.value.last_name === '') {
      hasLastNameError.value = true
      return
    }
    hasLastNameError.value = false
  }
)

function getFormData() {
  if (form.value.first_name === '') {
    hasFirstNameError.value = true
    throw new Error('First Name is required.')
  }

  hasFirstNameError.value = false

  return form.value
}

function setInitValues(values: typeof form.value) {
  form.value = values
}

defineExpose({
  getFormData,
  setInitValues
})
</script>

<template>
  <div :class="{ 'has-error': hasFirstNameError || hasLastNameError }">
    <h2>Personal Information</h2>
    <div>
      <label for="first_name">* First Name:</label>
      <div>
        <input type="text" id="first_name" v-model="form.first_name" />
        <p v-if="hasFirstNameError" class="error-msg">First Name is required.</p>
      </div>
    </div>
    <div>
      <label for="last_name">* Last Name:</label>
      <div>
        <input type="text" id="last_name" v-model="form.last_name" />
        <p v-if="hasLastNameError" class="error-msg">Last Name is required.</p>
      </div>
    </div>
    <div>
      <!-- Date of birth -->
      <label for="dob">Date of Birth:</label>
      <input type="date" id="dob" v-model="form.dob" />
    </div>
    <div>
      <!-- Gender selector -->
      <label for="gender">Gender:</label>
      <select id="gender" v-model="form.gender">
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

  input + p {
    color: red;
    margin: 0;
  }
}
</style>
