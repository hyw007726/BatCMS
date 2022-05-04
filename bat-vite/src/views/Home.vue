<template>
  <v-header />
  <v-sidebar />
  <router-view></router-view>
  <div>Home</div>
</template>

<script setup>
import vHeader from "../components/Header.vue";
import vSidebar from "../components/Sidebar.vue";
</script>

<style></style>
