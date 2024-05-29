<script setup lang="ts">
import { h, inject, useSlots } from 'vue'
import { key } from '@/components/provide-inject-style/symbol'

const slots = useSlots()
const form = inject(key)

// defineSlots<{
//   default: (props: { form: typeof form.value }) => any[]
// }>()

function render() {
  if (!slots.default) return

  return slots?.default({ form }).map((element) => {
    return h(element)
  })
}
</script>
<template>
  <render />
</template>
