<template>
  <div>
    <div class="flex items-center justify-between">
      <h4>Regions: </h4>
      <RouterLink to="/region/create">Create</RouterLink>
    </div>
    <div class="flex flex-col gap-2 mt-2">
      <div class="rounded p-3 flex justify-between bg-white" v-for="region in regions" :key="region.id">
        <div class="flex flex-col">
          <p>id: {{ region.name._id }}</p>
          <p>name: {{ region.name.uz }}</p>
          <p>created_at: {{ region.createdAt }}</p>
          <p>active: {{ region.isActive }}</p>
        </div>
        <div class="flex items-center justify-center gap-2">
            <RouterLink :to="`/region/edit/${region._id}`">Edit</RouterLink>
            <button @click="deleteRegion(region._id)">Delete</button>
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

function deleteRegion(id: string) {
  $api.$delete(`/regions/${id}`)
    .then(() => {
      alert('Region deleted')
      regions.value = regions.value.filter(region => region._id !== id)
    })
    .catch((err) => {
      alert(`Error:${err}`)
    })
}
</script>