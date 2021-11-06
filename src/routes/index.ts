import { createRouter, createWebHistory } from 'vue-router';
import { PrivateRoutes } from './PrivateRoutes';
import { PublicRoutes } from './PublicRoutes';
import store from '@/store/index.js';

const router = createRouter({
    history: createWebHistory(),
    routes: [...PublicRoutes, ...PrivateRoutes],
});

// router.beforeEach((to, from, next) => {
//     const authenticated = store.state.user.authenticated;
//     const onlyLoggedOut = to.matched.some((record) => record.meta.onlyLoggedOut);
//     const isPublic = to.matched.some((record) => record.meta.public);
//     if (!isPublic && !authenticated) {
//         // this route requires auth, check if logged in
//         // if not, redirect to login page.
//         return next({
//             path: '/login',
//             query: { redirect: to.fullPath },
//         });
//     }
//     if (authenticated && onlyLoggedOut) {
//         return next('/');
//     }
//     next();
// });

export default router;
