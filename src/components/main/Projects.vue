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
                    v-for="(project, index) in projects"
                    :key="project.node_id"
                    class="col-sm-12 col-md-6 col-3"
                >
                    <div class="card">
                        <img :src="`/online-resume-v2/projects/${imgMap[project.name] || 'default'}.PNG`" />

                        <div class="project-title-row">
                            <span class="text-body">
                                <i
                                    :href="project.html_url"
                                    target="_blank"
                                    class="fab fa-github margin-right-1"
                                ></i>

                                <a
                                    :href="project.homepage"
                                    target="_blank"
                                    class="project-name"
                                >
                                    {{ capitalize(project.name) }}
                                </a>
                            </span>

                            <span class="float-right text-body">
                                <span
                                    :class="{
                                        'red-text': typeMap[project.name] == 'Android',
                                        'cyan-text': typeMap[project.name] == 'CLI',
                                        'vue-text': project.language == 'Vue',
                                        'react-text': typeMap[project.name] == 'React',
                                        'orange-text': !typeMap[project.name] || typeMap[project.name] == 'Web'
                                    }"
                                >
                                    <i
                                        :class="{
                                            'fab fa-android': typeMap[project.name] == 'Android',
                                            'fas fa-code': typeMap[project.name] == 'CLI',
                                            'fab fa-vuejs': project.language == 'Vue',
                                            'fab fa-react': typeMap[project.name] == 'React',
                                            'fab fa-html5': !typeMap[project.name] || typeMap[project.name] == 'Web'
                                        }"
                                    ></i>

                                    {{ typeMap[project.name] || project.language || 'Web' }}
                                </span>
                            </span>
                        </div>

                        <!-- <div class="project-description text-body">
                            {{ project.description }}
                        </div> -->
                    </div>
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

    'cipher-chat-react': 'React',

    'Neptuniam.github.io': 'Web',
    'Personal-Homepage': 'Web',

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

    methods: {
        capitalize: function (value) {
            if (!value) return value;
            return value
                .replaceAll('-', ' ')
                .replaceAll('_', ' ')
                .replace(/(?:^|\s|["'([{])+\S/g, (match) => match.toUpperCase());
        },

        applySort: function () {
            // TODO
        }
    },

    mounted() {
        axios.get('https://api.github.com/users/Neptuniam/repos').then((res) => {
            this.projects = res?.data?.filter((_job) => !FILTERED_PROJECTS.includes(_job.name)) || [];
        });
    }
};
</script>

<style scoped>
.row {
    position: relative;
}
.row > div {
    position: relative;
    padding: 0px 15px 30px 15px;
}
/* .row > div:hover {
    padding: 5px 5px 5px 5px;
} */
img {
    position: relative;
    top: 0px;
    left: 0px;

    width: 100%;
    height: 200px;

    object-fit: cover;
}

.card {
    position: relative;

    background-color: white;
    border-radius: 4px;

    padding: 5px 5px;
}
.dark-mode .card {
    background-color: #0a1128;
}

.project-title-row {
    padding: 0px 5px;
}
.project-name {
    font-weight: 700;
}

.project-description {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;

    margin-top: 10px;
}

.margin-right-1 {
    margin-right: 7.55px;
}
</style>
