<template>
  <div>
    <div class="info-section flex flex-col items-center lg:justify-center w-full h-[220px] md:h-[476px] rounded-t-[20px] mt-14">
      <h2 class="font-normal text-2xl mt-12 md:mt-0 md:text-[60px] leading-[40px] text-center text-white">Discover the new Kia</h2>
      <div class="flex items-center justify-center w-full md:mt-7 gap-4">
        <h5 class="text-white font-normal text-[8px] md:text-[20px] leading-[20px] relative"><span class="absolute -top-2 left-0 bg-white h-[3px] w-[170px]"></span>SUV / CUV / MPV</h5> <button class="hidden md:block border border-white rounded-full text-white px-2 py-0.5 ml-2 text-[10px] transition duration-200 hover:bg-white/20">Show all</button>
        <div class="flex items-center gap-2"><h5 class="text-[#D0D0D0] font-normal text-[8px] md:text-[20px] leading-[20px]">Hybrid / Electric</h5><span class="bg-white/20 text-[12px] text-white rounded-full hidden md:flex items-center justify-center w-[14px] h-[14px] p-3">9</span></div>
        <div class="flex items-center gap-2"><h5 class="text-[#D0D0D0] font-normal text-[8px] md:text-[20px] leading-[20px]">Sedan</h5><span class="bg-white/20 text-[12px] text-white rounded-full hidden md:flex items-center justify-center w-[14px] h-[14px] p-3">15</span></div>
        <RouterLink to="" class="text-[#D0D0D0] font-normal text-[8px] md:text-[20px] leading-[20px] flex items-center group">All Vehicles <span><img class="hidden md:block ml-1 transition duration-200 group-hover:translate-x-1" src="/images/arrow-right.svg" alt="arrow-right"></span></RouterLink>
      </div>
    </div>
    <img  src="/images/slider-image.png" class="w-full h-auto object-cover -mt-[40px] md:-mt-[170px]" alt="slider">

    <div class="w-full md:w-3/4 mx-auto grid grid-cols-4 mt-4">
      <div class="flex flex-col items-start justify-end md:justify-start">
        <h4 class="text-[#05141F] font-normal text-xs md:text-base leading-[16px]">2024</h4>
        <h2 class="text-[#05141F] font-semibold lg:font-normal text-[20px] md:text-[48px] leading-[48px] mt-2">Telluride</h2>
        <RouterLink to="" class="md:hidden text-[#05141F] font-normal text-[12px] leading-[12px] underline transition duration-200 hover:text-blue-800">Disclaimers</RouterLink>
        <h6 class="text-gray-100 font-normal text-[8px] md:text-[13px] leading-[12px] mt-4 uppercase">Starting at</h6>
        <h3 class="text-[#05141F] font-semibold lg:font-normal text-sm md:text-[21px] leading-[24px] md:mt-1"><span class="text-[12px]">$</span>32,790</h3>
      </div>

      <div class="flex flex-col items-start justify-end md:justify-start">
        <RouterLink to="" class="hidden md:block text-[#05141F] font-normal text-[12px] leading-[12px] underline mt-10 transition duration-200 hover:text-blue-800">Disclaimers</RouterLink>
        <h6 class="text-gray-100 font-normal text-[8px] md:text-[13px] leading-[12px] mt-4 uppercase">Power up to</h6>
        <h3 class="text-[#05141F] font-semibold lg:font-normal text-sm md:text-[21px] leading-[24px] md:mt-1"><span class="text-[12px]">$</span>291 hp</h3>

      </div>

      <div class="flex flex-col items-start justify-end md:justify-start">
        <h6 class="text-gray-100 font-normal text-[8px] md:text-[13px] leading-[12px] mt-4 uppercase">MPG UP TO</h6>
        <h3 class="text-[#05141F] font-semibold lg:font-normal text-sm md:text-[21px] leading-[24px] md:mt-1"><span class="text-[12px]">$</span>20-22 MPG Comb.</h3>
      </div>

      <div class="hidden md:flex flex-col">
        <RouterLink to="" class="text-[#05141F] font-normal text-[16px] leading-[16px] mt-2 transition duration-200 hover:text-blue-800">
          Build yours >
        </RouterLink>
        <h3 class="text-gray-700 text-[40px] leading-[40px] mt-1">Все модели</h3>
        <button class="font-normal text-[10px] transition duration-200 hover:scale-[0.95] leading-[8px] bg-gradient-to-r from-[#456AC9] to-[#66B2E4] px-8 py-3.5 rounded-[10px] text-white mt-3 w-full">Learn more</button>
      </div>
    </div>
  </div>
</template>

<style>
  .info-section {
    background-image: url("public/images/bg-transparent.png");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
  }
</style>