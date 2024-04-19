// src/pages/static/Homepage/Homepage.js

import React from 'react';
import StaticLayout from '../../../layouts/StaticLayout/StaticLayout';

import Welcome from './Welcome/Welcome';

const Homepage = () => {
    return (
        <StaticLayout>
            <Welcome />
            <div>
                <h1>Homepage</h1>
                <p>Welcome to the Homepage.</p>
            </div>
        </StaticLayout>
    );
}

export default Homepage;
