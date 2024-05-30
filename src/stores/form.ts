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
  }

  return {
    form,
    resetForm
  }
})
