<script setup lang="ts">
import { ref, watch } from 'vue'

const props = defineProps<{
  modelValue: {
    address: string
    phone: string
  }
}>()

const emit = defineEmits<{
  'update:modelValue': [
    value: {
      address: string
      phone: string
    }
  ]
}>()

const form = ref({
  address: '',
  phone: ''
})

watch(
  form,
  (value) => {
    emit('update:modelValue', value)
  },
  { deep: true }
)

watch(
  () => props.modelValue,
  (value) => {
    form.value = value
  },
  {
    immediate: true
  }
)
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
