<script setup lang="ts">
/**
 * Store Pattern
 * Pros:
 * - The code is the shortest compared to other styles (Needs review)
 *
 * Cons:
 * - Parent and child components are tightly coupled
 * - Requires a state management plugin
 * - Need to continuously manage stateful data
 * - Need to reset the form when the component is unmounted
 * - Difficult to scope the state to a single component
 */

import { onBeforeUnmount, onMounted, ref } from 'vue'
import { useFormStore } from '@/stores/form'
import PersonalInfoForm from '@/components/store-pattern/PersonalInfoForm.vue'
import ContactInfoForm from '@/components/store-pattern/ContactInfoForm.vue'

import VueJsonPretty from 'vue-json-pretty'
import 'vue-json-pretty/lib/styles.css'
import { storeToRefs } from 'pinia'

const formStore = useFormStore()
const { form, hasFullNameError } = storeToRefs(formStore)

const loading = ref(false)

function handleSubmit() {
  if (form.value.personal.fullName === '') {
    hasFullNameError.value = true
    return
  }

  loading.value = true
  setTimeout(() => {
    alert(JSON.stringify(form, null, 2))
    loading.value = false
  }, 1000)
}

onMounted(() => {
  // setTimeout(() => {
  //   form.personal = {
  //     fullName: 'John Doe',
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
  formStore.resetForm()
})
</script>
<template>
  <div class="wrapper">
    <div>
      <h1>Store Pattern</h1>
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
    <div>
      <h3>장점</h3>
      <ul>
        <li>Store(Pinia)는 vue3 개발자에게 익숙함</li>
        <li>Store 함수에 비즈니스 로직을 정의해 컴포넌트단의 코드를 줄일 수 있음</li>
      </ul>
      <h3>단점</h3>
      <ul>
        <li>부모와 자식 컴포넌트 강한 커플링</li>
        <li>Pinia와 같은 상태 관리 라이브러리 설치 필요</li>
        <li>Store 데이터가 필요한 컴포넌트에서 벗어나더라도 Store 데이터가 유지됨</li>
        <li>Store가 폼과 관련 없는 컴포넌트에서 사용되어 오류 발생 가능성 높음</li>
        <li>컴포넌트 Unmount 시 Store 데이터 초기화 필요</li>
      </ul>
    </div>
  </div>
</template>
