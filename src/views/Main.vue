<template>
    <jumbotron />

    <bio />
</template>

<script>
import { RouterLink, RouterView } from 'vue-router';
import Jumbotron from '../components/main/Jumbotron.vue';
import Bio from '../components/main/Bio.vue';

export default {
    components: {
        Jumbotron,
        Bio,
    },

    data() {
        return {};
    },

    computed: {},

    methods: {},
};
</script>

<style scoped></style>
