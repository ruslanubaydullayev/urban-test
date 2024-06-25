<template>
  <div>
    {{ regions }}
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

import { useApi } from '@/composables/useApi.ts'
const $api = useApi()

const regions = ref()

async function fetchData() {
  if (regions.value) return
  try {
    const { data } = await $api.$get('/regions')
    regions.value = data
  } catch {
    alert('Error')
  }
}
</script>