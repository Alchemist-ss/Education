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
        <my-select
          class="input"
          v-model="selectedSort"
          :options="sortOptions"
        />
        <my-input class="search" v-model="searchQuery" placeholder="Поиск..." />
      </div>
    </div>
    <my-modal-window v-model:show="modalVisible">
      <post-form @create="createPost" />
    </my-modal-window>
    <post-list
      @remove="removePost"
      :posts="sortedAndSearchedPosts"
      v-if="!isPostLoading"
    />
    <div v-else>Идет загрузка ...</div>
    <div ref="observer" class="observer"></div>
    <!-- <div class="page__wrapper">
      <div
        class="page"
        v-for="pageNumber in totalPages"
        :key="pageNumber"
        :class="{
          'current-page': page === pageNumber,
        }"
        @click="changePage(pageNumber)"
      >
        {{ pageNumber }}
      </div>
    </div> -->
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
      searchQuery: "",
      page: 1,
      limit: 10,
      totalPages: 0,
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
    // changePage(pageNumber) {
    //   this.page = pageNumber;
    //   this.fetchPosts();
    // },
    async fetchPosts() {
      try {
        this.isPostLoading = true;
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/posts",
          {
            params: {
              _page: this.page,
              _limit: this.limit,
            },
          }
        );
        this.totalPages = Math.ceil(
          response.headers["x-total-count"] / this.limit
        );
        this.posts = response.data;
      } catch (e) {
        alert("Ошибка");
      } finally {
        this.isPostLoading = false;
      }
    },
    async loadMorePosts() {
      try {
        this.page += 1;
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/posts",
          {
            params: {
              _page: this.page,
              _limit: this.limit,
            },
          }
        );
        this.totalPages = Math.ceil(
          response.headers["x-total-count"] / this.limit
        );
        this.posts = [...this.posts, ...response.data];
      } catch (e) {
        alert("Ошибка");
      }
    },
  },
  mounted() {
    this.fetchPosts();
    console.log(this.$refs.observer);
    const options = {
      rootMargin: "0px",
      threshold: 1.0,
    };

    const callback = (entries, observer) => {
      if (entries[0].isIntersecting && this.page < this.totalPages) {
        this.loadMorePosts();
      }
    };

    const observer = new IntersectionObserver(callback, options);
    observer.observe(this.$refs.observer);
  },
  computed: {
    sortedPost() {
      return [...this.posts].sort((post1, post2) =>
        post1[this.selectedSort]?.localeCompare(post2[this.selectedSort])
      );
    },
    sortedAndSearchedPosts() {
      return this.sortedPost.filter((post) =>
        post.title.toLowerCase().includes(this.searchQuery.toLowerCase())
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
    margin-right: 8px;
  }

  &__right {
    display: flex;
    flex-direction: column;
    margin-left: 8px;
  }
  .input {
    margin-top: 15px;
  }
  .search {
    margin-top: 15px;
  }
}

.page__wrapper {
  display: flex;
  margin-top: 15px;
}

.page {
  border: 1px solid black;
  margin: 5px;
  padding: 5px;
}

.current-page {
  border: 2px solid teal;
}

.observer {
  width: 100%;
  height: 30px;
  background: green;
}
</style>
