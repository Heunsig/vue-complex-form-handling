import type { InjectionKey, Ref } from 'vue'

export const key = Symbol() as InjectionKey<
  Ref<{
    personal: {
      first_name: string
      last_name: string
      dob: string
      gender: string
    }
    contact: {
      address: string
      phone: string
    }
  }>
>
