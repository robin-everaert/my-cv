import { createApp } from 'vue'
import App from './App.vue'
import router from './router';
import i18n from './translations/i18n';
import { createPinia } from 'pinia';

import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './assets/styles/index.scss';

const app = createApp(App);
const pinia = createPinia();

app.use(i18n);
app.use(router); 
app.use(pinia);
app.mount('#app'); 