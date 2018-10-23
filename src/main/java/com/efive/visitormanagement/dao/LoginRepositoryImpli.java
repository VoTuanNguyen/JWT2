/*package com.efive.visitormanagement.dao;

import java.util.List;

import org.hibernate.Hibernate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.efive.visitormanagement.common.CrudeHibernate;

@Repository
public abstract class LoginRepositoryImpli implements LoginRepository {

	@Autowired
	private CrudeHibernate hibernate;
	
	public List<?> findByusername(String strQuery)
	{
		List<?> list=hibernate.getDataFromQuery(strQuery);
		return list;

	}
}
*/