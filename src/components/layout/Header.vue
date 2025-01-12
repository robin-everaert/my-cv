<template>
    <header id="header" class="header w-100">
        <div class="sitebar-container pt-2 pb-2">
            <div class="container">
                <div class="row">
                    <div class="col-12 d-flex justify-content-between">
                        <div class="sitebar-contact d-flex flex-column align-items-start  justify-content-center">
                            <a href="tel:+614297881">06 14 29 78 81</a>
                            <a href="mailto:kibs8@proton.me">kibs8@proton.me</a>
                        </div>       
                        <SettingsManager /> 
                    </div>
                </div>
            </div>
            
        </div>
        <div class="title-container pt-3 pb-3">
            <h1>Everaert Robin</h1>
            <h2>{{ $t('header.job') }}</h2>
        </div>

        
  
      
        <NavBar />
         
    </header>
  </template>
  
  <script setup>
    import NavBar from './NavBar.vue';
    import SettingsManager from './SettingsManager.vue';
  </script>
  