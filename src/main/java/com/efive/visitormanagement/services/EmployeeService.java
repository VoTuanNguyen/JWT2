package com.efive.visitormanagement.services;

import java.util.List;

import org.springframework.web.multipart.MultipartFile;

import com.efive.visitormanagement.model.EmployeeModel;

public interface EmployeeService {
	public List<?> getEmployeeRecord(String strQeury);
	public boolean deleteEmployee(Long v_id);
	public Object saveEmployeeDetail(Object obj);
	public void SaveEmpFile(MultipartFile file);
	public EmployeeModel getempbyid(Long id);
}
