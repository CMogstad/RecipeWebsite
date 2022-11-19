<!-- US 25-->    <!-- US 26 -->
<script>
import EventBus from './EventBus';

export default {
    data() {
        return {
            fetchedData: null,
            searchText: ''
        }
    },
    methods: {
        searchInput(queryText) {
            EventBus.$emit('searchRecipe', queryText);
        }
    }
}
</script>

<template>
    <div class="box">
        <input class="search-bar" v-model="searchText" @input="searchInput(searchText)"
            placeholder='Sök bland dina favoritrecept' />
        <font-awesome-icon icon="fa-solid fa-magnifying-glass" class="magnefying-glass" />
    </div>
</template>

<style scoped>
.box {
    position: relative;
    margin-bottom: 1vw;
    height: 4rem;
}

.search-bar {
    position: absolute;
    box-sizing: border-box;
    width: 100%;
    height: 100%;
    border: 0.3rem solid lightgray;
    border-radius: 0.5vw;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-size: 1.5rem;
    padding-left: 4rem;
}

.magnefying-glass {
    color: lightgray;
    font-size: 2.5rem;
    position: absolute;
    left: 1rem;
    top: 0.8rem;
}

@media (max-width: 400px) {
    .search-bar{
         font-size: 1rem;
         padding-left: 3.5rem;
    }
   
    .magnefying-glass{
        font-size: 2rem;
    }
}
</style>