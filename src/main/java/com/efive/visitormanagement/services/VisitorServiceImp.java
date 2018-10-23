package com.efive.visitormanagement.services;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;
import com.efive.visitormanagement.dao.VisitorDao;
import com.efive.visitormanagement.model.VisitorModel;
@Service("VisitorService")
public class  VisitorServiceImp implements VisitorService {

	@Autowired
	private  VisitorDao visitordao;


	@Override
	public void saveVisitor(Object object) {
		
		visitordao.saveVisitor(object);
	}

	@Override
	public void saveVisitorFile(MultipartFile file1, MultipartFile File2) {

		visitordao.saveVisitorFile(file1, File2);
	}

	@Override
	public String getFilepath() {
		return visitordao.getFilePath();
	}

	@Override
	public List<?> getEmployeeName(String query) {
		
		return visitordao.getEmployeeName(query);
	}

	@Override
	public boolean vdeleteById(Long v_id) {
		
		return visitordao.vdeleteById(v_id);
	}

	public List<?> getVisitorRecord(String strQuery){
		return visitordao.getVisitorRecord(strQuery);
	}

	@Override
	public VisitorModel getvisitorbyid(Long id) {
		
		return visitordao.getvisitorbyid(id);
	}

	@Override
	public List<?> checkoutExist(Long visitorId) {
	
	return this.visitordao.checkoutExist(visitorId);
	}

}
