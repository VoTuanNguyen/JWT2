package com.efive.visitormanagement.dao;
import java.util.List;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.web.bind.annotation.PathVariable;

import com.efive.visitormanagement.model.LoginModel;


@Transactional
public interface LoginRepository extends CrudRepository<LoginModel, Long> {

public	List<?> findByusernameAndPassword(String username,String password);

@Query("select l.id,l.username,l.role from LoginModel l where username = :username")
public List<?> findByusername(@Param("username") String username);
}
