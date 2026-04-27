<template>
    <div :class="{ 'dark-mode': isDarkMode }">
        <div id="main-container">
            <jumbotron />

            <bio />

            <skills />

            <work-history ref="workHistory" />

            <projects />

            <page-footer />
        </div>

        <navbar
            v-if="showExtraOptions"
            ref="navbar"
            v-model:isDarkMode="isDarkMode"
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
    </div>
</template>

<script>
import Jumbotron from '../components/main/Jumbotron.vue';
import Bio from '../components/main/Bio.vue';
import WorkHistory from '../components/main/WorkHistory.vue';
import Skills from '../components/main/Skills.vue';
import Projects from '../components/main/Projects.vue';

import Navbar from '../components/main/Navbar.vue';
import PageFooter from '../components/main/PageFooter.vue';

export default {
    components: {
        Jumbotron,
        Bio,
        WorkHistory,
        Skills,
        Projects,
        Navbar,
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
        // TEMP: I just prefer darkmode
        // const clientTime = new Date().getHours();
        // this.isDarkMode = clientTime < 9 || clientTime >= 17;

        document.addEventListener('scroll', () => {
            this.showExtraOptions = window.scrollY >= window.innerHeight * 0.6;
            this.doBounce = window.scrollY <= 50;
        });

        document.getElementById('main-container').addEventListener('click', () => {
            if (this.$refs?.navbar?.showNavbar) {
                this.$refs.navbar.showNavbar = false;
            }
        });
    }
};
</script>

<style scoped>
.scroll-arrow-indicator {
    position: fixed;
    right: 15px;

    font-size: 50px;
    text-align: center;
    color: #8b8b8b !important;

    transition: all 0.2s ease-in-out;
}
.scroll-arrow-indicator:hover {
    color: #717171;
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
    top: calc(50vh - 64px);
    rotate: -90deg;
}
.chevron-down {
    bottom: 5px;
    rotate: 90deg;
}
.chevron-down.center-chevron-right {
    bottom: calc(50vh - 64px);
}
.bounce {
    animation: bounceIn 2s infinite 2s;
}
</style>
