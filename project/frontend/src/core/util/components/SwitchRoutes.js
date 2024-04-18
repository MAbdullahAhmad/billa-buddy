// src/core/util/components/SwitchRoutes.js

import React from 'react';
import { Route, Routes } from 'react-router-dom';

// const SwitchRoutes = ({ routes }) => (
//     console.log(
//         "switch",
//         Array.isArray(routes) || !routes.children ?      // if is array
//         routes :                     // then use
//         Object.values(routes) // otherwise, convert Object values to array
//     ),
//     <Routes>
//         {
//             (
//                 Array.isArray(routes) ?      // if is array
//                 routes :                     // then use
//                 Object.values(routes) // otherwise, convert Object values to array
//             )
//             // map array items to 'Route' components
//             .map (
//                 ({
//                     path,
//                     component: Component,
//                     ...rest
//                 }) => (
//                     <Route key={path} path={path} element={<Component {...rest} />} />
//                 )
//             )
//         }
//     </Routes>
// );

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
