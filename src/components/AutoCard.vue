<template>
  <RouterLink :to="`/autos/${data?.id}`" class="p-2 md:p-5 flex flex-col items-center bg-[#F7F7F8] shadow-sm">
    <div class="hidden md:flex items-start justify-between w-full">
      <div class="flex items-center gap-2.5">
        <img :src="data?.logo" alt="logo" class="w-4 h-4 object-contain">
        <h4 class="text-blue-200 font-[300] text-[12px] leading-[12px]">{{ data?.company }}</h4>
      </div>
      <div class="flex flex-col gap-1.5 items-end">
        <span v-if="data?.isPredzakaz" class="bg-[#456AC9] rounded-[2px] px-1.5 uppercase text-white font-normal text-[8px]">
          Предзаказ
        </span>
        <span class="bg-white px-2 shadow-sm mt-1.5 leading-[10px] py-1 block font-[300] text-[9px]">
          Кредит от {{ data?.creditPercent }}%
        </span>
      </div>
    </div>
    <img src="/images/card-car.png" alt="car-img">
    <div class="md: flex flex-col justify-center items-center">
          <h5 class="text-[#050B20] font-normal text-sm text-center">{{data?.company}}</h5>
          <h6 class="text-[#050B20] font-normal text-[12px] text-center">от ${{data?.price}}</h6>
    </div>
    <div class="hidden md:flex items-center justify-between gap-2 w-full">
      <div class="flex flex-col items-start">
        <h5 class="font-normal text-[22px] leading-[27px]">{{data?.model}}</h5>
        <div class="flex items-start justify-center">
          <div class="flex items-center items-center gap-1">
            <h6 v-if="data?.complectation" class="font-[300] text-[8px] leading-[9px]">Комплектаций</h6><span class="font-normal text-lg leading-[20 px]">{{data?.complectation}}</span>
            <h6 v-if="data?.colors" class="font-[300] text-[8px] leading-[9px]">Цветов</h6><span class="font-normal text-lg leading-[20 px]">{{data?.colors}}</span>
          </div>
        </div>
        <button class="w-[30px] h-[30px] bg-gradient-to-r from-[#456AC9] to-[#66B2E4] rounded-full p-2.5 transition duration-200 hover:scale-[0.95]"><img src="/images/tarozi.svg" alt=""></button>
      </div>
      <div class="flex flex-col items-start">
        <span class="font-[300] text-[8px] leading-[8px]">от</span>
        <h5 class="font-normal text-[22px] leading-[27px]">${{data?.price}}</h5>
        <h5 class="font-normal text-[14px] leading-[18px] text-blue-800 mt-1">{{data?.priceInEuro}} ₴</h5>
        <button class="uppercase font-normal text-[8px] leading-[8px] bg-gradient-to-r from-[#456AC9] to-[#66B2E4] px-4 py-2.5 rounded-[40px] text-white tracking-[1px] mt-2 transition duration-200 hover:scale-[0.95]">Подробнее</button>
      </div>
    </div>
  </RouterLink>
</template>

<script setup>
    defineProps({
      data: {
        id: Number,
        logo: String,
        company: String,
        isPredzakaz: Boolean,
        creditPercent: Number,
        thumbnail: String,
        model: String,
        complectation: Number,
        colors: Number,
        price: Number,
      }
    })
</script>