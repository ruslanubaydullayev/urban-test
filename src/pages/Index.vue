<template>
  <div>
    <Intro />
    <Info />
    <br>
    <div class="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-2 md:gap-6">
      <AutoCard v-for="(car,i) in [...cars, ...cars, ...cars, ...cars]" :key="i" :data="car" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

import Intro from '@/components/Intro.vue'
import Info from '@/components/Info.vue'
import AutoCard from '@/components/AutoCard.vue'
import { useApi } from '@/composables/useApi.ts'
import { useMainStore } from '@/store'

const value = ref('')
const store = useMainStore()
const $api = useApi()

const cars = ref([
  {
    id: 1,
    logo: '/images/aito-logo.png',
    company: 'AITO',
    isPredzakaz: true,
    creditPercent: '0.01',
    thumbnail: '/images/card-car.png',
    model: 'M5',
    complectation: 5,
    colors: 4,
    price: 34500,
    priceInEuro: 1230000
  }
])

</script>
