<script setup lang="ts">
import { h, provide, useSlots } from 'vue'
import { key } from '@/components/provide-inject-style/symbol'

const props = defineProps<{
  form: any
}>()

provide(key, props.form)

const slots = useSlots()

function render() {
  if (!slots.default) return

  return slots?.default().map((element) => {
    return h(element)
  })
}
</script>

<template>
  <render />
</template>
