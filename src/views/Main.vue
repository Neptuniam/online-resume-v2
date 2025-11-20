<template>
    <jumbotron />

    <bio />

    <work-history ref="workHistory" />

    <skills />

    <div
        v-show="showUpArrow"
        class="scroll-arrow-indicator clickable noselect up-arrow"
        @click="jumpTo(-1)"
    >
        <i class="fas fa-chevron-up" />
    </div>

    <div
        class="scroll-arrow-indicator clickable noselect down-arrow"
        @click="jumpTo(1)"
    >
        <i
            class="fas fa-chevron-down"
            :class="{ bounce: doBounce }"
        />
    </div>
</template>

<script>
import Jumbotron from '../components/main/Jumbotron.vue';
import Bio from '../components/main/Bio.vue';
import WorkHistory from '../components/main/WorkHistory.vue';
import Skills from '../components/main/Skills.vue';

export default {
    components: {
        Jumbotron,
        Bio,
        WorkHistory,
        Skills
    },

    data() {
        return {
            showUpArrow: false,
            doBounce: true
        };
    },

    methods: {
        getElementOffsetFromTop: function (el) {
            return window.pageYOffset + el.getBoundingClientRect().top;
        },
        getElementOffsetFromBottom: function (el) {
            return window.pageYOffset + el.getBoundingClientRect().bottom;
        },

        areViewingHistory: function () {
            // TODO: Update to if center of section is in view
            const scrollY = document.documentElement.scrollTop || document.body.scrollTop;
            const el = document.getElementById('work-history');
            const rect = el.getBoundingClientRect();
            const top = this.getElementOffsetFromTop(el);
            const bottom = top + rect.height;

            return scrollY >= top && scrollY <= bottom;
        },
        jumpTo(direction) {
            if (this.areViewingHistory()) {
                if (direction < 0) {
                    if (this.$refs.workHistory.inView < this.$refs.workHistory.workHistory.length - 1) {
                        this.$refs.workHistory.inView++;
                        return;
                    }
                } else if (this.$refs.workHistory.inView > 0) {
                    this.$refs.workHistory.inView--;
                    return;
                }
            }

            const scrollY = document.documentElement.scrollTop || document.body.scrollTop;
            const sections = document.getElementsByClassName('section');
            const nextSection =
                direction < 0
                    ? Array.from(sections)
                          .reverse()
                          .find((_section) => scrollY >= this.getElementOffsetFromBottom(_section))
                    : Array.from(sections).find((_section) => scrollY < this.getElementOffsetFromTop(_section));

            if (!!nextSection)
                nextSection.scrollIntoView({
                    behavior: 'smooth'
                });
        }
    },

    mounted() {
        document.addEventListener('scroll', () => {
            this.showUpArrow = window.scrollY >= window.innerHeight;
            this.doBounce = window.scrollY <= 50;
        });
    }
};
</script>

<style>
.section {
    font-family: 'Roboto Condensed';

    padding: 90px 0px;
}
.section:nth-child(even) {
    background-color: rgba(217, 217, 217, 0.4);
}
.section > div {
    width: calc(100vw - 100px);
    max-width: 1400px;
    margin: auto;
}
.section-header {
    font-size: 42px;
    font-family: 'Patua One';
    text-align: center;
    text-decoration: underline;

    color: black;
}
.section-sub-header {
    font-size: 26px;
    text-align: center;
}
.section a {
    color: rgb(65, 62, 62);
}
</style>
<style scoped>
@keyframes bounceIn {
    0%,
    20%,
    50%,
    80%,
    100% {
        transform: translateY(0);
        opacity: 1;
    }
    40% {
        transform: translateY(-30px);
    }
    60% {
        transform: translateY(-15px);
    }
}
.scroll-arrow-indicator {
    position: fixed;
    right: 10px;

    font-size: 32px;

    text-align: cente;

    height: 40px;
    width: 40px;

    transition:
        visibility 0.5s,
        opacity 0.5s linear;
}
.up-arrow {
    top: 10px;
}
.down-arrow {
    bottom: 10px;
}
.bounce {
    animation: bounceIn 2s infinite 2s;
}
</style>
