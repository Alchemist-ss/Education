<template>
  <div class="body">
    <h1>Cтраница с постами</h1>
    <div class="app-btns">
      <div class="app-btns__two-left">
        <my-button-v2 @click="showModal"> Создать пост </my-button-v2>
        <my-button-v2 @click="fetchPosts" v-if="posts.length === 0">
          Запросить посты
        </my-button-v2>
      </div>
      <div class="app-btns__right">
        <my-select v-model="selectedSort" :options="sortOptions"></my-select>
      </div>
    </div>
    <my-modal-window v-model:show="modalVisible">
      <post-form @create="createPost" />
    </my-modal-window>
    <post-list @remove="removePost" :posts="sortedPost" v-if="!isPostLoading" />
    <div v-else>Идет загрузка ...</div>
  </div>
</template>

<script>
import PostForm from "./components/PostForm.vue";
import PostList from "./components/PostList.vue";
import PostItem from "./components/PostItem.vue/";
import MyModalWindow from "./components/UI/MyModalWindow.vue";
import axios from "axios";
export default {
  components: {
    PostForm,
    PostList,
    PostItem,
    MyModalWindow,
  },
  data() {
    return {
      posts: [],
      modalVisible: false,
      isPostLoading: false,
      selectedSort: "",
      sortOptions: [
        { value: "title", name: "По названию" },
        { value: "body", name: "По описанию" },
        { value: "post.id", name: "По ID" },
      ],
    };
  },
  methods: {
    createPost(post) {
      this.posts.push(post);
      this.modalVisible = false;
    },
    removePost(post) {
      this.posts = this.posts.filter((p) => p.id !== post.id);
    },
    showModal() {
      this.modalVisible = true;
    },
    async fetchPosts() {
      try {
        this.isPostLoading = true;
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/posts?_limit=10"
        );
        this.posts = response.data;
      } catch (e) {
        alert("Ошибка");
      } finally {
        this.isPostLoading = false;
      }
    },
  },
  mounted() {
    this.fetchPosts();
  },
  computed: {
    sortedPost() {
      return [...this.posts].sort((post1, post2) =>
        post1[this.selectedSort]?.localeCompare(post2[this.selectedSort])
      );
    },
  },
};
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#app {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.body {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50%;
}

.app-btns {
  display: flex;
  justify-content: space-between;
  align-items: start;
  width: 40%;
  min-width: 350px;

  &__two-left {
    display: flex;
    flex-direction: column;
  }
  &__right {
    display: flex;
    margin-top: 25px;
  }
}
</style>
