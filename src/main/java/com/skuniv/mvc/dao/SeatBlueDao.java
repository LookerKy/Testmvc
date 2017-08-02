package com.skuniv.mvc.dao;

import java.util.HashMap;
import java.util.List;

import org.springframework.stereotype.Repository;

import com.skuniv.mvc.query.QueryList;
import com.sun.javafx.collections.MappingChange.Map;

@SuppressWarnings("unchecked")
@Repository("SeatBlueDao")

public class SeatBlueDao extends QueryList {
	
	public List<Map<String, Object>> selectSeatList() {
		return (List<Map<String,Object>>)selectList("bseat.selectSeatList");
	}
	public void insertSeat(HashMap<String,Object> map) {
		insert("bseat.insertSeat", map);
	}
	public void deleteSeat(HashMap<String,Object> map){
		delete("bseat.cancleReserv",map);
	}
	public void reservSeat(HashMap<String,Object> map){
		update("bseat.reservSeat", map);
	}
}
