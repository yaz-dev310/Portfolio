<script setup>
const skillGroups = [
  {
    category: 'Frontend',
    skills: [
      { name: 'VueJs', color: '#42b883', textColor: '#064e3b', bgColor: '#d1fae5' },
      { name: 'ReactJs', color: '#61dafb', textColor: '#083344', bgColor: '#e0f7ff' },
      { name: 'Tailwindcss', color: '#38bdf8', textColor: '#0c4a6e', bgColor: '#f0f9ff' },
      { name: 'Html/Css', color: '#e34f26', textColor: '#450a0a', bgColor: '#fef2f2' }
    ]
  },
  {
    category: 'Backend & Data',
    skills: [
      { name: 'Laravel', color: '#ff2d20', textColor: '#450a0a', bgColor: '#fff1f2' },
      { name: 'MySQL', color: '#4479a1', textColor: '#172554', bgColor: '#eff6ff' }
    ]
  },
  {
    category: 'Outils',
    skills: [
      { name: 'Git', color: '#f05032', textColor: '#450a0a', bgColor: '#fef2f2' },
      { name: 'Github', color: '#181717', textColor: '#0f172a', bgColor: '#f1f5f9' }
    ]
  }
]
</script>

<template>
  <div class="p-1">
    <h3 class="text-[0.85rem] uppercase tracking-wider text-slate-500 mb-5 font-bold">
      Stack Technique
    </h3>
    
    <div v-for="group in skillGroups" :key="group.category" class="mb-5">
      <h4 class="text-[0.75rem] text-slate-400 mb-2.5 font-semibold">
        {{ group.category }}
      </h4>
      
      <div class="flex flex-wrap gap-2">
        <div 
          v-for="skill in group.skills" 
          :key="skill.name" 
          class="flex items-center gap-2 px-3 py-1.5 rounded-lg border text-[0.8rem] font-bold transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md"
          :style="{ 
            backgroundColor: skill.bgColor, 
            borderColor: skill.color,
            color: skill.textColor 
          }"
        >
          <span 
            class="w-1.5 h-1.5 rounded-full" 
            :style="{ backgroundColor: skill.color }"
          ></span>
          <span>{{ skill.name }}</span>
        </div>
      </div>
    </div>
  </div>
</template>