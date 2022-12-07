<template>
  <div class="wrapper-header">
    <p class="title">{{ title }}</p>
  </div>
</template>

<script setup>
import { defineProps } from "vue";
import { useHead } from "@vueuse/head";

defineProps({
  title: {
    default: "",
    type: String,
  },
});

useHead({
  title: "Index",
});
</script>

<style scoped lang="sass">
.wrapper-header
  width: 100%
  background-color: var(--gray-50)
  padding: 15px 25px
  border-radius: 6px

.title
  font-size: 16px
  font-weight: 500
</style>
