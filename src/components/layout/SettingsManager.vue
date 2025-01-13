<template>
    <div class="settings-container d-flex justify-content-center align-items-center">
        <div class="language-selector-container">
            <button class="p-0"
            v-if="settingsStore.currentLanguage === 'en'" @click="settingsStore.changeLanguage('fr')">
                <img src="@/assets/images/flag-fr.png" class="img-fluid" alt="Flag FR" />
            </button>
            <button class="p-0"
            v-if="settingsStore.currentLanguage === 'fr'" @click="settingsStore.changeLanguage('en')">
                <img src="@/assets/images/flag-en.png" class="img-fluid" alt="Flag EN" />
            </button>
        </div>
        <button class="change-theme-btn ms-2"
        @click="settingsStore.toggleTheme">
        </button>
    </div>
</template>

<script setup>
    import { useSettingsStore } from "@/store/settings";
    const settingsStore = useSettingsStore();
</script>
