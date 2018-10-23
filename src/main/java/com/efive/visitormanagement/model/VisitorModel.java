package com.efive.visitormanagement.model;

import java.sql.Timestamp;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
@Entity
@Table(name="visitor")
public class VisitorModel {
	@Id
	@Column(name="v_id",length=8)
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private Long v_id;
	
	@Column(name="v_name",length=64)
	private String v_name;
	
	@Column(name="v_email",length=128)
	private String v_email;
	
	@Column(name="v_host_id",length=8)
	private Long v_host_id;
	
	@Column(name="v_purpose",length=128)
	private String v_purpose;
	
	@Column(name="v_timeIN",length=64)
	private String v_timeIN;
	
	@Column(name="v_timeOut",length=128)
	private String v_timeOut;
	
	@Column(name="v_date",length=1028)
	private String v_date;
	
	@Column(name="v_photo",length=1024)
	private String v_photo;
	
	@Column(name="v_document",length=1024)
	private String v_document;
	@Column(name="v_gender",length=10)
	private String v_gender;
	@Column(name="active",length=1)
	private int active;
	@Column(name="v_mobile",length=12)
	private Long v_mobile;
	
	
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

	public Long getV_id() {
		return v_id;
	}

	
	public Long getV_mobile() {
		return v_mobile;
	}


	public void setV_mobile(Long v_mobile) {
		this.v_mobile = v_mobile;
	}


	public String getV_name() {
		return v_name;
	}

	public String getV_email() {
		return v_email;
	}

	public Long getV_host_id() {
		return v_host_id;
	}

	public String getV_purpose() {
		return v_purpose;
	}




	public String getV_gender() {
		return v_gender;
	}

	public void setV_gender(String v_gender) {
		this.v_gender = v_gender;
	}

	public String getV_photo() {
		return v_photo;
	}

	public String getV_document() {
		return v_document;
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

	public String getV_date() {
		return v_date;
	}

	public void setV_date(String v_date) {
		this.v_date = v_date;
	}

	public String getIp_address() {
		return ip_address;
	}

	public String getMac_address() {
		return mac_address;
	}

	public void setV_id(Long v_id) {
		this.v_id = v_id;
	}

	public void setV_name(String v_name) {
		this.v_name = v_name;
	}

	public void setV_email(String v_email) {
		this.v_email = v_email;
	}

	public void setV_host_id(Long v_host_id) {
		this.v_host_id = v_host_id;
	}

	public void setV_purpose(String v_purpose) {
		this.v_purpose = v_purpose;
	}




	public String getV_timeIN() {
		return v_timeIN;
	}


	public void setV_timeIN(String v_timeIN) {
		this.v_timeIN = v_timeIN;
	}


	public String getV_timeOut() {
		return v_timeOut;
	}


	public void setV_timeOut(String v_timeOut) {
		this.v_timeOut = v_timeOut;
	}


	public void setV_photo(String v_photo) {
		this.v_photo = v_photo;
	}

	public void setV_document(String v_document) {
		this.v_document = v_document;
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
	