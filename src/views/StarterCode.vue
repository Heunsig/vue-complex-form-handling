<script setup lang="ts">
import VueJsonPretty from 'vue-json-pretty'
import 'vue-json-pretty/lib/styles.css'

import PersonalInfoForm from '@/components/PersonalInfoForm.vue'
import ContactInfoForm from '@/components/ContactInfoForm.vue'
</script>
<template>
  <div class="wrapper">
    <div>
      <form>
        <div>
          <PersonalInfoForm />
        </div>
        <div>
          <ContactInfoForm />
        </div>
        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
    <div>
      <vue-json-pretty :data="{ key: 'value' }" />
    </div>
  </div>
</template>
