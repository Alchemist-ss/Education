<template>
  <div class="case-for-post">
    <form @submit.prevent class="form">
      <h2>Создание постов:</h2>
      <input 
        v-bind:value="title"
        @input="title = $event.target.value"
        class="input"
        type="text"
        placeholder="Название"
      >
      <input 
        v-bind:value="body"
        @input="body = $event.target.value"
        class="input"
        type="text"
        placeholder="Описание"
      >
      <button class="form__button" @click="createPost">Создать</button>
    </form>
    <div class="post" v-for="post in posts">
      <div>
        <strong>Название: </strong> {{ post.title }}
      </div>
      <div>
        <strong>Описание: </strong> {{ post.body }}
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    
  }
</script>

<style lang="scss" scoped>
.case-for-post {
    width: 500px;
    
    .form {
    display: flex;
    flex-direction: column;
    align-items: center;

    .input {
      width: 100%;
      border: 1px solid teal;
      padding: 10px 15px;
      margin-top: 15px;
    }

    &__button {
      background: rgb(95, 164, 253);
      border: 1px solid rgb(175, 205, 250);
      border-radius: 5px;
      width: 30%;
      margin-top: 15px;
      padding: 10px;
      color: white;
    }
    }
  }
</style>