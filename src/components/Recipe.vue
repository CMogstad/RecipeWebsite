<script>
import InstructionsList from './InstructionsList.vue';
import IngredientsList from './IngredientsList.vue';
import Rating from './Rating.vue';
import EventBus from './EventBus';

let basUrl = "https://jau21-grupp2-cf2xip8q34nv.sprinto.se";

export default {
    components: { IngredientsList, InstructionsList, Rating },
    data() {
        return {
            recipe: {
                ingredients: [],
                avgRating: null,
            }
        };
    },
    created() {
        this.fetchRecipeData(basUrl + "/recipes/" + this.$route.params.recipeId, 0);
    },
    methods: {
        fetchRecipeData(url, delay) {
            setTimeout(() => 
            fetch(url)
                .then(response => response.json())
                .then(data => this.recipe = data)
                .catch(error => console.log("error: " + error)), delay);
        },
        formatNumber(avgRating) {
            return parseFloat(avgRating).toFixed(0);
        }
    },
    mounted() {
        EventBus.$on('updateRating', () => {
            this.fetchRecipeData(basUrl + "/recipes/" + this.$route.params.recipeId, 1000);
        });
    }
}
</script>

<template>
    <div class="recipe">
        <header class="recipe-header">
            <h1>{{ recipe.title }}</h1>
            <div class="description-image">
                <div class="description-rating">
                    <p>{{ recipe.description }}</p>
                    <div class="rating-ingredients-time">
                        <Rating :value="formatNumber(recipe.avgRating)" :disabled="true" class="rating"></Rating>
                        <p>| {{ recipe.ingredients.length }} INGREDIENSER </p>
                        <p>| {{ recipe.timeInMins }} MINUTER</p>
                    </div>
                </div>
                <img class="image" :src="recipe.imageUrl">
            </div>
        </header>

        <div class="lists">
            <div class="ingredients">
                <IngredientsList :ingredients="recipe.ingredients"></IngredientsList>
            </div>
            <div class="instructions">
                <InstructionsList :instructions="recipe.instructions"></InstructionsList>
            </div>
        </div>
    </div>
</template>

<style scoped>
.recipe {
    box-sizing: border-box;
    width: 100%;
    margin: auto;
    font-size: 1.2rem;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    text-align: center;
}

.recipe-header {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.recipe-header h1 {
    font-weight: normal;
    width: 53vw;
    font-size: 3em;
    margin-bottom: 1.5vw;
}

.lists {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin: auto;
}

.ingredients {
    box-sizing: border-box;
    min-width: 20vw;
}

.instructions {
    box-sizing: border-box;
    min-width: 30vw;
    width: 50vw;
    margin-left: 1vw;
}

.image {
    width: 22vw;
    min-width: 16rem;
}

.description-rating {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 35vw;
}

.rating-ingredients-time {
    box-sizing: border-box;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    padding: 0.5rem;
    background-color: lightgray;
    width: 100%;
}

.rating-ingredients-time p {
    margin: 0;
    margin-right: 0.5rem;
    white-space: nowrap;
}

.rating {
    padding: 0;
    align-self: flex-start;
    margin-right: 0.5rem;
}

.description-image {
    width: 100%;
    display: flex;
    justify-content: space-between;
}

@media (max-width: 1150px) {
    .lists {
        align-items: center;
        display: inline-block;
    }

    .description-image {
        flex-direction: column-reverse;
        align-items: center;
    }

    .description-rating,
    .lists,
    .instructions,
    .ingredients {
        width: 100%;
    }

    .instructions {
        margin: 0;
    }

    .recipe-header h1 {
        font-size: 2.5em;
        width: auto;
    }
}

@media (max-width: 500px) {
    .rating-ingredients-time {
        flex-wrap: wrap;
    }
}

@media (max-width: 400px) {
    .recipe-header h1 {
        font-size: 1.8rem;
    }

    .name-date {
        flex-direction: column;
    }
}

@media (max-width: 300px) {
    .recipe-header h1 {
        font-size: 1.5rem;
        width: auto;
    }

    .image {
        display: none;
    }
}
</style>