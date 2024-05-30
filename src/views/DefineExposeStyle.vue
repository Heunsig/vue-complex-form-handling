<script setup lang="ts">
/**
 * Define Expose Style
 * Pros:
 * - No coupling between parent and child components
 * - Reusable components
 * - Functional
 * - Easy to define types in TypeScript
 * - Error handling is easier (Needs review)
 *
 * Cons:
 * - `defineExpose` is an advanced feature
 */

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
  //   personalInfoFormRef.value.setFormData({
  //     fullName: 'John Doe',
  //     dob: '2024-05-28',
  //     gender: 'Female'
  //   })
  //   contactInfoFormRef.value.setFormData({
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
    <div>
      <h3>장점</h3>
      <ul>
        <li>부모와 자식 컴포넌트 간의 커플링이 없음</li>
        <li>자식 컴포넌트 재사용 가능</li>
        <li>Functional 함</li>
        <li>TypeScript에서 타입 정의하기 쉬움</li>
        <li>에러 핸들링이 쉬움</li>
      </ul>
      <h3>단점</h3>
      <ul>
        <li>`defineExpose`는 고급 기능이라 초보에게 익숙하지 않을 수 있음</li>
        <li>TypeScript에서 컴포넌트에 template ref 설정해야 됨</li>
      </ul>
    </div>
  </div>
</template>
