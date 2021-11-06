import { createApp } from 'vue';
import App from '@/layouts/App/index.vue';
import routes from './routes';
import store from './store';

createApp(App).use(store).use(routes).mount('#app');
