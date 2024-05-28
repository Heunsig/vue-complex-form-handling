<script setup lang="ts">
import { ref, watch } from 'vue'

const props = defineProps<{
  modelValue: {
    first_name: string
    last_name: string
    dob: string
    gender: string
  }
  hasFirstNameError: boolean
}>()

const emit = defineEmits<{
  'update:modelValue': [
    value: {
      first_name: string
      last_name: string
      dob: string
      gender: string
    }
  ]
}>()

const form = ref({
  first_name: '',
  last_name: '',
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
      <label for="first_name">First Name:</label>
      <div>
        <input type="text" id="first_name" v-model="form.first_name" />
        <p v-if="hasFirstNameError">First Name is required.</p>
      </div>
    </div>
    <div>
      <label for="last_name">Last Name:</label>
      <input type="text" id="last_name" v-model="form.last_name" />
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
