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
                                <a
                                    :href="project.html_url"
                                    target="_blank"
                                    class="margin-right-1"
                                >
                                    <i
                                        class="fab fa-github"
                                        style="color: var(--text-color-section-header)"
                                    />
                                </a>

                                <a
                                    v-if="!!project.homepage"
                                    :href="project.homepage"
                                    target="_blank"
                                    class="project-name"
                                >
                                    {{ capitalize(project.name) }}
                                </a>
                                <span
                                    v-else
                                    class="project-name"
                                >
                                    {{ capitalize(project.name) }}
                                </span>
                            </span>

                            <span class="float-right text-body">
                                <span :class="project.colorClass">
                                    <i :class="project.iconClass"></i>

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
            const _projects = res?.data || [];

            this.projects = _projects
                ?.filter((_project) => !FILTERED_PROJECTS.includes(_project.name))
                ?.map((_project) => {
                    if (this.typeMap[_project.name] == 'Android') {
                        _project.colorClass = 'red-text';
                        _project.iconClass = 'fab fa-android';
                    } else if (this.typeMap[_project.name] == 'CLI') {
                        _project.colorClass = 'cyan-text';
                        _project.iconClass = 'fas fa-code';
                    } else if (_project.language == 'Vue') {
                        _project.colorClass = 'vue-text';
                        _project.iconClass = 'fab fa-vuejs';
                    } else if (this.typeMap[_project.name] == 'React') {
                        _project.colorClass = 'react-text';
                        _project.iconClass = 'fab fa-react';
                    } else if (!this.typeMap[_project.name] || this.typeMap[_project.name] == 'Web') {
                        _project.colorClass = 'orange-text';
                        _project.iconClass = 'fab fa-html5';
                    } else {
                        console.error('Unknown Class colour condition', _project);
                    }

                    return _project;
                });
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
    background-color: #3a3c4b;
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
