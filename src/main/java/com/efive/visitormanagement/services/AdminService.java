package com.efive.visitormanagement.services;

import java.util.List;

public interface AdminService {
	public List<?> getVisitorRecord(String strQeury);
	public boolean deleteVisitor(Long v_id);
}
	