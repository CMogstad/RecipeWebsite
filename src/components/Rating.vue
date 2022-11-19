<script>

export default {
  props: {
    'name': String,
    'value': null,
    'id': String,
    'disabled': Boolean,
  },
  data: function () {
    return {
      temp_value: null,
      ratings: [1, 2, 3, 4, 5]
    };
  }
}
</script>

<template>

  <div class="star-rating">
    <label class="star-rating__star" v-for="rating in ratings"
      :class="{ 'is-selected': ((value >= rating) && value != null), 'is-disabled': disabled }">
      <input class="star-rating star-rating__checkbox" type="radio" :value="rating" :name="name" v-model="value"
        :disabled="disabled">★</label>
  </div>
</template>

<style scoped>
.star-rating__checkbox {
  position: absolute;
  overflow: hidden;
  clip: rect(0 0 0 0);
  height: 1px;
  width: 1px;
  margin: -1px;
  padding: 0;
  border: 0;
}

.star-rating {
  display: inline-block;
  padding: 3px;
  vertical-align: middle;
  line-height: 1;
  color: #ababab;
  white-space: nowrap;
  -webkit-text-stroke: 2px black;
}

.star-rating__star {
  font-size: 1.6rem;
}

.star-rating .is-selected {
  color: #ffd700;
}
</style>