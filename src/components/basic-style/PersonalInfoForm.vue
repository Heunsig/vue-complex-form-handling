<script setup lang="ts">
import { ref, watch } from 'vue'

const props = defineProps<{
  modelValue: {
    fullName: string
    dob: string
    gender: string
  }
}>()

const emit = defineEmits<{
  'update:modelValue': [
    value: {
      fullName: string
      dob: string
      gender: string
    }
  ]
}>()

const form = ref({
  fullName: '',
  dob: '',
  gender: ''
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
    <h2>Personal Information</h2>
    <div>
      <label for="fullName">Full Name:</label>
      <div>
        <input type="text" id="fullName" v-model="form.fullName" />
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
