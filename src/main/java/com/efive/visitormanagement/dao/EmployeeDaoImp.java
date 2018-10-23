package com.efive.visitormanagement.dao;

import java.io.File;
import java.io.InputStream;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.List;

import javax.servlet.http.HttpServletRequest;


import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.efive.visitormanagement.common.CrudeHibernate;
import com.efive.visitormanagement.model.EmployeeModel;
import com.efive.visitormanagement.model.VisitorModel;
import javax.servlet.ServletContext;


@Service
public class EmployeeDaoImp implements EmployeeDao{

	@Autowired
	CrudeHibernate crude;
	@Autowired 
	private SessionFactory sessionFactory ;
	@Autowired 
	private HttpServletRequest request ;
	@Autowired
	private ServletContext servletContext;
	
	
	@Override
	public List<?>  getEmployeeRecord(String strQeury) {
		List<?> list =crude.getDataFromQuery(strQeury);
		return list;
	
	}
	
	@Override
	public boolean deleteEmployee(Long emp_id) 
	{
		boolean b =false;
		Session session = this.sessionFactory.getCurrentSession();
		EmployeeModel employee = new EmployeeModel();
		try
		{
			employee = (EmployeeModel)session.get(EmployeeModel.class,emp_id);
			employee.setActive(0);
			b = crude.saveAndUpdateHibernate(employee);
		} 
		catch (Exception e) 
		{
			e.printStackTrace();
		}
			return b;
	}

	@Override
		public Object saveEmployeeDetail(Object obj) {
		boolean b = false;
			try
			{
				
				b=crude.saveAndUpdateHibernate(obj);
				
			}
			catch(Exception e)
			{
				e.printStackTrace();
			}
			return b;
		}
	
	
	private  Path  rootLocation = Paths.get("E://employeefiles/");
	@Override
	public void SaveEmpFile(MultipartFile file) 
	{
		String fileName = file.getOriginalFilename();
		try
		{
			String rootPath = System.getProperty("user.dir");
			String path = rootPath + File.separator + "webapp"+File.separator+"res"+File.separator+"employeeimg";
			rootLocation =Paths.get(path);
			File dir = new File(path);
			
			System.out.println("root path : "+path);
			if (!dir.exists())
			{
		        dir.mkdirs();
			}
			
			File f = new File(path+File.separator+file.getOriginalFilename());
			if(!f.exists()) 
			{ 
				Files.copy(file.getInputStream(), this.rootLocation.resolve(file.getOriginalFilename()));
			}			
		}
		catch (Exception e) 
		{
			throw new RuntimeException("FAIL!");
		}
	}

	@Override
	public EmployeeModel getempbyid(Long id) {
		Session session = this.sessionFactory.getCurrentSession();
		EmployeeModel emp = (EmployeeModel)session.get(EmployeeModel.class, id);
		return emp;
	}
}


