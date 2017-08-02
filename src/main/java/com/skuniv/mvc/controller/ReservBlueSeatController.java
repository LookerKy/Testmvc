
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

import com.skuniv.mvc.service.SeatBlueService;
import com.sun.javafx.collections.MappingChange.Map;


@Controller
public class ReservBlueSeatController {
	@Resource(name = "SeatBlueService")
	private SeatBlueService service;
	
	@RequestMapping(value = "/reservationb", method = RequestMethod.GET)
	public ModelAndView reservhome(HttpServletRequest request) throws Exception{
		int seat_no = Integer.parseInt(request.getParameter("seat_no"));
		String room_name = request.getParameter("room_name");
		String student_Id = request.getParameter("studentId");
		System.out.println("seat_no:"+ seat_no);
		ModelAndView mv = new ModelAndView("reservForm");
		List<HashMap<String, Object>> list = new LinkedList<HashMap<String, Object>>();
		HashMap<String, Object> map = new HashMap<String, Object>();
		map.put("seat_no", seat_no);
		map.put("room_name",room_name);
		map.put("studentId",student_Id);
		list.add(map);
		mv.addObject("seat_list", list);
		return mv;
	}
	
	@RequestMapping(value="/insertSeatb", method= RequestMethod.GET)
	public ModelAndView insertSeat(HttpServletRequest request) throws Exception {
		int seat_no = Integer.parseInt(request.getParameter("seat_no"));
		String room_name = request.getParameter("room_name");
		String student_Id = request.getParameter("studentId");
		String stime = request.getParameter("stime");
		String etime = request.getParameter("etime");
		System.out.println("seat_no : " + seat_no + "room_name: "+ room_name+ "student_id:" + student_Id);
		ModelAndView mv = new ModelAndView("jsonView");
		List<HashMap<String, Object>> list = new LinkedList<HashMap<String, Object>>();
		HashMap<String, Object> map = new HashMap<String, Object>();
		map.put("seat_no", seat_no);
		map.put("studentId",student_Id);
		map.put("reserv_stime",stime);
		map.put("reserv_etime",etime);
		//map 
		list.add(map);
		service.reservSeat(map);
		mv.addObject("state","true");
		return mv;
	}
	
	// reserved seat list display
	@RequestMapping(value="/selectSeatb", method= RequestMethod.GET)
	public ModelAndView selectSeatList(HttpServletRequest request) throws Exception {
		ModelAndView mv = new ModelAndView("jsonView");
		List<Map<String, Object>> list = service.selectSeatList();
		mv.addObject("seat_list", list);
		return mv;
	}
	
	@RequestMapping(value="/deleteSeatb", method= RequestMethod.GET)
	public ModelAndView deleteSeat(HttpServletRequest request) throws Exception {
		int seat_no = Integer.parseInt(request.getParameter("seat_no"));
		System.out.println("seat_no : " + seat_no);
		ModelAndView mv = new ModelAndView("jsonView");
		List<HashMap<String, Object>> list = new LinkedList<HashMap<String, Object>>();
		HashMap<String, Object> map = new HashMap<String, Object>();
		map.put("seat_no",seat_no);
		
		list.add(map);
		service.deleteSeat(map);
		mv.addObject("del_list", list);
		return mv;
	}
}
