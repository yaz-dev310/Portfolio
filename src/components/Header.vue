<script setup>
import { Github, Linkedin, Mail, FileText } from 'lucide-vue-next'
import { profileData } from '../data.js'
</script>

<template>
  <header class="h-20 bg-[#0f172a] border-b border-white/10 sticky top-0 z-[1000] flex items-center">
    <div class="w-full max-w-[1100px] mx-auto px-6 flex justify-between items-center">
      
      <div class="flex items-center gap-2.5 font-bold text-white">
        <span class="w-2.5 h-2.5 bg-[#3b82f6] rounded-full"></span>
        <span>{{ profileData.name }}</span>
      </div>
      
      <div class="flex items-center gap-6">
        <div class="flex gap-4 items-center border-r border-white/20 pr-6 max-[500px]:pr-2 max-[500px]:gap-2">
          <a :href="profileData.socials.github" target="_blank" class="text-[#94a3b8] hover:text-[#3b82f6] transition-colors">
            <Github :size="20"/>
          </a>
          <a :href="profileData.socials.linkedin" target="_blank" class="text-[#94a3b8] hover:text-[#3b82f6] transition-colors">
            <Linkedin :size="20"/>
          </a>
          <a :href="'mailto:' + profileData.email" class="text-[#94a3b8] hover:text-[#3b82f6] transition-colors">
            <Mail :size="20"/>
          </a>
        </div>
        
        <a 
          :href="profileData.cvLink" 
          class="bg-[#3b82f6] text-white px-4 py-2.5 rounded-lg font-semibold text-sm transition-all hover:bg-[#2563eb]"
          download="Yazid - CV- FR.pdf"
        >
          <FileText :size="18" class="inline mr-1"/>
          <span>CV</span>
        </a>
      </div>
    </div>
  </header>
</template>