<template>
    <div class="parallax-container">
        <div class="parallax-container-overlay">
            <div id="name">Liam A. Jones</div>

            <div class="sub-text">Senior Software Developer</div>

            <div class="sub-text quote-board-container">
                I am
                <span id="quote-board"></span>
            </div>

            <div class="row">
                <div class="col-sm-12 col-3">
                    <router-link
                        to="/resume"
                        target="_blank"
                        class="jumbotron-button text-body"
                    >
                        <i class="fas fa-file-alt"></i>
                        Resume
                    </router-link>
                </div>

                <div class="col-sm-12 col-3">
                    <a
                        class="jumbotron-button text-body"
                        href="https://github.com/neptuniam"
                        target="_blank"
                    >
                        <i class="fab fa-github"></i>
                        Github
                    </a>
                </div>

                <div class="col-sm-12 col-3">
                    <a
                        class="jumbotron-button text-body"
                        href="https://www.linkedin.com/in/liam-jones-35530b12b/"
                        target="_blank"
                    >
                        <i class="fab fa-linkedin"></i>
                        Linked-in
                    </a>
                </div>

                <div class="col-sm-12 col-3">
                    <a
                        class="jumbotron-button text-body"
                        href="mailto:ljones1997@hotmail.com"
                    >
                        <i class="far fa-envelope"></i>
                        Email
                    </a>
                </div>
            </div>

            <div
                v-if="employmentSeakingStatus"
                id="employment-seaking-status"
            >
                {{ employmentSeakingStatus }}
            </div>
        </div>
    </div>
</template>

<script>
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
    data: () => ({
        employmentSeakingStatus: 'Currently Seaking New Opportunities!'
    }),

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

    color: white;
}
.parallax-container-overlay {
    position: relative;

    background-color: rgba(62, 69, 81, 0.6);
    height: 100%;
    width: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

@keyframes bounce {
    0% {
        opacity: 0;
        /* Start far away to delay it's arrival so users can load the page */
        transform: translateY(-200vh);
    }
    50% {
        opacity: 0;
        transform: translateY(-100vh);
    }
    80% {
        opacity: 1;
        transform: translateY(0px);
    }
    90% {
        transform: translateY(-20px);
    }
    100% {
        transform: translateY(0);
    }
}
#employment-seaking-status {
    position: absolute;
    bottom: 50px;

    font-size: 20px;

    animation: bounce 3.5s;
}

#name {
    font-size: 72px;
    font-weight: 700;
    line-height: 72px;
    text-align: center;
    font-family: 'Roboto Condensed';
}
.sub-text {
    font-size: 36px;
    text-align: center;
}
.quote-board-container {
    margin-top: 30px;
}

.row {
    width: 600px;
    max-width: 100vw;
}
.row > div {
    text-align: center;
    margin-top: 30px;
}
.jumbotron-button {
    color: #007bff;
    text-decoration: none;

    background-image: linear-gradient(120deg, #a1c4fd 0, #c2e9fb 100%);

    padding: 10px 15px;
    border-radius: 4px;
    margin: auto;

    transition: all 0.2s ease-in-out;
}
.jumbotron-button:hover {
    color: #0056b3;

    background-image: linear-gradient(20deg, #a1c4fd 0, #c2e9fb 100%);
}
</style>
