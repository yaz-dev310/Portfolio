<script setup>
import { profileData } from '../data.js'
</script>

<template>
  <div class="p-1">
    <div class="flex justify-between items-center mb-5">
      <span class="bg-green-50 text-green-800 px-3 py-1.5 rounded-full text-[0.7rem] font-bold uppercase border border-green-100">
        Disponible Immédiatement
      </span>
      <div class="flex gap-2">
        <span class="text-[0.7rem] font-semibold bg-slate-50 border border-slate-200 px-2 py-0.5 rounded-md text-slate-500">
          🇫🇷 FR
        </span>
        <span class="text-[0.7rem] font-semibold bg-slate-50 border border-slate-200 px-2 py-0.5 rounded-md text-slate-500">
          🇬🇧 EN
        </span>
      </div>
    </div>

    <h1 class="text-[2.8rem] max-sm:text-[2rem] m-0 mb-[15px] leading-none text-slate-900 font-bold">
      {{ profileData.title }}
    </h1>
    <p class="text-[1.1rem] text-slate-600 mb-[30px] max-w-[90%] leading-relaxed">
      {{ profileData.bio }}
    </p>

    <div class="flex gap-10 max-sm:gap-5 pt-5 border-t border-slate-100">
      <div class="flex flex-col"> 
        <strong class="text-[1.1rem] text-slate-900 font-bold">Expertise</strong>
        <span class="text-[0.85rem] text-slate-500 font-medium">Développement Frontend & UI/UX</span>
      </div>
      <div class="flex flex-col">
        <strong class="text-[1.1rem] text-slate-900 font-bold">Formation</strong>
        <span class="text-[0.85rem] text-slate-500 font-medium">Bachelor IT (Accra)</span>
      </div>
    </div>
  </div>
</template>