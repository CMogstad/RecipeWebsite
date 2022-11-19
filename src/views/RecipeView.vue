<script setup>
import Recipe from '../components/Recipe.vue';
import SetRatingVue from '../components/SetRating.vue';
import CommentForm from '../components/CommentForm.vue';
import CommentList from '../components/CommentList.vue';
</script>

<template>
  <div class="main">
    <div class="component">
      <Recipe />
    </div>

    <div class="component">
      <hr />
      <SetRatingVue />
      <hr />
    </div>

    <div class="component">
      <CommentForm />
    </div>
    
    <div class="component">
      <CommentList />
    </div>
  </div>
</template>

<style scoped>
.main {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.component {
  box-sizing: border-box;
  margin: auto;
  margin-bottom: 2vw;
  width: 60vw;
}

hr {
  width: 100%;
  margin: auto;
}

@media (max-width: 1150px) {
  .component {
    width: 90vw;
  }
}
</style>

