<template>
  <Suspense>
    <Component :is="layout">
      <RouterView />
    </Component>
  </Suspense>
</template>

<script setup>
import { useHead } from "@vueuse/head";
import { computed, onMounted } from "vue";
import { useRoute } from "vue-router";

import { PROJECT_NAME } from "~/constants/meta.js";

const route = useRoute();

const layout = computed(() => route.meta.layout || "DefaultLayout");

useHead({
  title: PROJECT_NAME,
});

onMounted(() => {
  const { body, documentElement } = document;
  const scrollbarWidth = window.innerWidth - documentElement.clientWidth;

  body.style.setProperty("--scrollbar-width", `${scrollbarWidth}px`);
});
</script>

<style lang="scss"></style>
