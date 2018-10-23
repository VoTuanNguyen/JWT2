package com.efive.visitormanagement.common;

import org.springframework.web.multipart.MultipartFile;

public interface FileUploadUtil {
	public String uploadFileFromServer(MultipartFile file1,String newFilename,String dirName);

}
