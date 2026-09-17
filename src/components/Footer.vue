```vue
<script setup>
import { ref } from 'vue';

const showContact = ref(false);

const toggleContact = () => {
  showContact.value = !showContact.value;
};
</script>

<template>
  <footer class="mt-[60px] py-10 border-t border-slate-200 text-center text-slate-400 text-[0.9rem]">
    <p>© 2024 Arouna Yazid — Conçu avec Vue.js</p>

    <div class="mt-4">
      <button
        @click="toggleContact"
        class="inline-block px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md transition-all duration-300 ease-in-out hover:bg-blue-700 hover:shadow-lg hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-75"
      >
        {{ showContact ? 'Fermer' : 'Me contacter' }}
      </button>
    </div>

    <!-- Coordonnées -->
    <div
      v-if="showContact"
      class="mt-5 flex flex-col sm:flex-row justify-center items-center gap-3"
    >
      <a
        href="mailto:yawarouna10@gmail.com"
        class="inline-block px-5 py-3 bg-slate-100 text-slate-700 rounded-lg font-medium hover:bg-slate-200 transition-all duration-300"
      >
        📧 Email
      </a>

      <a
        href="tel:+2290169312139"
        class="inline-block px-5 py-3 bg-slate-100 text-slate-700 rounded-lg font-medium hover:bg-slate-200 transition-all duration-300"
      >
        📞 Téléphone
      </a>

      <!-- LinkedIn ajouté -->
      <a
        href="https://www.linkedin.com/in/arouna-yazid-38836635b/"
        target="_blank"
        rel="noopener noreferrer"
        class="inline-block px-5 py-3 bg-slate-100 text-slate-700 rounded-lg font-medium hover:bg-slate-200 transition-all duration-300"
      >
        💼 LinkedIn
      </a>
    </div>
  </footer>
</template>
```
 