<template>
    <div
        class="section"
        id="projects"
    >
        <div>
            <div class="section-header">Personal Projects</div>

            <div class="section-sub-header">
                Here's a bunch of my most notable projects pulled dynamically from the Github API!
            </div>

            <div
                v-if="projects === null"
                class="text-title text-center section-content-spacing"
            >
                Loading...
            </div>
            <div
                v-else-if="!projects.length"
                class="text-title text-center section-content-spacing"
            >
                No projects found.
            </div>
            <div
                v-else
                class="row section-content-spacing"
            >
                <div
                    v-for="project in projects"
                    :key="project.node_id"
                    class="col-sm-6 col-md-4 col-3"
                >
                    <a
                        :href="project.html_url"
                        target="_blank"
                    >
                        <img :src="`/projects/${imgMap[project.name] || 'default'}.PNG`" />

                        <div class="project-title-row text-body">
                            <a
                                class="project-name"
                                :href="project.homepage"
                                target="_blank"
                            >
                                {{ project.name }}
                            </a>

                            <span
                                class="float-right"
                                :class="{
                                    'red-text': typeMap[project.name] == 'Android',
                                    'cyan-text': typeMap[project.name] == 'CLI',
                                    'orange-text': !typeMap[project.name]
                                }"
                            >
                                <i
                                    :class="{
                                        'fab fa-android': typeMap[project.name] == 'Android',
                                        'fas fa-code': typeMap[project.name] == 'CLI',
                                        'fab fa-html5': !typeMap[project.name]
                                    }"
                                ></i>

                                {{ typeMap[project.name] || 'Web' }}
                            </span>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';

const IMG_MAP = {
    'Personal-Homepage': 'Personal-Homepage',
    'Neptuniam.github.io': 'Neptuniam.github.io',
    'online-resume-v2': 'online-resume-v2',
    'Flight-Checker': 'Flight-Checker',
    'Remindly-V2.0': 'Remindly-V2.0',
    'Generic-Linked-List': 'Generic-Linked-List',
    'Dribbble-Crawler': 'Dribbble-Crawler',
    surveyship: 'surveyship',
    '134-HomepageV2': '134-HomepageV2',
    'D-D_Translator': 'D-D_Translator',
    encryptor: 'encryptor',
    'iQommerce---News-App': 'iQommerce---News-App',
    'openhouse.ai-frontend-test': 'openhouse.ai-frontend-test',
    'docupet-challenge': 'docupet-challenge',
    'cipher-chat': 'cipher-chat',
    'cipher-chat-react': 'cipher-chat-react'
};
const TYPE_MAP = {
    'advent-of-code': 'CLI',
    'Dribbble-Crawler': 'CLI',
    'Generic-Linked-List': 'CLI',
    'VS-Shell': 'CLI',

    'Remindly-V2.0': 'Android'
};
const FILTERED_PROJECTS = ['Neptuniam', 'lcbo-crawler', 'openhouse.ai-frontend-test'];

export default {
    data() {
        return {
            projects: null,
            imgMap: IMG_MAP,
            typeMap: TYPE_MAP
        };
    },

    mounted() {
        axios.get('https://api.github.com/users/Neptuniam/repos').then((res) => {
            this.projects = res?.data?.filter((_job) => !FILTERED_PROJECTS.includes(_job.name)) || [];
        });
    }
};
</script>

<style scoped>
.row > div {
    position: relative;
    height: 240px;
    padding: 10px 20px 60px 20px;
}
img {
    position: relative;
    top: 0px;
    left: 0px;

    width: 100%;
    height: 100%;
    object-fit: cover;

    border-radius: 4px;

    transition: all 0.2s ease-in-out;
}

img:hover {
    top: -10px;
    left: -10px;

    width: calc(100% + 20px);
    height: calc(100% + 20px);
}

.project-title-row {
    position: absolute;
    left: 22.5px;
    bottom: 25px;

    width: calc(100% - 50px);
}

.project-name {
    font-weight: 600;
}
</style>
