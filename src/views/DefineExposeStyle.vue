<script setup lang="ts">
import { onMounted, ref } from 'vue'
import PersonalInfoForm from '@/components/define-expose-style/PersonalInfoForm.vue'
import ContactInfoForm from '@/components/define-expose-style/ContactInfoForm.vue'

import VueJsonPretty from 'vue-json-pretty'
import 'vue-json-pretty/lib/styles.css'

const loading = ref(false)
const personalInfoFormRef = ref<InstanceType<typeof PersonalInfoForm> | undefined>(undefined)
const contactInfoFormRef = ref<InstanceType<typeof ContactInfoForm> | undefined>(undefined)

function handleSubmit() {
  if (!personalInfoFormRef.value || !contactInfoFormRef.value) return

  try {
    const personalInfo = personalInfoFormRef.value.getFormData()
    const contactInfo = contactInfoFormRef.value.getFormData()

    const form = {
      personal: personalInfo,
      contact: contactInfo
    }

    loading.value = true
    setTimeout(() => {
      alert(JSON.stringify(form, null, 2))
      loading.value = false
    }, 1000)
  } catch (error) {
    console.error(error)
  }
}

onMounted(() => {
  // setTimeout(() => {
  //   if (!personalInfoFormRef.value || !contactInfoFormRef.value) return
  //   personalInfoFormRef.value.setInitValues({
  //     first_name: 'John',
  //     last_name: 'Doe',
  //     dob: '2024-05-28',
  //     gender: 'Female'
  //   })
  //   contactInfoFormRef.value.setInitValues({
  //     address: '123 Main St',
  //     phone: '123-456-7890'
  //   })
  // }, 1000)
})
</script>
<template>
  <div class="wrapper">
    <div>
      <h1>Define Expose Style</h1>
      <form @submit.prevent="handleSubmit">
        <div>
          <PersonalInfoForm ref="personalInfoFormRef" />
        </div>
        <div>
          <ContactInfoForm ref="contactInfoFormRef" />
        </div>
        <div>
          <button type="submit">
            {{ loading ? 'Loading...' : 'Submit' }}
          </button>
        </div>
      </form>
    </div>
    <div>
      <vue-json-pretty :data="{}" />
    </div>
  </div>
</template>
