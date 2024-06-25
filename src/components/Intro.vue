<template>
  <div class="bg-blue-200 rounded-2xl px-2.5 py-3 mt-2 w-full">
    <div class="flex gap-3 justify-between">
        <div class="flex flex-col lg:p-5">
          <div class="flex items-center justify-start gap-4">
            <div class="bg-gray-500 rounded-lg lg:rounded-2xl w-10 h-10  lg:w-16 lg:h-16">
              <img :src="singleCar?.logo" class="w-full object-contain" alt="logo-single-car">
            </div>
            <h3 class="text-2xl lg:text-[38px] !text-white font-bold leading-[48px]">{{ singleCar?.model }}</h3>
          </div>
          <img :src="singleCar?.thumbnail" alt="thumbnail-photo" class="lg:hidden w-full h-auto object-cover rounded-2xl mt-5">
          <p class="text-white font-normal text-base lg:text-[22px] leading-[23px] mt-8">{{singleCar?.description}}</p>
        </div>
      <img :src="singleCar?.thumbnail" alt="thumbnail-photo" class="hidden lg:block max-w-[620px] h-auto object-cover rounded-2xl">
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const singleCar = ref({
  model: 'BYD',
  description: 'BYD - китайский конгломерат, включающий в себя производителя автомобилей BYD Auto и производителя аккумуляторов и электроники BYD Electronic.',
  logo: '/images/logo1.png',
  thumbnail: '/images/car1.png'
})
</script>