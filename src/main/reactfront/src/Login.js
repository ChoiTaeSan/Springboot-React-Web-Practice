// Login.js
import React, { useState } from 'react';
import axios from 'axios';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8080/api/login', {
                email: email,
                password: password,
            });
            console.log('Login success:', response.data);
            // 로그인 성공 후 처리 (예: 토큰 저장, 메인 페이지로 리다이렉트 등)
        } catch (error) {
            console.error('Login error:', error);
            // 로그인 실패 처리
        }
    };

    return (
        <div>
            <form onSubmit={handleLogin}>
                <label>
                    Email:
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                </label>
                <label>
                    Password:
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </label>
                <button type="submit">Login</button>
            </form>
        </div>
    );
}

export default Login;
