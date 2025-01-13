<template>
    <main class="main" id="home-main">
        <div class="container">
            <!-- Presentation -->
            <div class="row">
                <h1>{{ $t('home.presentation_title') }}</h1>
                <div class="presentation-container col-12 d-flex justify-content-center align-items-center">
                    <div class="presentation-content">
                        <p>{{ $t('home.presentation.p1') }}</p>    
                        <p>{{ $t('home.presentation.p2') }}</p>
                        <p>{{ $t('home.presentation.p3') }}</p>  
                    </div>
                </div>
            </div>
            <!-- download -->
            <div class="row m-0">
                <div class="download-cv-container col-12 d-flex justify-content-center align-items-center mt-2">
                    <a href="/cv_everaert_robin-en.pdf" download="cv_everaert_robin-en.pdf"
                    v-if="settingsStore.currentLanguage === 'en'"
                    >{{ $t('home.download_cv') }}</a>
                    <a href="/cv_everaert_robin-fr.pdf" download="cv_everaert_robin-fr.pdf"
                    v-if="settingsStore.currentLanguage === 'fr'"
                    >{{ $t('home.download_cv') }}</a>
                </div>
            </div>
            <hr class="hr" />
            <!-- Skills -->
             <div class="row skills-container">
                <h1>{{ $t('home.skills_title') }}</h1>
                <Skills />
             </div>
        </div>

        
    </main>
</template>

<script setup>
    import { useSettingsStore } from "@/store/settings";
    const settingsStore = useSettingsStore();
    import Skills from "../Skills.vue";
</script>
