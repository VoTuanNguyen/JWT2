package com.efive.visitormanagement.controller;

import java.sql.Timestamp;
import java.util.List;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.json.JSONArray;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.efive.visitormanagement.common.GetIpmac;
import com.efive.visitormanagement.common.MysqlUtilities;
import com.efive.visitormanagement.model.DepartmentModel;
import com.efive.visitormanagement.services.DepartmentService;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping({"/visitormanegement/admin"})
public class DepartmentController 
{
	@Autowired
	GetIpmac ipmac;
	@Autowired
	MysqlUtilities mysqlutils;
	@Autowired
	private DepartmentService deptservice;
	
	@Autowired 
	private SessionFactory sessionFactory ;
	
	JSONObject result = null;
	JSONArray array = null;
	
	@RequestMapping(value = "/deleteDepartment", method = {RequestMethod.POST})
	public void deleteDepartment(@RequestParam("dept_id") String dept_id)
	{
		try
		{
			DepartmentModel department = deptservice.getdeptbyid(Long.parseLong(dept_id));
			department.setActive("0");
			deptservice.saveDepartmentDetail(department);
		}
		catch(Exception e)
		{
			e.printStackTrace();
		}
	}
	
	@RequestMapping(value = "/getDepartmentDetail", method = {RequestMethod.GET}, headers = "Accept=application/json")
	public String getDepartmentDetail() 
	{
		return convertDataInJSON(deptservice.getDepartmentRecord(returnSQLQuery(0,(long) 0)));
	}
	
	@RequestMapping(value = "/getDepartmentDetailById/{id}",method = RequestMethod.GET, headers = "Accept=application/json")
	public String getDepartmentDetailById(@PathVariable("id") Long id)
	{
		return convertDataInJSON(deptservice.getDepartmentRecord(returnSQLQuery(1,id)));
	}
	
	
	@RequestMapping(value = "/saveDepartmentDetail", method = RequestMethod.POST)
	public void saveDepartmentDetail(@RequestParam("dept_id") String dept_id,@RequestParam("dept_name") String dept_name,@RequestParam("dept_location") String dept_location)
	{
		DepartmentModel department = new DepartmentModel();
		String mac = ipmac.getipmacaddress();
		String ip = ipmac.getIpAddress();
		Timestamp timestamp = new Timestamp(System.currentTimeMillis());
		
		if(null!=dept_name && null!=dept_location)
		{
			if(!(dept_id.equals(null) || dept_id==null || dept_id.length()==0 ||dept_id.equals("undefined")))
			{
				try
				{
					department = deptservice.getdeptbyid(Long.parseLong(dept_id));
					department.setModifiedon(timestamp);
					department.setCreatedby("Admin");
				}
				catch(Exception e)
				{
					e.printStackTrace();
				}
			}
			else
			{
				String deptid = mysqlutils.getMaxValue("department","dept_id",null);
				department.setCreatedon(timestamp);
			}
			if(ip!=null && ip.trim().length()>0)
			department.setIp_address(ip.trim());
			if(mac!=null && mac.trim().length()>0)
			department.setMac_address(mac.trim());
			department.setActive("1".trim());
			if(dept_name!=null && dept_name.trim().length()>0)
			department.setDept_name(dept_name.trim());
			if(dept_location!=null && dept_location.trim().length()>0)
			department.setDept_location(dept_location.trim());
			department.setCreatedby("Admin");
			deptservice.saveDepartmentDetail(department);
			
		}
		else
		{
			System.out.println("Invalid values");
		}
	}
	
	
	public String returnSQLQuery(int index,Long id) 
	{
		String strQuery="" ;
		try 
		{
			switch(index) 
			{
				case 0:
					strQuery="SELECT dept_id,dept_name,dept_location,active FROM department where active=1";
			  
						System.out.println(strQuery);
						break;
				case 1:
					strQuery = "SELECT dept_id,dept_name,dept_location,active FROM department where active=1 and dept_id='"+id+"'" ;
					System.out.println(strQuery);
					break;
			}
		}
		catch (Exception e) 
		{
			e.printStackTrace();
		}
		return strQuery;
	}
	
	
	public String convertDataInJSON(List<?> list) 
	{
		try 
		{
			result = new JSONObject();
			array = new JSONArray();
			JSONObject  obj = null;
			Object[] data = null;
	        for (int i = 0; i < list.size(); i++) 
	        {
	        	data = (Object[])list.get(i); 
	        	obj = new JSONObject();
	        	obj.put("dept_id",data[0]);
	        	obj.put("dept_name",data[1]);
	        	obj.put("dept_location",data[2]);
			    obj.put("active",data[3]);
			    obj.put("action","<button type='button' (click)='edit("+data[0]+")'>Edit</button>");
			    array.put(obj);
	        }
	        result.put("data",array);
		}
		catch (Exception e)
		{
			e.printStackTrace();
		}
		return result.toString();
	}
}
	