<template>
    <div>
        <i
            id="navbar-activator"
            class="material-icons clickable"
            @click="showNavbar = true"
        >
            density_medium
        </i>

        <div
            id="navbar"
            :class="{ 'show-navbar': showNavbar }"
        >
            <i
                id="navbar-deactivator"
                class="material-icons clickable"
                @click="showNavbar = false"
            >
                close
            </i>

            <h1>Liam Jones.</h1>
            <h3>Senior Software Developer</h3>

            <ol style="margin-top: 30px">
                <li
                    class="main-link clickable"
                    @click="jumpToSection('home')"
                >
                    Home
                </li>
                <template
                    v-for="section in sections"
                    :key="section.id"
                >
                    <li
                        class="main-link clickable"
                        @click="jumpToSection(section.id)"
                    >
                        {{ section.title }}
                    </li>

                    <ul
                        v-if="section.id == 'work-history'"
                        @click="jumpToSection(section.id)"
                    >
                        <li
                            v-for="(job, index) in workHistory"
                            :key="`job_nav_${job.id}`"
                            class="sub-link clickable"
                            @click="jumpToSubSection(section, index)"
                        >
                            {{ job.company }}
                        </li>
                    </ul>
                </template>
            </ol>

            <div id="socials-bar">
                <router-link
                    to="/resume"
                    target="_blank"
                    class="text-body"
                >
                    <i class="fas fa-file-alt"></i>
                </router-link>

                <router-link
                    to="https://github.com/neptuniam"
                    target="_blank"
                    class="text-body"
                >
                    <i class="fab fa-github"></i>
                </router-link>

                <router-link
                    to="https://www.linkedin.com/in/liam-jones-35530b12b/"
                    target="_blank"
                    class="text-body"
                >
                    <i class="fab fa-linkedin"></i>
                </router-link>
            </div>

            <i
                id="dark-mode-toggle"
                class="clickable noselect"
                style="position: absolute; right: 5px; bottom: 5px; font-size: 32px"
                :class="isDarkMode ? 'fas fa-moon' : 'far fa-sun'"
                @click="$emit('update:isDarkMode', !isDarkMode)"
            />
        </div>
    </div>
</template>

<script>
import { history } from '@/assets/work_experience.js';

export default {
    props: {
        isDarkMode: {
            type: Boolean,
            required: true
        }
    },

    data() {
        return {
            showNavbar: false,
            sections: [],
            workHistory: history
        };
    },

    methods: {
        jumpToSection: function (id) {
            document.getElementById(id).scrollIntoView({
                behavior: 'smooth'
            });
        },
        jumpToSubSection: function (section, index) {
            if (!this.$parent.areViewingHistory()) {
                this.jumpToSection(section.id);

                // Allow for time to smooth scroll to section
                setTimeout(() => {
                    this.$parent.$refs.workHistory.inView = index;
                }, 1000);
            } else {
                this.$parent.$refs.workHistory.inView = index;
            }
        }
    },

    mounted() {
        this.sections = [...document.getElementsByClassName('section')].map((_section) => ({
            id: _section.id,
            title: _section.getElementsByClassName('section-header')[0]?.innerHTML
        }));
    }
};
</script>

<style scoped>
#navbar-activator {
    position: fixed;
    top: 15px;
    left: 15px;

    color: #8b8b8b !important;
}
#navbar-deactivator {
    position: absolute;
    top: 15px;
    right: 15px;
}
#navbar {
    position: fixed;
    top: 0px;
    left: -275px;

    color: var(--text-color-normal);
    background-color: var(--background-color-navbar);

    height: 100vh;
    width: 275px;

    padding: 10px 20px;

    transition: left 0.75s ease-in-out;
}
.show-navbar {
    left: 0px !important;
}

ol {
    list-style-type: none;
    padding-left: 0px !important;
}
ul {
    padding-left: 30px !important;
}

.main-link {
    font-size: var(--text-body-size);
}
.sub-link {
    font-size: var(--text-sub-body-size) !important;
}

li:hover {
    color: var(--text-color-anchor);
}

#socials-bar {
    position: absolute;
    left: 5px;
    bottom: 0px;
    width: 100%;
}
#socials-bar i {
    font-size: 24px;
    margin-right: 15px;
}
i {
    transition: all 0.2s ease-in-out;
}
i:hover {
    color: #717171;
}
</style>
