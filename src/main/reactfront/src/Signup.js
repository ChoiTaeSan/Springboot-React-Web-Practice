import React, { useState } from 'react';
import axios from 'axios';

function Signup() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const { data } = await axios.post('http://localhost:8080/signup', { username, password });
            console.log(data);
            // 회원가입 성공 처리, 예: 로그인 페이지로 리다이렉션
        } catch (error) {
            console.error(error.response.data);
            // 회원가입 실패 처리, 예: 오류 메시지 표시
        }
    };

    return (
        <div>
            <h2>Signup</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Username:
                    <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
                </label>
                <label>
                    Password:
                    <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </label>
                <button type="submit">Signup</button>
            </form>
        </div>
    );
}

export default Signup;
