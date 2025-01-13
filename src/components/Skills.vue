<template>
    <div class="card k__card" style="width: 15rem;">
    <div class="card-body d-flex flex-column justify-content-center align-items-center">
        <div class="logo-container d-flex flex-column align-items-center justify-content-between">
            <img src="@/assets/images/logos/vue.png" class="img-fluid" alt="Vue Js logo">
            <span>Vue.Js</span>
        </div>

        <div class="skill-bar-container mt-3">
            <span class="skill-bar" :style="getSkillBarStyle(80)"></span>
        </div>
        <a href="#" class="btn skill-btn mt-4">Mon dernier projet</a>
    </div>
    </div>
</template>

<script setup>
    import { ref } from "vue";

    // Skills Progress Bar
    const skillsPercentage = ref(50);
    const getSkillBarStyle = (percent) => {
        return {
            width: `${percent}%`,
            
        };
        };
</script>