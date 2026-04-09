import './assets/main.css';

import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

const app = createApp(App);

import 'material-icons/iconfont/material-icons.css';

app.use(router);

app.mount('#app');
