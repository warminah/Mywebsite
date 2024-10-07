// src/website_frontend/src/index.js
import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';

const App = () => {
    const [greeting, setGreeting] = useState('');

    useEffect(() => {
        const fetchGreeting = async () => {
            const response = await fetch('/api/getGreeting');
            const data = await response.text();
            setGreeting(data);
        };
        fetchGreeting();
    }, []);

    return (
        <div>
            <h1>{greeting}</h1>
        </div>
    );
};

ReactDOM.render(<App />, document.getElementById('root'));
