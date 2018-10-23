package com.efive.visitormanagement.dao;

import java.util.List;

import org.hibernate.Hibernate;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.efive.visitormanagement.common.CrudeHibernate;
import com.efive.visitormanagement.model.VisitorModel;

@Service
public class AdminDaoImp implements AdminDao {
	@Autowired
	CrudeHibernate crude;
	@Autowired 
	private SessionFactory sessionFactory ;
	@Override
	public List<?>  getVisitorRecord(String strQeury) {
		List<?> list =crude.getDataFromQuery(strQeury);
		return list;
	}
	@Override
	public boolean deleteVisitor(Long v_id) {
	boolean b =false;
	Session session = this.sessionFactory.getCurrentSession();
	
	VisitorModel visitor = new VisitorModel();
	try {
		visitor = (VisitorModel)session.get(VisitorModel.class,v_id);
		visitor.setActive(0);
		b = crude.saveAndUpdateHibernate(visitor);
	} catch (Exception e) {
		e.printStackTrace();
	}
		return b;
	}

}
	