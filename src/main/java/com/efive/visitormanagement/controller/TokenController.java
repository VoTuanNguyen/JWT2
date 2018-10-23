package com.efive.visitormanagement.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.efive.visitormanagement.model.LoginModel;
import com.efive.visitormanagement.security.JwtGenerator;

@RestController
@RequestMapping("/token")
public class TokenController {

	private JwtGenerator jwtgenerator;
	

	public TokenController(JwtGenerator jwtgenerator) {

		this.jwtgenerator = jwtgenerator;
	}


	/*@PostMapping*/@GetMapping
	public String generated(@RequestBody final LoginModel loginuser)
	{
		

	return jwtgenerator.generate(loginuser);
	
	}
}
