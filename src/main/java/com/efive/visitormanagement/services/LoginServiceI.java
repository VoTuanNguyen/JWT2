package com.efive.visitormanagement.services;

import java.util.List;

import com.efive.visitormanagement.model.LoginModel;

public interface LoginServiceI {
public	List<?> findUserByusernameAndpassword(String username,String password);
public List<?> findUserByusername(String strQuery);
}
