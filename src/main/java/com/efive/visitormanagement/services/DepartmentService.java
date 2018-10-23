package com.efive.visitormanagement.services;

import java.util.List;

import com.efive.visitormanagement.model.DepartmentModel;

public interface DepartmentService {
	public List<?> getDepartmentRecord(String strQeury);
	public boolean saveDepartmentDetail(Object obj);
	public DepartmentModel getdeptbyid(Long id);
}	
