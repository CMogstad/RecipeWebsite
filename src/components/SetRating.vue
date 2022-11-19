<script>
import EventBus from './EventBus';

export default {
    props: {
        'name': String,
        'id': String,
        'disabled': Boolean,
    },
    data: function () {
        return {
            given_rating: null,
            ratings: [1, 2, 3, 4, 5],
            message: true,
            changeToMessage: false,
            value: null
        };
    },
    watch: {
        value: function () {
            EventBus.$emit('updateRating');
        }
    },
    methods: {
        /* Behaviour of the stars on mouseover.*/
        star_over: function (index) {
            if (!this.disabled) {
                this.given_rating = this.value;
                return this.value = index;
            }
        },
        /* Behaviour of the stars on mouseout.*/
        star_out: function () {
            if (!this.disabled) {
                return this.value = this.given_rating;
            }
        },
        //   Set the rating.
        set: function (value) {
            if (!this.disabled) {
                this.given_rating = value;
                this.postRating(value);
            }
            this.message = !this.message
        },
        postRating(value) {
            var url = 'https://jau21-grupp2-cf2xip8q34nv.sprinto.se/recipes/' + this.$route.params.recipeId + '/ratings'
            fetch(url, {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
                body: JSON.stringify({
                    rating: value
                })
            })
                .then(Response => {
                    if (Response.status != 200) {
                        console.log("Failed respone !")
                    }
                })
        }
    }
}
</script>

<template>
    <div class="post-rating">
        <div>
            <h1 class="title">Vad tyckte du om receptet?</h1>
            <p>Klicka på en stjärna för att ge ditt betyg!</p>

            <div class="star-rating">
                <label class="set_star-rating__star" v-for="rating in ratings"
                    :class="{ 'is-selected': ((value >= rating) && value != null), 'is-disabled': disabled }" v-on:mouseover="star_over(rating)" v-on:mouseout="star_out">
                    <input class="star-rating star-rating__checkbox" v-on:click="set(rating)" type="radio"
                        :value="rating" :name="name" v-model="value" :disabled="disabled"
                        @click="changeToMessage = !changeToMessage">{{ changeToMessage ? '' : '★' }}
                </label>
                <h1 v-if="message"></h1>
                <h1 class="confirmation" v-else>Tack för ditt betyg!</h1>
            </div>
        </div>
    </div>

</template>

<style scoped>
.post-rating {
    margin-top: 2vw;
    text-align: center;
    display: flex;
    justify-content: center;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

.confirmation {
    font-size: 2rem;
    color: black;
    -webkit-text-stroke: 0;
    padding-bottom: 2vw;
}

.title,
.confirmation {
    margin: auto;
    vertical-align: middle;
}

.star-rating__checkbox {
    position: absolute;
    overflow: hidden;
    clip: rect(0 0 0 0);
    height: 1vw;
    width: 1vw;
    margin: -1vw;
    padding: 0;
    border: 0;
}

.star-rating {
    display: inline-block;
    padding: 0.5vw;
    vertical-align: middle;
    line-height: 1;
    color: #ababab;
    font-size: 2vw;
    margin-right: 1vw;
    -webkit-text-stroke: 0.15rem black;
}

.set_star-rating__star {
    font-size: 4rem;
}

.set_star-rating__star:hover {
    cursor: pointer;
}

.set_star-rating__star.is-selected {
    color: #ffd700;
}

@media (max-width: 500px) {
    .title,
    .confirmation {
        font-size: 1.5rem;
    }
}

@media (max-width: 400px) {
    .set_star-rating__star {
        font-size: 3rem;
    }
}
</style>