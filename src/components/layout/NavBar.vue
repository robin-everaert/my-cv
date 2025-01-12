<template>
    <nav class="navbar-container d-flex justify-content-center pt-3 pb-3">
      <router-link
        to="/"
        class="header-link"
        :class="{ active: isActive('/') }"
      >
        {{ $t('header.nav.home') }}
      </router-link>
      <span> - </span>
      <router-link
        to="/solar"
        class="header-link"
        :class="{ active: isActive('/e') }"
      >
        {{ $t('header.nav.personnal_project') }}
      </router-link>
      <span> - </span>
      <router-link
        to="/solar"
        class="header-link"
        :class="{ active: isActive('/p') }"
      >
        {{ $t('header.nav.work_project') }}
      </router-link>
    </nav>
  </template>

<script setup>
import { useRoute } from 'vue-router';

const route = useRoute();
const isActive = (path) => route.path === path;
</script>

  