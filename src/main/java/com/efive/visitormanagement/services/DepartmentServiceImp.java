package com.efive.visitormanagement.services;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.efive.visitormanagement.dao.DepartmentDao;
import com.efive.visitormanagement.model.DepartmentModel;

@Service("DepartmentService")
public class DepartmentServiceImp implements DepartmentService
{
	@Autowired
	DepartmentDao deptdao;
	
	@Transactional
	@Override
	public List<?> getDepartmentRecord(String strQeury) {
		return deptdao.getDepartmentRecord(strQeury);
	}

	@Transactional
	@Override
	public boolean saveDepartmentDetail(Object obj) {
		return deptdao.saveDepartmentDetail(obj);
	}

	@Transactional
	@Override
	public DepartmentModel getdeptbyid(Long id) {
		return deptdao.getdepartmentbyId(id);
	}

}
