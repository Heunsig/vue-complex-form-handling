<script setup lang="ts">
/**
 * Store Style
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
import PersonalInfoForm from '@/components/store-style/PersonalInfoForm.vue'
import ContactInfoForm from '@/components/store-style/ContactInfoForm.vue'

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
      <h1>Store Style</h1>
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
        <li>Store(Pinia) 사용은 vue3 개발자에게 익숙함</li>
        <li>Store 함수에 비지니스 로직을 정의해서 컴포넌트단 코드를 급격히 줄일 수 있음</li>
      </ul>
      <h3>단점</h3>
      <ul>
        <li>부모와 자식 컴포넌트가 강하게 결합됨</li>
        <li>Pinia와 같은 상태 관리 라이브러리 설치 필요</li>
        <li>상태 데이터를 사용중인 컴포넌트를 벗어나더라도 지속적으로 신경써야 함</li>
        <li>컴포넌트가 Unmount될 때 상태 데이터 초기화에 신경써야 함</li>
        <li>Store가 폼과 관련없는 다른 컴포넌트에서 사용되어 오류를 발생시킬 가능성이 높음</li>
      </ul>
    </div>
  </div>
</template>
