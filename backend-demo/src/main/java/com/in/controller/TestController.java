package com.in.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin("*")
@RestController
@RequestMapping("/test")
public class TestController {

	@GetMapping("/msg")
	public String getMessage() {
		
		return "Jenkins build running successfully";
	}
}
