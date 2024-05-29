import type { InjectionKey, Ref } from 'vue'

export type Form = {
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
}

export const key = Symbol() as InjectionKey<Ref<Form>>
