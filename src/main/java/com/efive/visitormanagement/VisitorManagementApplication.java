package com.efive.visitormanagement;
import java.util.HashMap;
import javax.servlet.http.HttpServletRequest;
import org.json.JSONException;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

@RestController
@SpringBootApplication
public class VisitorManagementApplication {

	@Autowired
	HttpServletRequest request;
	HashMap<String, String> hm ;
	public static void main(String[] args) {
		SpringApplication.run(VisitorManagementApplication.class, args);
	}

@RequestMapping({"admin/dashboard","admin/visitor","/admin/department","/admin/employee","/admin/admin"})
public ModelAndView getURLValue(){
		hm = new HashMap<>();
		hm.put("url1",getUrl());
		return new ModelAndView("index");
}

public String getUrl() {
	 	String test = request.getRequestURI();
	 	return test;
}
@RequestMapping("admin/geturl")
public String geturlSer() throws JSONException {
		JSONObject result = new JSONObject();
		result.put("url",hm.get("url1"));
		return result.toString();
	}
}