import VueRouter from 'vue-router';
import Root from '../Components/Root';

export const routes = [
    {
        path: '/ecc',
        name: 'ecc-home',
        component: Root,
        children: [
            {
                path: 'servers',
                name: 'ecc-servers',
                component: () => import('../Components/Servers'),
            },
            {
                path: 'stats',
                name: 'ecc-stats',
                component: () => import('../Components/Stats'),
            },

        ]
    },
];

export const router = new VueRouter({
    mode: 'history',
    routes,
});

export default router;
