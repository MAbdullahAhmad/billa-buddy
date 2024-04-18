// src/core/mappers/map_routes.js

const map_routes = (config, dynamic_subroutes_generator, prefix, compiler) => {
  const routes = {};

  config.forEach(({ exact, name, path, subroutes, component }) => {
    if(subroutes && subroutes.compile){
      subroutes = compiler(subroutes, subroutes.prefix);
    }
    
    routes[name] = {
      name: prefix ? prefix + name : name,
      path,
      component
    };

    if(exact){
      routes[name].exact = exact;
    }

    if(subroutes){
      routes[name].subroutes = subroutes;
      if(!component && dynamic_subroutes_generator){
        routes[name].component = dynamic_subroutes_generator(subroutes);
      }
    }
  });

  return routes;
};

export default map_routes;
