<script>
import InstructionsListItem from './InstructionsListItem.vue';

export default {
    props: ["instructions"],
    components: { InstructionsListItem },
}
</script>

<template>
    <div class="instructions-list">
        <h1>Gör så här</h1>
        <InstructionsListItem v-for="instruction in instructions" :instruction="instruction"></InstructionsListItem>
    </div>
</template>

<style scoped>
.instructions-list {
    text-align: start;
}

.instructions-list h1 {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-weight: normal;
    margin-left: 0;
    margin-bottom: 1vw;
}

@media (max-width: 1200px) {
    .instructions-list h1 {
        font-size: 2rem;
    }
}

@media (max-width: 500px) {
    .instructions-list h1 {
        font-size: 1.5rem;
    }
}
</style>