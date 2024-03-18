import React, { useState } from 'react';
import axios from 'axios';

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8080/api/login', {
                username,
                password
            });
            console.log(response.data);
            if (response.data.success) {
                // 로그인 성공 후 처리, 예: 대시보드로 리다이렉션
            } else {
                // 로그인 실패 메시지 표시
            }
        } catch (error) {
            console.error("Login error:", error);
            // 에러 처리
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
