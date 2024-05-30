<script setup lang="ts">
import { inject } from 'vue'
import { key } from '@/components/provide-inject-style/symbol'

const form = inject(key)
</script>

<template>
  <div>
    <h2>Personal Information</h2>
    <div>
      <label for="fullName">Full Name:</label>
      <div>
        <input type="text" id="fullName" v-model="form!.personal.fullName" />
      </div>
    </div>
    <div>
      <!-- Date of birth -->
      <label for="dob">Date of Birth:</label>
      <input type="date" id="dob" v-model="form!.personal.dob" />
    </div>
    <div>
      <!-- Gender selector -->
      <label for="gender">Gender:</label>
      <select id="gender" v-model="form!.personal.gender">
        <option value="Male">Male</option>
        <option value="Female">Female</option>
      </select>
    </div>
  </div>
</template>
