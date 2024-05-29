<script setup lang="ts">
/**
 * Store Style
 * Pros:
 * - The code is the shortest compared to other styles
 *
 * Cons:
 * - Parent and child components are tightly coupled
 * - Requires a state management plugin
 */

import { onBeforeUnmount, onMounted, ref, watch } from 'vue'
import { useFormStore } from '@/stores/form'
import PersonalInfoForm from '@/components/store-style/PersonalInfoForm.vue'
import ContactInfoForm from '@/components/store-style/ContactInfoForm.vue'

import VueJsonPretty from 'vue-json-pretty'
import 'vue-json-pretty/lib/styles.css'

const { form, resetForm } = useFormStore()

const loading = ref(false)
const hasFirstNameError = ref(false)
watch(
  () => form.personal.first_name,
  (newFirstName) => {
    if (newFirstName === '') {
      hasFirstNameError.value = true
      return
    }
    hasFirstNameError.value = false
  }
)
const hasLastNameError = ref(false)
watch(
  () => form.personal.last_name,
  (newLastName) => {
    if (newLastName === '') {
      hasLastNameError.value = true
      return
    }
    hasLastNameError.value = false
  }
)

function handleSubmit() {
  if (form.personal.first_name === '') {
    hasFirstNameError.value = true
    return
  }

  if (form.personal.last_name === '') {
    hasLastNameError.value = true
    return
  }

  loading.value = true
  hasFirstNameError.value = false
  hasLastNameError.value = false
  setTimeout(() => {
    alert(JSON.stringify(form, null, 2))
    loading.value = false
  }, 1000)
}

onMounted(() => {
  // setTimeout(() => {
  //   form.personal = {
  //     first_name: 'John',
  //     last_name: 'Doe',
  //     dob: '2024-05-28',
  //     gender: 'Female'
  //   }
  //   form.contact = {
  //     address: '123 Main St',
  //     phone: '123-456-7890'
  //   }
  // }, 1000)
})

onBeforeUnmount(() => {
  // resetForm()
})
</script>
<template>
  <div class="wrapper">
    <div>
      <h1>Store Style</h1>
      <form @submit.prevent="handleSubmit">
        <div>
          <PersonalInfoForm
            v-model="form.personal"
            :hasFirstNameError="hasFirstNameError"
            :hasLastNameError="hasLastNameError"
          />
        </div>
        <div>
          <ContactInfoForm v-model="form.contact" />
        </div>
        <div>
          <button type="submit">
            {{ loading ? 'Loading...' : 'Submit' }}
          </button>
        </div>
      </form>
    </div>
    <div>
      <vue-json-pretty :data="form" />
    </div>
  </div>
</template>
