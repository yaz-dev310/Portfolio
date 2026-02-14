import { createI18n } from "vue-i18n";

export const i18n = createI18n({
    legacy: false,
    globalInjection: true,
    locale: 'fr', // Par défaut en français
    fallbackLocale: 'en',
    messages: {
        fr: {
            nav: { home: "Accueil", projects: "Projets", about: "À propos" },
            hero: { title: "Arouna", subtitle: "Développeur Full-stack" }
        },
        en: {
            nav: { home: "Home", projects: "Projects", about: "About" },
            hero: { title: "Arouna", subtitle: "Full-stack Developer" }
        }
    },
});

export function setLocale(locale) {
    i18n.global.locale.value = locale;
    localStorage.setItem('lang', locale);
    document.documentElement.setAttribute('lang', locale);
}