<script setup lang="ts">
/**
 * Provide Inject Pattern
 * Pros:
 * - `provide` and `inject` are built-in Vue APIs
 *
 * Cons:
 * - Parent and child components are tightly coupled
 * - Needs defining a symbol for the provide/inject key when using TypeScript
 * - `provide` and `inject` are advanced features
 */

import { onMounted, provide, ref } from 'vue'
import PersonalInfoForm from '@/components/provide-inject-pattern/PersonalInfoForm.vue'
import ContactInfoForm from '@/components/provide-inject-pattern/ContactInfoForm.vue'

import VueJsonPretty from 'vue-json-pretty'
import 'vue-json-pretty/lib/styles.css'

import { key, type Form } from '@/components/provide-inject-pattern/symbol'

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
      <h1>Provide Inject Pattern</h1>
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
        <li>`provide`와 `inject`는 Vue의 내장 API로 추가 플러그인 설치가 필요 없음</li>
      </ul>
      <h3>단점</h3>
      <ul>
        <li>부모와 자식 컴포넌트 간에 강한 커플링</li>
        <li>TypeScript 활용 시 `provide`와 `inject`의 키 심볼 정의 필요</li>
        <li>고급 기능으로 초보자에게 익숙하지 않음</li>
      </ul>
    </div>
  </div>
</template>
