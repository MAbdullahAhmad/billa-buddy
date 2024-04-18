// src/routes/pages.js

import Homepage from '../pages/static/Homepage/Homepage';
import Dashboard from '../pages/admin/Dashboard/Dashboard';
import Profile from '../pages/member/Profile/Profile';
import Chat from '../pages/member/Chat/Chat';

const routes = {
    static: {
        Homepage: {
            path: '/',
            component: Homepage,
        },
    },
    admin: {
        Dashboard: {
            path: '/admin/dashboard',
            component: Dashboard,
        },
    },
    member: {
        Profile: {
            path: '/member/profile',
            component: Profile,
        },
        Chat: {
            path: '/member/chat',
            component: Chat,
        },
    },
};

export default routes;
