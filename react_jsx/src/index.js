import React from 'react';
import ReactDOM from 'react-dom';
import { Body } from './components';

const App = () => {
    return <div className="app">
        <script>
            <h1>Test</h1>
        </script>
        <Body />
    </div>
}

ReactDOM.render(
    <App />, 
    document.getElementById("app")
);