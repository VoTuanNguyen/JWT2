package com.efive.visitormanagement.services;



import java.util.List;

import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.efive.visitormanagement.model.VisitorModel;

public interface VisitorService  {
	
	public void saveVisitor(Object object);
	public void saveVisitorFile(MultipartFile file1,MultipartFile File2);
	public String getFilepath();
	public List<?> getEmployeeName(String query);
	public boolean vdeleteById(Long v_id);
	public List<?> getVisitorRecord(String strQuery);
	public VisitorModel getvisitorbyid(Long id);
	public List<?>	checkoutExist(Long visitorId);
}
