<template>
  <header class="header">
    <div class="container header__container">
      <TheHeaderLogo />
      <TheHeaderAvatars />
    </div>
  </header>
</template>

<script setup>
import TheHeaderLogo from "./components/TheHeaderLogo";
import TheHeaderAvatars from "./components/TheHeaderAvatars";
</script>

<style scoped lang="sass">
.header
  position: sticky
  top: 0
  z-index: var(--z-index-header)
  margin-bottom: 20px
  padding: 16px 0
  border-bottom: 1px solid #e7f0fe
  background-color: var(--white)
  box-shadow: 0 0 20px rgba(0,0,0,0.05)

  @media (min-width: 1170px)
    padding: 12px 0
    border-bottom: none
    box-shadow: 0 0 40px rgb(5 12 20 / 0.06)

  &__container
    display: flex
    justify-content: space-between
    align-items: center
</style>
