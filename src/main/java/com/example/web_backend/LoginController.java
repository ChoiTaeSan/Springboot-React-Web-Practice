package com.example.web_backend;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class LoginController {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private PasswordEncoder passwordEncoder;

    @PostMapping("/api/login")
    public ResponseEntity<?> login(@RequestBody LoginRequest loginRequest) {
        // 사용자 인증 로직 구현
        User user = userRepository.findByUsername(loginRequest.getUsername());
        if (user != null && passwordEncoder.matches(loginRequest.getPassword(), user.getPassword())) {
            // 사용자 인증이 성공하면 로그인 성공 응답을 반환
            return ResponseEntity.ok().body(new LoginResponse("User authenticated successfully"));
        } else {
            // 인증 실패
            return ResponseEntity.badRequest().body(new LoginResponse("Authentication failed"));
        }
    }

    // 로그인 요청에 대한 DTO (Data Transfer Object)
    static class LoginRequest {
        private String username;
        private String password;

        // Getter and Setter
        public String getUsername() {
            return username;
        }

        public void setUsername(String username) {
            this.username = username;
        }

        public String getPassword() {
            return password;
        }

        public void setPassword(String password) {
            this.password = password;
        }
    }

    // 로그인 응답에 대한 DTO
    static class LoginResponse {
        private String message;

        // Constructor, Getter and Setter
        public LoginResponse(String message) {
            this.message = message;
        }

        public String getMessage() {
            return message;
        }

        public void setMessage(String message) {
            this.message = message;
        }
    }
}
