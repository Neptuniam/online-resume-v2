<template>
    <div class="parallax-container">
        <div class="parallax-container-overlay">
            <div id="name">Liam A. Jones</div>

            <div class="sub-text">Senior Software Developer</div>

            <div class="sub-text quote-board-container">
                I am
                <span id="quote-board"></span>
            </div>

            <div>
                <router-link
                    to="/resume"
                    class="jumbotron-button"
                >
                    <i class="fas fa-file-invoice"></i>
                    Resume
                </router-link>

                <a
                    class="jumbotron-button"
                    href="https://github.com/neptuniam"
                    target="_blank"
                >
                    <i class="fab fa-github"></i>
                    Github
                </a>

                <a
                    class="jumbotron-button"
                    href="https://www.linkedin.com/in/liam-jones-35530b12b/"
                    target="_blank"
                >
                    <i class="fab fa-linkedin-in"></i>
                    Linked-in
                </a>

                <a
                    class="jumbotron-button"
                    href="mailto:ljones1997@hotmail.com"
                >
                    <i class="far fa-envelope"></i>
                    Email
                </a>
            </div>
        </div>
    </div>
</template>

<script>
import { RouterLink } from 'vue-router';

import Typed from 'typed.js';

const QUOTE_BOARD_STRINGS = [
    'passionate.',
    'a professional Googler.',
    'hard working.',
    'dedicated.',
    'a girl dad.',
    'creative.',
    'patient.',
    'adaptable.',
    'ambitious.',
    'considerate.',
    'Liam.'
];

export default {
    mounted() {
        new Typed('#quote-board', {
            strings: QUOTE_BOARD_STRINGS,
            typeSpeed: 75,
            backSpeed: 50,
            backDelay: 2000
        });
    }
};
</script>

<style scoped>
.parallax-container {
    background-image: url(/backgrounds/1000032737.jpg);
    background-attachment: fixed;
    background-position: center;
    background-size: cover;

    height: calc(100vh - 100px);
    width: 100vw;

    position: relative;

    color: white;
}
.parallax-container-overlay {
    background-color: rgba(62, 69, 81, 0.6);
    height: 100%;
    width: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

#name {
    font-size: 72px;
    line-height: 72px;
    font-family: 'Roboto Condensed';
}
.sub-text {
    font-size: 32px;
}
.quote-board-container {
    margin: 30px 0px;
}

.jumbotron-button {
    font-size: 18px;
    color: #007bff;
    text-decoration: none;
    font-family: 'Roboto Condensed';

    background-image: linear-gradient(120deg, #a1c4fd 0, #c2e9fb 100%);

    padding: 10px 15px;
    border-radius: 4px;
    margin: 0px 15px;

    transition: all 0.2s ease-in-out;
}
.jumbotron-button:hover {
    color: #0056b3;

    background-image: linear-gradient(20deg, #a1c4fd 0, #c2e9fb 100%);
}
</style>
