<template>
    <div class="settings-container d-flex justify-content-center align-items-center">
        <div class="language-selector-container">
            <button v-if="locale === 'en'" @click="changeLanguage('fr')" class="p-0">
                <img src="@/assets/images/flag-fr.png" class="img-fluid" alt="Flag FR" />
            </button>
            <button v-if="locale === 'fr'" @click="changeLanguage('en')" class="p-0">
                <img src="@/assets/images/flag-en.png" class="img-fluid" alt="Flag EN" />
            </button>
        </div>
        <button class="change-theme-btn ms-2"
        @click="toggleTheme">
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
