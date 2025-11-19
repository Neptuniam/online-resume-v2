import { createRouter, createWebHistory } from 'vue-router';

import Main from '../views/Main.vue';
import ResumeViewer from '../views/ResumeViewer.vue';

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'main',
            component: Main
        },
        {
            path: '/resume',
            name: 'resume',
            component: ResumeViewer
        }
    ]
});

export default router;
