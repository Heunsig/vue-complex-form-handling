<script setup lang="ts">
import { onMounted, ref, watch, provide } from 'vue'
import TestForm from '@/components/provide-inject-style/TestForm.vue'
import PersonalInfoForm from '@/components/basic-style/PersonalInfoForm.vue'
import ContactInfoForm from '@/components/basic-style/ContactInfoForm.vue'
import ProvideTest from '@/components/provide-inject-style/ProvideTest.vue'

// import { key } from '@/components/provide-inject-style/symbol'

import VueJsonPretty from 'vue-json-pretty'
import 'vue-json-pretty/lib/styles.css'

const form = ref({
  personal: {
    first_name: '',
    last_name: '',
    dob: '',
    gender: ''
  },
  contact: {
    address: '',
    phone: ''
  }
})

// provide(key, form)

const loading = ref(false)
const hasFirstNameError = ref(false)
watch(
  () => form.value.personal.first_name,
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
  () => form.value.personal.last_name,
  (newLastName) => {
    if (newLastName === '') {
      hasLastNameError.value = true
      return
    }
    hasLastNameError.value = false
  }
)

function handleSubmit() {
  if (form.value.personal.first_name === '') {
    hasFirstNameError.value = true
    return
  }

  if (form.value.personal.last_name === '') {
    hasLastNameError.value = true
    return
  }

  loading.value = true
  hasFirstNameError.value = false
  hasLastNameError.value = false
  setTimeout(() => {
    alert(JSON.stringify(form.value, null, 2))
    loading.value = false
  }, 1000)
}

onMounted(() => {
  setTimeout(() => {
    form.value.personal = {
      first_name: 'John',
      last_name: 'Doe',
      dob: '2024-05-28',
      gender: 'Female'
    }

    form.value.contact = {
      address: '123 Main St',
      phone: '123-456-7890'
    }
  }, 1000)
})
</script>
<template>
  <div class="wrapper">
    <div>
      <h1>Provide Inject Style</h1>
      <ProvideTest :form="form">
        <TestForm />
      </ProvideTest>
      <!-- <form @submit.prevent="handleSubmit">
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
      </form> -->
    </div>
    <div>
      <vue-json-pretty :data="form" />
    </div>
  </div>
</template>
