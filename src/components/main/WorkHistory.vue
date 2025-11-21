<template>
    <div
        id="work-history"
        class="section"
    >
        <div>
            <div class="section-header">Work Experience</div>

            <div
                id="timeline"
                class="section-content-spacing"
            >
                <ul
                    id="dates"
                    class="float-left"
                >
                    <li
                        v-for="(job, index) in workHistory"
                        :key="`date_${job.id}`"
                        class="clickable"
                        :class="{ selected: inView == index }"
                        @click="inView = index"
                    >
                        <div class="job-company">
                            {{ job.company_short || job.company }}
                        </div>
                        <div class="job-date">
                            {{ readableDate(job.start_date) }} - {{ readableDate(job.end_date) }}
                        </div>

                        <span class="dot"></span>
                    </li>
                </ul>

                <ul
                    id="jobs"
                    class="float-right"
                >
                    <li
                        v-for="(job, index) in workHistory"
                        :key="`job_${job.id}`"
                        :style="`top: ${(index - inView) * 100}%;`"
                    >
                        <div class="full-width">
                            <img
                                :src="`/jobs/${job.img}`"
                                class="float-left"
                            />

                            <a
                                class="text-title"
                                :href="job.link"
                                target="_blank"
                            >
                                {{ job.company }}
                            </a>

                            <div class="text-body">
                                {{ job.title }}
                            </div>

                            <div class="text-body">
                                {{ job.stack }}
                            </div>

                            <div class="text-body job-date">
                                {{ readableDate(job.start_date) }} - {{ readableDate(job.end_date) }} ({{
                                    getJobLenth(job)
                                }})
                            </div>
                        </div>

                        <div
                            class="job-description text-body"
                            v-html="job.description"
                        ></div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
import { history } from '@/assets/work_experience.js';

const DAY = 1000 * 60 * 60 * 24;
const MONTHS = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
];

export default {
    data: () => ({
        workHistory: history,
        inView: 0
    }),

    methods: {
        readableDate: function (date) {
            if (!date) return 'Ongoing';

            const _date = new Date(date);
            return `${MONTHS[_date.getMonth()]} ${_date.getFullYear()}`;
        },

        getJobLenth: function (job) {
            const addAndPadStr = (value, denomination) => {
                if (!!value) {
                    str += `${value} ${denomination}`;

                    if (value > 1) str += 's';
                }
            };

            const date2 = !!job.end_date ? new Date(job.end_date) : new Date();
            const date1 = new Date(job.start_date);

            const diff = Math.floor(date2.getTime() - date1.getTime());

            const days = Math.floor(diff / DAY);
            const years = Math.floor(days / 365);
            const months = Math.floor((days % 365) / 31);

            let str = '';
            addAndPadStr(years, 'year');

            if (!!str && !!months) str += ' & ';

            addAndPadStr(months, 'month');

            return str;
        }
    }
};
</script>

<style scoped>
#timeline {
    position: relative;

    overflow: hidden;
}

#dates {
    width: 325px;

    border-right: grey 1px solid;
    padding-left: 0px;
}
#dates li {
    position: relative;
    list-style: none;
    height: 80px;

    padding: 20px 20px 20px 0px;

    text-align: right;
}
#dates .job-company {
    font-size: calc(16px * 1.6);
    line-height: calc(16px * 1.6);
}
#dates .job-date {
    font-size: 16px;
}
.dot {
    position: absolute;
    top: calc(50% - 5px);
    right: -11px;

    width: 20px;
    height: 20px;

    background-color: white;
    border: 4px solid #45526e;
    border-radius: 50%;
}

#dates li.selected {
    padding: 10px 20px 10px 0px;
}
#dates .selected .job-company {
    font-size: calc(22px * 1.6);
    line-height: calc(22px * 1.6);
    font-weight: 600;
}
#dates .selected .job-date {
    font-size: 22px;
    font-weight: 600;
}
#dates .selected .dot {
    top: calc(50% - 10px);
    right: -13px;

    width: 25px;
    height: 25px;
    border-width: 5px;
    border-color: #4b74ce;
}

#jobs {
    width: calc(100% - 315px);
    overflow: hidden;
    text-align: left;
}
#jobs li {
    position: absolute;
    top: 0px;

    list-style: none;

    transition: all 1s ease-in-out;
}
#jobs > li > .full-width {
    height: 180px;
    position: relative;
}
#jobs li img {
    height: 100%;
    object-fit: cover;

    margin-right: 20px;
}
#jobs li .job-date {
    margin-top: 20px;
}
#jobs li .job-description {
    font-weight: normal;

    margin-top: 30px;
}
</style>
