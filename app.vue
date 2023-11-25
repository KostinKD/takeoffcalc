<template>
  <div>
  <NuxtLayout>
    <Header></Header>
    <NuxtPage/>
  </NuxtLayout>
  </div>
</template>
<script setup>
import Header from "./components/Header.vue";
</script>

<style lang="scss">
@import "primeflex/primeflex.css";
</style>