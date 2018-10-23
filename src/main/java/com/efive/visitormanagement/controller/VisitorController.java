package com.efive.visitormanagement.controller;


import java.sql.Timestamp;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.multipart.MultipartRequest;

import com.efive.visitormanagement.common.FileUploadUtil;
import com.efive.visitormanagement.common.GetIpmac;
import com.efive.visitormanagement.common.MysqlUtilities;
import com.efive.visitormanagement.model.VisitorModel;

import com.efive.visitormanagement.services.VisitorService;

import jdk.nashorn.internal.runtime.Undefined;



@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/visitormanegement/admin/")
public class VisitorController {
	Long Vid,checkid;
	JSONObject result = null;
	JSONArray array = null;
	@Autowired
	MysqlUtilities mysqlutils;
	@Autowired
	FileUploadUtil fileupload;
	@Autowired
	VisitorService visitorservice;
	@Autowired
	GetIpmac ipmac;
	List<String> files = new ArrayList<String>();
	
	// checkIn and checkOut for visitor
	
	@RequestMapping(value="/checkinAndout" , method = {RequestMethod.POST} , headers = "Accept=application/json")
	public String checkinAndout(@RequestParam("v_id") Long v_id,@RequestParam("flag") String checkin) throws JSONException {
		//set time for check in and check out
		String time=new SimpleDateFormat("hh:mm a").format(new Date());
		
		String isCheckOut="";

		

		//check timeout is null or not 
		List<?> list=visitorservice.checkoutExist(v_id);
	
		VisitorModel visitor=new VisitorModel();
		visitor=visitorservice.getvisitorbyid(v_id);

		if(list.get(0)==null)
		{
			isCheckOut="true";
		if(v_id!=null&&checkin!=null)
		{			
		
		
			if(checkin.equals("checkin"))
			{
				visitor.setV_timeIN(time);
			
			}
			if(checkin.equals("checkout"))
			{
				visitor.setV_timeOut(time);
			
			}
		}
		}
		else
		{
			isCheckOut="false";
		
		}

			visitorservice.saveVisitor(visitor);
		
	 return isCheckOut;
		
	}	
	@RequestMapping(value="/saveVisitorData" , method = {RequestMethod.POST} , headers = "Accept=application/json")
	public void saveVisitorData(@RequestParam("v_id") String v_id,@RequestParam("v_name") String v_name,
			@RequestParam("v_email") String v_email,@RequestParam("v_host_id") String v_host_id,
			@RequestParam("v_purpose") String v_purpose,@RequestParam("v_date") String v_date,
			@RequestParam("v_mobile") String v_mobile,@RequestParam("v_gender") String v_gender,MultipartRequest request
			)
	{	
/*		@RequestParam("v_photo") MultipartFile v_photo,@RequestParam("v_document") MultipartFile v_document*/
		MultipartFile v_photo=null;
		MultipartFile v_document=null;
		if(request.getFile("v_photo")!=null)
		v_photo=request.getFile("v_photo");
		if(request.getFile("v_document")!=null)
		v_document=request.getFile("v_document");
		
		VisitorModel visitor=new VisitorModel();
		String maxid=mysqlutils.getMaxValue("visitor", "v_id", null);
		
		String mac = ipmac.getipmacaddress();
		String ip = ipmac.getIpAddress();
		Timestamp timestamp = new Timestamp(System.currentTimeMillis());

		try {
			if(!((v_id.equals(null) || v_id==null || v_id.length()==0 ||v_id.equals("undefined"))))
			{
				visitor=visitorservice.getvisitorbyid(Long.parseLong(v_id));
				visitor.setModifiedon(timestamp);
				visitor.setModifiedby("Admin");
		}
			else {
				visitor.setCreatedon(timestamp);
			}
		} catch (Exception e) {
		
		}
		
		if(ip.trim()!=null && ip.trim().length()>0)
		visitor.setIp_address(ip);
		if(mac.trim()!=null && mac.trim().length()>0)
		visitor.setMac_address(mac);
		if(v_name.trim()!=null && v_name.trim().length()>0)
		visitor.setV_name(v_name.trim());
		if(v_email.trim()!=null && v_email.trim().length()>0)
		visitor.setV_email(v_email.trim());
		if(v_host_id.trim()!=null && v_host_id.trim().length()>0)
		visitor.setV_host_id(Long.parseLong(v_host_id.trim()));
		if(v_purpose.trim()!=null && v_purpose.trim().length()>0)
		visitor.setV_purpose(v_purpose.trim());
		if(v_date.trim()!=null && v_date.trim().length()>0)
		visitor.setV_date(v_date.toString().trim());
		if(v_mobile.trim()!=null && v_mobile.trim().length()>0)
		visitor.setV_mobile(Long.parseLong(v_mobile.trim()));
		if(v_gender.trim()!=null && v_gender.trim().length()>0)
		visitor.setV_gender(v_gender.trim());
		if(request.getFile("v_photo")!=null)	
		visitor.setV_photo(fileupload.uploadFileFromServer(v_photo,"visitorphoto_"+maxid,"visitorimgs"));
		if(request.getFile("v_document")!=null)
		visitor.setV_document(fileupload.uploadFileFromServer(v_document,"visitorDoc_"+maxid,"visitorDocs"));
		visitor.setActive(1);
		visitor.setCreatedby("Admin");
		

		//Save Data in DB
		visitorservice.saveVisitor(visitor);

		
	
		
	}
	
//delete Visitor data
@RequestMapping(value="/vdeletebyId" , method = {RequestMethod.POST} , headers = "Accept=application/json")		
public void vdeletebyId(@RequestParam("v_id") Long v_id)
{
	visitorservice.vdeleteById(v_id);
}
	
	
//Get Employee Name
	@RequestMapping(value="/getEmployeeName" , method = {RequestMethod.GET} , headers = "Accept=application/json")	
	public String getEmployeeName() {


return convertDataInJSON(visitorservice.getEmployeeName(returnSQLQuery(1)));
	}
	
//Edit Visitor Data
	@RequestMapping(value="/editdatabyId/{id}" , method = RequestMethod.GET)		
public String editdatabyId(@PathVariable("id") Long v_id)
{
		Vid=v_id;
		return VisitorDataConvertInJson(visitorservice.getEmployeeName(returnSQLQuery(0)));
	
}
	
//Query
	public String returnSQLQuery(int index) {
		String strQuery="" ;
		try {
			switch(index) {
			 case 0://get Visitor Data for edit
				 strQuery="SELECT e.emp_id,v.v_id,e.emp_name,v.v_name,v.v_purpose,v.v_email"
				 		+ ",v.v_mobile,v.v_date,v_photo,v_document,v_gender FROM employee AS e,visitor AS v"
				 		+ " WHERE e.emp_id=v_host_id AND v.v_id='"+Vid+"' order by v.v_id";
			 break;
			 	//get Employee name for AutoComplete
			 case 1:
				 strQuery="select emp_id,emp_name from employee where active=1";
			 break;
			}
		} catch (Exception e) {
			e.printStackTrace();
		}
		return strQuery;
	} 
	
// Json Data Convert for Visitor data
public String VisitorDataConvertInJson(List<?> list)
{
	try {
		result = new JSONObject();
		array = new JSONArray();
		JSONObject  obj = null;
		Object[] data = null;
        for (int i = 0; i < list.size(); i++) {
        	data = (Object[])list.get(i); 
        	obj = new JSONObject();
        	obj.put("v_host_id", data[0]);
        	obj.put("v_id", data[1]);
        	obj.put("v_host_name", data[2]);
        	obj.put("v_name", data[3]);
        	obj.put("v_purpose", data[4]);
        	obj.put("v_email", data[5]);
        	obj.put("v_mobile", data[6]);
        	obj.put("v_date", data[7]);
        	obj.put("v_photo", data[8]);
        	obj.put("v_document", data[9]);
        	obj.put("v_gender",data[10]);
        	array.put(obj);
		       
        }
    
        result.put("data",array);
	} catch (Exception e) {

	}
	
	return result.toString();
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
	        	
	   
	        	obj.put("emp_id", data[0]);
	        	obj.put("emp_name", data[1]);
	        	
			        array.put(obj);
			       
	        }
	      
	        result.put("data",array);
	    } catch (Exception e) {
			e.printStackTrace();
		}
		return result.toString();
		}
}
	