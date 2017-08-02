package com.skuniv.mvc.service;

import java.util.List;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import com.skuniv.mvc.dao.ReservationCheckDao;
import com.sun.javafx.collections.MappingChange.Map;


@Service("ReservationCheckService")
public class ReservationCheckService {
	@Resource(name = "ReservationCheckDao")
	private ReservationCheckDao dao;
	
	public List<Map<String, Object>> checkReserv(String studentId) throws Exception {
		return dao.checkReserv(studentId);
	}
}
