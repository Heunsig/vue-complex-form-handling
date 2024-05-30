<script setup lang="ts">
/**
 * Basic Style
 * Pros:
 * - Naturally intuitive for Vue3 users
 *
 * Cons:
 * - The code is longer and more complex compared to other styles
 * - Involves many watchers
 * - Parent and child components are more tightly coupled than with the provide/inject and store styles
 */

import { onMounted, ref } from 'vue'
import PersonalInfoForm from '@/components/basic-style/PersonalInfoForm.vue'
import ContactInfoForm from '@/components/basic-style/ContactInfoForm.vue'

import VueJsonPretty from 'vue-json-pretty'
import 'vue-json-pretty/lib/styles.css'

const form = ref({
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

const loading = ref(false)
const hasFullNameError = ref(false)

function handleSubmit() {
  if (form.value.personal.fullName === '') {
    hasFullNameError.value = true
    return
  }

  loading.value = true
  hasFullNameError.value = false
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
      <h1>Basic Style</h1>
      <form @submit.prevent="handleSubmit">
        <div>
          <PersonalInfoForm v-model="form.personal" :hasFullNameError="hasFullNameError" />
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
    <div>
      <h3>장점</h3>
      <ul>
        <li>Vue3 개발자는 자연스럽게 떠오르는 방식</li>
      </ul>
      <h3>단점</h3>
      <ul>
        <li>부모와 자식 컴포넌트 간에 강한 커플링</li>
        <li>Watch를 많이 사용해야 함</li>
        <li>코드가 너무 복잡해짐</li>
      </ul>
    </div>
  </div>
</template>
