// src/pages/member/routes.js

import Profile from './Profile/Profile';
import Chat from './Chat/Chat';

const routes = [
  {
    name: 'profile',
    path: '/profile',
    component: Profile,
    exact: true,
  },
  {
    name: 'chat',
    path: '/chat',
    component: Chat,
    exact: true,
  },
];

export default routes;
