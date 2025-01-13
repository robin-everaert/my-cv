import { defineStore } from "pinia";
import { ref } from "vue";
import { useI18n } from "vue-i18n";

export const useSettingsStore = defineStore("settings", () => {

    /**
     * LANGUAGE
     */
    const { locale } = useI18n();
    const currentLanguage = ref(localStorage.getItem("kibs-language") || "en");
    const changeLanguage = (lang) => {
        currentLanguage.value = lang;
        locale.value = lang;
        localStorage.setItem("kibs-language", lang);
    };

  /**
   * THEME
   */
  const currentTheme = ref(localStorage.getItem("kibs-theme") || "light");
  const applyTheme = () => {
    document.body.classList.remove("light-theme", "dark-theme");
    document.body.classList.add(`${currentTheme.value}-theme`);
  };
  const toggleTheme = () => {
    currentTheme.value = currentTheme.value === "light" ? "dark" : "light";
    localStorage.setItem("kibs-theme", currentTheme.value);
    applyTheme();
  };

  return {
    currentLanguage,
    changeLanguage,
    currentTheme,
    toggleTheme,
    applyTheme,
  };
});
