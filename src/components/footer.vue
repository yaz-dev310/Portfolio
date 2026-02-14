<script setup>
import emailjs from '@emailjs/browser';
import { ref } from 'vue';

const isSending = ref(false);

const sendEmail = () => {
  if (isSending.value) return;
  isSending.value = true;

  const templateParams = {
    to_name: "Yazid",
    from_name: "Visiteur du Portfolio",
    message: "Un recruteur a cliqué sur le bouton de contact.",
  };

  // On utilise les valeurs réelles au lieu des variables .env pour contourner le bug
  emailjs.send(
    import.meta.env.VITE_MAIL_SERVICE_ID, 
    import.meta.env.VITE_MAIL_TEMPLATE_ID, 
    templateParams,
    import.meta.env.VITE_MAIL_PUBLIC_KEY
  )
  .then(() => {
    alert("C'est envoyé !");
  })
  .catch((err) => {
    console.error("Détails de l'erreur:", err);
    alert("Erreur EmailJS : " + (err.text || "Erreur inconnue"));
  })
  .finally(() => {
    isSending.value = false;
  });
};
</script>

<template>
  <footer class="mt-[60px] py-10 border-t border-slate-200 text-center text-slate-400 text-[0.9rem]">
    <p>© 2024 Arouna Yazid — Conçu avec Vue.js</p>
    
    <div class="mt-4">
      <button 
        @click="sendEmail"
        :disabled="isSending"
        class="inline-block px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md transition-all duration-300 ease-in-out hover:bg-blue-700 hover:shadow-lg hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-75 disabled:bg-slate-400 disabled:translate-y-0 disabled:shadow-none disabled:cursor-not-allowed"
      >
        <span v-if="isSending" class="flex items-center gap-2">
          <svg class="animate-spin h-4 w-4 text-white" viewBox="0 0 24 24">
            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4" fill="none"></circle>
            <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          Envoi...
        </span>
        <span v-else>Me contacter</span>
      </button>
    </div>
  </footer>
</template>