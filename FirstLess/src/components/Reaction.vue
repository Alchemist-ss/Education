<template>
  <div class="reaction">
    <div class="reaction__info">
      <div>Кол-во лайков: <strong>{{ likes }}</strong></div>
      <div>Кол-во дизлайков: <strong>{{ dislikes }}</strong></div>
    </div>
    <div class="reaction__button">
      <button @click="addLike"> Лайк </button>
      <button @click="addDislike"> Дизлайк </button>
    </div>
  </div>
</template>

<script>
  export default {
    
  }
</script>

<style lang="scss" scoped>
.reaction {
  padding: 15px;
  width: 200px;
  
    &__info {
      display: flex;
      flex-direction: column;
      align-items: center;
    }

    &__button {
      display: flex;
      justify-content: space-evenly;
      margin: 10px;
    }
    &__button button {
      padding: 5px;
    }
  }
</style>