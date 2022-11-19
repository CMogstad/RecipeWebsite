<script>
import EventBus from "./EventBus.js";

let basUrl = "https://jau21-grupp2-cf2xip8q34nv.sprinto.se";

export default {
    data() {
        return {
            comment: "",
            name: "",
            showCommentForm: true,
            disabled: false
        }
    },
    methods: {
        postComment() {
            let postCommentUrl = basUrl + "/recipes/" + this.$route.params.recipeId + "/comments";

            fetch(postCommentUrl, {
                method: "POST",
                body: JSON.stringify({
                    "comment": this.comment,
                    "name": this.name
                }),
                headers: {
                    "Content-type": "application/json; charset=UTF-8"
                }
            })
                .then(response => response.json())
                .then(() => EventBus.$emit('updateComments'))
                .then(() => this.showCommentForm = !this.showCommentForm)
                .catch(error => console.log("Error - this has failed"));

            this.disabled = true;
            this.clearFields();
        },
        clearFields() {
            this.comment = "",
                this.name = ""
        }
    }
}
</script>

<template>
    <div class="main">
        <div v-if="showCommentForm" class="comment-form">

            <form @submit.prevent="postComment()">
                <h1>Kommentarer</h1>
                <div class="form-content">
                    <textarea id="comment" :disabled="disabled" placeholder="Skriv din kommentar" v-model="comment"
                        required></textarea>
                    <div class="name-button">
                        <input type="text" :disabled="disabled" id="name" placeholder="Ditt namn" v-model="name"
                            required>
                        <input type="submit" :disabled="disabled" value="Skicka" class="submit-button">
                    </div>
                </div>
            </form>
        </div>

        <h1 class="confirmation" v-else>Tack för din kommentar!</h1>
    </div>
</template>

<style scoped>
.confirmation {
    font-size: 2em;
    text-align: center;
}

.main {
    margin: auto;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

.comment-form {
    box-sizing: border-box;
    width: 100%;
}

.comment-form h1 {
    display: inline-block;
    font-weight: normal;
    margin-top: 1vw;
    margin-bottom: 1vw;
}

.form-content {
    margin: auto;
}

.name-button {
    display: flex;
    justify-content: space-between;
}

#comment {
    box-sizing: border-box;
    width: 100%;
    margin-bottom: 1vw;
    height: 8rem;
}

#name {
    box-sizing: border-box;
    width: 80%;
    height: 3rem;
}

#name,
#comment {
    border: 0.3rem solid lightgray;
    border-radius: 0.5rem;
    font-size: 1.2rem;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

.submit-button {
    background-color: black;
    color: white;
    font-size: 1.2rem;
    width: 20%;
    height: 3rem;
    border-radius: 3rem;
    margin-left: 1vw;
}

@media (max-width: 1200px) {
    .comment-form h1 {
        font-size: 2rem;
    }
}

@media (max-width: 500px) {
    .comment-form h1 {
        font-size: 1.5rem;
    }

    .name-button {
        flex-direction: column;
    }

    .submit-button {
        margin: 0;
        margin-top: 1vw;
        margin-bottom: 1vw;
        width: 100%;
    }

    #name {
        width: 100%;
    }
}

@media (max-width: 500px) {
    .confirmation {
        font-size: 1.5rem;
    }
}
</style>