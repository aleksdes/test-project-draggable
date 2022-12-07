import { defineStore } from "pinia";
import { useFetch } from "@vueuse/core";
import urlRequest from "~/helpers/getApiUrl";
import { GET_POSTS } from "~/constants/urls";

const usePostStore = defineStore("posts", {
  actions: {
    async getPosts() {
      const { data } = await useFetch(urlRequest(GET_POSTS), {
        method: "GET",
      });
      this.posts = JSON.parse(data.value);
    },

    initSelectedPosts(post) {
      this.selectedPosts = post;
    },

    addedSelectedPosts(element, index) {
      this.selectedPosts = [
        ...this.selectedPosts.slice(0, index),
        element,
        ...this.selectedPosts.slice(index),
      ];
    },

    removedSelectedPosts(element) {
      this.selectedPosts = this.selectedPosts.filter(
        (item) => item.id !== element.id
      );
    },

    movedSelectedPosts(element, index) {
      this.removedSelectedPosts(element);
      this.addedSelectedPosts(element, index);
    },

    getPostsFilteredSelected() {
      const selectedPosts = this.selectedPosts.map((item) => item.id);
      this.filteredPostsList = this.posts.filter(
        ({ id }) => !selectedPosts.includes(id)
      );
    },

    getPostList({ limit, offset, filter = null }) {
      this.getPostsFilteredSelected();
      const postsFiltered = filter
        ? this.filteredPosts(filter, this.filteredPostsList)
        : this.filteredPostsList;
      this.activePostsList = postsFiltered;
      this.postsList = postsFiltered.length
        ? postsFiltered.slice(offset, offset + limit)
        : [];
    },

    getSelectedPostList({ limit, offset, filter = null }) {
      const postsFiltered = filter
        ? this.filteredPosts(filter, this.selectedPosts)
        : this.selectedPosts;

      this.activeSelectedPostsList = postsFiltered;
      this.selectedPostsList = postsFiltered.length
        ? postsFiltered.slice(offset, offset + limit)
        : [];
    },

    filteredPosts(filter, posts) {
      if (!filter || !Object.keys(filter).length) return posts;
      return Object.keys(filter).reduce((acc, curr) => {
        if (!filter[curr]) return acc;
        return acc.filter((item) => {
          return item[curr].includes(filter[curr]);
        });
      }, posts);
    },
  },
  state: () => ({
    posts: [],

    filteredPostsList: [],
    activePostsList: [],
    postsList: [],

    selectedPosts: [],
    activeSelectedPostsList: [],
    selectedPostsList: [],
  }),
});

export default usePostStore;
