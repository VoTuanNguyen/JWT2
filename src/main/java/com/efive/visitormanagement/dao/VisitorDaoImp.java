package com.efive.visitormanagement.dao;

import java.io.File;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.List;

import javax.transaction.Transactional;
import org.hibernate.SessionFactory;
import org.hibernate.Session;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import org.springframework.web.multipart.MultipartFile;

import com.efive.visitormanagement.common.CrudeHibernate;
import com.efive.visitormanagement.model.VisitorModel;

@Transactional
@Repository
public class VisitorDaoImp implements VisitorDao {

	@Autowired
	CrudeHibernate hibernate;
	@Autowired 
	private SessionFactory sessionFactory ;
	//SAVE DATA
	@Override
	public void saveVisitor(Object object) {
	
		
	 hibernate.saveAndUpdateHibernate(object);
	}
	
	//delete visitor data
	public boolean vdeleteById(Long v_id) {
		boolean b =false;
		Session session = this.sessionFactory.getCurrentSession();
		
		VisitorModel visitor = new VisitorModel();
		try {
			visitor = (VisitorModel)session.get(VisitorModel.class,v_id);
			visitor.setActive(0);
			b = hibernate.saveAndUpdateHibernate(visitor);
		} catch (Exception e) {
			e.printStackTrace();
		}
			return b;
		}
	
	
	
	private  Path  rootLocation = Paths.get("/");
	@Override
	public void saveVisitorFile(MultipartFile file1, MultipartFile file2) {
		
		String fileName1 = file1.getOriginalFilename();
		String fileName2 =file2.getOriginalFilename();
		
		System.out.println(fileName1);
		System.out.println(fileName2);
		try
		{
		String rootPath = System.getProperty("user.dir");
		String path = rootPath + File.separator+"my-app"+File.separator+"src"+File.separator + "assets"+File.separator+"photos"+File.separator+"VisitorImg";
		rootLocation =Paths.get(path);
		File dir = new File(path);

		System.out.println("root path : "+path);
		if (!dir.exists())
		{
		        dir.mkdirs();
		}
		
		

		File f1 = new File(path+File.separator+file1.getOriginalFilename());
		File f2 = new File(path+File.separator+file2.getOriginalFilename());
		if(!f1.exists()) 
		{ 
		Files.copy(file1.getInputStream(), this.rootLocation.resolve(file1.getOriginalFilename()));
		}
		if(!f2.exists())
		{
			Files.copy(file2.getInputStream(), this.rootLocation.resolve(file2.getOriginalFilename()));

		}	
		}
		catch (Exception e) 
		{
		throw new RuntimeException("FAIL!");
		}

	}
	@Override
	public String getFilePath() {
		String rootPath = System.getProperty("user.dir");
		String path = rootPath + File.separator+"my-app"+File.separator+"src"+File.separator + "assets"+File.separator+"photos"+File.separator+"VisitorImg";
		rootLocation = Paths.get(path);
		return path;
	}
	
	//Get All Employee Name
	@Override
	public List<?> getEmployeeName(String query) {
		
		List<?> list= hibernate.getDataFromQuery(query);

		return list;

	}

	//get Visitor Data
	@Override
	public List<?> getVisitorRecord(String strQuery) {
		
		List<?> list =hibernate.getDataFromQuery(strQuery);
		return list;
	
	}
	
	//Edit data by Id
	@Override
	public VisitorModel getvisitorbyid(Long id) {
		Session session = this.sessionFactory.getCurrentSession();
		VisitorModel visitor = (VisitorModel)session.get(VisitorModel.class, id);
		return visitor;
	}

	@Override
	public List<?> checkoutExist(Long visitorId) {
	
		List<?> checkExist=hibernate.getDataFromQuery("SELECT v_timeOut FROM visitor WHERE v_id='"+visitorId+"'");
		return checkExist;
	}


}
