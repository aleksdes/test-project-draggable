<template>
  <footer class="footer container">
    <div class="container footer__container">
      <div class="footer__social">
        <TheFooterSocial />
      </div>
    </div>
  </footer>
</template>

<script setup>
import TheFooterSocial from "./TheFooterSocial.vue";
</script>

<style scoped lang="sass">
.footer
  flex: 0 0 auto

  @media (min-width: 1170px)
    margin-top: 20px
    border-top: 1px solid var(--border-color-primary)

    &__container
      display: flex
      flex-direction: column
      justify-content: space-between

  &__social
    border-top: 1px solid var(--gray-200)
    padding: 40px 0 20px
</style>
