<template>
  <div class="header-tools">
    <div class="header-tools__avatar">
      <img alt="" height="31" src="@/assets/images/my.jpg" />
    </div>
    <div class="header-tools__info info">
      <p class="info__username">Киселев Алексей</p>
      <p class="info__description">Frontend Vue2/3 developer</p>
    </div>
  </div>
</template>

<style scoped lang="sass">
.header-tools
  display: grid
  grid-gap: 20px
  grid-auto-flow: column
  align-items: center

  &__avatar
    width: 50px
    height: 50px
    border-radius: 50%
    object-fit: cover
    background-color: transparent
    display: inline-flex
    align-items: center
    justify-content: center
    overflow: hidden

    img
      width: 100%
      height: 100%
      border-radius: 50%

.info
  display: flex
  flex-direction: column

  &__username
    font-size: 16px
    font-weight: bold

  &__description
    font-size: 12px
    color: var(--gray-400)
</style>
