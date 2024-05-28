<script setup lang="ts">
import { ref } from 'vue'

const form = ref({
  address: '',
  phone: ''
})

function getFormData() {
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
  <div>
    <h2>Contact Information</h2>
    <div>
      <label for="address">Address:</label>
      <input type="text" id="address" v-model="form.address" />
    </div>
    <div>
      <label for="phone">Phone:</label>
      <input type="text" id="phone" v-model="form.phone" />
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
