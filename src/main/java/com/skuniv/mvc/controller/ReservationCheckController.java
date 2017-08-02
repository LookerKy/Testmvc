package com.skuniv.mvc.controller;

import java.util.HashMap;
import java.util.LinkedList;
import java.util.List;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;

import com.skuniv.mvc.service.ReservationCheckService;
import com.sun.javafx.collections.MappingChange.Map;

@Controller
public class ReservationCheckController {
	@Resource(name = "ReservationCheckService")
	private ReservationCheckService service;
	
	
	@RequestMapping(value="/serchreserv", method= RequestMethod.GET)
	public ModelAndView serchreserv(HttpServletRequest request) throws Exception{
		String studentId = request.getParameter("studentId");
		ModelAndView mv = new ModelAndView("jsonView");
		List<Map<String, Object>> list = service.checkReserv(studentId);
		mv.addObject("check_reserv",list);
		return mv;
	}
	
	@RequestMapping(value="/reservationcheck", method= RequestMethod.GET)
	public ModelAndView checkreservation(HttpServletRequest request) throws Exception {
		
		int seat_no = Integer.parseInt(request.getParameter("seat_no"));
		String room_name = request.getParameter("room_name");
		String student_Id = request.getParameter("studentId");
		String stime = request.getParameter("stime");
		String etime = request.getParameter("etime");
		
		System.out.println("seat_no : " + seat_no + "room_name: "+ room_name+ "student_id:" + student_Id);
		
		ModelAndView mv = new ModelAndView("reservCheck");
		List<HashMap<String, Object>> list = new LinkedList<HashMap<String, Object>>();
		HashMap<String, Object> map = new HashMap<String, Object>();
		map.put("seat_no", seat_no);
		map.put("room_name", room_name);
		map.put("studentId",student_Id);
		map.put("reserv_stime",stime);
		map.put("reserv_etime",etime);
		//map 
		list.add(map);
		mv.addObject("check_list", list);
		return mv;
	}
}
