<script setup>
import RecipeList from '../components/RecipeList.vue';
import CategoryList from '../components/CategoryList.vue';
import SearchBar from '../components/SearchBar.vue';
</script>
    
<template>
    <main>
        <header>
            <h1>Asiatiska rätter</h1>
            <p>Välkommen till denna unika receptsida för dig som gillar all typ av asiatisk mat!
            </p>
        </header>
        <div class="container">
            <nav class="categories">
                <CategoryList />
            </nav>

            <div class="recipes">
                <SearchBar />
                <RecipeList />
            </div>
        </div>
    </main>
</template>
    
<style scoped>
main {
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    width: 100%;
    margin: auto;
}

.container {
    display: flex;
    flex-direction: row;
    position: relative;
}

.categories {
    position: sticky;
    top: 0;
    align-self: flex-start;
    margin: 1vw;
}

.recipes {
    display: flex;
    flex-direction: column;
    margin: 1vw;
    width: 50vw;
}

header {
    text-align: center;
    margin-bottom: 1vw;
    width: 70vw;
}

header h1 {
    font-size: 4rem;
    max-width: 100vw;
    margin: auto;
    font-weight: normal;
}

header p {
    font-size: 2rem;
}

@media (max-width: 1200px) {
    .container {
        flex-wrap: wrap;
        justify-content: center;
    }

    .recipes {
        flex-wrap: wrap;
        width: 100%;
    }

    .categories {
        box-sizing: border-box;
        width: fit-content;
        margin: 1vw;
        
        /*z-index: 1;
        outline: 0.5rem solid white;*/
       
        position: relative;
    }
} 

@media (max-width: 350px) {
    header h1 {
        font-size: 3rem;
    }

    header p {
        font-size: 1.5rem;
    }
}
</style>