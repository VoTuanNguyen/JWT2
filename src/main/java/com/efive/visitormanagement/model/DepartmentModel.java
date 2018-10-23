package com.efive.visitormanagement.model;

import java.sql.Timestamp;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
@Entity
@Table(name="department")
public class DepartmentModel {
	
	@Id
	@Column(name="dept_id",length=8)
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private Long dept_id;
	
	@Column(name="dept_name",length=64)
	private String dept_name;
	
	@Column(name="dept_location",length=64)
	private String dept_location;
	
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
	
	@Column(name="active",length=1)
	private String active;

	public Long getDept_id() {
		return dept_id;
	}

	public String getDept_name() {
		return dept_name;
	}

	public String getDept_location() {
		return dept_location;
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

	public String getActive() {
		return active;
	}

	public void setDept_id(Long dept_id) {
		this.dept_id = dept_id;
	}

	public void setDept_name(String dept_name) {
		this.dept_name = dept_name;
	}

	public void setDept_location(String dept_location) {
		this.dept_location = dept_location;
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

	public void setActive(String active) {
		this.active = active;
	}
	
}
