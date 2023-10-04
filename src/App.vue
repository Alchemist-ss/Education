<template>
  <div class="body">
    <h1>Cтраница с постами</h1>
    <my-button-v2 @click="showModal">
      Создать пост
    </my-button-v2>
    <my-modal-window v-model:show="modalVisible">
      <post-form @create="createPost" />
    </my-modal-window>
    <post-list @remove="removePost" :posts="posts" />
  </div>
</template>

<script>
import PostForm from "./components/PostForm.vue";
import PostList from "./components/PostList.vue";
import PostItem from "./components/PostItem.vue/";
import MyModalWindow from "./components/UI/MyModalWindow.vue";
export default {
  components: {
    PostForm,
    PostList,
    PostItem,
    MyModalWindow,
  },
  data() {
    return {
      posts: [{
        id: 1,
        title: "Что-то насущьное",
        body: "Есть мы или нас нет?"
      },
      {
        id: 2,
        title: "Неочень важное",
        body: "Что было нашим зарождением"
      },
      {
        id: 3,
        title: "Супер важное",
        body: "Мир это вселенная?"
      },
      ],
      modalVisible: false,
    };
  },
  methods: {
    createPost(post) {
      this.posts.push(post);
      this.modalVisible = false;
    },
    removePost(post) {
      this.posts = this.posts.filter(p => p.id !== post.id)
    },
    showModal() {
      this.modalVisible = true;
    }
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
</style>
