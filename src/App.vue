<script setup>
import Header from './components/Header.vue'
import Who from './components/Who.vue'
import DevStack from './components/DevStack.vue'
import ProjectCard from './components/ProjectCard.vue'
import Footer from './components/Footer.vue'
import { profileData } from './data.js'
</script>

<template>
  <div class="flex flex-col min-h-screen bg-[#f1f5f9] font-['Inter'] text-[#1e293b]">
    
    <Header />
    
    <main class="flex-1 w-full max-w-[1000px] mx-auto my-10 px-5">
      
      <section class="grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-5 mb-[50px]">
        <Who class="bg-white p-[30px] rounded-[24px] border border-slate-200 shadow-sm" />
        <DevStack class="bg-white p-[30px] rounded-[24px] border border-slate-200 shadow-sm" />
      </section>

      <section>
        <h3 class="text-[0.9rem] uppercase tracking-wider text-slate-500 mb-[25px] font-bold">
          Projets Sélectionnés
        </h3>
        
        <div class="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-5">
          <ProjectCard 
            v-for="project in profileData.projects" 
            :key="project.title" 
            :project="project" 
          />
        </div>
      </section>
      
    </main>

    <Footer />
  </div>
</template>

<style>
::-webkit-scrollbar {
  width: 12px;
  height: 12px;
}

::-webkit-scrollbar-track {
  background: #F2FDFF;
}

::-webkit-scrollbar-thumb {
  background: rgb(37 99 235);
}

::-webkit-scrollbar-thumb:hover {
  background: rgb(37 99 235 / 0.7);
}
</style>