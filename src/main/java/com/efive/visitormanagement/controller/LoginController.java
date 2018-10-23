package com.efive.visitormanagement.controller;

import java.time.ZonedDateTime;
import java.util.Date;
import java.util.Iterator;
import java.util.List;

import javax.security.auth.spi.LoginModule;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import com.efive.visitormanagement.model.LoginModel;
import com.efive.visitormanagement.security.JwtGenerator;
import com.efive.visitormanagement.services.LoginServiceI;

import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.util.StringUtils;
import org.springframework.http.ResponseEntity;
import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;


@RestController
@CrossOrigin(origins="*")
@RequestMapping(value="/login")
public class LoginController {
	JSONObject result = null;
	JSONArray array = null;
	String token="false";
	
	
	@Autowired
	private LoginServiceI loginservice;
	@Autowired
	private JwtGenerator jwt; 
	
String username;

@PostMapping
public String login(@RequestBody LoginModel loginuser) throws JSONException {


	String jwtToken="";
	if(loginuser!=null)	 


	 if (StringUtils.isEmpty(loginuser.getUsername())||loginuser.getUsername()==null || StringUtils.isEmpty(loginuser.getPassword())||loginuser.getPassword()==null) {
		 token="false";
    }
	 
	if (loginservice.findUserByusernameAndpassword(loginuser.getUsername(),loginuser.getPassword()) == null||loginservice.findUserByusernameAndpassword(loginuser.getUsername(),loginuser.getPassword()).isEmpty()){
		token="false";
       
    }
	else	
	{
		List list  = loginservice.findUserByusername(loginuser.getUsername());
	
			

if(list.size()>0) {
	 

 Object[] obj=(Object[])list.get(0);

 result = new JSONObject();

array = new JSONArray();
JSONObject jsonobj = null;
LoginModel login =new LoginModel();
login.setId(Long.parseLong(obj[0].toString()));
login.setUsername(obj[1].toString());
login.setRole(obj[2].toString());
if(login!=null)
{jwtToken = jwt.generate(login);
array.put(jwtToken);
array.put(obj[1].toString());
result.put("data",array);
}
token=result.toString();
 }
	}

	return token;
//return jwtToken;


}



}
