package com.example.web_backend;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class LoginController {

    @GetMapping("/login")
    public String login() {
        return "login"; // login.html 페이지로 리다이렉트하거나 해당 뷰 이름 반환
    }
}
