import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useFormStore = defineStore('form', () => {
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

  const hasFullNameError = ref(false)

  function resetForm() {
    form.value = {
      personal: {
        fullName: '',
        dob: '',
        gender: ''
      },
      contact: {
        address: '',
        phone: ''
      }
    }
    hasFullNameError.value = false
  }

  return {
    form,
    hasFullNameError,
    resetForm
  }
})
