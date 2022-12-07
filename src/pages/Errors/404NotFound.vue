<template>
  <section class="error">
    <h1 class="error__title">Error 404: Page not found</h1>

    <img
      alt=""
      aria-hidden="true"
      class="error__image"
      height="148"
      src="../../assets/images/404.svg"
      width="270"
    />

    <p class="error__description">
      Incorrect address or this page no longer exists
    </p>

    <RouterLink class="error__link" to="/">
      <p class="error__link--text">Go to main page</p>

      <img
        alt=""
        aria-hidden="true"
        class="error__link--arrow"
        height="9"
        src="../../assets/icons/arrow-right.svg"
        width="20"
      />
    </RouterLink>
  </section>
</template>

<script setup>
import { useHead } from "@vueuse/head";
import { RouterLink } from "vue-router";
import { PROJECT_NAME } from "~/constants/meta.js";

useHead({
  title: `Page not found | ${PROJECT_NAME}`,
});
</script>

<style scoped lang="sass">
.error
  display: flex
  flex-direction: column
  align-items: center
  margin-top: 30px
  padding: 30px 16px 100px
  border-radius: 8px
  text-align: center
  background-color: #ffffff

  @media (min-width: 768px)
    padding-top: 60px

  &__title
    margin-bottom: 20px
    font-weight: 800
    font-size: 18px

  &__image
    max-width: 270px
    width: 100%
    height: auto
    margin-bottom: 20px

    @media (min-width: 768px)
      max-width: 394px

    @media (min-width: 1170px)
      max-width: 553px

  &__description
    max-width: 401px
    margin-bottom: 30px


  &__link
    position: relative
    display: flex
    justify-content: space-around
    align-items: center
    padding: 21px 53px
    border-radius: 6px
    font-weight: 700
    font-size: 14px
    background-color: var(--button-background-color-blue)
    transition-property: background-color
    transition-duration: 0.2s
    transition-timing-function: ease-in-out

    @media (min-width: 768px)
      padding: 21px 40px

  &__link--text
    width: max-content
    margin-right: 11px

  &__link--arrow
    width: fit-content
    height: auto

  @media (any-pointer: fine)
    &__link:hover,
    &__link:focus,
    &__link:active
      background-color: var(--button-background-color-blue)
</style>
