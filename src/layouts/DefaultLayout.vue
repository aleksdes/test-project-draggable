<template>
  <TheHeader />

  <main class="content container">
    <RouterView />
  </main>

  <TheFooter />
</template>

<script setup>
import { RouterView } from "vue-router";

import TheFooter from "~/components/common/TheFooter/TheFooter.vue";
import TheHeader from "~/components/common/TheHeader/TheHeader.vue";
</script>

<style scoped lang="sass">
.content
  flex: 1 0 auto
</style>
