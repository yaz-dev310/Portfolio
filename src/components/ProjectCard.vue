<script setup>
import { ExternalLink, Layers, ShieldCheck } from 'lucide-vue-next'
defineProps(['project'])
</script>

<template>
  <div class="bg-white rounded-[20px] border border-slate-200 overflow-hidden flex flex-col transition-all duration-500 ease-[cubic-bezier(0.175,0.885,0.32,1.275)] hover:-translate-y-2 hover:shadow-2xl hover:border-blue-500">
    
    <div class="relative h-[200px] overflow-hidden">
      <img :src="project.image" alt="Aperçu du projet" class="w-full h-full object-cover" />
      <div class="absolute top-3 right-3 bg-slate-900/80 backdrop-blur-sm px-3 py-1 rounded-full">
        <span class="text-white text-[0.75rem] font-bold">{{ project.tech.length }} Techs</span>
      </div>
    </div>

    <div class="p-6 flex-grow flex flex-col">
      <div class="flex justify-between items-start mb-3">
        <h4 class="text-xl font-extrabold text-slate-900 m-0 leading-tight">
          {{ project.title }}
        </h4>
        <div class="flex">
          <ShieldCheck v-if="project.title.includes('Gel')" :size="18" class="text-blue-500" />
          <Layers v-else :size="18" class="text-orange-500" />
        </div>
      </div>

      <p class="text-[0.95rem] text-slate-600 leading-relaxed mb-6 flex-grow">
        {{ project.description }}
      </p>

      <div class="flex justify-between items-end pt-4 border-t border-slate-100">
        <div class="flex flex-wrap gap-2">
          <span 
            v-for="tech in project.tech" 
            :key="tech" 
            class="bg-slate-100 text-slate-800 px-2.5 py-1 rounded-md text-[0.7rem] font-bold uppercase border border-slate-200"
          >
            {{ tech }}
          </span>
        </div>
        <a :href="project.link" target="_blank" class="text-blue-500 transition-colors duration-200 hover:text-blue-700">
          <ExternalLink :size="20" />
        </a>
      </div>
    </div>
  </div>
</template>