<template>
  <h3>Create region</h3>
  <form @submit.prevent="submit">
    <div class="grid grid-cols-3 gap-2 mt-3">
      <input class="rounded border border-blue p-2" type="text" v-model="form.uz" placeholder="uz" required>
      <input class="rounded border border-blue p-2" type="text" v-model="form.ru" placeholder="ru" required>
      <input class="rounded border border-blue p-2" type="text" v-model="form.en" placeholder="en" required>
    </div>
    <div class="flex items-end justify-end mt-3"><button class="border border-black rounded p-2" type="submit">Create</button></div>
  </form>



</template>


<script lang="ts" setup>
import { ref } from 'vue'
import { useApi } from '@/composables/useApi.ts'
const $api = useApi()
const form = ref({
  uz: '',
  ru: '',
  en: ''
})

function submit() {
  $api.$post('/regions', {
    name: {
      uz: form.value.uz,
      ru: form.value.ru,
      en: form.value.en
    }
  })
    .then(() => {
      alert('Region created')
    })
    .catch(() => {
      alert('Error')
    })
}
</script>