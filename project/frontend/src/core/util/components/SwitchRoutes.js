// src/core/util/components/SwitchRoutes.js

import React from 'react';
import { Route, Routes } from 'react-router-dom';

function SwitchRoutes({routes}){

    const mappable_routes = !Array.isArray(routes) && !routes.component ?
        Object.values(routes) :
        routes
    ;

    return (
        <Routes>
            {
                mappable_routes.map(
                    ({
                        path,
                        component: Component,
                        ...rest
                    }) => (
                        <Route key={path} path={path} element={<Component {...rest} />} />
                    )
                )
            }
        </Routes>
    )
}

export default SwitchRoutes;
