import React from 'react'
import ReactDOM from 'react-dom'
import { App } from './App'
import { makeServer } from './services/mirage';

if (import.meta.env.VITE_NODE_ENV !== 'production') {
    makeServer();
}

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
)
