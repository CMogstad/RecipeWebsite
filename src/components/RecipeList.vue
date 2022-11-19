<script>
import RecipeListItem from './RecipeListItem.vue';
import EventBus from './EventBus';

let basUrl = "https://jau21-grupp2-cf2xip8q34nv.sprinto.se";

export default {
    components: { RecipeListItem },
    data() {
        return {
            recipes: {},
        }
    },
    methods: {
        fetchRecipeData(url) {
            fetch(url)
                .then(response => response.json())
                .then(recipeData => { this.recipes = recipeData; })
                .catch(error => console.log("Error - this has failed"));
        }
    },
    created() {
        let getAllRecipesUrl = basUrl + "/recipes";
        this.fetchRecipeData(getAllRecipesUrl);
    },
    watch: {
        '$route'() {
            let getAllCategoryRecipesUrl = basUrl + "/categories/" + this.$route.params.categoryId + "/recipes";
            this.fetchRecipeData(getAllCategoryRecipesUrl);
        }
    },
    mounted() {
        EventBus.$on('searchRecipe', (queryText) => {
            let searchRecipeUrl = basUrl + "/recipes?query=" + queryText;

            if (this.$route.params.categoryId != null) {
                searchRecipeUrl = basUrl + "/categories/" + this.$route.params.categoryId + "/recipes?query=" + queryText;
            }

            this.fetchRecipeData(searchRecipeUrl);
        });
    }
}
</script>

<template>
    <RecipeListItem v-for="recipe in recipes" :id="recipe._id" :title="recipe.title" :imageUrl="recipe.imageUrl"
        :description="recipe.description" :ingredients="recipe.ingredients.length" :timeInMins="recipe.timeInMins"
        :avgRating="recipe.avgRating">
    </RecipeListItem>
</template>