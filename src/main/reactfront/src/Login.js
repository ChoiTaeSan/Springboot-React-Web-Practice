import React, { useState } from 'react';
import axios from 'axios';

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault(); // 폼 제출 시 페이지 새로고침 방지
        try {
            // POST 요청으로 로그인 시도
            const response = await axios.post('http://localhost:8080/api/login', {
                username: '사용자명',
                password: '비밀번호'
            });
            console.log('Login success:', response.data);
            // 로그인 성공 후 처리
        } catch (error) {
            console.error('Login error:', error);
            // 로그인 실패 처리
        }
    };


    return (
        <form onSubmit={handleLogin}>
            <div>
                <label htmlFor="username">Username:</label>
                <input
                    id="username"
                    name="username"
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    autoComplete="username" // 자동 완성 유형 지정
                />
            </div>
            <div>
                <label htmlFor="password">Password:</label>
                <input
                    id="password"
                    name="password"
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    autoComplete="current-password" // 자동 완성 유형 지정
                />
            </div>
            <button type="submit">Login</button>
        </form>
    );
}

export default Login;
