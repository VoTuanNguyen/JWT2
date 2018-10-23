package com.efive.visitormanagement.common;

public interface MysqlUtilities {
	public String getMaxValue(String tablename,  String columnname, String whereClause);
	public boolean isTableExist(String tablename);
	public void printLog(String logtype , String varName,  String logStr);
	public  boolean createLogdetailtable();
	public boolean saveError(Exception ex);
	public boolean createErrorHandlingTable();

}
