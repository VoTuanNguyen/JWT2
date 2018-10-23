package com.efive.visitormanagement.dao;

import java.util.List;

public interface AdminDao {
	
	public List<?> getVisitorRecord(String strQeury);
	public boolean deleteVisitor(Long v_id);


}
	