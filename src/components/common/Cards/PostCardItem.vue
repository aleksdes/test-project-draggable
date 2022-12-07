<template>
  <div class="card-post">
    <p class="card-post__id">{{ post.id || "68684" }}</p>
    <div class="card-post__content">
      <p class="card-post__title">{{ post.title || "wefdwsfcsdfcsdf" }}</p>
      <p class="card-post__body">
        {{ post.body || "wefdwsfcsdfcsdf dscsf sdfs fsfsfsdfs d" }}
      </p>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from "vue";

defineProps({
  post: {
    default() {
      return {};
    },
    type: Object,
  },
});
</script>

<style scoped lang="sass">
.card-post
  height: fit-content
  width: 100%
  display: flex
  align-items: center
  padding: 15px 25px
  border-radius: 6px
  border: 1px solid var(--gray-100)

  @media (any-pointer: fine)
    &:hover
      box-shadow: 0 0 20px rgba(0,0,0,0.05)

  &__id
    font-size: 14px
    font-weight: 500
    margin-right: 30px

  &__title
    font-size: 16px
    margin-bottom: 5px
    font-weight: 600

  &__body
    font-size: 14px
    color: var(--gray-500)
</style>
