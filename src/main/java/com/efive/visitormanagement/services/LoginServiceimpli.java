package com.efive.visitormanagement.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.stereotype.Service;
import com.efive.visitormanagement.model.LoginModel;
import com.efive.visitormanagement.dao.AdminDao;
import com.efive.visitormanagement.dao.LoginRepository;
@Service
public class LoginServiceimpli  implements LoginServiceI {
	@Autowired
	AdminDao adminservice;
	private final LoginRepository loginrepository;
	@Autowired
	public LoginServiceimpli(LoginRepository loginrepository)
	{
		this.loginrepository = loginrepository;
	}
	@Override
	public List<?> findUserByusernameAndpassword(String username, String password) {
	
		return loginrepository.findByusernameAndPassword(username,password);
	}
	@Override
	public List<?> findUserByusername(String sqlQuery) {

		return loginrepository.findByusername(sqlQuery);
	}
	


	
}
