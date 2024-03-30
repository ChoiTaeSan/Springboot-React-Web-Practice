import React from 'react';
import Login from './Login'; // Login 컴포넌트를 불러옵니다.
import Signup from './Signup'; // Signup 컴포넌트를 불러옵니다.

function App() {
    return (
        <div className="App">
            <h1>Login Example</h1>
            <Login />
            <hr />
            <h1>Signup</h1>
            <Signup />
        </div>
    );
}

export default App;
