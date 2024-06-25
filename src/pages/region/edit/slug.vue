<template>
  <div>{{region}}</div>
  <div class="container mx-auto">
      <div class="grid grid-cols-4 gap-2">
        <input class="rounded border border-blue p-2" type="text" v-model="form.nameUz">
        <input class="rounded border border-blue p-2" type="text" v-model="form.nameRu">
        <input class="rounded border border-blue p-2" type="text" v-model="form.nameEn">
        <div class="flex items-center justify-start gap-2">
          <label for="active">Active</label>
          <input class="rounded border border-blue p-2" id="active" type="checkbox" v-model="form.isActive">
        </div>
      </div>

      <button class="bg-blue-500 text-white p-2 rounded mt-2" @click="updateRegion">Update</button>
  </div>
</template>

<script lang="ts" setup>
import {onMounted, ref} from 'vue'
const $route = useRoute()
import { useApi } from '@/composables/useApi.ts'
import {useRoute} from "vue-router";
const $api = useApi()

const form = ref({
  nameUz: '',
  nameRu: '',
  nameEn: '',
  isActive: null
})

const region = ref()

onMounted(() => {
  fetchData()
})

function updateRegion() {
  $api.$patch(`/regions/${$route.params.id}`, {
    name: {
      uz: form.value.nameUz,
      ru: form.value.nameRu,
      en: form.value.nameEn
    },
    isActive: form.value.isActive
  })
    .then(() => {
      alert('Region updated')
    })
    .catch(() => {
      alert('Error')
    })
}

async function fetchData() {
  if (region.value) return
  try {
    const { data } = await $api.$get(`/regions/${$route.params.id}`)
    region.value = data
    form.value.nameUz = data.data.name.uz
    form.value.nameRu = data.data.name.ru
    form.value.nameEn = data.data.name.en
    form.value.isActive = data.data.isActive
  } catch (error) {
    alert('Error' + error)
  }
}
</script>