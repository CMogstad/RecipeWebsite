<script>
import CommentListItem from "./CommentListItem.vue";
import EventBus from "./EventBus.js";

let basUrl = "https://jau21-grupp2-cf2xip8q34nv.sprinto.se";

export default {
  components: { CommentListItem },
  data() {
    return {
      newComment: null
    }
  },
  methods: {
    fetchCommentData(url) {
      fetch(url)
        .then((response) => response.json())
        .then((commentData) => { this.newComment = commentData })
        .catch((error) => console.log("Error - this has failed"));
    }
  },
  created() {
    let getCommentUrl = basUrl + "/recipes/" + this.$route.params.recipeId + "/comments";
    this.fetchCommentData(getCommentUrl);
  },
  mounted() {
    EventBus.$on('updateComments', () => {
      let getCommentUrl = basUrl + "/recipes/" + this.$route.params.recipeId + "/comments";
      this.fetchCommentData(getCommentUrl);
    });
  }
}
</script>

<template>
  <div class="comment">
    <CommentListItem v-for="comment in newComment" :comment="comment.comment" :name="comment.name"
      :createdAt="comment.createdAt">
    </CommentListItem>
  </div>
</template>

<style scoped>
.comment {
  width: 100%;
  display: flex; 
  flex-direction: column-reverse;
}
</style>

