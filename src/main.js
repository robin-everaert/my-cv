import { createApp } from 'vue'
import App from './App.vue'
import router from './router';
import i18n from './translations/i18n';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './assets/styles/index.scss';

const app = createApp(App);

app.use(i18n);
app.use(router); 
app.mount('#app'); 
