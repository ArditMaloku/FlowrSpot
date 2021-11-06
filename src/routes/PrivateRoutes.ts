import { RouteRecordRaw } from 'vue-router';

const routes = [
    {
        path: '/asd',
        name: 'asd',
        redirect: '/',
    },
];

export const PrivateRoutes: Array<RouteRecordRaw> = routes.map((route) => {
    const meta = {
        public: false,
    };
    return { ...route, meta };
});
