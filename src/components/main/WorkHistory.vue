<template>
    <div id="work-history" class="section">
        <div>
            <div class="section-header">Work Experience</div>

            <div id="timeline">
                <ul id="dates">
                    <li
                        v-for="job in workHistory"
                        @click="inView = job.id"
                        class="clickable"
                        :class="{ selected: inView == job.id }"
                    >
                        <div class="job-company">
                            {{ job.company_short || job.company }}
                        </div>
                        <div class="job-date ">
                            {{ readableDate(job.start_date) }} - {{ readableDate(job.end_date) }}
                        </div>

                        <span class="dot"></span>
                    </li>
                </ul>

                <ul id="jobs">
                    <template v-for="job in workHistory">
                        <li
                            :id="job.id"
                            :class="{ 
                                selected: inView == job.id,
                            }"
                            :style="`top: ${(job.id - inView) * -100}%;`"
                        >
                            <div class="full-width">
                                <img :src="`/jobs/${job.img}`" :alt="job.company">
                                <a class="text-title" :href="job.link" target="_blank">
                                    {{ job.company }} <br></br>
                                </a>
                                    
                                <div class="text-body">
                                    {{ job.title }} <br></br>
                                </div>
                                <div class="text-body">
                                    {{ job.stack }}
                                </div>
                                <div>
                                    {{ readableDate(job.start_date) }} - {{ readableDate(job.end_date) }} ({{ getJobLenth(job) }})
                                </div>
                            </div>

                            <div class="job-description text-body" v-html="job.description"></div>
                        </li>
                    </template>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
import { history } from '@/assets/work_experience.js';

const DAY = 1000 * 60 * 60 * 24;
const MONTHS = [ 'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December' ];

export default {
    data: () => ({
        workHistory: history,
        inView: history[0].id
    }),

    methods: {
        readableDate: function(date) {
            if (!date)
                return 'Ongoing';

            const _date = new Date(date);
            return `${MONTHS[_date.getMonth()]} ${_date.getFullYear()}`;
        },

        getJobLenth: function(job) {
            const addAndPadStr = (value, denomination) => {
                if (!!value) {
                    str += `${value} ${denomination}`;

                    if (value > 1)
                        str += 's';
                }
            }

            const date2 = !!job.end_date ? new Date(job.end_date) : new Date();
            const date1 = new Date(job.start_date);
            
            const diff = Math.floor(date2.getTime() - date1.getTime());

            const days = Math.floor(diff / DAY);
            const years = Math.floor(days / 365);
            const months = Math.floor((days % 365) / 31);
            
            let str = '';
            addAndPadStr(years, 'year');

            if (!!str && !!months)
                str += ' & ';

            addAndPadStr(months, 'month');
   
            return str;
        }
    }
};
</script>

<style scoped>
#timeline {
    position: relative;

    width: 100%;
    max-width: 1400px;

    overflow: hidden;
    margin: 40px auto;
}

#dates {
    width: 325px;
    float: left;

    border-right: grey 1px solid;
    padding-left: 0px !important;
}
#dates li {
    position: relative;
    list-style: none;
    width: 100%;
    height: 80px;

    padding: 20px 25px 20px 0px;

    text-align: right;
}
#dates li.selected {
    padding: 10px 25px 10px 0px;
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
    border: 4px solid lightblue;
    border-radius: 50%;
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
}


#jobs {
    width: calc(100% - 315px);
    overflow: hidden;
    float: right;
    text-align: left;
}
#jobs li {
    position: absolute;
    top: 0px;

    list-style: none;

    transition: all 1s ease-in-out;
}
#jobs>li>.full-width {
    height: 180px;
    position: relative;
}
#jobs li img {
    float: left;
    height: 100%;
    margin: 0px 20px 0px 0px;
    object-fit: cover;
}
#jobs li .job-description {
    display: block;
    margin: 30px 0px 0px;
    font-weight: normal;
    line-height: 22px;
}

.job-bump-button {
    font-size: 22px;
    font-weight: 600;

    margin: 0px 10px;
}
.job-bump-button.disabled {
    color: grey;
    cursor: not-allowed;
}
</style>
