package com.efive.visitormanagement.dao;

import java.util.List;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.efive.visitormanagement.common.CrudeHibernate;
import com.efive.visitormanagement.model.DepartmentModel;

@Service
public class DepartmentDaoImp implements DepartmentDao {
	@Autowired
	CrudeHibernate crude;
	@Autowired 
	private SessionFactory sessionFactory ;
	
	@Override
	public List<?>  getDepartmentRecord(String strQeury) {
		List<?> list =crude.getDataFromQuery(strQeury);
		return list;
	
	}

	@Override
	public boolean saveDepartmentDetail(Object obj)
	{
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

	@Override
	public DepartmentModel getdepartmentbyId(Long id) {
		Session session = this.sessionFactory.getCurrentSession();
		DepartmentModel dept = (DepartmentModel)session.get(DepartmentModel.class,id);
		return dept;
	}
}
