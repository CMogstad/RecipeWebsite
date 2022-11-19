<script>
import Rating from './Rating.vue';

export default {
    props: ["id", "title", "imageUrl", "description", "ingredients", "timeInMins", "avgRating"],
    methods: {
        formatNumber(avgRating) {
            return parseFloat(avgRating).toFixed(0);
        },
    },
    components: { Rating }
}
</script>

<template>
    <RouterLink :to="{ name: 'recipe', params: { recipeId: id } }">
        <div class="recipe-box">
            <div class="image-title-description">
                <img class="recipe-image" :src="imageUrl" alt="Bild på rätten">
                <div class="title-description-rating">
                    <div class="title-rating">

                        <h1>{{ title }}</h1>

                        <p class="avgrating">
                            <Rating :value="formatNumber(avgRating)" :disabled="true"></Rating>
                        </p>
                    </div>
                    <p>{{ description }}</p>
                </div>
            </div>
            <div class="ingredients-time">
                <p> {{ ingredients }} INGREDIENSER | {{ timeInMins }} MINUTER</p>
            </div>
        </div>
    </RouterLink>
</template>

<style scoped>
:deep(.star-rating__star) {
    font-size: 2.5rem;
    -webkit-text-stroke: 0.15rem black;
}

.avgrating {
    margin-left: 1vw;
    margin: 1vw;
    margin-top: 0;
}

.ingredients-time {
    font-size: 1.6rem;
    padding: 0;
    padding-left: 1.5rem;
}

.title-description-rating {
    position: relative;
    margin: 1vw;
    margin-bottom: 0;
}

.title-description-rating p {
    font-size: 1.5rem;
}

.recipe-image {
    top: 1vw;
    margin: 1vw;
    margin-bottom: 0;
    width: 16rem;
}

.title-rating h1 {
    font-size: 2.4rem;
    max-width: 40rem;
    font-weight: normal;
    margin-top: 0;
}

a {
    text-decoration: none;
    color: black;
}

.recipe-box {
    background-color: lightgray;
    padding-bottom: 0.5rem;
    margin-bottom: 1vw;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

.image-title-description {
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
}

/*user story 50*/
.title-rating {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
}

@media (max-width: 1520px) {
    .title-rating {
        flex-direction: column;
    }

    .avgrating {
        margin: 0;
    }
}

@media (orientation: portrait) {
    .title-rating {
        flex-direction: row;
    }

    .title-description-rating {
        padding: 1vw;
        padding-bottom: 0;
    }

    .image-title-description {
        flex-direction: column-reverse;
    }

    .recipe-image {
        margin: auto;
    }

    .recipe-box {
        width: fit-content;
    }
}

@media (max-width: 550px) {
    .title-rating {
        flex-direction: column;
        align-items: center;
        text-align: center;
    }
}

@media (max-width: 350px) {
    .recipe-image {
        display: none;
    }

    .title-rating h1 {
        font-size: 2rem;
    }
}
</style>

