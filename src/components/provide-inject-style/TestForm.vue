<script setup lang="ts">
import InjectTest from '@/components/provide-inject-style/InectTest.vue'
</script>
<template>
  <InjectTest v-slot="{ form }">
    <!-- {{ form.personal.first_name }} -->
    <!-- <div v-if="form"> -->
    <input v-model="form.personal.first_name" placeholder="First Name" />
    <!-- </div> -->
  </InjectTest>
</template>
