// src/routes.js

import compile_routes from './core/util/functions/compile_routes';

import static_routes from './pages/static/routes';
import member_routes from './pages/member/routes';
import admin_routes from './pages/admin/routes';

const routes = [
  {
    name: 'static',
    path: '*',
    subroutes: static_routes,
    exact: true,
  },
  {
    name: 'member',
    path: '/member/*',
    subroutes: member_routes,
  },
  {
    name: 'admin',
    path: '/admin/*',
    subroutes: admin_routes
  },
];

routes.auto_compile = true; // compile all subroutes
routes.auto_prefix = true; // add parent prefix to all subroutes

export default compile_routes(routes);