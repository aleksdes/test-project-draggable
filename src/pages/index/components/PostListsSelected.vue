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

    <PostsNotFound v-if="!postsStore.activeSelectedPostsList.length" />

    <draggable
      id="selected-posts"
      v-model="postsStore.selectedPostsList"
      group="posts"
      @start="drag = true"
      @end="drag = false"
      item-key="id"
      class="list-posts__group"
      @change="changeSelectedPosts($event)"
    >
      <template #item="{ element }">
        <PostCardItem :post="element" />
      </template>
    </draggable>

    <Paginator
      v-if="postsStore.selectedPosts.length"
      :first="(currentPage - 1) * DEFAULT_LIMIT_PAGE"
      :rows="DEFAULT_LIMIT_PAGE"
      :totalRecords="postsStore.activeSelectedPostsList.length"
      @page="onPage($event)"
    ></Paginator>
  </div>
</template>

<script setup>
import { computed, onMounted, ref, defineProps, nextTick } from "vue";

import { debounceFilter, watchWithFilter } from "@vueuse/core";

import draggable from "vuedraggable";
import InputText from "primevue/inputtext";
import PostCardItem from "~/components/common/Cards/PostCardItem";
import Paginator from "primevue/paginator";
import PostsNotFound from "./PostsNotFound";

import usePostStore from "~/stores/posts";

defineProps({});

const drag = ref(false);
const currentPage = ref(1);
const DEFAULT_LIMIT_PAGE = 10;
const searchTitle = ref("");

const postsStore = usePostStore();

const filters = computed(() => ({
  title: searchTitle.value,
}));

const requestParameters = computed(() => ({
  offset: (currentPage.value - 1) * DEFAULT_LIMIT_PAGE,
  limit: DEFAULT_LIMIT_PAGE,
  filter: filters.value,
}));

postsStore.selectedPosts =
  JSON.parse(localStorage.getItem("selected-posts")) || [];

onMounted(() => {
  postsStore.getSelectedPostList(requestParameters.value);
});

watchWithFilter(
  requestParameters,
  () => {
    postsStore.getSelectedPostList(requestParameters.value);
  },
  {
    eventFilter: debounceFilter(700),
  }
);

const postsList = computed(() => {
  return postsStore.selectedPostsList;
});

const changeSelectedPosts = (event) => {
  if (Object.keys(event).includes("added")) {
    const indexElement = event.added.newIndex + requestParameters.value.offset;
    postsStore.addedSelectedPosts(event.added.element, indexElement);
  }
  if (Object.keys(event).includes("removed")) {
    postsStore.removedSelectedPosts(event.removed.element);
  }
  if (Object.keys(event).includes("moved")) {
    const indexElement = event.moved.newIndex + requestParameters.value.offset;
    postsStore.movedSelectedPosts(event.moved.element, indexElement);
  }

  localStorage.setItem(
    "selected-posts",
    JSON.stringify(postsStore.selectedPosts)
  );

  nextTick(() => {
    postsStore.getSelectedPostList(requestParameters.value);
  });
};

const onPage = ({ page }) => {
  currentPage.value = page + 1;
};
</script>

<!--<style scoped lang="sass"></style>-->
