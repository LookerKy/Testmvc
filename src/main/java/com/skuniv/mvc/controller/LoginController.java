package com.skuniv.mvc.controller;

import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Locale;
import java.util.Map;

import javax.annotation.Resource;
import javax.servlet.http.HttpServletRequest;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;

import com.skuniv.mvc.service.LoginService;

@Controller
public class LoginController {
	@Resource(name = "LoginService")
	private LoginService service;
	
	@RequestMapping(value = "/login", method = RequestMethod.GET)
	public String home(Locale locale, Model model) {
		
		return "login";
	}
	
	@RequestMapping(value ="/checklogin", method= RequestMethod.GET)
	public ModelAndView matchMemberPassword(HttpServletRequest request) throws Exception{
		String studentId = request.getParameter("studentId");
		String passwd = request.getParameter("passwd");
		System.out.println("id: "+ studentId + "passwd: "+passwd);
		
		List<Map<String,Object>>list = service.matchMemberPassword();
		ModelAndView mv = new ModelAndView("jsonView");
		mv.addObject("login_check", list);
		Iterator<String> iterator = list.get(0).keySet().iterator();
		while(iterator.hasNext()){
			String key = (String)iterator.next();
			String value = (String)list.get(0).get(key);
			System.out.println("key: " + key+"value: "+value);
		}
		
		return mv;
	}
	
	@RequestMapping("/insertmember")
	public ModelAndView insertMember(HttpServletRequest request, Map<String,Object> commandMap){
		Map<String,Object> map = new HashMap<String, Object>(); 
		String studentId = request.getParameter("studentId");
		String name = request.getParameter("name");
		String email = request.getParameter("email");
		String passwd = request.getParameter("passwd");
		System.out.println("id: "+ studentId + "name: "+ name + "email: "+ email+ "passwd:" + passwd );
		map.put("studentId", studentId);
		map.put("name",name);
		map.put("email",email);
		map.put("passwd",passwd);
		service.insertMember(map);
		ModelAndView mv = new ModelAndView("jsonView");
		mv.addObject("inset_state","1");
		
		return mv;
	}
}
