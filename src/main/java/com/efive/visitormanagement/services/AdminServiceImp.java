package com.efive.visitormanagement.services;

import java.util.List;
import javax.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.efive.visitormanagement.dao.AdminDao;
@Service("AdminService")
public class AdminServiceImp implements AdminService {
	@Autowired
	AdminDao adminservice;
	@Transactional
	@Override
	public List<?> getVisitorRecord(String strQeury) {
		return adminservice.getVisitorRecord(strQeury) ;
	}
	@Transactional
	@Override
	public boolean deleteVisitor(Long v_id) {
		return adminservice.deleteVisitor(v_id);
	}
}
	