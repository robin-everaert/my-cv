<template>
    <header id="header" class="header bg-dark">
      <nav class="navbar navbar-expand-lg navbar-dark">
        <div class="container-fluid">
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item">
                <router-link to="/" class="nav-link">{{ $t('header.nav.home') }}</router-link>
              </li>
              <li>
                <router-link to="/solar" class="nav-link">{{ $t('header.nav.about') }}</router-link>
              </li>
            </ul>
          </div>
        </div>
      </nav>     
      <SettingsManager /> 
    </header>
  </template>
  
  <script setup>
    import SettingsManager from './SettingsManager.vue';
  </script>
  