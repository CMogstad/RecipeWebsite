<script>// Skapade component för USER STORY 24
export default {
    props: ['name', 'count', 'isActive']
}
</script>

<template>
    <div>
        <RouterLink :class="(this.isActive ? 'category active' : 'category')"
            :to="{ name: 'category', params: { categoryId: name } }">
            {{ name }} ({{ count }})</RouterLink>
    </div>
</template>

<style scoped>
.category {
    text-decoration: none;
    color: black;
    font-size: 1.5rem;
}

.category.active {
    font-weight: bold;
}
</style>