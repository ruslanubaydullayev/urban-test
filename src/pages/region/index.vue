<template>
  <div>
    <h4>Regions: </h4>
    <div class="flex flex-col gap-2">
      <div class="border border-blue-200 rounded p-3 flex justify-between" v-for="region in regions" :key="region.id">
        <div class="flex flex-col">
          <p>id: {{ region.name._id }}</p>
          <p>name: {{ region.name.uz }}</p>
          <p>created_at: {{ region.createdAt }}</p>
          <p>active: {{ region.isActive }}</p>
        </div>
        <div class="flex gap-2">
            <RouterLink :to="`/region/edit/${region._id}`">Edit</RouterLink>
            <RouterLink :to="`/region/delete/${region._id}`">Delete</RouterLink>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import {onMounted, ref} from 'vue'

import { useApi } from '@/composables/useApi.ts'
const $api = useApi()

const regions = ref()

onMounted(() => {
  fetchData()
})

async function fetchData() {
  if (regions.value) return
  try {
    const { data } = await $api.$get('/regions')
    regions.value = data.data.items
  } catch (error) {
    alert('Error' + error)
  }
}
</script>