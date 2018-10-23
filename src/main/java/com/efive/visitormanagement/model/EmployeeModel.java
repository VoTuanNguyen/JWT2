package com.efive.visitormanagement.model;

import java.sql.Timestamp;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
@Entity
@Table(name="employee")
public class EmployeeModel {
	@Id
	@Column(name="emp_id",length=8)
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private Long emp_id;
	
	@Column(name="emp_name",length=64)
	private String emp_name;
	
	@Column(name="emp_gender",length=8)
	private String emp_gender;
	
	@Column(name="dept_id",length=8)
	private Long dept_id;
	
	@Column(name="emp_designation",length=64)
	private String emp_designation;
	
	@Column(name="emp_qualification",length=64)
	private String emp_qualification;
	
	@Column(name="emp_email",length=128)
	private String emp_email;
	
	@Column(name="emp_address",length=1028)
	private String emp_address;
	
	@Column(name="emp_photo",length=1024)
	private String emp_photo;
	
	@Column(name="emp_mobile",length=12)
	private Long emp_mobile;
	
	@Column(name="active",length=1)
	private int active;
	
	@Column(name="createdby",length=64)
	private String createdby;
	
	@Column(name="createdon",length=64)
	private Timestamp createdon;
	
	@Column(name="modifiedby",length=8)
	private String modifiedby;
	
	@Column(name="modifiedon",length=64)
	private Timestamp modifiedon;
	
	@Column(name="ip_address",length=32)
	private String ip_address;
	
	@Column(name="mac_address",length=64)
	private String mac_address;

	public Long getEmp_id() {
		return emp_id;
	}

	public String getEmp_name() {
		return emp_name;
	}

	public String getEmp_gender() {
		return emp_gender;
	}

	public Long getDept_id() {
		return dept_id;
	}

	public String getEmp_designation() {
		return emp_designation;
	}

	public String getEmp_qualification() {
		return emp_qualification;
	}

	public String getEmp_email() {
		return emp_email;
	}

	public String getEmp_address() {
		return emp_address;
	}

	public String getEmp_photo() {
		return emp_photo;
	}

	public Long getEmp_mobile() {
		return emp_mobile;
	}

	public int getActive() {
		return active;
	}

	public String getCreatedby() {
		return createdby;
	}

	public Timestamp getCreatedon() {
		return createdon;
	}

	public String getModifiedby() {
		return modifiedby;
	}

	public Timestamp getModifiedon() {
		return modifiedon;
	}

	public String getIp_address() {
		return ip_address;
	}

	public String getMac_address() {
		return mac_address;
	}

	public void setEmp_id(Long emp_id) {
		this.emp_id = emp_id;
	}

	public void setEmp_name(String emp_name) {
		this.emp_name = emp_name;
	}

	public void setEmp_gender(String emp_gender) {
		this.emp_gender = emp_gender;
	}

	public void setDept_id(Long dept_id) {
		this.dept_id = dept_id;
	}

	public void setEmp_designation(String emp_designation) {
		this.emp_designation = emp_designation;
	}

	public void setEmp_qualification(String emp_qualification) {
		this.emp_qualification = emp_qualification;
	}

	public void setEmp_email(String emp_email) {
		this.emp_email = emp_email;
	}

	public void setEmp_address(String emp_address) {
		this.emp_address = emp_address;
	}

	public void setEmp_photo(String emp_photo) {
		this.emp_photo = emp_photo;
	}

	public void setEmp_mobile(Long emp_mobile) {
		this.emp_mobile = emp_mobile;
	}

	public void setActive(int active) {
		this.active = active;
	}

	public void setCreatedby(String createdby) {
		this.createdby = createdby;
	}

	public void setCreatedon(Timestamp createdon) {
		this.createdon = createdon;
	}

	public void setModifiedby(String modifiedby) {
		this.modifiedby = modifiedby;
	}

	public void setModifiedon(Timestamp modifiedon) {
		this.modifiedon = modifiedon;
	}

	public void setIp_address(String ip_address) {
		this.ip_address = ip_address;
	}

	public void setMac_address(String mac_address) {
		this.mac_address = mac_address;
	}
	
}