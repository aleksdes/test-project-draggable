<template>
  <div class="wrapper">
    <div class="list-posts">
      <ListPostsHeader title="Доступные посты" />
      <PostLists />
    </div>
    <div class="separator" />
    <div class="list-posts">
      <ListPostsHeader title="Выбранные посты" />
      <PostListsSelected />
    </div>
  </div>
</template>

<script setup>
import { useHead } from "@vueuse/head";
import ListPostsHeader from "./components/ListPostsHeader";
import PostLists from "./components/PostLists";
import PostListsSelected from "./components/PostListsSelected";

useHead({
  title: "Index",
});
</script>

<style lang="sass" scoped>
.wrapper
  display: flex
  flex-direction: row
  flex-wrap: nowrap
  justify-content: space-between

.separator
  border-left: 1px solid var(--gray-300)
  height: auto

:deep()
  .list-posts
    height: auto
    width: 48%
    display: flex
    flex-direction: column

    &__box-search
      display: flex
      flex-direction: column
      margin: 20px 0

      small
        color: var(--gray-400)

    &__search
      width: 100%
      margin: 8px 0 4px 0

    &__group
      display: grid
      grid-auto-flow: row
      align-content: start
      grid-gap: 15px
      height: 100%

.wrapper-list
  display: flex
  flex-direction: column
  align-content: space-between
  height: 100%

:deep()
  .p-paginator .p-paginator-pages .p-paginator-page,
  .p-paginator .p-paginator-prev,
  .p-paginator .p-paginator-next,
  .p-paginator .p-paginator-first,
  .p-paginator .p-paginator-last
    border-radius: 50%
</style>
