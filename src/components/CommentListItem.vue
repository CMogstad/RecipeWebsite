<script>
export default {
    props: ["comment", "name", "createdAt"],
    data() {
        return {
            formattedDate: ""
        }
    },
    methods: {
        formateDate() {
            let createdAtString = this.createdAt + "";
            let date = new Date(createdAtString);
            let day = date.getDate();

            const months = ["Januari", "Februari", "Mars", "April", "Maj", "Juni", "Juli", "Augusti", "September", "Oktober", "November", "December"];
            let month = months[date.getMonth()];
          
            let year = date.getFullYear();        

            this.formattedDate = day + " " + month + " " + year
        }
    },
    created() {
        this.formateDate();
    }
}
</script>

<template>
    <div class="comment-item">
        <div class="name-date">
            <p class="name">{{ name }}</p>
            <p>{{ formattedDate }}</p>
        </div>
        <div class="comment">
            <p>{{ comment }}</p>
        </div>
    </div>
</template>

<style scoped>
.comment-item {
    box-sizing: border-box;
    background-color: lightgray;
    width: 100%;
    height: auto;
    min-height: 7rem;
    margin-bottom: 1rem;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-size: 1.2rem;
    padding: 1rem;
}

.comment-item p {
    display: inline;
    margin: 0;
}

.name-date {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    margin-bottom: 1rem;
}

.name {
    font-size: 1.5rem;
}

@media (max-width: 400px) {
    .name-date {
        flex-direction: column;
    }
}
</style>
