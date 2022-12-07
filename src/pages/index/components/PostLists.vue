<template>
  <div class="wrapper-list">
    <div class="list-posts__box-search">
      <label for="search-posts">Найти пост</label>
      <InputText
        id="search-posts"
        type="text"
        v-model="searchTitle"
        class="list-posts__search"
        aria-describedby="search-posts-help"
        placeholder="Введите текст"
      />
      <small id="search-posts-help"> Фильтр по полю title</small>
    </div>

    <PostsNotFound v-if="!postsStore.activePostsList.length" />

    <draggable
      id="available-posts"
      v-model="postsStore.postsList"
      group="posts"
      @start="drag = true"
      @end="drag = false"
      item-key="id"
      class="list-posts__group"
    >
      <template #item="{ element }">
        <PostCardItem :post="element" />
      </template>
    </draggable>

    <Paginator
      v-if="postsStore.activePostsList.length"
      :first="(currentPage - 1) * DEFAULT_LIMIT_PAGE"
      :rows="DEFAULT_LIMIT_PAGE"
      :totalRecords="postsStore.activePostsList.length"
      @page="onPage($event)"
    ></Paginator>
  </div>
</template>

<script setup>
import { computed, onMounted, ref, defineProps } from "vue";
import { useRoute, useRouter } from "vue-router";
import { debounceFilter, useLocalStorage, watchWithFilter } from "@vueuse/core";

import draggable from "vuedraggable";
import InputText from "primevue/inputtext";
import PostCardItem from "~/components/common/Cards/PostCardItem";
import Paginator from "primevue/paginator";
import PostsNotFound from "./PostsNotFound";

import usePostStore from "~/stores/posts";

defineProps({});

const route = useRoute();
const router = useRouter();

const drag = ref(false);
const DEFAULT_NUMBER_PAGE = 1;
const DEFAULT_LIMIT_PAGE = 10;
const searchTitle = ref(route.query?.title_like ?? "");

const postsStore = usePostStore();
await postsStore.getPosts();

const currentPage = computed(() => route.query?.page ?? DEFAULT_NUMBER_PAGE);
const filters = computed(() => ({
  title: route.query?.title_like ?? "",
}));

const requestParameters = computed(() => ({
  offset: (Number(currentPage.value) - 1) * DEFAULT_LIMIT_PAGE,
  limit: DEFAULT_LIMIT_PAGE,
  filter: filters.value,
}));

onMounted(() => {
  postsStore.selectedPosts =
    JSON.parse(localStorage.getItem("selected-posts")) || [];
  postsStore.getPostList(requestParameters.value);
});

watchWithFilter(
  searchTitle,
  () => {
    const newQuery = searchTitle.value ? { title_like: searchTitle.value } : {};
    router.replace({
      query: newQuery,
    });
  },
  {
    eventFilter: debounceFilter(700),
  }
);

watchWithFilter(
  requestParameters,
  () => {
    postsStore.getPostList(requestParameters.value);
  },
  {
    eventFilter: debounceFilter(100),
  }
);

const postsList = computed(() => {
  return postsStore.postsList;
});

const onPage = ({ page }) => {
  router.replace({
    query: { ...route.query, page: page + 1 },
  });
};
</script>

<style scoped lang="sass"></style>
