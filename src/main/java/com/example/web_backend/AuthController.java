package com.example.web_backend;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController // 이 클래스를 REST 컨트롤러로 선언하여 Spring MVC에서 관리하게 함.
public class AuthController {

    @Autowired // Spring의 의존성 주입 기능을 사용하여 UserRepository 인스턴스를 자동으로 주입받음.
    private UserRepository userRepository;

    @Autowired // Spring의 의존성 주입 기능을 사용하여 PasswordEncoder 인스턴스를 자동으로 주입받음.
    private PasswordEncoder passwordEncoder;

    @PostMapping("/register") // 이 메소드를 /register 경로의 POST 요청을 처리하는 핸들러로 지정.
    public ResponseEntity<?> registerUser(@RequestBody User user) {
        // 사용자 이름이 이미 존재하는지 확인
        if (userRepository.findByUsername(user.getUsername()) != null) {
            // 이미 존재한다면, 클라이언트에게 400 에러와 함께 메시지 전송
            return ResponseEntity
                    .badRequest()
                    .body("Error: Username is already taken!");
        }

        // 비밀번호 암호화: 전달받은 사용자의 비밀번호를 암호화하여 다시 설정
        user.setPassword(passwordEncoder.encode(user.getPassword()));
        
        // 사용자 정보 저장: 암호화된 비밀번호와 함께 사용자 정보를 데이터베이스에 저장
        userRepository.save(user);
        
        // 성공적으로 등록되었다는 응답 반환
        return ResponseEntity.ok("User registered successfully!");
    }
}