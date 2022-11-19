<script>
export default {
    props: ["instruction"]
}
</script>

<template>
    <div class="instruction-box">
        {{ instruction }}
    </div>
</template>

<style scoped>
.instruction-box {
    background-color: lightgray;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-size: 1.2rem;
    margin-bottom: 1vw;
    padding: 0.5vw;
}
</style>