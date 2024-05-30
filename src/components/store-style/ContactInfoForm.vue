<script setup lang="ts">
import { useFormStore } from '@/stores/form'

const { form } = useFormStore()
</script>
<template>
  <div>
    <h2>Contact Information</h2>
    <div>
      <label for="address">Address:</label>
      <input type="text" id="address" v-model="form.contact.address" />
    </div>
    <div>
      <label for="phone">Phone:</label>
      <input type="text" id="phone" v-model="form.contact.phone" />
    </div>
  </div>
</template>
