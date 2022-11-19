<script>
import IngredientsListItem from './IngredientsListItem.vue';

export default {
    props: ["ingredients"],
    components: { IngredientsListItem },
}
</script>

<template>
    <div class="ingredients">
        <h1>Ingredienser</h1>
        <div class="ingredients-list">
            <IngredientsListItem v-for="ingredient in ingredients" :ingredient="ingredient"></IngredientsListItem>
        </div>
    </div>
</template>

<style scoped>
.ingredients {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

.ingredients-list {
    background-color: lightgray;
    padding: 1vw;
    text-align: start;
}

.ingredients h1 {
    font-weight: normal;
    margin-bottom: 1vw;
    text-align: start;
}

@media (max-width: 1200px) {
    .ingredients h1 {
        font-size: 2rem;
    }
}

@media (max-width: 500px) {
    .ingredients h1 {
        font-size: 1.5rem;
    }
}
</style>