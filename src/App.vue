<template>
    <div id="app-container" class="app-container">
       <Header />
       <router-view />
       <Footer />
    </div>
  </template>
  
  <script setup>
  import Header from "./components/layout/Header.vue";
  import Footer from "./components/layout/Footer.vue";


import { onMounted } from "vue";
import { useSettingsStore } from "@/store/settings";

const settingsStore = useSettingsStore();

onMounted(() => {
    settingsStore.changeLanguage(settingsStore.currentLanguage);
    settingsStore.applyTheme(); 
});


</script>
  