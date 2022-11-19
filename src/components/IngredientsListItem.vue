<script>
export default {
    props: ["ingredient"]
}
</script>

<template>
    <div class="ingredients-box">
        {{ ingredient.amount }}
        {{ ingredient.unit }}
        {{ ingredient.name }}
    </div>
</template>

<style>
.ingredients-box {
    font-size: 1.2rem;
    padding: 0.3rem;
}
</style>