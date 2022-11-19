<script>
import RecipeList from '../components/RecipeList.vue';
import CategoryListItem from "./CategoryListItem.vue";

export default {
    components: { CategoryListItem },
    data() {
        return {
            allRecipeLinkName: "Alla recept",
            categoryData: null,
            activeCategory: "Alla recept",
            allRecipeData: null,
        };
    },
    created() {
        this.fetchCategoryData("https://jau21-grupp2-cf2xip8q34nv.sprinto.se/categories");
        this.fetchAllRecipeData("https://jau21-grupp2-cf2xip8q34nv.sprinto.se/recipes");
    },
    methods: {
        fetchCategoryData(url) {
            fetch(url)
                .then(response => response.json())
                .then(data => this.categoryData = data)
                .catch(error => console.log("error: " + error));
        },
        fetchAllRecipeData(url) {
        fetch(url)
                .then(response => response.json())
                .then(data => this.allRecipeData = data)
                .catch(error => console.log("error: " + error));
        },
        isActiveCategory(name) {
            return name == this.activeCategory;
        },
        setActiveCategory(name) {
            this.activeCategory = name;
        }
    }
}
</script>
<template>
    <div class="listStyle">
        <h1 class="title">Kategorier</h1>
        <ul v-if="categoryData">
            <a v-if="allRecipeData" @click="setActiveCategory(allRecipeLinkName)" :class="(this.isActiveCategory(allRecipeLinkName) ? 'category active' : 'category')" href="/">{{allRecipeLinkName}} ({{allRecipeData.length}})</a>
            
            <CategoryListItem class="category" v-for="category in categoryData" :name="category.name"
                :count="category.count" :isActive="isActiveCategory(category.name)"
                @click="setActiveCategory(category.name)">
            </CategoryListItem>
        </ul>
    </div>
</template>

<style scoped>
.listStyle {
    background-color: lightgray;
    padding: 1rem;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    min-height: 100vh;
    width: 16rem;
}

.listStyle .title {
    padding-left: 2vw;
    font-weight: normal;
    font-size: 2.5rem;
}

ul {
    list-style: none;
    padding: 0;
    padding-left: 2vw;
}

.category-link:active {
    font-weight: bold;
}

.category {
    text-decoration: none;
    color: black;
    font-size: 1.5rem;
    flex-wrap: nowrap;
}

.category.active {
    font-weight: bold;
}

@media (max-width: 1200px) {
    .listStyle {
        width: fit-content;
        /*height: fit-content;*/
        min-height: 3vw;
    }

    ul {
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        margin: 0;
        padding: 0;
    }

    .category {
        padding: 0;
        margin: 0;
        margin-right: 2vw;
        font-size: 1.5rem;
    }

    .title {
        display: none;
    }
}
</style>