<template>
    <div
        id="main-container"
        :class="{ 'dark-mode': isDarkMode }"
    >
        <jumbotron />

        <bio />

        <skills />

        <work-history ref="workHistory" />

        <projects />

        <page-footer />
    </div>

    <i
        v-show="showExtraOptions"
        id="dark-mode-toggle"
        class="clickable noselect"
        :class="isDarkMode ? 'fas fa-moon' : 'far fa-sun'"
        @click="isDarkMode = !isDarkMode"
    />

    <i
        v-show="showExtraOptions"
        class="scroll-arrow-indicator chevron-up material-icons clickable noselect"
        @click="jumpTo(-1)"
    >
        chevron_right
    </i>

    <i
        class="scroll-arrow-indicator chevron-down material-icons clickable noselect"
        :class="{ bounce: doBounce, 'center-chevron-right': showExtraOptions }"
        @click="jumpTo(1)"
    >
        chevron_right
    </i>
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
            isDarkMode: true,
            showExtraOptions: false,
            doBounce: true
        };
    },

    methods: {
        getElementOffsetFromTop: function (el) {
            return window.pageYOffset + el.getBoundingClientRect().top - 70;
        },
        getElementOffsetFromBottom: function (el) {
            return window.pageYOffset + el.getBoundingClientRect().bottom - 70;
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
        // If early or late in the day, default to the dark theme
        const clientTime = new Date().getHours();
        this.isDarkMode = clientTime < 6 || clientTime >= 18;

        document.addEventListener('scroll', () => {
            this.showExtraOptions = window.scrollY >= window.innerHeight * 0.6;
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
    color: #8b8b8b !important;

    transition: all 0.2s ease-in-out;
}
#dark-mode-toggle:hover,
.scroll-arrow-indicator:hover {
    color: #717171;
}
#dark-mode-toggle {
    top: calc(50vh - 16px);
    right: 24px;
}
.scroll-arrow-indicator {
    font-size: 50px;
    right: 15px;
}

@keyframes bounceIn {
    0%,
    20%,
    50%,
    80%,
    100% {
        transform: translateX(0);
        opacity: 1;
    }
    40% {
        transform: translateX(-30px);
    }
    60% {
        transform: translateX(-15px);
    }
}

.chevron-up {
    top: calc(50vh - 82px);
    rotate: -90deg;
}
.chevron-down {
    bottom: 5px;
    rotate: 90deg;
}
.chevron-down.center-chevron-right {
    bottom: calc(50vh - 82px);
}
.bounce {
    animation: bounceIn 2s infinite 2s;
}
</style>
