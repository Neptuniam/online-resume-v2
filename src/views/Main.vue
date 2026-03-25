<template>
    <div
        id="main-container"
        :class="{ 'dark-mode': isDark }"
    >
        <jumbotron />

        <bio />

        <skills />

        <work-history ref="workHistory" />

        <projects />

        <page-footer />
    </div>

    <!-- :class="isDark ? 'fas fa-moon' : 'far fa-moon'" -->
    <!-- TODO: backup to LS -->
    <i
        id="dark-mode-toggle"
        class="clickable noselect"
        :class="isDark ? 'fas fa-moon' : 'far fa-sun'"
        @click="isDark = !isDark"
    />

    <i
        v-show="showUpArrow"
        class="scroll-arrow-indicator fas fa-chevron-up clickable noselect"
        @click="jumpTo(-1)"
    />

    <i
        class="scroll-arrow-indicator fas fa-chevron-down clickable noselect"
        :class="{ bounce: doBounce }"
        @click="jumpTo(1)"
    />
</template>

<script>
import Jumbotron from '../components/main/Jumbotron.vue';
import Bio from '../components/main/Bio.vue';
import WorkHistory from '../components/main/WorkHistory.vue';
import Skills from '../components/main/Skills.vue';
import Projects from '../components/main/Projects.vue';

import PageFooter from '../components/main/PageFooter.vue';

export default {
    components: {
        Jumbotron,
        Bio,
        WorkHistory,
        Skills,
        Projects,
        PageFooter
    },

    data() {
        return {
            isDark: true,
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
                    if (this.$refs.workHistory.inView > 0) {
                        this.$refs.workHistory.inView--;
                        return;
                    }
                } else if (this.$refs.workHistory.inView < this.$refs.workHistory.workHistory.length - 1) {
                    this.$refs.workHistory.inView++;
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

            if (!!nextSection) {
                nextSection.scrollIntoView({
                    behavior: 'smooth'
                });
            } else if (direction > 0) {
                window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
            } else {
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }
        }
    },

    mounted() {
        document.addEventListener('scroll', () => {
            this.showUpArrow = window.scrollY >= window.innerHeight * 0.9;
            this.doBounce = window.scrollY <= 50;
        });
    }
};
</script>

<style scoped>
#dark-mode-toggle,
.scroll-arrow-indicator {
    position: fixed;

    font-size: 32px;
    text-align: center;
    color: rgb(72, 72, 72);

    transition: all 0.2s ease-in-out;
}
#dark-mode-toggle:hover,
.scroll-arrow-indicator:hover {
    color: rgb(52, 52, 52);
}
#dark-mode-toggle {
    left: 20px;
    bottom: 20px;
}
.scroll-arrow-indicator {
    right: 20px;
}

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

.fa-chevron-up {
    top: 10px;
}
.fa-chevron-down {
    bottom: 10px;
}
.bounce {
    animation: bounceIn 2s infinite 2s;
}
</style>
