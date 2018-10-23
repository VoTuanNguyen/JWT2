package com.efive.visitormanagement.dao;

import java.util.List;

import com.efive.visitormanagement.model.DepartmentModel;

public interface DepartmentDao  {
	public List<?> getDepartmentRecord(String strQeury);
	public boolean saveDepartmentDetail(Object obj);
	public DepartmentModel getdepartmentbyId(Long id);
}
