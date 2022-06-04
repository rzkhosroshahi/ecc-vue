import VueRouter from 'vue-router';
import Servers from '../components/Servers';
import Stats from '../components/Stats';
import Root from '../components/Root';

export const routes = [
    {
        path: '/ecc',
        name: 'ecc-home',
        component: Root,
        children: [
            {
                path: 'servers',
                name: 'ecc-servers',
                component: Servers,
            },
            {
                path: 'stats',
                name: 'ecc-stats',
                component: Stats,
            },

        ]
    },
];

export const router = new VueRouter({
    mode: 'history',
    routes,
});

export default router;
