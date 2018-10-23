package com.efive.visitormanagement.services;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.efive.visitormanagement.dao.AdminDao;
import com.efive.visitormanagement.dao.EmployeeDao;
import com.efive.visitormanagement.model.EmployeeModel;

@Service("EmployeeService")
public class EmployeeServiceImp implements EmployeeService{
	@Autowired
	EmployeeDao employeedao;
	@Transactional
	@Override
	public List<?> getEmployeeRecord(String strQeury) {
		return employeedao.getEmployeeRecord(strQeury) ;
	}
	
	@Transactional
	@Override
	public boolean deleteEmployee(Long v_id) {
		return employeedao.deleteEmployee(v_id);
	}

	@Transactional
	@Override
	public Object saveEmployeeDetail(Object obj) {
		return employeedao.saveEmployeeDetail(obj);
	}

	@Override
	public void SaveEmpFile(MultipartFile file) {
		employeedao.SaveEmpFile(file);
	}

	@Transactional
	@Override
	public EmployeeModel getempbyid(Long id) {
		return employeedao.getempbyid(id);
	}
}
