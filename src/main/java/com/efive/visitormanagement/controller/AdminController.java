package com.efive.visitormanagement.controller;

import java.util.List;

import org.json.JSONArray;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.efive.visitormanagement.services.AdminService;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping({"/visitormanegement/admin/"})
public class AdminController {
	@Autowired
	private AdminService adminservice;
	JSONObject result = null;
	JSONArray array = null;
	@RequestMapping(value = "/getVisitorDetail", method = {RequestMethod.GET}, headers = "Accept=application/json")
	public String getVisitorDetail() {
		return convertDataInJSON(adminservice.getVisitorRecord(returnSQLQuery(0)));
	}
	
	// GET VISITOR DATA USING VISITOR ID
	
	@RequestMapping(value = "/getVisitordatabyid", method = {RequestMethod.GET}, headers = "Accept=application/json")
	public String getVisitordatabyid(@RequestParam ("id") String id) {
		return convertDataInJSON1(adminservice.getVisitorRecord(returnSQLQuery(1) +" and  vi.v_id = "+id+""));
	}
	
	@RequestMapping(value = "/deleteVisitorDetail", method = {RequestMethod.POST}, headers = "Accept=application/json")
	public void deleteVisitorDetail(@RequestParam("v_id") Long visitorid) {
		adminservice.deleteVisitor(visitorid);
	}

// Query Centralizaton

public String returnSQLQuery(int index) {
	String strQuery="" ;
	try {
		switch(index) {
		 case 0:
		  strQuery=" SELECT vi.v_id,hem.emp_id,vi.v_name,hem.emp_name,vi.v_purpose,dm.dept_name,vi.v_email,vi.v_mobile,vi.v_date,vi.v_timeIN,v_timeOut  " + 
				   " FROM visitor AS vi ,employee AS hem,department AS dm " + 
				   " WHERE vi.v_host_id = hem.emp_id " + 
				   " AND hem.dept_id = dm.dept_id " + 
				   " AND vi.active=1";
		  
		  System.out.println(strQuery);
		 break;
		 case 1:
		 strQuery=" SELECT vi.v_id,vi.v_name,hem.emp_name,vi.v_purpose,dm.dept_name,vi.v_date,vi.v_photo,vi.v_timeIN,v_timeOut " + 
		 		  " FROM visitor AS vi ,employee AS hem,department AS dm " + 
		 		  " WHERE vi.v_host_id = hem.emp_id " + 
		 		  " AND hem.dept_id = dm.dept_id " + 
		 		  " AND vi.active=1";
		  
		  System.out.println(strQuery);
		 break;
		}
	} catch (Exception e) {
		e.printStackTrace();
	}
	return strQuery;
} 

// JSON Converter

public String convertDataInJSON(List<?> list) {
	try {
		result = new JSONObject();
		array = new JSONArray();
		JSONObject  obj = null;
		Object[] data = null;
        for (int i = 0; i < list.size(); i++) {
        	data = (Object[])list.get(i); 
        	obj = new JSONObject();
        	obj.put("v_id",data[0]);
        	obj.put("emp_id",data[1]);
        	obj.put("v_name",data[2]);
        	obj.put("emp_name",data[3]);
		    obj.put("v_pupose",data[4]);
		    obj.put("dept_name",data[5]);
		    obj.put("v_email",data[6]);
		    obj.put("v_mobile",data[7]);
		    obj.put("v_date",data[8]);
		    obj.put("v_timeIn",data[9]);
		    obj.put("v_timeOut",data[10]);
		     
		    //obj.put("action","<button type=\"button\" (click)='print()'>Print</button> <button type=\"button\"  (click)=\"cancel('"+data[0]+"','"+data[1]+"')\">Cancel</button>");
		    array.put(obj);
        }
        result.put("data",array);
	} catch (Exception e) {
		e.printStackTrace();
	}
	return result.toString();
	}


public String convertDataInJSON1(List<?> list) {
	try {
		result = new JSONObject();
		array = new JSONArray();
		JSONObject  obj = null;
		Object[] data = null;
        for (int i = 0; i < list.size(); i++) {
        	data = (Object[])list.get(i); 
        	obj = new JSONObject();
        	obj.put("v_id",data[0]);
        	obj.put("v_name",data[1]);
        	obj.put("emp_name",data[2]);
		    obj.put("v_pupose",data[3]);
		    obj.put("dept_name",data[4]);
		    obj.put("v_date",data[5]);
		    obj.put("v_photo",data[6]);
		    obj.put("v_timeIn",data[7]);
		    obj.put("v_timeOut",data[8]);
		     

		   
		    //obj.put("action","<button type=\"button\" (click)='print()'>Print</button> <button type=\"button\"  (click)=\"cancel('"+data[0]+"','"+data[1]+"')\">Cancel</button>");
		    array.put(obj);
        }
        result.put("data",array);
	} catch (Exception e) {
		e.printStackTrace();
	}
	return result.toString();
	}



}