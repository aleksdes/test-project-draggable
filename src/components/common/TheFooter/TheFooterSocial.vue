<template>
  <div class="social">
    <a class="social__item" href="mailto:kurbatov.lex@gmail.com">
      <div class="social__icon social__icon--email">
        <img alt="" height="31" src="@/assets/images/mail.png" />
      </div>
      kurbatov.lex@gmail.com
    </a>

    <div class="social__list">
      <a
        class="social__item"
        href="https://t.me/CryptoKisel"
        title="Telegram:+79513685528"
        target="_blank"
      >
        <div class="social__icon social__icon--telegram">
          <img alt="" height="50" src="@/assets/images/telegram.png" />
        </div>
        CryptoKisel
      </a>
    </div>
  </div>
</template>

<style scoped lang="sass">
.social
  display: inline-flex
  align-items: center
  justify-content: space-between
  width: 100%

  &__item
    display: flex
    flex-direction: row
    align-items: center

  &__icon
    border-radius: 50%
    object-fit: cover
    background-color: transparent
    display: inline-flex
    align-items: center
    justify-content: center

    img
      width: 100%
      height: 100%
      object-fit: contain

  &__icon--email
    width: 30px
    height: 30px
    margin-right: 15px

  &__icon--telegram
    width: 40px
    height: 40px
    margin-right: 10px
</style>
