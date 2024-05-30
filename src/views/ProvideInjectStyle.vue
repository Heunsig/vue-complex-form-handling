<script setup lang="ts">
/**
 * Provide Inject Style
 * Pros:
 * - `provide` and `inject` are built-in Vue APIs
 *
 * Cons:
 * - Parent and child components are tightly coupled
 * - Needs defining a symbol for the provide/inject key when using TypeScript
 * - `provide` and `inject` are advanced features
 */

import { onMounted, provide, ref } from 'vue'
import PersonalInfoForm from '@/components/provide-inject-style/PersonalInfoForm.vue'
import ContactInfoForm from '@/components/provide-inject-style/ContactInfoForm.vue'

import VueJsonPretty from 'vue-json-pretty'
import 'vue-json-pretty/lib/styles.css'

import { key, type Form } from '@/components/provide-inject-style/symbol'

const form = ref<Form>({
  personal: {
    fullName: '',
    dob: '',
    gender: ''
  },
  contact: {
    address: '',
    phone: ''
  }
})

provide(key, form)

const loading = ref(false)

function handleSubmit() {
  loading.value = true
  setTimeout(() => {
    alert(JSON.stringify(form.value, null, 2))
    loading.value = false
  }, 1000)
}

onMounted(() => {
  // setTimeout(() => {
  //   form.value.personal = {
  //     fullName: 'John Doe',
  //     dob: '2024-05-28',
  //     gender: 'Female'
  //   }
  //   form.value.contact = {
  //     address: '123 Main St',
  //     phone: '123-456-7890'
  //   }
  // }, 1000)
})
</script>
<template>
  <div class="wrapper">
    <div>
      <h1>Provide Inject Style</h1>
      <form @submit.prevent="handleSubmit">
        <div>
          <PersonalInfoForm v-model="form.personal" />
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
