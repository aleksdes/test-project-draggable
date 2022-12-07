<template>
  <div class="not-found">
    <img
      alt=""
      class="not-found__img"
      src="@/assets/images/not-found-img.png"
    />

    <p class="not-found__description">
      {{ text }}
    </p>
  </div>
</template>

<script setup>
defineProps({
  text: {
    default: "...Ooops! Nothing found. Try searching differently",
    type: String,
  },
});
</script>

<style scoped lang="sass">
.not-found
  display: flex
  flex-direction: column
  justify-content: flex-start

  &__img
    width: 66px
    height: 75px
    margin: 0 auto

  &__description
    max-width: 240px
    margin: 14px auto 0
    font-weight: 600
    font-size: 14px
    color: #aabdcf
    text-align: center
</style>
