// src/core/RoutesCompiler.js

import map_routes from '../../mappers/map_routes';
import SwitchRoutes from '../components/SwitchRoutes';

/**
 * Compiles Routes
 * 
 * @property {Boolean} routes.auto_compile: if true, then compiles subroutes upto last level
 * @property {Boolean} routes.auto_prefix: if true, then adds name of parent as prefix to name of subroutes upto last level
 * 
 * @property {Boolean} routes.compile: if true, then compiles current 'routes'
 * @property {Boolean} routes.prefix: if true, then adds name of parent as prefix to name for current 'routes'
 * 
 * @param {Array} routes routes array
 * @param {String} prefix prefix
 * @returns {Object} compiled routes
 */
function compile_routes(routes, prefix) {
    if(
        routes.auto_compile ||
        routes.auto_prefix
    ){
        for(let i in routes){
            if(routes[i].subroutes){
                if(routes.auto_compile){
                    routes[i].subroutes.compile = true;
                    routes[i].subroutes.auto_compile = true;
                }
                if(routes.auto_prefix ){
                    routes[i].subroutes.prefix = routes[i].name + '.';
                    routes[i].subroutes.auto_prefix = true;
                }
            }
        }
    }

    return map_routes(
        // routes
        routes,

        // dynamic component generator (for children)
        subroutes => (
            function DynamicSubroutesComponent(){
                return <SwitchRoutes routes={subroutes} />;
            }
        ),

        // prefix
        prefix,

        compile_routes
    );

}

export default compile_routes;
