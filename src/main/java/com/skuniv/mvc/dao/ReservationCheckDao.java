package com.skuniv.mvc.dao;

import java.util.List;

import org.springframework.stereotype.Repository;

import com.skuniv.mvc.query.QueryList;
import com.sun.javafx.collections.MappingChange.Map;

@SuppressWarnings("unchecked")
@Repository("ReservationCheckDao")
public class ReservationCheckDao extends QueryList {
	
	public List<Map<String, Object>> checkReserv(String studentId) {
		return (List<Map<String,Object>>)selectList("check.selectuserReserv",studentId);
	}
}
