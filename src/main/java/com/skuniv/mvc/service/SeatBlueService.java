package com.skuniv.mvc.service;

import java.util.HashMap;
import java.util.List;

import javax.annotation.Resource;

import org.springframework.stereotype.Service;

import com.skuniv.mvc.dao.SeatBlueDao;
import com.sun.javafx.collections.MappingChange.Map;

@Service("SeatBlueService")
public class SeatBlueService {
	@Resource(name = "SeatBlueDao")
	private SeatBlueDao dao;

	public Object good() {
		// TODO Auto-generated method stub
		return "SKUnivLibrarySeat";
	}

	public List<Map<String, Object>> selectSeatList() throws Exception {
		return dao.selectSeatList();
	}
	
	//insert seatno
	public void insertSeat(HashMap<String,Object> map) throws Exception {
		dao.insertSeat(map);
	}
	public void deleteSeat(HashMap<String,Object> map) throws Exception{
		dao.deleteSeat(map);
	}
	public void reservSeat(HashMap<String,Object> map) throws Exception{
		dao.reservSeat(map);
	}
}
