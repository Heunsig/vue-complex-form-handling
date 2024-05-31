<script setup lang="ts">
import { ref } from 'vue'

const form = ref({
  fullName: '',
  dob: '',
  gender: ''
})

const hasFullNameError = ref(false)

function getFormData() {
  if (form.value.fullName === '') {
    hasFullNameError.value = true
    throw new Error('Full Name is required.')
  }

  hasFullNameError.value = false
  return form.value
}

function setFormData(values: typeof form.value) {
  form.value = values
}

defineExpose({
  getFormData,
  setFormData
})
</script>

<template>
  <div>
    <h2>Personal Information</h2>
    <div>
      <label for="fullName">* Full Name:</label>
      <div>
        <input type="text" id="fullName" v-model="form.fullName" />
        <p v-if="hasFullNameError" class="error-msg">First Name is required.</p>
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
