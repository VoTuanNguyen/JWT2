package com.efive.visitormanagement.controller;

import java.sql.Timestamp;
import java.util.List;

import javax.servlet.http.HttpServletRequest;

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
import org.springframework.web.multipart.MultipartRequest;

import com.efive.visitormanagement.common.FileUploadUtil;
import com.efive.visitormanagement.common.GetIpmac;
import com.efive.visitormanagement.common.MysqlUtilities;
import com.efive.visitormanagement.model.EmployeeModel;
import com.efive.visitormanagement.services.EmployeeService;

@RestController
@CrossOrigin(origins = "*")
@RequestMapping({"/visitormanegement/admin"
		+ ""})
public class EmployeeController 
{
	@Autowired
	GetIpmac ipmac;
	@Autowired
	MysqlUtilities mysqlutils;
	@Autowired
	FileUploadUtil fileupload;
	@Autowired
	private EmployeeService employeeservice;
	JSONObject result = null;
	JSONArray array = null;
	
	
	@RequestMapping(value = "/deleteEmployee", method = {RequestMethod.POST})
	public void deleteEmployee(@RequestParam("emp_id") String emp_id)
	{
		try
		{
			EmployeeModel employee = employeeservice.getempbyid(Long.parseLong(emp_id));
			employee.setActive(0);
			employeeservice.deleteEmployee(Long.parseLong(emp_id));
		}
		catch(Exception e)
		{
			e.printStackTrace();
		}
	}
	
	
	
	@RequestMapping(value = "/getEmployeeDetail", method = {RequestMethod.GET}, headers = "Accept=application/json")
	public String getEmployeeDetail() 
	{
		return convertDataInJSON(employeeservice.getEmployeeRecord(returnSQLQuery(0,(long) 0)));
	}
	
	@RequestMapping(value = "/getEmpDetailsById/{id}",method = RequestMethod.GET, headers = "Accept=application/json")
	public String getEmployeeDetailById(@PathVariable("id") Long id)
	{
		return convertDataInJSONforId(employeeservice.getEmployeeRecord(returnSQLQuery(1,id)));
	}
	
	@RequestMapping(value = "/saveEmployeeDetail", method = RequestMethod.POST)
	public void saveEmployeeDetail(/*@RequestParam("emp_photo") Multipart file,*/
								   @RequestParam("emp_id") String emp_id,
								   @RequestParam("emp_name") String emp_name,
								   @RequestParam("emp_designation") String emp_designation,
								   @RequestParam("emp_qualification") String emp_qualification,
								   @RequestParam("emp_mobile") String emp_mobile,
								   @RequestParam("emp_email") String emp_email,
								   @RequestParam("dept_id") String dept_id,
								   @RequestParam("emp_address") String emp_address,
								   @RequestParam("emp_gender") String emp_gender,
								   @RequestParam("active") String active,MultipartRequest request)
	{
		MultipartFile file=null;
		EmployeeModel emp = new EmployeeModel();
		String mac = ipmac.getipmacaddress();
		String ip = ipmac.getIpAddress();
		Timestamp timestamp = new Timestamp(System.currentTimeMillis());
		String maxid=mysqlutils.getMaxValue("employee", "emp_id", null);
		if(!(emp_id.equals(null) || emp_id==null || emp_id.length()==0 ||emp_id.equals("undefined")))
		{
			try
			{
				emp = employeeservice.getempbyid(Long.parseLong(emp_id));
				emp.setModifiedon(timestamp);
				emp.setCreatedby("Admin");
				
			}
			catch(Exception e)
			{
				e.printStackTrace();
			}
		}
		else
		{
			emp.setCreatedon(timestamp);
		}
		
		if(ip!=null && ip.trim().length()>0)
		emp.setIp_address(ip.trim());
		if(mac!=null && mac.trim().length()>0)
		emp.setMac_address(mac.trim());
		if(emp_name!=null && emp_name.trim().length()>0)
		emp.setEmp_name(emp_name.trim());
		if(emp_designation!=null && emp_designation.trim().length()>0)
		emp.setEmp_designation(emp_designation.trim());
		if(emp_qualification!=null && emp_qualification.trim().length()>0)
		emp.setEmp_qualification(emp_qualification.trim());
		if(emp_mobile!=null && emp_mobile.trim().length()>0)
		emp.setEmp_mobile(Long.parseLong(emp_mobile.trim()));
		if(emp_email!=null && emp_email.trim().length()>0)
		emp.setEmp_email(emp_email.trim());
		if(dept_id!=null && dept_id.trim().length()>0)
		emp.setDept_id(Long.parseLong(dept_id.trim()));
		if(emp_address!=null && emp_address.trim().length()>0)
		emp.setEmp_address(emp_address.trim());
		if(emp_gender!=null && emp_gender.trim().length()>0)
		emp.setEmp_gender(emp_gender.trim());
		emp.setCreatedby("Admin");
		if(request.getFile("emp_photo")!=null)
			file=request.getFile("emp_photo");
		if(request.getFile("emp_photo")!=null)	
		emp.setEmp_photo(fileupload.uploadFileFromServer(file, "employee_"+maxid, "employeeimg"));
		if(active.equals("true"))
		{
			emp.setActive(1);
		}	
		else
		{
			emp.setActive(0);
		}
		
		employeeservice.saveEmployeeDetail(emp);
		}
	
	
	public String returnSQLQuery(int index,Long id) 
	{
		String strQuery="" ;
		try 
		{
			switch(index) 
			{
				case 0:
					strQuery="SELECT \r\n" + 
							"em.`emp_id`,em.`emp_name`,dp.dept_name,em.`emp_designation`,em.`emp_qualification`,em.`emp_email`,em.`emp_address`\r\n" + 
							"FROM employee AS em,department AS dp WHERE dp.dept_id=em.dept_id AND em.`active`=1";
			  
						System.out.println(strQuery);
						break;
				case 1:
					strQuery = "SELECT emp_id,emp_name,emp_designation,`emp_qualification`,emp_mobile,emp_email,`dept_id`,`emp_address`,emp_gender,active,emp_photo FROM employee WHERE emp_id='"+id+"'";
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
	        	obj.put("emp_id",data[0]);
	        	obj.put("emp_name",data[1]);
	        	obj.put("dept_id",data[2]);
	        	obj.put("emp_designation",data[3]);
			    obj.put("emp_qualification",data[4]);
			    obj.put("emp_email",data[5]);
			    obj.put("emp_address",data[6]);
			
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
	
	public String convertDataInJSONforId(List<?> list)
	{
		JSONObject  obj = null;
		try
		{
			result = new JSONObject();
			array = new JSONArray();
			
			Object[] data = null;
			data = (Object[])list.get(0); 
        	obj = new JSONObject();
        	
        	obj.put("emp_id",data[0]);
        	obj.put("emp_name",data[1]);
        	obj.put("emp_designation",data[2]);
        	obj.put("emp_qualification",data[3]);
		    obj.put("emp_mobile",data[4]);
		    obj.put("emp_email",data[5]);
		    obj.put("dept_id",data[6]);
		    obj.put("emp_address",data[7]);
		    obj.put("emp_gender",data[8]);
		    obj.put("active",data[9]);
		    obj.put("emp_photo",data[10]);

		    //array.put(obj);
		    //result.put("data",array);
		}
		catch(Exception e)
		{
			e.printStackTrace();
		}
		return String.valueOf(obj);
	}
}
