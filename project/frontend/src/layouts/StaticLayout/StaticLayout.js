// src/layouts/StaticLayout/StaticLayout.js

import { useState } from 'react';
import './StaticLayout.css';

import Header from './local/Header/Header';
import Footer from './local/Footer/Footer';

const StaticLayout = ({ children }) => {
    const [theme, setTheme] = useState('light');
    const toggle_theme = () => setTheme(theme == 'light' ? 'dark' : 'light');

    return (
        <div className={`static-layout ${theme}-theme`}>
            <Header toggle_theme={toggle_theme} />
            <main className="static-content">
                {children}
            </main>
            <Footer />
        </div>
    );
};

export default StaticLayout;
