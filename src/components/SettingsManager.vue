<template>
    <div class="settings-container d-flex justify-content-center align-items-center position-absolute">
        <div class="language-selector-container">
            <button v-if="locale === 'en'" @click="changeLanguage('fr')">🇫🇷</button>
            <button v-if="locale === 'fr'" @click="changeLanguage('en')">🇬🇧</button>
        </div>
        <button class="change-theme-btn"
        @click="toggleTheme">
            {{ currentTheme === 'dark' ? 'Light Mode' : 'Dark Mode' }}
        </button>
    </div>
</template>

<script setup>
    import { ref, onMounted } from 'vue';
    import { useI18n } from 'vue-i18n';

    // Theme
    const currentTheme = ref(localStorage.getItem('kibs-theme') || 'light');

    // Theme of start
    const applyTheme = () => {
    document.body.classList.remove('light-theme', 'dark-theme');
    document.body.classList.add(`${currentTheme.value}-theme`);
    };

    // Change theme
    const toggleTheme = () => {
    currentTheme.value = currentTheme.value === 'light' ? 'dark' : 'light';
    localStorage.setItem('kibs-theme', currentTheme.value);
    applyTheme();
    };

    // Language
    const { locale } = useI18n();
    const currentLanguage = ref(localStorage.getItem('kibs-language') || 'en');

    // Change language
    const changeLanguage = (lang) => {
    currentLanguage.value = lang;
    locale.value = lang;
    localStorage.setItem('kibs-language', lang);
    };

    onMounted(() => {
        applyTheme();
        locale.value = currentLanguage.value;
    });
</script>
